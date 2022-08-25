import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { LanguageName, loadLanguage } from "@uiw/codemirror-extensions-langs";

import "./CodeArea.css";

interface CodeAreaProps {
  language: LanguageName;
  value: string;
}

const CodeArea = (props: CodeAreaProps): JSX.Element => {
  const lang: LanguageName = props.language;
  const value: string = props.value;

  return (
    <CodeMirror
      value={value}
      height="200px"
      theme={"dark"}
      className="code-editor"
      extensions={[loadLanguage(lang)!].filter(Boolean)}
    />
  );
};

export default CodeArea;
