const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const exphbs = require('express-handlebars');//hbs abreviacion de handlebars

//inicializaciones
const app = express();
require("./db")

//configuraciones
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));//con esta linea le indicamos donde esta la carpeta especifica
app.engine(".hbs", exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
}));
app.set("view engine", ".hbs");

//middlewares (son funciones que se ejecutan antes de llegar a la ruta)
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));//sirve para decirle que cuando nosotrso subimos datos desde un forma los entienda.
const storage = multer.diskStorage({
    dest:("/public/images"),
    filename: (req , file, cb) =>{
        cb(null,new Date().getTime() + path.extname(file.originalname));//node new Date() 2022-11-08T21:57:01.745Z ===> new Date().getTime() 1667944638737
    }
})
app.use(multer({ storage }).single("image"));//procesa imagenes, y las coloca dento del servidor(nuestro form tendra un input "image")

//routes
app.use(require("./routes/"));

module.exports = app;