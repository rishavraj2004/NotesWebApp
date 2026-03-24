const path = require('path');

const express = require('express');

const app = express()
const errorController = require('./controllers/error')

const mainPageRoutes = require('./routes/mainPage');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', mainPageRoutes);

app.use(errorController.get404)

app.listen(3000, () => {
    console.log("Server is running on http://127.0.0.1:3000/")
})