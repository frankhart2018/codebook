import React from "react";
import Grid from "@mui/material/Grid";
import ReactMarkdown from "react-markdown";

import CodeSide from "./components/CodeSide/CodeSide";
import LinkButton from "./components/LinkButton/LinkButton";
import "./App.css";

const App = (): JSX.Element => {
  document.title = "CodeBook";

  const input = `
  # Watching for changes on a website

  Recently I had to apply for a visa, and to get an appointment you need to go to the government website and constantly check if there are new spots available. And you need to be quick, as the free spots don't last long.
  
  So I decided to write a bot, that navigates through the forms every 10 minutes and send me a message on Telegram as soon the state of it changes. The bot has two parts, the first is the code to interact with selenium webdriver, and the second is to alert about changes through Telegram.
  
  ~~>>>test-1.py<<<~~
  `;

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
