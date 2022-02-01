const express = require("express");
const app = express();
const { PORT } = require("./confic");

app.listen({ port: PORT }, () => {
  console.log(`http://localhost:${PORT}`);
});
