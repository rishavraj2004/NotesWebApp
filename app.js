const path = require('path');

const express = require('express');

const app = express()


const mainPageRoutes = require('./routes/mainPage');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', mainPageRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.ejs'));
    res.render('404', {
        title: "Page Not Found"
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://127.0.0.1:3000/")
})