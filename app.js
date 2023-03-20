const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const routes = require('./routes/routes');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret:'secret',
    saveUninitialized: true,
    resave: true
}));
app.use('/', routes);


app.listen(5500,()=>{
  console.log('Server listining on port 5500');
});
