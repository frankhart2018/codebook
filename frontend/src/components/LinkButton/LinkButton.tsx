import React from "react";
import Button from "@mui/material/Button";

import CodeSide from "../CodeSide/CodeSide";
import { BASE_URL } from "../../constants";

interface LinkButtonProps {
  codePath: string;
  setCodeSideHandler: Function;
}

const extensionToLanguage: { [key: string]: string } = {
  c: "c",
  cpp: "cpp",
  py: "python",
  java: "java",
  rs: "rust",
  go: "go",
  js: "javascript",
};

const LinkButton = (props: LinkButtonProps): JSX.Element => {
  const codePath = props.codePath;
  const codeFileNameSplit = codePath.split(".");
  const extension = codeFileNameSplit[codeFileNameSplit.length - 1];

  const onClickHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ codeFilePath: codePath }),
    };

    fetch(`${BASE_URL}/program/fetch`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        props.setCodeSideHandler(
          <CodeSide
            isSingleLanguage={true}
            language={extensionToLanguage[extension]}
            givenCode={data.code}
          />
        );
      });
  };

  return (
    <Button variant="contained" onClick={onClickHandler}>
      Reveal Code
    </Button>
  );
};

export default LinkButton;
