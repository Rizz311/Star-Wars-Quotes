console.log('May Node be with you');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require ('mongodb').MongoClient

var db

MongoClient.connect('mongodb://<Rizz311>:<Burner311>@ds253918.mlab.com:53918/star-warz-quotes', (err, database) => {
  if (err) return console.log(err);
  db = client.db('star-warz-quotes')
  app.listen(8000, () => {
    console.log('listening on 8000');
  })
})
app.use(bodyParser.urlencoded({extend: true}))

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('Saved to Database.');
    res.redirect('/')
  })
})


app.listen(8000, function(){
  console.log('Listening on 8000');
})
