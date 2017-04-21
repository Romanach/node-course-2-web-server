const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

app.set('view enginge', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFileSync('server.log', log + '\n');
  next();
});

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase()
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs', {
//     pageTitle: 'maintenance page',
//     welcomeMessage: 'Welcome to site',
//     currentYear: new Date().getFullYear()
//   });
// });

hbs.registerHelper('setBootstrapCss', () => {
return ('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
});

hbs.registerHelper('setBootstrapJs', () => {
return ('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js');
});

// app.get('/', (req, res) => {
//   // res.send('<h1>hello express</h1>');
//   res.send({
//     name:'roman',
//     likes: [
//       'biking',
//       'cities'
//     ]
//   });
// });

app.get('/', (req,res) => {
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome to site',
    currentYear: new Date().getFullYear()
  });
});

app.get('/about', (req,res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
    welcomeMessage: 'Welcome to site',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req,res) => {
  res.send(
    errorMessage = 'Enable to hhandle request'
  )
});

app.listen(3000);
