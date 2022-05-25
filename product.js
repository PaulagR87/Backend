const Contenedor = require('./desafio.js')

const run = async function () {
    let contenedor = new Contenedor('productos.txt')
    contenedor.save({
        title: "Perfume",
        price: 8000,
        thumbnail: "shorturl.at/jlqL9"
    })

    contenedor.save({
        title: "Campera",
        price: 10000,
        thumbnail: "shorturl.at/qvzM6"
    })

    contenedor.save({
        title: "Botas",
        price: 9000,
        thumbnail: "shorturl.at/crCRY"
    })
    console.log(contenedor.getById(1));
    console.log(contenedor.getById(5));
    console.log(contenedor.getAll());
    console.log(contenedor.deleteById(1));
    console.log(contenedor.deleteById(6));
    console.log(contenedor.getAll());
    contenedor.deleteAll();
    console.log(contenedor.getAll());
};

run();