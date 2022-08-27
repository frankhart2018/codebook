import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ReactMarkdown from "react-markdown";

import CodeSide from "./components/CodeSide/CodeSide";

const App = (): JSX.Element => {
  document.title = "CodeBook";

  const input = '# This is a header\n\nAnd this is a paragraph';

  return (
    <Grid container spacing={1}>
      <Grid item xs={6} style={{"borderRight": "1px solid black", "height": "100vh"}}>
        <ReactMarkdown>
          {input}
        </ReactMarkdown>
      </Grid>
      <Grid item xs={6} style={{"borderLeft": "1px solid black", "height": "100vh"}}>
        <CodeSide />
      </Grid>
    </Grid>
  )
};

export default App;
