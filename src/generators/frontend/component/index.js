var Generator = require("yeoman-generator");
const fs = require("fs");
const prettier = require("gulp-prettier");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.destination = '';
  }

  prompting() {
    return doPrompt.bind(this)().then(saveTemplate.bind(this));
  }
};

async function doPrompt() {
  const { typeFile, fileName } = await this.prompt([
    {
      type: "rawlist",
      name: "typeFile",
      message: "Type Component",
      choices: ["page", "page-specific", "reusable-component"],
    },
    {
      type: "input",
      name: "fileName",
      message: "Write the file name:",
      validate: function (input) {
        const regex = /^[a-záàâãéèêíïóôõöúçñ]+$/i;
        if (!regex.test(input)) {
          return "numbers are not allowed";
        }
        return true;
      },
    },
  ]);

  this.answers = {
    fileName,
    typeFile,
  };

  if (typeFile === "page-specific") {
    const { dadComponent } = await this.prompt([
      {
        type: "rawlist",
        name: "dadComponent",
        message: "Which route? ",
        choices: () => fs.readdirSync(this.destinationPath("src/routes/")),
      },
    ]);
    this.answers = { ...this.answers, dadComponent };
  }
  if (typeFile !== "page") {
    const { fileCss } = await this.prompt([
      {
        type: "rawlist",
        name: "fileCss",
        message: "Do you want to generate a file for css rules? ",
        choices: ["yes", "no"],
      },
    ]);
    const { storybook } = await this.prompt([
      {
        type: "rawlist",
        name: "storybook",
        message: "Do you want to generate a file for storybook rules? ",
        choices: ["yes", "no"],
      },
    ]);
    this.answers = { ...this.answers, fileCss, storybook };
  }
}

function lowerCase(name) {
  return name.substring(0, 1).toLowerCase().concat(name.substring(1));
}

function upperCase(name) {
  return name.substring(0, 1).toUpperCase().concat(name.substring(1));
}

function saveTemplate() {
  const { fileName, typeFile, dadComponent } = { ...this.answers };
  if (typeFile === "page") {
    const router = `src/routes/${lowerCase.bind(this)(
      fileName
    )}/${upperCase.bind(this)(fileName)}`;
    copy.bind(this)(router, this.answers);
  } else if (typeFile === "page-specific") {
    const router = `src/routes/${lowerCase.bind(this)(
      dadComponent
    )}/components/${lowerCase.bind(this)(fileName)}/${upperCase.bind(this)(
      fileName
    )}`;
    copy.bind(this)(router, this.answers);
  } else {
    const router = `src/components/${upperCase.bind(this)(
      fileName
    )}/${upperCase.bind(this)(fileName)}`;
    copy.bind(this)(router, this.answers);
  }

  console.log({ fileName, typeFile, dadComponent });
}

function copy(router, { fileCss, storybook, fileName, typeFile }) {
  this.registerTransformStream(prettier({ singleQuote: true }));
  if (typeFile === "page") {
    this.fs.copyTpl(
      this.templatePath("defaultComponent.tsx"),
      this.destinationPath(`${router}.tsx`),
      { title: upperCase.bind(this)(fileName), type: typeFile }
    );
    this.fs.copyTpl(
      this.templatePath("defaultComponentTest.jsx"),
      this.destinationPath(`${router}.test.jsx`),
      { title: upperCase.bind(this)(fileName) }
    );
  }
  if (typeFile === "page-specific" || typeFile === "reusable-component") {
    this.fs.copyTpl(
      this.templatePath("defaultComponent.tsx"),
      this.destinationPath(`${router}.tsx`),
      { title: upperCase.bind(this)(fileName), type: typeFile }
    );
    this.fs.copyTpl(
      this.templatePath("defaultComponentTest.jsx"),
      this.destinationPath(`${router}.test.jsx`),
      { title: upperCase.bind(this)(fileName) }
    );
    this.fs.copyTpl(
      this.templatePath("defaultComponentView.tsx"),
      this.destinationPath(`${router}View.tsx`),
      { title: upperCase.bind(this)(fileName), css: fileCss }
    );
    this.fs.copyTpl(
      this.templatePath("defaultComponentViewTest.jsx"),
      this.destinationPath(`${router}View.test.jsx`),
      { title: upperCase.bind(this)(fileName), css: fileCss }
    );
    if (fileCss === "yes") {
      this.fs.copyTpl(
        this.templatePath("defaultCss.ts"),
        this.destinationPath(`${router}View.styles.ts`),
        { title: upperCase.bind(this)(fileName) }
      );
    }
    if (storybook === "yes") {
      this.fs.copyTpl(
        this.templatePath("defaultStoryBook.tsx"),
        this.destinationPath(`${router}View.stories.tsx`),
        { title: upperCase.bind(this)(fileName) }
      );
    }
  }
}
