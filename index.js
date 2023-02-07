const express = require('express')
const bodyParser = require('body-parser');
const { engine } =  require('express-handlebars');
const path = require('path')

const {_initRoute} = require('./src/route/_init.js')


const app = express()
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

_initRoute(app)

app.listen('3020', () => {
    console.log("http://localhost:3020")
})