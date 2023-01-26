const { Player } = require("../models/player.model");
const { 
  createPlayer,
  getAllPlayers,
  getPlayerById,
  deletePlayerById,
  updatePlayerById,
} = require("../services/player.service");

const handleCreatePlayer = async (req, res) => {
  try {
    const newPlayer = await createPlayer(req.body);
    return res.json(newPlayer);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const handleGetAllPlayers = async (req, res) => {
  const players = await getAllPlayers();
  return res.json(players);
};

const handleGetPlayerById = async (req, res) => {
  const player = await getPlayerById(req.params.id);
  return res.json(player);
};

const handleDeletePlayerById = async (req, res) => {
  try {
    const deletedPlayer = await deletePlayerById(req.params.id);
    return res.json(deletedPlayer);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const handleUpdatePlayerById = async (req, res) => {
  try {
    const updatedPlayer = await updatePlayerById(
      req.params.id,
      req.body
    );
    return res.json(updatedPlayer);
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  handleCreatePlayer,
  handleGetAllPlayers,
  handleGetPlayerById,
  handleDeletePlayerById,
  handleUpdatePlayerById,
};
