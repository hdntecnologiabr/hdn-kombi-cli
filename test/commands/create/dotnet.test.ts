import {expect, test} from '@oclif/test'

describe('create dotnet', () => {
  test
  .stdout()
  .command(['create dotnet'])
  .it('runs create dotnet', ctx => {
    expect(ctx.stdout).to.contain('🚧 Under construction')
  })
})
