const os = require("os");
const path = require("path");

const HOME_DIR = os.homedir();
const CODEBOOK_DIR = path.join(HOME_DIR, ".codebook");
const CODE_DIR = path.join(CODEBOOK_DIR, "code");
const BOOK_DIR = path.join(CODEBOOK_DIR, "codebooks");
const CODEBOOK_CODE_DIR = path.join(CODE_DIR, "codebook");
const FRONTEND_DIR = path.join(CODEBOOK_CODE_DIR, "frontend");
const BACKEND_DIR = path.join(CODEBOOK_CODE_DIR, "nodejs");

const GIT_URL = "https://github.com/frankhart2018/codebook";

const BLUE = "\x1b[34m";
const RED = "\x1b[31m";
const COLOR_END = "\x1b[0m";

module.exports = {
  HOME_DIR,
  CODEBOOK_DIR,
  CODE_DIR,
  BOOK_DIR,
  CODEBOOK_CODE_DIR,
  FRONTEND_DIR,
  BACKEND_DIR,

  GIT_URL,

  BLUE,
  RED,
  COLOR_END,
};
