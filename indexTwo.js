// Structure of the Note:
// {id: 1, title: 'Note 1', body: 'This is note 1', author: 'John Doe'}

// Create Notes

// Read Notes
const readNotes = (id) => {
  input.map((note) => {
    if (note.id == id) {
      return note;
    }
  });
};

// Update Notes
const notes = [
  { id: 1, title: 'great monk', author: 'jayshety' },
  { id: 1, title: 'great father', author: 'william' },
  { id: 1, title: 'godfather', author: 'asdfgh' },
  { id: 1, title: 'marvel', author: 'defghh' },
];

const updateNote = (notes) => {
  for (const udtnote in notes) {
    if (udtnote.id == notes.id) {
      udtnote.title = notes.title;
      udtnote.author = notes.author;
    }
    return udtnote;
  }
};
console.log(updateNote('great monk'));

// Delete Notes
