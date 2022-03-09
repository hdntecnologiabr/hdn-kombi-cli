/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const srcDir = resolveApp('src');
const distDir = resolveApp('dist');

module.exports = {
  srcDir,
  distDir,
  entryFileDev: path.join(srcDir, 'index.dev.ts'),
};
