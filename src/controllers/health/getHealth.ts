import { Request, Response } from "express";

/**
 * @description controller used by external parties to verify availability of our system
 * @param req
 * @param res
 * @returns res
 */
const getHealth = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ message: "Health OKAY" });
};

export default getHealth;
