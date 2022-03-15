import {Command} from '@oclif/core'

export default class CreateDotnet extends Command {
  static description = 'Scaffolding your .Net project'

  static examples = [
    '$ kombi create dotnet',
  ]

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    this.log('🚧 Under construction')
  }
}
