const express = require('express');
const path = require('path');
const pulls = require('./db/notes_db.json');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.get('/api', (req, res) => res.json(pulls));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/assets/pages/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
