import React from "react";
import Grid from "@mui/material/Grid";
import ReactMarkdown from "react-markdown";

import CodeSide from "./components/CodeSide/CodeSide";
import LinkButton from "./components/LinkButton/LinkButton";
import "./App.css";

const App = (): JSX.Element => {
  document.title = "CodeBook";

  const input = ;

  return (
    <Grid container spacing={0}>
      <Grid
        item
        xs={6}
        className="left-grid"
      >
        {input.split("\n").map((line, _) => {
          if (line.trim().startsWith("~~>>>")) {
            return <LinkButton codePath={line.replace("~~>>>", "").replace("<<<~~", "")} />
          } else {
            return <ReactMarkdown className="justified-markdown">{line}</ReactMarkdown>;
          }
        })}
      </Grid>
      <Grid
        item
        xs={6}
        className="right-grid"
      >
        <CodeSide />
      </Grid>
    </Grid>
  );
};

export default App;
