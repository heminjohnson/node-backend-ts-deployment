import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const middlewares = [express.json(), cors(), helmet(), morgan("common")];

export default middlewares;
