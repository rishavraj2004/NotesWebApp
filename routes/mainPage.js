const path = require('path');

const express = require('express');


const router = express.Router();

const notesController = require('../controllers/notes')

router.get('/', notesController.getNotes)

router.get('/post-note', notesController.postNote)
router.post('/post-note', notesController.postAddNote)
router.get('/delete-note', notesController.postDeleteNote);




module.exports = router;