# Kombi CLI

=================

Kombi CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

- [Usage](#usage)
- [Commands](#commands)

# Usage

<!-- usage -->
```sh-session
$ npm install -g kombi-cli
$ kombi COMMAND
running command...
$ kombi (--version)
kombi-cli/0.0.6-beta win32-x64 node-v16.13.1
$ kombi --help [COMMAND]
USAGE
  $ kombi COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g hdn-kombi-cli
$ kombi COMMAND
running command...
$ kombi (--version)
hdn-kombi-cli/0.0.5-beta win32-x64 node-v16.14.0
$ kombi --help [COMMAND]
USAGE
  $ kombi COMMAND
...
```
<!-- usagestop -->

```sh-session
$ npm install -g kombi
$ kombi COMMAND
running command...
$ kombi (--version)
kombi/0.0.2-beta win32-x64 node-v16.13.2
$ kombi --help [COMMAND]
USAGE
  $ kombi COMMAND
...
```

# Commands

<!-- commands -->
* [`kombi create`](#kombi-create)
* [`kombi create dotnet`](#kombi-create-dotnet)
* [`kombi create react`](#kombi-create-react)
* [`kombi help [COMMAND]`](#kombi-help-command)
* [`kombi plugins`](#kombi-plugins)
* [`kombi plugins:install PLUGIN...`](#kombi-pluginsinstall-plugin)
* [`kombi plugins:inspect PLUGIN...`](#kombi-pluginsinspect-plugin)
* [`kombi plugins:install PLUGIN...`](#kombi-pluginsinstall-plugin-1)
* [`kombi plugins:link PLUGIN`](#kombi-pluginslink-plugin)
* [`kombi plugins:uninstall PLUGIN...`](#kombi-pluginsuninstall-plugin)
* [`kombi plugins:uninstall PLUGIN...`](#kombi-pluginsuninstall-plugin-1)
* [`kombi plugins:uninstall PLUGIN...`](#kombi-pluginsuninstall-plugin-2)
* [`kombi plugins update`](#kombi-plugins-update)

## `kombi create`

Scaffolding your HDN project

```
USAGE
  $ kombi create [-t react|dotnet]

FLAGS
  -t, --type=(react|dotnet)  Language type to create

DESCRIPTION
  Scaffolding your HDN project

EXAMPLES
  $ kombi create

  $ kombi create -t react

  $ kombi create -t dotnet
```

_See code: [dist/commands/create/index.ts](https://github.com/hdntecnologiabr/hdn-kombi-cli/blob/v0.0.6-beta/dist/commands/create/index.ts)_

## `kombi create dotnet`

Scaffolding your .Net project

```
USAGE
  $ kombi create dotnet

DESCRIPTION
  Scaffolding your .Net project

EXAMPLES
  $ kombi create dotnet
```

## `kombi create react`

Scaffolding your React project

```
USAGE
  $ kombi create react

DESCRIPTION
  Scaffolding your React project

EXAMPLES
  $ kombi create react
```

## `kombi help [COMMAND]`

Display help for kombi.

```
USAGE
  $ kombi help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for kombi.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `kombi plugins`

List installed plugins.

```
USAGE
  $ kombi plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ kombi plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `kombi plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ kombi plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ kombi plugins add

EXAMPLES
  $ kombi plugins:install myplugin 

  $ kombi plugins:install https://github.com/someuser/someplugin

  $ kombi plugins:install someuser/someplugin
```

## `kombi plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ kombi plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ kombi plugins:inspect myplugin
```

## `kombi plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ kombi plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ kombi plugins add

EXAMPLES
  $ kombi plugins:install myplugin 

  $ kombi plugins:install https://github.com/someuser/someplugin

  $ kombi plugins:install someuser/someplugin
```

## `kombi plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ kombi plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ kombi plugins:link myplugin
```

## `kombi plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ kombi plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ kombi plugins unlink
  $ kombi plugins remove
```

## `kombi plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ kombi plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ kombi plugins unlink
  $ kombi plugins remove
```

## `kombi plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ kombi plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ kombi plugins unlink
  $ kombi plugins remove
```

## `kombi plugins update`

Update installed plugins.

```
USAGE
  $ kombi plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
