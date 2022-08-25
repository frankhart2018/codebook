import React, { useState } from "react";
import { LanguageName } from "@uiw/codemirror-extensions-langs";

import "./App.css";
import LanguageSelect from "./components/LanguageSelect/LanguageSelect";
import CodeArea from "./components/CodeArea/CodeArea";

const getDefaultHelloWorld = (language: LanguageName): string => {
  switch (language) {
    case "c":
      return '#include <stdio.h>\n\nint main() {\n\tprintf("Hello World");\n\treturn 0;\n}';
    case "cpp":
      return '#include <iostream>\n\nint main() {\n\tstd::cout << "Hello World";\n\treturn 0;\n}';
    case "python":
      return 'print("Hello World")';
    case "java":
      return 'class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}';
    case "rust":
      return 'fn main() {\n\tprint!("Hello World");\n}';
    case "go":
      return 'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Print("Hello World")\n}';
    case "javascript":
      return 'console.log("Hello World");';
    default:
      return "";
  }
};

const App = (): JSX.Element => {
  document.title = "CodeBook";

  let [currentLanguage, setCurrentLanguage] = useState<LanguageName>("c");

  return (
    <div className="App">
      <LanguageSelect setCurrentLanguageCallback={setCurrentLanguage} />

      <CodeArea
        language={currentLanguage}
        value={getDefaultHelloWorld(currentLanguage)}
      />
    </div>
  );
};

export default App;
