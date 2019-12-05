const MongoClient = require("mongodb").MongoClient;

let db = null;

async function initDB(url, dbName) {
  const client = new MongoClient(url);
  await client.connect();
  db = client.db(dbName);
}

function getCollections(collection) {
  return db.collection(collection);
}

exports.initDB = initDB;
exports.getCollections = getCollections;
