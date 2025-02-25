import Express from "express";

const app = Express();

app.get("/", (_, res) => {
  res.status(200).send({ status: "ok" });
});

try {
  app.listen({ port: 6001 }, (error) => {
    if (error) console.error(error);
    console.info(`Healthz API listening on port 6001`);
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}
