exports.getNotes = (req, res, next) => {
    res.render('landing', {
        title: "My Notes"
    });
}

exports.postNote = (req, res, next) => {
    res.render('postNote', {
        title: "Post Notes"
    })
}