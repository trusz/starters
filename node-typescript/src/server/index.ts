import * as bodyParser from "body-parser";
import express from "express";
import { healthCheck } from "src/healthcheck";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/healthcheck", healthCheck);

app.set("port", PORT);

export default app;
