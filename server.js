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

app.put('/api/v1/grudges/:id', (request, response) => {
  console.log(request.params);
  const { id } = request.params;
  console.log(id);
  const { grudge } = request.body;
  console.log(grudge);
  const originalGrudge = app.locals.grudges.find(p => p.id == id)
  console.log(originalGrudge);

  if (!originalGrudge) { return response.status(404); }

  app.locals.grudges.find(p => p.id == id) = grudge;
  console.log(grudge);
  response.status(201).json({ id, grudge });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = server;
