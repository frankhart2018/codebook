interface Language {
  name: string;
  converters: string[];
  installed: boolean;
}

const LANGUAGES: Language[] = [
  {
    name: "C",
    converters: ["gcc", "clang"],
    installed: false,
  },
  {
    name: "Python",
    converters: ["python3", "python"],
    installed: false,
  },
  {
    name: "Java",
    converters: ["javac"],
    installed: false,
  },
  {
    name: "Haskell",
    converters: ["ghc"],
    installed: false,
  },
];

export { Language, LANGUAGES };
