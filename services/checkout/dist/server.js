"use strict";
/// <reference types="node" />
const express = require("express");
const { PrismaClient } = require("./generated/prisma/client");
const prisma = new PrismaClient({});
const app = express();
app.get("/healthz", (_req, res) => {
    res.json({ status: "ok" });
});
app.get("/version", (_req, res) => {
    res.json({ service: "dfyne-devsecops-lab", version: "1.0.0" });
});
app.get("/check_version", async (_req, res) => {
    const orders = await prisma.order.findMany();
    res.json({ data: orders });
});
if (process.argv[1]?.endsWith("server.ts") || process.argv[1]?.endsWith("server.js")) {
    const port = Number(process.env.PORT ?? 3000);
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
module.exports = app;
//# sourceMappingURL=server.js.map