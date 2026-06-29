/// <reference types="node" />

type Request = import("express").Request;
type Response = import("express").Response;

require("dotenv/config");

const express = require("express");
const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("./generated/prisma/client");

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is required to start the checkout service");
}

const databaseUrl = new URL(connectionString);
const schema = databaseUrl.searchParams.get("schema") ?? undefined;

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }, { schema }),
});
const app = express();

app.get("/healthz", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.get("/version", (_req: Request, res: Response) => {
  res.json({ service: "dfyne-devsecops-lab", version: "1.0.0" });
});

app.get("/check_version", async (_req: Request, res: Response) => {
  const orders = await prisma.order.findMany();
  res.json({ data: orders });
});

export = app;

if (process.argv[1]?.endsWith("server.ts") || process.argv[1]?.endsWith("server.js")) {
  const port = Number(process.env.PORT ?? 3000);
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}