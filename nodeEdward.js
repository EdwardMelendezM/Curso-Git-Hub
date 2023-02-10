/* COMANDOS DE MANERA ESTRICTA */
'use strict';
import express from 'express';
const app = express();

/* POR LA URL */

//Escuchamos nuestro servidor creado
app.listen(3001, () => {
  console.log('listening on 3001')
})
