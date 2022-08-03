const express = require ("express");
const app = express();


app.get("/products", (req, res) => {
    
    const products = [
        {
            id: 1,
            title: "Reloj Negro",
            price: 1000,
            for_sale: false
        },
        {
            id: 2,
            title: "Reloj Plata",
            price: 2000,
            for_sale: true
        },
        {
            id: 3,
            title: "Reloj Oro",
            price: 5000,
            for_sale: false
        },
    ];

    res.json(products);
});

module.exports = app;