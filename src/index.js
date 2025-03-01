console.log( 'Prueba' );

const express = require('express')
const Tconexion = require('./config/mongo.config')
const app = express();

Tconexion();

app.use(express.json());

app.use( '/api/areas', require( './routes/areas.routes.js' ));

app.listen( 3001, function() {
    console.log( 'Servidor iniciado en el puerto 3001' );
});