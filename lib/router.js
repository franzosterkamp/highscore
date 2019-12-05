const express = require("express");
const { addClub, getClubs, getClubById, removeClubById } = require("./clubs");

const router = express.Router();

router.get("/clubs", async (request, response) => {
  const clubs = await getClubs();
  console.log(clubs);
  response.json(clubs);
});

router.post("/clubs", async (request, response) => {
  const club = request.body;
  await addClub(club);
  response.json();
});

router.get("/clubs/:id", async (request, response) => {
  const { id } = request.params;
  const idKey = parseInt(id);
  const club = await getClubById(idKey);
  response.json(club);
});

router.delete("/clubs/delete/:id", async (request, response) => {
  const { id } = request.params;
  const idKey = parseInt(id);
  await removeClubById(idKey);
  response.json();
});

module.exports = router;
