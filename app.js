const express = require('express')
const path = require('path')
const hbs = require('hbs')

const indexRouter = require('./routes/index');

const app = express();

app.listen(3000, function () {
    console.log('app listening on port 3000');
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/calculator', indexRouter);
//app.use('api')

module.exports = app;

