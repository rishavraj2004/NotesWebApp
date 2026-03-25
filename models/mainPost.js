const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'notes.json'
);

// Helper function
const getNotesFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Note {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    save() {
        getNotesFromFile(notes => {
            if (this.id) {
                // Update existing note
                const existingNoteIndex = notes.findIndex(
                    note => note.id === this.id
                );

                const updatedNotes = [...notes];
                updatedNotes[existingNoteIndex] = this;

                fs.writeFile(p, JSON.stringify(updatedNotes), err => {
                    console.log(err);
                });

            } else {
                // Create new note
                this.id = Math.random().toString();
                notes.push(this);

                fs.writeFile(p, JSON.stringify(notes), err => {
                    console.log(err);
                });
            }
        });
    }

    static fetchAll(cb) {
        getNotesFromFile(cb);
    }

    static deleteById(id) {
        getNotesFromFile(notes => {
            const updatedNotes = notes.filter(n => n.id !== id);

            fs.writeFile(p, JSON.stringify(updatedNotes), err => {
                console.log(err);
            });
        });
    }
};