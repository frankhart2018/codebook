const child_process = require("child_process");
const fs = require("fs");
const path = require("path");
const process = require("process");
const http = require("http");

const constants = require("./constants");

const makeDir = (args) => {
  if (!fs.existsSync(args.dirPath)) {
    child_process.execSync(`mkdir ${args.dirPath}`);
    return 1;
  }

  return 0;
};

const downloadFile = ((url, path, postDownloadFn) => {
  const file = fs.createWriteStream(path);
  const request = http.get(url, function(response) {
    response.pipe(file);
    file.on("finish", () => {
        file.close();
        postDownloadFn();
    });
  });
});

const untarAndClean = () => {
  child_process.execSync('tar -xvf build.tar.gz');
  child_process.execSync('rm build.tar.gz');

  npmInstall({dirPath: constants.BACKEND_DIR});
  npmInstall({dirPath: constants.CODE_DIR});
}

const getCodebook = async () => {
  process.chdir(constants.CODEBOOK_DIR);
  downloadFile(constants.CODEBOOK_URL, "./build.tar.gz", untarAndClean);

  return 0;
}

const npmInstall = (args) => {
  process.chdir(args.dirPath);

  if (fs.existsSync("node_modules")) {
    return 1;
  }

  child_process.execSync("npm i");
  return 0;
};

const startCodebook = () => {
  if (!fs.existsSync(constants.CODE_DIR)) {
    errorLog("Codebook not installed, run 'codebook --self-install' to install codebook!");
    return;
  }

  process.chdir(constants.CODE_DIR);
  child_process.execSync("npm run startprod");
};

const infoLog = (message) => {
  console.log(`${constants.BLUE}${message}${constants.COLOR_END}`);
};

const errorLog = (message) => {
  console.log(`Error: ${constants.RED}${message}${constants.COLOR_END}`);
}

module.exports = {
  makeDir,
  getCodebook,
  npmInstall,
  startCodebook,
  infoLog,
};
