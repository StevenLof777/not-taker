const db = require('../db/notes_db.json')
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');
// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.log('console')
    res.json(db)
  });
  
  // POST Route for a new UX/UI notes
  notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { title, text} = req.body;
  
    if (req.body) {
      const newNotes = {
        title,
        text,
        id : uuidv4()
      };
  
      readAndAppend(newNotes, './db/notes.json');
      res.json(`notes added successfully.`);
    } else {
      res.error('Error in adding notes');
    }
  });
  
  module.exports = notes;
  