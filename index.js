import express from "express";
import GET_ACTIONS from "./constant.js";

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
