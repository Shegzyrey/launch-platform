const PrismaClient = require("@prisma/client");

const express = require("express");

const app = express();

app.get("/healthz", (req,res) => {
  res.json({status: "ok"});
});

app.get("/version", (req, res) => {
  res.json({ service: "dfyne-devsecops-lab", version: "1.0.0"});
});



async function prisa() {
  const prisma = new PrismaClient();
  try {
    const orders = await prisma.orders.findMany();
    console.log({ orders });
  } finally {
    prisma.$disconnect();
  }
}

module.exports = app;

if (require.main === module ) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}