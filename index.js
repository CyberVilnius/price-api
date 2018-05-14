const express = require('express');

require('dotenv').config();
const config = require('config');

const swaggerUi = require('swagger-ui-express');
const swaggerIndexJson = require('./swagger/index.json');

const app = express();

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerIndexJson));

app.listen(config.get('listen_on_port'), () => {
  console.log(`App listening on ${config.get('listen_on_port')}`);
});
