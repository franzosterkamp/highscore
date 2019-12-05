require("dotenv").config();
const express = require("express");
const { initDB, getCollections } = require("./lib/db");
const app = express();

const router = require("./lib/router");

const url = process.env.MONGO_URL;
const dbName = "clubs";
const collection = "clubs";

const port = 9090;
app.use(express.static("public"));
app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  initDB(url, dbName).then(() => {
    console.log("DB started");
  });
  console.log("Server Running!");
});
