const fs = require('fs')

const getNotes = function () {
  return 'Your notes ...'
}

const containsDuplicate = function (notes, title) {
  const duplicateNotes = notes.filter((note) => {
    return note.title === title
  })

  return duplicateNotes.length !== 0
}

const addNote = function (title, body) {
  const notes = loadNotes()

  if (containsDuplicate(notes, title)) {
    console.log('Duplicate note, please choose a different title.')
    return
  }

  notes.push({
    title: title,
    body: body,
  })
  saveNotes(notes)
}

const removeNote = (title) => {
  const notes = loadNotes()

  let noteFound = false
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].title === title) {
      notes.splice(i, 1)
      saveNotes(notes)
      console.log('Removed note.')
      noteFound = true
      break
    }
  }
  if (!noteFound) console.log('Note not found.')
}

const listNotes = () => {
  const notes = loadNotes()

  for (let note of notes) {
    console.log('- ', note.title)
  }
}

const readNote = (title) => {
  const notes = loadNotes()

  let noteFound = false

  for (let note of notes) {
    if (note.title === title) {
      console.log('Title: ', note.title)
      console.log('Body: ', note.body)
      noteFound = true
      break
    }
  }

  if (!noteFound) console.log('Note not found.')
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
}
