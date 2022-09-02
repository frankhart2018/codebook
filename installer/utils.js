const child_process = require("child_process");
const fs = require("fs");
const path = require("path");
const process = require("process");

const constants = require("./constants");

const makeDir = (args) => {
  if (!fs.existsSync(args.dirPath)) {
    child_process.execSync(`mkdir ${args.dirPath}`);
    return 1;
  }

  return 0;
};

const gitClone = (args) => {
  process.chdir(args.dirPath);

  const repoName = path.basename(args.url).replace(".git", "");
  if (fs.existsSync(repoName)) {
    return 1;
  }

  child_process.execSync(`git clone ${args.url}`);
  return 0;
};

const npmInstall = (args) => {
  process.chdir(args.dirPath);

  if (fs.existsSync("node_modules")) {
    return 1;
  }

  child_process.execSync("npm i");
  return 0;
};

const startCodebook = () => {
  process.chdir(constants.CODEBOOK_CODE_DIR);
  console.log("Running prod version");
  child_process.execSync("npm run startprod");
};

const infoLog = (message) => {
  console.log(`${constants.BLUE}${message}${constants.COLOR_END}`);
};

module.exports = {
  makeDir,
  gitClone,
  npmInstall,
  startCodebook,
  infoLog,
};
