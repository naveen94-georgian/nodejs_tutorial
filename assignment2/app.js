const express = require('express');
const app = express();

// app.use((req, res, next) => {
//    console.log('Log from Middleware One');
//    next();
// });
//
// app.use((req, res, next) => {
//     console.log('Log from Middleware Two');
//     res.send('Hello World');
// });

app.use('/users', (req, res, next) => {
    console.log('users middleware');
    res.send('Hello Users');
});

app.use('/', (req, res, next) => {
    console.log('generic middleware');
    res.send('Hello All requests');
});

app.listen(3000);