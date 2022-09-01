import express from "express";
import { Express, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as fs from "fs";

import { Language, LANGUAGES, languageConvertors } from "./languages";
import commandExists from "./command_exists";
import runProgram from "./run_program";
import extractPrograms from "./markdown_parse";

const app: Express = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/status", (_req: Request, res: Response, _next: NextFunction) => {
  res.send({
    status: "Ok",
  });
});

app.get(
  "/languages/supported",
  (_req: Request, res: Response, _next: NextFunction) => {
    res.send({
      languages: LANGUAGES.map((item) => {
        return {
          name: item.name,
        };
      }),
    });
  }
);

app.get(
  "/languages/installed",
  (_req: Request, res: Response, _next: NextFunction) => {
    const languagesInstalled: Language[] = [];

    for (const language of LANGUAGES) {
      let foundAnyConverter: boolean = false;
      for (const converter of language.convertors) {
        if (commandExists(converter)) {
          foundAnyConverter = true;
        }

        if (foundAnyConverter) {
          break;
        }
      }

      languagesInstalled.push({
        name: language.name,
        convertors: language.convertors,
        installed: foundAnyConverter,
        extension: language.extension,
      });
    }

    return res.send({
      languages: languagesInstalled,
    });
  }
);

app.post("/program/run", (req: Request, res: Response, _next: NextFunction) => {
  const code: string = req.body.code;
  const language: string = req.body.language;

  const convertors: any = languageConvertors[language].convertors;
  let installedConvertor: string = "";

  for (const convertor of convertors) {
    if (commandExists(convertor)) {
      installedConvertor = convertor;
      break;
    }
  }

  const output = runProgram(language, installedConvertor, code);

  return res.send({
    output,
  });
});

app.post(
  "/program/fetch",
  (req: Request, res: Response, _next: NextFunction) => {
    const codeFilePath: string = req.body.codeFilePath;

    return res.send({
      code: fs.readFileSync(codeFilePath).toString(),
    });
  }
);

app.post(
  "/text/parsemd",
  (req: Request, res: Response, _next: NextFunction) => {
    const markdownPath = req.body.markdownPath;
    const finalMarkdown = extractPrograms(markdownPath);

    return res.send({
      cleanedMarkdown: finalMarkdown,
    });
  }
);

app.listen(8080);
