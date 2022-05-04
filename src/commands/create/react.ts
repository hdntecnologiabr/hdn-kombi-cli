/* eslint-disable unicorn/prefer-module */
import {CliUx, Command} from '@oclif/core'
import * as inquirer from 'inquirer'
import {replaceInFileSync} from 'replace-in-file'
import {exec} from 'shelljs'
import degit = require('degit')
import fs = require('fs-extra')
import path = require('path')

type ProjectType = 'spa' | 'mfe' | 'ds'

interface PromptResponse {
  orgName?: string
  projectName?: string
  projectType?: ProjectType
  prefix?: string
}

export default class CreateReact extends Command {
  static description = 'Scaffolding your React project'

  static examples = ['$ kombi create react']

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    const {orgName, projectName, projectType, prefix} = await this.doPrompt()
    const dest = projectType === 'spa' || projectType === 'ds' ? `${projectName}` : `${orgName}-${projectName}`
    let src = `hdntecnologiabr/hdn-kombi-cli/templates/template-react-${projectType}`

    if (process.env.NODE_ENV === 'development') {
      const templatesPath = path.join(__dirname, '..', '..', '..', 'templates')
      src = `${templatesPath}/template-react-${projectType}`

      fs.copy(src, dest).then(() => {
        if (projectType === 'ds' && prefix) this.replaceNameDS(dest, prefix)
        if (projectType === 'mfe' && orgName && projectName) this.replaceNameMFE(dest, orgName, projectName)
        if (projectType === 'spa' && projectName) this.replaceName(dest)
      })
    } else {
      const emitter = degit(src)
      await emitter.clone(dest)

      if (projectType === 'ds' && prefix) this.replaceNameDS(dest, prefix)
      if (projectType === 'mfe' && orgName && projectName) this.replaceNameMFE(dest, orgName, projectName)
      if (projectType === 'spa' && projectName) this.replaceName(dest)
    }

    CliUx.ux.action.start('Create')
    CliUx.ux.action.start('Install')

    exec(`cd ${dest} && git init`)

    CliUx.ux.action.stop()

    this.log('Done. Now run:')
    this.log(`cd ${dest}`)
    this.log('yarn')
  }

  private async doPrompt() {
    return inquirer.prompt<PromptResponse>([
      {
        type: 'list',
        name: 'projectType',
        message: 'Project type (single-page or micro-frontend)',
        choices: ['spa', 'mfe', 'ds'],
      },
      {
        when: answers => answers.projectType === 'mfe',
        type: 'input',
        name: 'orgName',
        message: 'Organization name [namespace] (customer-portal, hdn-labs, etc...)',
        default: 'hdn',
      },
      {
        type: 'input',
        name: 'projectName',
        message: ({projectType}) =>
          projectType === 'mfe' ?
            'Microfrontend name (reward-auth-mfe, one-management-mfe, etc...)' :
            'Project name (rewards, one, etc...)',
        default: 'react-app',
      },
      {
        when: answers => answers.projectType === 'ds',
        type: 'input',
        name: 'prefix',
        message: 'Design System Prefix name (hdn, dy, ems, etc...)',
        default: 'hdn',
      },
    ])
  }

  private replaceName(dest: string) {
    replaceInFileSync({
      files: [`${dest}/**/*`],
      from: '<%= fullName %>',
      to: dest,
    })
  }

  private replaceNameMFE(dest: string, orgName: string, mfeName: string) {
    replaceInFileSync({
      files: [`${dest}/**/*`],
      from: '<%= fullName %>',
      to: `@${orgName}/${mfeName}`,
    })
    replaceInFileSync({
      files: [`${dest}/**/*`],
      from: '<%= normalizedMfeName %>',
      to: dest,
    })
    replaceInFileSync({
      files: [`${dest}/**/*`],
      from: '<%= orgName %>',
      to: orgName,
    })
    replaceInFileSync({
      files: [`${dest}/**/*`],
      from: '<%= mfeName %>',
      to: mfeName,
    })
  }

  private replaceNameDS(dest: string, prefix: string) {
    replaceInFileSync({
      files: [`${dest}/.storybook/*`],
      from: /<%= fullName %>/g,
      to: dest,
    })
    replaceInFileSync({
      files: [`${dest}/**/*`],
      from: /<%= fullName %>/g,
      to: dest,
    })
    replaceInFileSync({
      files: [`${dest}/**/*`],
      from: /<%= prefix %>/g,
      to: prefix,
    })
  }
}
