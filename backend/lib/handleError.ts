import { Response } from "express";

export default function handleError(
  res: Response,
  error,
  status: number = 500
) {
  res.status(status).send(error);
}
