import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { LanguageName, loadLanguage } from "@uiw/codemirror-extensions-langs";

import "./CodeArea.css";

interface CodeAreaProps {
  language: LanguageName;
  value: string;
  setCodeHandler: Function;
}

const CodeArea = (props: CodeAreaProps): JSX.Element => {
  const lang: LanguageName = props.language;

  return (
    <CodeMirror
      value={props.value}
      height="200px"
      theme={"dark"}
      className="code-editor"
      extensions={[loadLanguage(lang)!].filter(Boolean)}
      onChange={(value) => {
        props.setCodeHandler(value);
      }}
    />
  );
};

export default CodeArea;
