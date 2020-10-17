const cors = require('cors')
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');


/* load the secrets from .env */
require('dotenv').config();
require('./config/database');

const usersRouter = require('./routes/api/users');
const plantsRouter = require('./routes/api/plants');
const messagesRouter = require('./routes/api/messages');

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
/* Configure both serve-favicon and static middleware 
to serve from the PRODUCTION 'build' folder */
app.use(favicon(path.join(__dirname, 'build','favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

/* Put API (AJAX) routes here, BEFORE the 'catch all' route;
the catch-all route matches EVERY request */
/*---Public API/AJAX Routes---*/
app.use('/api/users', usersRouter);

app.use(require('./config/auth'));
/*---Protected API/AJAX Routes---*/
app.use('/api/plants', plantsRouter);
app.use('/api/messages', messagesRouter);


// Catch all route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build','index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});