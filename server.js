'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const md5 = require('md5');
// const crc = require('crc');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = app.set('port', process.env.PORT || 3000);
app.locals.title = 'Grudge Bin';
app.locals.grudges = [];

app.get('/', (request, response) => {
  response.send(app.locals.title);
});

app.get('/api/v1/grudges', (request, response) => {
  const grudges = app.locals.grudges;
  response.send(grudges);
});

app.get('/api/v1/grudges/:id', (request, response) => {
  const { id } = request.params;
  const person = app.locals.grudges.find(p => p.id == id)
  if (person) { return response.send({ person }); }
  else { return response.sendStatus(404);}
});

app.post('/api/v1/grudges', (request, response) => {
  console.log(request.body);
  const id = Date.now();
  const name = request.body.name;
  const grudge = request.body.grudge;
  const status = false;

  if (!request) {
    return response.status(422).send({
      error: 'No grudge property provided'
    });
  }

  app.locals.grudges.push({ id: id, name: name, grudge: grudge, status: status });

  response.status(201).json({ id, name, grudge, status });
});

// app.put('/api/v1/urls/:id', (request, response) => {
//   const { id } = request.params;
//   const { url } = request.body;
//   const originalURL = app.locals.grudges[id];
//
//   if (!originalURL) { return response.status(404); }
//
//   app.locals.grudges[id] = url;
//
//   response.status(201).json({ id, url });
// });
//
// app.delete('/api/v1/urls/:id', (request, response) => {
//   const { id } = request.params;
//   const originalURL = app.locals.grudges[id];
//
//   if (!originalURL) {
//     return response.status(422).send({
//       error: 'There is no url with that id'
//     });
//   }
//
//   delete app.locals.grudges[id];
//
//   response.send('Url deleted');
// });

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = server;
