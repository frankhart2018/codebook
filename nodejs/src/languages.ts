interface Language {
    name: string;
    converters: string[];
}

const LANGUAGES: Language[] = [
    {
        "name": "C",
        "converters": ["gcc", "clang"],
    },
    {
        "name": "Python",
        "converters": ["python3", "python"]
    },
    {
        "name": "Java",
        "converters": ["javac"],
    },
    {
        "name": "Haskell",
        "converters": ["ghc"],
    },
];

export {
    Language,
    LANGUAGES
};
