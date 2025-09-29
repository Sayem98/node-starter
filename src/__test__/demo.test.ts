import request from "supertest";
import { app } from "../app";

it("should return 200 OK", async () => {
  const res = await request(app).get("/");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Hello from Express + TypeScript!");
});
