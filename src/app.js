require("dotenv").config();
const express = require("express");
const routes = require("./pilots/routes.js");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api/v1/pilots", routes);

app.listen(PORT, () => {
  console.log("Server Started. Listening on PORT:", PORT);
});
