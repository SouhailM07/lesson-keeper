import express, { Request, Response } from "express";
import "dotenv/config";
import connectToDatabase from "../lib/connectDB";
// ? imported routers
import userRouter from "../routers/users/user.router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("welcome to the absolute shadow !");
});

// ? routers
app.use("/users", userRouter);

//=============================================================================================
// server settings
//=============================================================================================

// app.listen(process.env.PORT!, () => {
// connectToDatabase();
// console.log("================================");
// console.log("The server is online and ready !");
// console.log("================================");
// });
