const express = require("express");
const GET_ACTIONS = require("./constant.cjs");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Your app is running fine...");
});

app.get("/res", (req, res) => {
  res.status(200).json(GET_ACTIONS);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is running on PORT 3000");
});
