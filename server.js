const express = require('express');
const path = require('path');
const pulls = require('./db/notes_db.json');
const notesId = require('./helpers/notesId');
const PORT = process.env.PORT || 3001;
const app = express();

console.log(notesId)

app.use(express.static('public'));

app.get('/api/notes', (req, res) => res.json(pulls));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/assets/pages/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Note Taker app listening at http://localhost:${PORT}`)
);
