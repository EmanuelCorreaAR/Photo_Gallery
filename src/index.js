if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}

const app = require("./app")

app.listen(app.get('port'),() => {
console.log("Server on port ", app.get('port'));
console.log("Environment:", process.env.NODE_ENV)//cross-env nos permite definir nuestro entorno de desarrollo
});

