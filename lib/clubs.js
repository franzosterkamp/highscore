const { getCollections } = require("./db");

function getClubsCollection() {
  return getCollections("clubs");
}

function addClub(club) {
  return getClubsCollection().insertOne(club);
}

function getClubs() {
  return getClubsCollection()
    .find()
    .toArray();
}

function getClubById(idKey) {
  return getClubsCollection()
    .find({ id: idKey })
    .toArray();
}

function removeClubById(idKey) {
  return getClubsCollection().deleteOne({ id: idKey });
}

exports.addClub = addClub;
exports.getClubs = getClubs;
exports.getClubById = getClubById;
exports.removeClubById = removeClubById;
