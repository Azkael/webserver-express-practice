const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('capitalizar', (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
});