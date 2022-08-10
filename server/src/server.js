// App dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const Users = require('./db/models/users');
const Boards = require('./db/models/board');

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
app.use(middleware.checkTokenSetUser);

// Routes
app.get('/', async (req,res,next) => {
  const users = await Users.find();
  const boards = await Boards.find();
  res.json({users,boards});
});

app.use(`/api/v${VERSION}/auth`, require('./api/auth'));
app.use(`/api/v${VERSION}/boards`, require('./api/boards'));

// Error Handling
app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});