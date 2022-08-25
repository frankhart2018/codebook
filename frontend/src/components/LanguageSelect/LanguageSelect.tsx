import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { BASE_URL } from "../../constants";
import "./LanguageSelect.css";

interface Language {
  name: string;
  converters: string[];
  installed: boolean;
}

interface LanguageSelectProps {
  setCurrentLanguageCallback: Function;
}

const LanguageSelect = (props: LanguageSelectProps): JSX.Element => {
  const [items, setItems] = useState<Language[]>([]);
  const [language, setLanguage] = useState<string>("");

  useEffect(() => {
    fetch(`${BASE_URL}/languages/installed`)
      .then((res) => res.json())
      .then((json) => {
        setItems(json.languages);
      });
  }, []);

  const handleLanguageChange = (event: any) => {
    setLanguage(event.target.value);
    props.setCurrentLanguageCallback(
      event.target.value !== "C++" ? event.target.value.toLowerCase() : "cpp"
    );
  };

  return (
    <div className="LanguageSelect">
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Languages
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={language}
          label="Languages"
          onChange={handleLanguageChange}
        >
          {items.map((item) => (
            <MenuItem
              key={item.name}
              value={item.name}
              disabled={!item.installed}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageSelect;
