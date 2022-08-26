import React, { useEffect, useState } from "react";
import { LanguageName } from "@uiw/codemirror-extensions-langs";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";

import "./App.css";
import LanguageSelect from "./components/LanguageSelect/LanguageSelect";
import CodeArea from "./components/CodeArea/CodeArea";
import { BASE_URL } from "./constants";
import { response } from "express";

const WHITESPACE = "  ";

const getDefaultHelloWorld = (language: string): string => {
  switch (language) {
    case "c":
      return `#include <stdio.h>\n\nint main() {\n${WHITESPACE}printf("Hello World");\n${WHITESPACE}return 0;\n}`;
    case "cpp":
      return `#include <iostream>\n\nint main() {\n${WHITESPACE}std::cout << "Hello World";\n${WHITESPACE}return 0;\n}`;
    case "python":
      return `print("Hello World")`;
    case "java":
      return `class HelloWorld {\n${WHITESPACE}public static void main(String[] args) {\n${WHITESPACE}${WHITESPACE}System.out.println("Hello World");\n${WHITESPACE}}\n}`;
    case "rust":
      return `fn main() {\n${WHITESPACE}print!("Hello World");\n}`;
    case "go":
      return `package main\n\nimport "fmt"\n\nfunc main() {\n${WHITESPACE}fmt.Print("Hello World")\n}`;
    case "javascript":
      return `console.log("Hello World");`;
    default:
      return "";
  }
};

const App = (): JSX.Element => {
  document.title = "CodeBook";

  let [currentLanguage, setCurrentLanguage] = useState<string>("");
  let [code, setCode] = useState<string>(getDefaultHelloWorld(currentLanguage));
  let [showOutput, setShowOutput] = useState<boolean>(false);
  let [output, setOutput] = useState<string>("");

  useEffect(() => {
    setCode(getDefaultHelloWorld(currentLanguage));
  }, [currentLanguage]);

  const onClickHandler = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code, language: currentLanguage })
    };

    fetch(`${BASE_URL}/program/run`, requestOptions)
      .then(response => response.json())
      .then(data => {
        setOutput(data.output);
      })
  };

  return (
    <div className="App">
      {currentLanguage === "" ? (
        <Alert severity="info">Select a language to get started:</Alert>
      ) : null}
      <LanguageSelect setCurrentLanguageCallback={setCurrentLanguage} />

      {currentLanguage !== "" ? (
        <>
          <CodeArea
            language={currentLanguage as LanguageName}
            value={code}
            setCodeHandler={setCode}
          />
          <Button variant="contained" color="success" onClick={onClickHandler}>
            Run
          </Button>
        </>
      ) : null}

      <Container maxWidth="sm">
        {output}
      </Container>
    </div>
  );
};

export default App;
