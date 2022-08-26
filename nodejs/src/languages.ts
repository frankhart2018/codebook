interface Language {
  name: string;
  convertors: string[];
  installed: boolean;
}

const LANGUAGES: Language[] = [
  {
    name: "C",
    convertors: ["gcc", "clang"],
    installed: false,
  },
  {
    name: "C++",
    convertors: ["g++", "clang++"],
    installed: false,
  },
  {
    name: "Python",
    convertors: ["python3", "python"],
    installed: false,
  },
  {
    name: "Java",
    convertors: ["java"],
    installed: false,
  },
  {
    name: "Rust",
    convertors: ["rustc"],
    installed: false,
  },
  {
    name: "Go",
    convertors: ["go"],
    installed: false,
  },
  {
    name: "JavaScript",
    convertors: ["node", "deno"],
    installed: false,
  },
];

const languageConvertors: { [key: string]: string[] } = {};
for (const language of LANGUAGES) {
  const langName =
    language.name !== "C++" ? language.name.toLowerCase() : "cpp";
  languageConvertors[langName] = language.convertors;
}

export { Language, LANGUAGES, languageConvertors };
