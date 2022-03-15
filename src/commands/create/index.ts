import {Command} from '@oclif/core'
import * as inquirer from 'inquirer'
import CreateDotnetIndex from './dotnet'
import CreateReactIndex from './react'

type LanguageType = 'React' | '.Net'

interface PromptResponse {
  language?: LanguageType
}

export default class CreateIndex extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    const {language} = await inquirer.prompt<PromptResponse>([{
      type: 'list',
      name: 'language',
      message: 'Select language',
      choices: [{name: 'React'}, {name: '.Net'}],
    }])

    switch (language) {
    case 'React':
      CreateReactIndex.run()
      break
    case '.Net':
      CreateDotnetIndex.run()
      break
    default:
      break
    }
  }
}
