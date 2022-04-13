import { CliUx, Command } from '@oclif/core'
import * as inquirer from 'inquirer'
import { replaceInFileSync } from 'replace-in-file'
import { exec } from 'shelljs'
import degit = require('degit')

type ProjectType = 'spa' | 'mfe' | 'ds'

interface PromptResponse {
  orgName?: string
  projectName?: string
  projectType?: ProjectType
}

export default class CreateReact extends Command {
  static description = 'Scaffolding your React project'

  static examples = ['$ kombi create react']

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    const { orgName, projectName, projectType } = await this.doPrompt()

    const src = `hdntecnologiabr/hdn-kombi-cli/templates/template-react-${projectType}`
    const dest = projectType === 'spa' || projectType === 'ds' ? `${projectName}` : `${orgName}-${projectName}`

    CliUx.ux.action.start('Create')

    const emitter = degit(src)
    await emitter.clone(dest)

    this.replaceName(dest)

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
        choices: ['spa', 'mfe', 'ds'],
      },
      {
        when: (answers) => answers.projectType === 'mfe',
        type: 'input',
        name: 'orgName',
        message: 'Organization name [namespace] (customer-portal, hdn-labs, etc...)',
        default: 'hdn',
      },
      {
        type: 'input',
        name: 'projectName',
        message: ({ projectType }) =>
          projectType === 'mfe'
            ? 'Microfrontend name (reward-auth-mfe, one-management-mfe, etc...)'
            : 'Project name (rewards, one, etc...)',
        default: 'react-app',
      },
      {
        when: (answers) => answers.projectType === 'ds',
        type: 'input',
        name: 'prefix',
        message: 'Design System Prefix name (hdn, dy, ems, etc...)',
        default: 'hdn',
      },
    ])
  }

  private replaceName(dest: string) {
    replaceInFileSync({
      files: [`${dest}/index.html`, `${dest}/package.json`, `${dest}/README.md`],
      from: '<%= fullName %>',
      to: dest,
    })
  }
}
