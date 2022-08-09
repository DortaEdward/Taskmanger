// App dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

require('dotenv').config();
require('./db/db');
const PORT = process.env.PORT || 5001;
const VERSION = process.env.VERSION;

const middleware = require('./middleware/');

// Initiate App
const app = express();

// App configuration
app.use(cors());
app.use(helmet());
app.use(morgan('common'));
app.use(express.json());

// Routes
app.use(`/api/v${VERSION}/auth`, require('./api/auth'));

// Error Handling
app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});