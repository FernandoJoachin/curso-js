import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

//Conectar a la DB
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error))

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}))

//Definiar la carpeta publica
app.use(express.static('public'));

//Obtener el año actual
app.use((req, res, next) => { //req - lo que enviamos, res - lo que express nos responde, next para ir al siguiente
    const date = new Date();
    res.locals.year = date.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes'
    return next()
});

//Agregar router
app.use('/', router);


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});