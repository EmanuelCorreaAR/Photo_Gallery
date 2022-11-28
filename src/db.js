require('dotenv').config();//lee el archivo .env y lo deja disponible
const { DB_USER,  DB_PASSWORD} = process.env;
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.l8vpm5i.mongodb.net/?retryWrites=true&w=majority`)
.then(() => console.log("DB is connected"))
.catch((err) => console.log(err));

