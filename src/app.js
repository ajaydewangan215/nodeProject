const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = 3000;

// app.use(express.static(path.join(__dirname, "../public")));
const templatePath = path.join(__dirname, "../template");
const partialsPath = path.join(templatePath, "./partials");
// to set view engine
app.set('view engine', 'hbs');

// change view engine path 
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

// templete engine root
app.get('/', (req, res) => {
  res.render('index', {
    name:"Ajay Dewangan"
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/about', (req, res) => {
  res.render('about', {
    name:"Ajay Dewangan"
  });
});

app.get('/wheater', (req, res) => {
    res.send('Hello World!')
});

app.get('*', (req, res) => {
    res.send('404 page')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});