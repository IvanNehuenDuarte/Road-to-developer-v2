const express = require("express");
const morgan = require('morgan');
const path = require('path');
require('ejs');

const app = express();

const HomeRoutes = require('./routes/home');
const HomeUsers = require('./routes/users');


//Settings
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// middlewares
app.use(express.json())
app.use(morgan('dev'))

app.use(HomeRoutes)
app.use(HomeUsers)

// Routes
app.use("/public", express.static(path.join(__dirname, 'public')))

app.listen(3000);

console.log(`Server on por ${3000}`);
