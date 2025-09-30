import express, { Express } from "express";

const router = express.Router();

const getApiRoutes = () => {
  router.get("/health", (req, res) =>
    res.status(200).json({ message: "Active" }),
  );

  return router;
};

export const setupApiRoutes = (app: Express): void => {
  app.use("/api/v1", getApiRoutes());
};
