const express = require('express');
const app = express();
const hbs = require('hbs');
require('./views/helpers/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'eduardo luis benavides'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port, () => {
    console.log(`Server escuchando en el puerto ${port}`);
});
