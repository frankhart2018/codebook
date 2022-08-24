import React from "react";
import "./App.css";

import LanguageSelect from "./components/LanguageSelect/LanguageSelect";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <LanguageSelect />
    </div>
  );
}

export default App;
