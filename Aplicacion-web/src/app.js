const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const clientes = require('./routes/clientes/routes');
const usuarios = require('./routes/usuarios/routes');
const auth = require('./routes/auth/routes');
const error = require('./red/errors');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

// Config
app.set('port', config.app.port);

// Routes
app.use('/api/clientes', clientes)
app.use('/api/usuarios', usuarios)
app.use('/api/auth', auth)
app.use(error);

module.exports = app;