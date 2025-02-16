import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.get("/", (_, __) => {
  return { status: "ok" };
});

const start = async () => {
  try {
    await fastify.listen({ port: 6001 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
