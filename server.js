const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// const cors = require('cors')


/* load the secrets from .env */
require('./config/database');
require('dotenv').config();

const app = express();
app.use(logger('dev'));
app.use(express.json());
/* Configure both serve-favicon and static middleware 
to serve from the PRODUCTION 'build' folder */
app.use(favicon(path.join(__dirname, 'build','favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

/* Put API (AJAX) routes here, BEFORE the 'catch all' route;
the catch-all route matches EVERY request */
app.use('/api/users', require('./routes/api/users'));
/* remove comment below when it's time for auth
I think it might throw an error... */
//app.use(require('./config/auth'));
/* come back and un-comment when ready for plant routes */
// app.use('api/plants', require('./routes/api/plants'));


// Catch all route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build','index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});