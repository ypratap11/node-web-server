const express = require('express');

const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

//hbs.registerPartials(__dirname + './views/partials')

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine','hbs');

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
  //res.send('Hello Express');
  res.render('welcome.hbs',{
    WelcomePage: 'My First Server Page',
    pageTitle: 'My New Welcome Page',
    myContent: 'My Content is to make everyone Happy',
    currentYear: new Date().getFullYear()

  });
});


app.get('/About',(req,res) => {
  //res.send('<h1> About this new page </h1>');
 res.render('about.hbs',{
   pageTitle: 'New About Page',
   currentYear: new Date().getFullYear()
 });
});

app.get('/bad',(req,res) => {
  res.send({
    errorMessage:'This is new error we will get back to you'
  });
});

app.listen(port,() => {
  console.log(`Sever Started on port ${port}`);
});
