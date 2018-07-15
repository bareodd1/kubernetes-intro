const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "HMS extension phase 2", "location": "Norge, Oslo"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "2016", "yearTo": "2017", "place": "John Smith", "comment": "Payd OK. S99"}, {"yearFrom": "2017", "yearTo": "2018", "place": "Kjell Fjell", "comment": "70% payd. OK S70."}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "2014", "yearTo": "2017", "place": "Paint main office", "comment": "Done OK"}, {"yearFrom": "2017", "yearTo": "2019", "place": "New network", "comment": "Starter OK. S80"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
