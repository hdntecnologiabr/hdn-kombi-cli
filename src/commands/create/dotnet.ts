import {CliUx, Command} from '@oclif/core'
import * as inquirer from 'inquirer'
import {exec} from 'shelljs'
import degit = require('degit')

interface PromptResponse {
  orgName?: string
  projectName?: string
}

export default class CreateDotnet extends Command {
  static description = 'Scaffolding your .Net project'

  static examples = [
    '$ kombi create dotnet',
  ]

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    const {orgName, projectName} = await this.doPrompt()

    const src = 'hdntecnologiabr/.net-base-repository'
    const dest = `${orgName}.${projectName}`

    const emitter = degit(src)
    await emitter.clone(dest)

    CliUx.ux.action.start('Install')

    exec(`cd ${dest} && git init`)

    CliUx.ux.action.stop()

    this.log('Done. Now run:')
    this.log(`cd ${dest}`)
  }

  private async doPrompt() {
    return inquirer.prompt<PromptResponse>([{
      type: 'input',
      name: 'orgName',
      message: 'Organization name [namespace] (Hdn, HdnLabs, etc...)',
      default: 'Hdn',
    },
    {
      type: 'input',
      name: 'projectName',
      message:
        'Project name (Reward, One, etc...)',
      default: 'DotNetApp',
    }])
  }
}
