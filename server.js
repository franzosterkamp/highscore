const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const app = express();
const url = "mongodb://localhost:27017";
const dbName = "clubs";
const client = new MongoClient(url);

const port = 9090;
app.use(express.static("public"));
app.use(express.json());

// app.get("/clubs", async response => {
//   // await client.connect();
//   // const db = client.db(dbName);
//   // const cursor = db.collection("clubs").find();
//   // const clubs = await cursor.toArray();
//   // console.log(clubs);
//   response.end("hallo");

//   // client.close();
// });

app.get("/api/clubs", async (request, response) => {
  try {
    const clubs = await getClubs();
    response.end(clubs);
  } catch (error) {
    response.status(400).end("Can not read clubs");
  }
});

app.get("/api/clubs/:key", async (request, response) => {
  try {
    const { key } = request.params;
    const clubs = await getClub(key);
    response.end(clubs);
  } catch (error) {
    response.status(400).end("Can not read clubs");
  }
});

async function getClubs() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const cursor = db.collection("clubs").find({});
  const clubs = await cursor.toArray();
  jsonClubs = JSON.stringify(clubs);
  console.log(clubs);
  return jsonClubs;
}

async function getClub(key) {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  console.log(key);
  const Ikey = parseInt(key);
  const cursor = db.collection("clubs").find({ id: Ikey });
  const clubs = await cursor.toArray();
  jsonClubs = JSON.stringify(clubs);
  console.log(clubs);
  return jsonClubs;
}

app.listen(port, () => {
  console.log("Server Running!");
});
