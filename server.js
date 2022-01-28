const db = require('./db/db.json');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require("uuid");
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/api/notes', (req, res) => res.json(db));

app.post('/api/notes', (req, res) => {
    const { title, text} = req.body;
  
    const newNotes = {
        title,
        text,
        id : uuidv4()
    }

    db.push(newNotes);
    fs.writeFile('./db/db.json', JSON.stringify(db), (err) =>
    console.error(err))

    res.json(db)
});

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Note Taker app listening at http://localhost:${PORT}`)
);
