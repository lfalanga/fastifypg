import Fastify from "fastify";
import cors from "@fastify/cors";
import db from "./db.js";
import routes from "./routes.js";

const fastify = Fastify({ logger: true });
await fastify.register(cors, {});

fastify.get("/", async function (req, res) {
  return { message: "fastifypg: home." };
});

routes.forEach((route) => {
  fastify.route(route);
});

async function database() {
  try {
    await db.sync();
    console.log("[database]: connected...");
  } catch (err) {
    console.log(err);
  }
}

try {
  fastify.listen({ port: process.env.PORT || 3000 });
  database();
} catch (err) {
  console.log(err);
}
