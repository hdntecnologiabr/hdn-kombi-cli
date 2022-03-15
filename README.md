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
$ npm install -g hdn-kombi-cli
$ kombi COMMAND
running command...
$ kombi (--version)
hdn-kombi-cli/0.0.3-beta win32-x64 node-v16.13.2
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
* [`kombi create react mfe`](#kombi-create-react-mfe)
* [`kombi hello PERSON`](#kombi-hello-person)
* [`kombi hello world`](#kombi-hello-world)
* [`kombi help [COMMAND]`](#kombi-help-command)
* [`kombi plugins`](#kombi-plugins)
* [`kombi plugins:inspect PLUGIN...`](#kombi-pluginsinspect-plugin)
* [`kombi plugins:install PLUGIN...`](#kombi-pluginsinstall-plugin)
* [`kombi plugins:link PLUGIN`](#kombi-pluginslink-plugin)
* [`kombi plugins:uninstall PLUGIN...`](#kombi-pluginsuninstall-plugin)
* [`kombi plugins update`](#kombi-plugins-update)

## `kombi create`

describe the command here

```
USAGE
  $ kombi create

DESCRIPTION
  describe the command here

EXAMPLES
  $ kombi create
```

_See code: [dist/commands/create/index.ts](https://github.com/hdntecnologiabr/hdn-kombi-cli/blob/v0.0.3-beta/dist/commands/create/index.ts)_

## `kombi create react mfe`

describe the command here

```
USAGE
  $ kombi create react mfe

DESCRIPTION
  describe the command here

EXAMPLES
  $ kombi create react mfe
```

## `kombi hello PERSON`

Say hello

```
USAGE
  $ kombi hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/hdntecnologiabr/hdn-kombi-cli/blob/v0.0.3-beta/dist/commands/hello/index.ts)_

## `kombi hello world`

Say hello world

```
USAGE
  $ kombi hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
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

- [`kombi hello PERSON`](#kombi-hello-person)
- [`kombi hello world`](#kombi-hello-world)
- [`kombi help [COMMAND]`](#kombi-help-command)
- [`kombi plugins`](#kombi-plugins)
- [`kombi plugins:inspect PLUGIN...`](#kombi-pluginsinspect-plugin)
- [`kombi plugins:install PLUGIN...`](#kombi-pluginsinstall-plugin)
- [`kombi plugins:link PLUGIN`](#kombi-pluginslink-plugin)
- [`kombi plugins:uninstall PLUGIN...`](#kombi-pluginsuninstall-plugin)
- [`kombi plugins update`](#kombi-plugins-update)

## `kombi hello PERSON`

Say hello

```
USAGE
  $ kombi hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/pehleme/kombi/blob/v0.0.2-beta/dist/commands/hello/index.ts)_

## `kombi hello world`

Say hello world

```
USAGE
  $ kombi hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello guilda boladona
  hello world! (./src/commands/hello/world.ts)
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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

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
