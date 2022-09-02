const os = require("os");
const path = require("path");

const HOME_DIR = os.homedir();
const CODEBOOK_DIR = path.join(HOME_DIR, ".codebook");
const CODE_DIR = path.join(CODEBOOK_DIR, "build");
const BOOK_DIR = path.join(CODEBOOK_DIR, "codebooks");
const FRONTEND_DIR = path.join(CODE_DIR, "frontend-build");
const BACKEND_DIR = path.join(CODE_DIR, "nodejs-build");

const CODEBOOK_URL = "http://10.0.0.239:8000/build.tar.gz";

const BLUE = "\x1b[34m";
const RED = "\x1b[31m";
const COLOR_END = "\x1b[0m";

module.exports = {
  HOME_DIR,
  CODEBOOK_DIR,
  CODE_DIR,
  BOOK_DIR,
  FRONTEND_DIR,
  BACKEND_DIR,

  CODEBOOK_URL,

  BLUE,
  RED,
  COLOR_END,
};
