#!/usr/bin/env node
const { ArgumentParser } = require("argparse");

const constants = require("./constants");
const utils = require("./utils");

const install = () => {
  ops = [
    {
      infolog: "Creating directories...",
      command: utils.makeDir,
      args: {
        dirPath: constants.CODEBOOK_DIR,
      },
    },
    {
      command: utils.makeDir,
      args: {
        dirPath: constants.CODE_DIR,
      },
    },
    {
      command: utils.makeDir,
      args: {
        dirPath: constants.BOOK_DIR,
      },
    },
    {
      infolog: "Cloning codebase...",
      command: utils.gitClone,
      args: {
        url: constants.GIT_URL,
        dirPath: constants.CODE_DIR,
      },
    },
    {
      infolog: "Installing dependencies, this may take a while...",
      command: utils.npmInstall,
      args: {
        dirPath: constants.BACKEND_DIR,
      },
    },
    {
      command: utils.npmInstall,
      args: {
        dirPath: constants.CODEBOOK_CODE_DIR,
      },
    },
  ];

  let sum_returns = 0;
  for (let op of ops) {
    if (op.hasOwnProperty("infolog")) {
      utils.infoLog(op["infolog"]);
    }

    cmd = op["command"];
    args = op["args"];
    sum_returns += cmd(args);
  }

  if (sum_returns == ops.length) {
    console.log("Nothing to do, codebook is installed!");
  }
};

const run = () => {
  utils.infoLog("Running codebook");
  utils.startCodebook();
};

const main = () => {
  const parser = new ArgumentParser({
    description: "Codebook: Books with code",
  });

  parser.add_argument("--self-install", {
    action: "store_true",
    help: "Install codebook itself",
    default: false,
  });
  parser.add_argument("--run", {
    action: "store_true",
    help: "Run a codebook",
    default: false,
  });

  const args = parser.parse_args();

  if (args.self_install) {
    install();
  } else if (args.run) {
    run();
  } else {
    utils.infoLog("Nothing to do");
  }
};

main();
