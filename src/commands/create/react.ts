import {CliUx, Command} from '@oclif/core'
import * as inquirer from 'inquirer'
import {replaceInFileSync} from 'replace-in-file'
import {exec} from 'shelljs'
import degit = require('degit')

type ProjectType = 'spa' | 'mfe'

interface PromptResponse {
  orgName?: string
  projectName?: string
  projectType?: ProjectType
}

export default class CreateReact extends Command {
  static description = 'Scaffolding your React project'

  static examples = [
    '$ kombi create react',
  ]

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    const {orgName, projectName, projectType} = await this.doPrompt()

    const src = `hdntecnologiabr/hdn-kombi-cli/templates/template-react-${projectType}`
    const dest = projectType === 'spa' ? `${projectName}` : `${orgName}-${projectName}`

    CliUx.ux.action.start('Create')

    const emitter = degit(src)
    await emitter.clone(dest)

    if (projectType === 'spa') this.replaceName(dest)
    else this.replaceNameMFE(dest, orgName || '', projectName || '')

    CliUx.ux.action.start('Install')

    exec(`cd ${dest} && git init`)

    CliUx.ux.action.stop()

    this.log('Done. Now run:')
    this.log(`cd ${dest}`)
    this.log('yarn')
  }

  private async doPrompt() {
    return inquirer.prompt<PromptResponse>([
      {
        type: 'list',
        name: 'projectType',
        message: 'Project type (single-page or micro-frontend)',
        choices: ['spa', 'mfe'],
      },
      {
        when: answers => answers.projectType === 'mfe',
        type: 'input',
        name: 'orgName',
        message: 'Organization name [namespace] (customer-portal, hdn-labs, etc...)',
        default: 'hdn',
      },
      {
        type: 'input',
        name: 'projectName',
        message: ({projectType}) => projectType === 'mfe' ?
          'Microfrontend name (reward-auth-mfe, one-management-mfe, etc...)' :
          'Project name (rewards, one, etc...)',
        default: 'react-app',
      },
    ])
  }

  private replaceName(dest: string) {
    replaceInFileSync({
      files: [
        `${dest}/index.html`,
        `${dest}/package.json`,
        `${dest}/README.md`,
      ],
      from: '<%= fullName %>',
      to: dest,
    })
  }

  private replaceNameMFE(dest: string, orgName: string, projectName: string) {
    replaceInFileSync({
      files: [
        `${dest}/*`,
      ],
      from: '<%= fullName %>',
      to: dest,
    })
    replaceInFileSync({
      files: [
        `${dest}/*`,
      ],
      from: '<%= orgName %>',
      to: orgName,
    })
    replaceInFileSync({
      files: [
        `${dest}/*`,
      ],
      from: '<%= mfeName %>',
      to: projectName,
    })
  }
}
