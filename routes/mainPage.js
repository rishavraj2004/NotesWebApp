const path = require('path');

const express = require('express');


const router = express.Router();

const notesController = require('../controllers/notes')

router.get('/', notesController.getNotes)

module.exports = router;