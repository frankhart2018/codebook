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
    name: "C++",
    converters: ["g++", "clang++"],
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
    name: "Rust",
    converters: ["rustc"],
    installed: false,
  },
  {
    name: "Go",
    converters: ["go"],
    installed: false,
  },
  {
    name: "JavaScript",
    converters: ["node", "deno"],
    installed: false,
  },
  {
    name: "Erlang",
    converters: ["erl"],
    installed: false,
  },
  {
    name: "Haskell",
    converters: ["ghc"],
    installed: false,
  },
];

export { Language, LANGUAGES };
