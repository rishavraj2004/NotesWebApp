const Note = require("../models/mainPost");

exports.getNotes = (req, res, next) => {
    Note.fetchAll(notes => {
        res.render('landing', {
            title: "My Notes",
            notes: notes
        });
    })

}

exports.postNote = (req, res, next) => {
    res.render('postNote', {
        title: "Post Notes"
    })
}

exports.postAddNote = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    console.log("Saving:", title, content);
    const note = new Note(null, title, content);
    note.save();
    res.redirect('/');
}

// Delete note
exports.postDeleteNote = (req, res, next) => {
    const noteId = req.body.noteId;
    Note.deleteById(noteId);

    res.redirect('/');
};
