import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ReactMarkdown from "react-markdown";

import CodeSide from "./components/CodeSide/CodeSide";
import LinkButton from "./components/LinkButton/LinkButton";
import { BASE_URL } from "./constants";
import "./App.css";

const App = (): JSX.Element => {
  document.title = "CodeBook";

  let [input, setInput] = useState<string>("");
  let [codeSide, setCodeSide] = useState<JSX.Element | null>(null);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ markdownPath: "./test.md" }),
  };

  fetch(`${BASE_URL}/text/parsemd`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setInput(data.cleanedMarkdown);
    });

  return (
    <Grid container spacing={0}>
      <Grid item xs={6} className="left-grid">
        {input.split("\n").map((line, _) => {
          if (line.trim().startsWith("~~>>>")) {
            return (
              <LinkButton
                codePath={line.replace("~~>>>", "").replace("<<<~~", "")}
                setCodeSideHandler={setCodeSide}
              />
            );
          } else {
            return (
              <ReactMarkdown className="justified-markdown">
                {line}
              </ReactMarkdown>
            );
          }
        })}
      </Grid>
      <Grid item xs={6} className="right-grid">
        {codeSide}
      </Grid>
    </Grid>
  );
};

export default App;
