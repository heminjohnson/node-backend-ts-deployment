import { config } from "dotenv";
config();

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import express from "express";

import middlewares from "./middlewares";
import routers from "./routers";

const definition = YAML.load(
  path.resolve(__dirname, "../apiDocs/apiDocs.yaml")
);

const specs = swaggerJsdoc({ definition, apis: [] });

const server = express();

server.use("/apiDocs", swaggerUi.serve, swaggerUi.setup(specs));

server.use(middlewares);
server.use(routers);

export default server;
