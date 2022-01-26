const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
  });
  
  // POST Route for a new UX/UI notes
  notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { title, text} = req.body;
  
    if (req.body) {
      const newNotes = {
        title,
        text
      };
  
      readAndAppend(newNotes, './db/notes.json');
      res.json(`notes added successfully.`);
    } else {
      res.error('Error in adding notes');
    }
  });
  
  module.exports = notes;
  