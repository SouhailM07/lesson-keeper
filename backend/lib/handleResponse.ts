import { Response } from "express";

export default function handleResponse(
  res: Response,
  msg,
  status: number = 200
) {
  return res.status(status).send(msg);
}
