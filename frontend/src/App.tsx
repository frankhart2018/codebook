import React, { useState, useEffect } from "react";
import "./App.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { BASE_URL } from "./constants";

interface Language {
  name: string;
  converters: string[];
  installed: boolean;
}

const App = (): JSX.Element => {
  const [items, setItems] = useState<Language[]>([]);
  const [loadedLanguages, setLoadedLanguages] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("");

  useEffect(() => {
    fetch(`${BASE_URL}/languages/installed`)
      .then((res) => res.json())
      .then((json) => {
        setItems(json.languages);
        console.log(json);
        setLoadedLanguages(true);
      });
  }, []);

  const handleChange = (event: any) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="App">
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Languages</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={language}
          label="Languages"
          onChange={handleChange}
        >
          {items.map((item) => (
            <MenuItem key={item.name} value={item.name} disabled={!item.installed}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
