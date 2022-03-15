import {CliUx, Command} from '@oclif/core'
import * as degit from 'degit'
import * as inquirer from 'inquirer'
// import path = require('path')

interface PromptResponse {
  orgName?: string
  mfeName?: string
}

export default class CreateReactIndex extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    const {orgName, mfeName} = await inquirer.prompt<PromptResponse>([{
      type: 'input',
      name: 'orgName',
      message: 'Organization name [namespace] (customer-portal, another-portal, etc)',
    },
    {
      type: 'input',
      name: 'mfeName',
      message:
        'Microfrontend name (auth-mfe, order-management-mfe, etc)',
    },
    {
      type: 'input',
      name: 'projectKey',
      message: 'Enter Azure project key (ex: AZUREID)',
    },
    {
      type: 'confirm',
      name: 'hasApi',
      message: 'Will use API calls',
    },
    {
      type: '',
      name: 'dadComponent',
      message: 'Which route? ',
    }])

    CliUx.ux.action.start(CreateReactIndex.description)
    const emitter = degit('vitejs/vite/packages/create-vite/template-react-ts')
    await emitter.clone(`${orgName}-${mfeName}`)
    CliUx.ux.action.stop()
  }
}
