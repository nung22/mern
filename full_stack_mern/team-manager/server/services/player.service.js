const { Player } = require("../models/player.model");

const createPlayer = async (data) => {
  const player = await Player.create(data);
  return player;
};

const getAllPlayers = async () => {
  const players = await Player.find();
  return players;
};

const getPlayerById = async (playerId) => {
  const player = await Player.findById(playerId);
  return player;
};

const deletePlayerById = async (playerId) => {
  const deletedPlayer = await Player.findByIdAndDelete(playerId);
  return deletedPlayer;
};

const updatePlayerById = async (playerId, data) => {
  const updatedPlayer = await Player.findByIdAndUpdate(playerId, data,
    {
      // re-run our validations
      runValidators: true,  
    }
    );
  return updatedPlayer;
};

module.exports = {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  deletePlayerById,
  updatePlayerById,
};