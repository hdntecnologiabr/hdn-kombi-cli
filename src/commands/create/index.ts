import {Command} from '@oclif/core'
import * as inquirer from 'inquirer'
import CreateReact from './react'

type LanguageType = 'React' | '.Net'

export default class CreateIndex extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    const {language}: { language: LanguageType } = await inquirer.prompt([{
      type: 'list',
      name: 'language',
      message: 'Select language',
      choices: [{name: 'React'}, {name: '.Net'}],
    }])

    if (language === 'React') {
      CreateReact.run()
    }
  }
}
