import {Command, Flags} from '@oclif/core'
import * as inquirer from 'inquirer'
import {LanguageType} from '../../data/enums'
import CreateDotnetIndex from './dotnet'
import CreateReactIndex from './react'

interface PromptResponse {
  language?: LanguageType
}

export default class CreateIndex extends Command {
  static description = 'Scaffolding your HDN project'

  static examples = [
    '$ kombi create',
    '$ kombi create -t react',
    '$ kombi create -t dotnet',
  ]

  static args = []

  static flags = {
    type: Flags.enum({
      char: 't',
      description: 'Language type to create',
      options: [LanguageType.React, LanguageType.Dotnet],
    }),
  }

  private async doPrompt(type: boolean): Promise<PromptResponse> {
    return inquirer.prompt<PromptResponse>([{
      when: !type,
      type: 'list',
      name: 'language',
      message: 'Select a language type to create',
      choices: [LanguageType.React, LanguageType.Dotnet],
    }])
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(CreateIndex)
    const {type} = flags

    const {language} = await this.doPrompt(Boolean(type))

    if ((type ?? language) === LanguageType.Dotnet) {
      CreateDotnetIndex.run()
    } else {
      CreateReactIndex.run()
    }
  }
}
