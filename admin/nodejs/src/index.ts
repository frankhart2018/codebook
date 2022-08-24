import express from "express";
import { Express, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { ADMIN_PREFIX } from "./constants";

const app: Express = express();
app.use(cors());

app.get(`${ADMIN_PREFIX}/status`, (_req: Request, res: Response, _next: NextFunction) => {
    res.send({
      status: "Ok",
    });
  });

app.use(bodyParser.urlencoded());
app.listen(8080);