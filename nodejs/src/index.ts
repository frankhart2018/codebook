import express from 'express';
import { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import * as child from 'child_process';

import { Language, LANGUAGES } from './languages';

const app: Express = express();

app.get("/status", (_req: Request, res: Response, _next: NextFunction) => {
    res.send({
        "status": "Ok",
    });
});

app.get("/languages/supported", (_req: Request, res: Response, _next: NextFunction) => {
    res.send({
        "languages": LANGUAGES,
    })
});

const commandExists = (command: string): boolean => {
    // const isWin: boolean = require('os').platform().indexOf('win') > -1;
    // const where: string = isWin ? 'where' : 'whereis';
    // const completeCommand = `${where} ${command}`;

    try {
        child.execSync(`command -v ${command}`).toString();
    } catch(e: any) {
        return false;
    }

    return true;
}

app.get("/languages/installed", (_req: Request, res: Response, _next: NextFunction) => {
    const languagesInstalled: Language[] = [];

    for (const language of LANGUAGES) {
        let foundAnyConverter: boolean = false;
        for (const converter of language.converters) {
            if (commandExists(converter)) {
                foundAnyConverter = true;
            }

            if (foundAnyConverter) {
                break;
            }
        }

        if (foundAnyConverter) {
            languagesInstalled.push(language);
        }
    }

    return res.send({
        "languages": languagesInstalled,
    })
});

app.use(bodyParser.urlencoded())
app.listen(8080);