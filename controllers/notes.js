exports.getNotes = (req, res, next) => {
    res.render('landing', {
        title: "My Notes"
    });
}