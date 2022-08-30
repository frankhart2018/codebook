interface Language {
  name: string;
  convertors: string[];
  installed: boolean;
  extension: string;
}

interface LanguageConvertor {
  convertors: string[];
  extension: string;
}

const LANGUAGES: Language[] = [
  {
    name: "C",
    convertors: ["gcc", "clang"],
    installed: false,
    extension: "c",
  },
  {
    name: "C++",
    convertors: ["g++", "clang++"],
    installed: false,
    extension: "cpp",
  },
  {
    name: "Python",
    convertors: ["python3", "python"],
    installed: false,
    extension: "py",
  },
  {
    name: "Java",
    convertors: ["java"],
    installed: false,
    extension: "java",
  },
  {
    name: "Rust",
    convertors: ["rustc"],
    installed: false,
    extension: "rs",
  },
  {
    name: "Go",
    convertors: ["go"],
    installed: false,
    extension: "go",
  },
  {
    name: "JavaScript",
    convertors: ["node", "deno"],
    installed: false,
    extension: "js",
  },
];

const languageConvertors: { [key: string]: LanguageConvertor } = {};
for (const language of LANGUAGES) {
  const langName =
    language.name !== "C++" ? language.name.toLowerCase() : "cpp";
  languageConvertors[langName] = {
    convertors: language.convertors,
    extension: language.extension,
  };
}

export { Language, LANGUAGES, languageConvertors };
