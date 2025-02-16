import Express from "express";
import { createDatabase } from "sqlite";

createDatabase("products");

export const app = Express();

app.get("/", (_, res) => {
  res.status(200).send({ status: "ok" });
});

try {
  app.listen({ port: 6002 }, (error) => {
    if (error) console.error(error);
    console.info(`Product API listening on port 6002`);
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}
