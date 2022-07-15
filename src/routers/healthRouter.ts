import { Router } from "express";

import { getHealth } from "../controllers";

const healthRouter = Router();

/**
 * @apiDescription api used by external parties to verify availability of our system
 * @api {get} '/v1/admin/health'
 * @apiParam NA
 * @apiBody NA
 */
healthRouter.get("/v1/admin/health", getHealth);
healthRouter.get("/", getHealth);

export default healthRouter;
