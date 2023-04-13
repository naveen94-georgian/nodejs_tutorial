const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const userRoute = require('./routes/users');
app.use(userRoute);

app.use((req, res, next) => {
   res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);