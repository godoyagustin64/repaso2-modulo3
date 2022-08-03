const express = require ("express");
const path = require ("path");
const app = express();

// Registrar como publica la carpeta public

app.use(express.static(path.join(__dirname, "../public")));

// Registrar carpetas estaticas con "prefijos"
app.use("/desktop", express.static("desktop"));
app.use("/mobile", express.static("mobile"));

// Registrar ejs como motor de plantilla
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("index", {
        usuario: [
            {
            name: "Agustin",
            email: "agustin@gmail.com"
        },
        {
            name: "nahuel",
            email: "nahuel@gmail.com"
        },
        {
            name: "godoy",
            email: "godoy@gmail.com"
        },
        {
            name: "gaetan",
            email: "gaetan@gmail.com"
        },
    ]
    });
});

app.get("/product", function(req, res) {

    res.render("product");
})

app.listen(3000, () => console.log("Proyecto en el puerto 3000"));

