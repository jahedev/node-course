const fs = require('fs');

const getNotes = function () {
  return 'Your notes ...';
};

const containsDuplicate = function (notes, title) {
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  return duplicateNotes.length !== 0;
};

const addNote = function (title, body) {
  const notes = loadNotes();

  if (containsDuplicate(notes, title)) {
    console.log('Duplicate note, please choose a different title.');
    return;
  }

  notes.push({
    title: title,
    body: body,
  });
  saveNotes(notes);
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { getNotes: getNotes, addNote: addNote };
