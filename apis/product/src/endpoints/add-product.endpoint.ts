import { app } from "../index";

app.post("/", async (_, res) => {
  res.sendStatus(201);
});
