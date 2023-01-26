const express = require('express');

const { 
  handleGetAllPlayers,
  handleCreatePlayer,
  handleGetPlayerById,
  handleUpdatePlayerById,
  handleDeletePlayerById 
} = require('../controllers/player.controller');

const router = express.Router();

router.get('/', handleGetAllPlayers);
router.post('/new', handleCreatePlayer);
router.get('/:id', handleGetPlayerById);
router.put('/:id', handleUpdatePlayerById);
router.delete('/:id', handleDeletePlayerById);

module.exports =  { playerRouter: router }