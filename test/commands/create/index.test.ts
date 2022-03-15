import {expect, test} from '@oclif/test'

describe('create', () => {
  test
  .stdout()
  .command(['create', '-t',  'dotnet'])
  .it('runs create -t dotnet', ctx => {
    expect(ctx.stdout).to.contain('')
  })
})
