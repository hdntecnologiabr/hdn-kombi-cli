const Generator = require("yeoman-generator");
const generatorPackageJson = require(__dirname + "/../../package.json");

const fs = require("fs");
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.destination = '';
  }

  prompting() {
    return doPrompt.bind(this)();
  }

  configuring() {
    storeDefaults.bind(this)();
  }

  writing() {
    copyFiles.bind(this)();
    setRootFolder.bind(this)();
  }

  install() {
    const cwd = this.destinationPath(`${this.destination}`);
    this.spawnCommandSync("git", ["init"], { cwd });
    this.spawnCommandSync("git", ["checkout", "-b", "master"], { cwd });
    this.spawnCommandSync("make", ["bootstrap"], { cwd });

    if (this.answers.hasApi == "y") {
      this.spawnCommandSync("yarn", ["add", "miragejs"], { cwd });
      this.spawnCommandSync("yarn", ["add", "axios"], { cwd });
      this.spawnCommandSync("yarn", ["add", "@types/axios", "-D"], { cwd });
    } else {
      this.spawnCommandSync("rm", ["-r", "Api"], { cwd: `${cwd}/src` });
      this.spawnCommandSync("rm", ["-r", "server"], { cwd });
    }
  }

  end() {
    renameChart.bind(this)();
    // renameEntrypoint.bind(this)();

    this.log.info(`
      Your new Customer portal microfrontend has been successfully bootstrapped. Start developing it by running:

      cd ${this.answers.orgName}-${this.answers.mfeName}
    `);
  }
};

function doPrompt() {
  return this.prompt([
    {
      type: "input",
      name: "orgName",
      message:
        "Organization name [namespace] (customer-portal, another-portal, etc)",
    },
    {
      type: "input",
      name: "mfeName",
      message:
        "Microfrontend name (auth-mfe, order-management-mfe, etc)",
    },
    {
      type: "input",
      name: "projectKey",
      message: "Enter Azure project key (ex: AZUREID)",
    },
    {
      type: "input",
      name: "hasApi",
      message: "Will use API calls y/n",
    },
  ]).then((answers) => {
    this.answers = answers;
    this.destination = `${this.answers.orgName}-${this.answers.mfeName}`;
  });
}

function storeDefaults() {
  this.config.set({
    orgName: this.answers.orgName,
    mfeName: this.answers.mfeName,
    normalizedMfeName: `${this.answers.orgName}-${this.answers.mfeName}`,
    fullMfeName: `@${this.answers.orgName}/${this.answers.mfeName}`,
  });
}

function setRootFolder() {
  this.fs.move(
    `${this.destinationRoot()}/.yo-rc.json`,
    `${this.destinationRoot()}/${this.destination}/.yo-rc.json`
  );
}

function copyFiles() {
  const params = {
    ...this.answers,
    normalizedMfeName: `${this.answers.orgName}-${this.answers.mfeName}`,
    fullMfeName: `@${this.answers.orgName}/${this.answers.mfeName}`,
    generator: {
      version: generatorPackageJson.version,
    },
  };

  this.fs.copyTpl(
    this.templatePath(""),
    this.destinationPath(this.destination),
    params
  );

  const hiddenFiles = [
    ".prettierrc",
    ".prettierignore",
    ".gitignore",
    ".vscode/settings.json",
    ".env",
    ".env.development",
    ".eslintignore",
    ".eslintrc",
  ];

  hiddenFiles.forEach((file) => {
    this.fs.copyTpl(
      this.templatePath(file),
      this.destinationPath(`${this.destination}/${file}`),
      params
    );
  });
}

function renameChart() {
  const currentPath = `./${this.destination}/ci/charts/mfeName/`;
  const newPath = `./${this.destination}/ci/charts/${this.destination}/`;
  fs.rename(currentPath, newPath, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully renamed the /ci/charts/mfeName directory.");
    }
  });
}

function renameEntrypoint() {
  const currentPath = `./${this.destination}/src/index.tsx`;
  const newPath = `./${this.destination}/src/${this.destination}.tsx`;
  fs.rename(currentPath, newPath, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully renamed the /src/index.tsx");
    }
  });
}
