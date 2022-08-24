import express from 'express';
import { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

import { Language, LANGUAGES } from './languages';
import commandExists from './command_exists';

const app: Express = express();

app.get("/status", (_req: Request, res: Response, _next: NextFunction) => {
    res.send({
        "status": "Ok",
    });
});

app.get("/languages/supported", (_req: Request, res: Response, _next: NextFunction) => {
    res.send({
        "languages": LANGUAGES.map((item) => {
            return {
                "name": item.name
            };
        }),
    })
});

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

        languagesInstalled.push({
            "name": language.name,
            "converters": language.converters,
            "installed": foundAnyConverter,
        });
    }

    return res.send({
        "languages": languagesInstalled,
    })
});

app.use(bodyParser.urlencoded())
app.listen(8080);