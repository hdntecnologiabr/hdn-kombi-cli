import {CliUx, Command} from '@oclif/core'
import * as degit from 'degit'
import * as inquirer from 'inquirer'
import {replaceInFileSync} from 'replace-in-file'
import {exec} from 'shelljs'

type ProjectType = 'spa' | 'mfe'

interface PromptResponse {
  orgName?: string
  projectName?: string
  projectType?: ProjectType
}

export default class CreateReactIndex extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    const {orgName, projectName, projectType} = await inquirer.prompt<PromptResponse>([{
      type: 'input',
      name: 'orgName',
      message: 'Organization name [namespace] (hdn, hdn-labs, etc...)',
      default: 'hdn',
    },
    {
      type: 'list',
      name: 'projectType',
      message: 'Project type (single-page or micro-frontend)',
      choices: ['spa', 'mfe'],
    },
    {
      type: 'input',
      name: 'projectName',
      message: ({projectType}) => projectType === 'mfe' ?
        'Microfrontend name (reward-auth-mfe, one-management-mfe, etc...)' :
        'Project name (reward, one, etc...)',
      default: 'react-app',
    }])

    CliUx.ux.action.start('Create')

    const projectRepo = `hdntecnologiabr/hdn-kombi-cli/templates/template-react-${projectType}`
    const projectDir = `${orgName}-${projectName}`

    try {
      const emitter = degit(projectRepo)
      await emitter.clone(projectDir)

      replaceInFileSync({
        files: [
          `${projectDir}/index.html`,
          `${projectDir}/package.json`,
          `${projectDir}/README.md`,
        ],
        from: '<%= fullName %>',
        to: projectDir,
      })
    } catch (error) {
      this.toErrorJson(error)
    }

    CliUx.ux.action.start('Install')

    exec(`cd ${projectDir} && git init`)
    exec(`cd ${projectDir} && yarn install`)

    CliUx.ux.action.stop()
  }
}
