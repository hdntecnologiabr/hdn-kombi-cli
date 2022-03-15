import {expect, test} from '@oclif/test'

describe('create/dotnet/index', () => {
  test
  .stdout()
  .command(['create/dotnet/index'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['create/dotnet/index', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
