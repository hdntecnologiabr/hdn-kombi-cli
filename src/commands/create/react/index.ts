
import {Command} from '@oclif/core'
import * as inquirer from 'inquirer'
import * as fs from 'fs-extra'

export default class CreateReactIndex extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = []

  private async copyFiles(folderName: string) {
    try {
      await fs.copy('./src/generators/frontend/mfe/templates', `./${folderName}`)
      this.log('success!')
    } catch (error) {
      console.log(error)
    }
  }

  public async run(): Promise<void> {
    const responses: any = await inquirer.prompt([{
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
    }])

    await this.copyFiles(`${responses.orgName}-${responses.mfeName}`)
  }
}

