'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const md5 = require('md5');
const crc = require('crc');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = app.set('port', process.env.PORT || 3000);
app.locals.title = 'URL Shortener';
app.locals.urls = [];

app.get('/', (request, response) => {
  response.send(app.locals.title);
});

app.get('/api/v1/urls', (request, response) => {
  const urls = app.locals.urls;
  response.send(urls);
});

app.get('/api/v1/urls/:shortURL', (request, response) => {
  let targetUrl = app.locals.urls.filter((url) => url.shortURL === request.params.shortURL)[0];
    if (!targetUrl) { response.send(`redirect failed!`);}
    ++targetUrl.count;
    response.redirect(targetUrl.url);
});

app.post('/api/v1/urls', (request, response) => {
  console.log(request.body);
  const id = Date.now();
  const name = request.body.name;
  const grudge = request.body.grudge;

  if (!request) {
    return response.status(422).send({
      error: 'No grudge property provided'
    });
  }

  app.locals.urls.push({ id: id, name: name, grudge: grudge });

  response.status(201).json({ id, name, grudge });
});

app.put('/api/v1/urls/:id', (request, response) => {
  const { id } = request.params;
  const { url } = request.body;
  const originalURL = app.locals.urls[id];

  if (!originalURL) { return response.status(404); }

  app.locals.urls[id] = url;

  response.status(201).json({ id, url });
});

app.delete('/api/v1/urls/:id', (request, response) => {
  const { id } = request.params;
  const originalURL = app.locals.urls[id];

  if (!originalURL) {
    return response.status(422).send({
      error: 'There is no url with that id'
    });
  }

  delete app.locals.urls[id];

  response.send('Url deleted');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = server;
