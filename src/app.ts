import express, { Request, Response, NextFunction } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello from Express + TypeScript!");
});

console.log(`Starting server...`);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
