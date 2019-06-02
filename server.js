const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static(__dirname + '/public') );

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//helpers


app.get('/', (rep, res) => {
    res.render('home', {
        nombre: 'azkael',
        anio: new Date().getFullYear()
    })
});

app.get('/about', (rep, res) => {
    res.render('about')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));