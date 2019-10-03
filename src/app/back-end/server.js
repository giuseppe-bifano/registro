// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();
 var path    = require('path');

app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var router = express.Router();
var dati =[{id: 0,'nome': 'Roberto','cognome': 'Rob','materia1':'matematica','materia2':'fisica','materia3':'italaino','email': 'roby@gmail.com'}]
  var lastId = 1;

router.get('/registro', function(req, res) {
  res.send(JSON.stringify(dati));
});

router.post('/registro', function(req, res) {
  var contact = req.body;
  contact.id = lastId;
  lastId++;
  dati.push(contact);
  res.send(contact);
});

router.get('/registro/:id', function(req, res) {
  for (var i = 0; i < dati.length; i++) {
    if (dati[i].id == req.params.id) {
      res.send(dati[i]);
      break;
    }
  }
});
router.get('/registro/:id', function(req, res) {
  for (var i = 0; i < dati.length; i++) {
    if (dati[i].id == req.params.id) {
      res.send(dati[i]);
      break;
    }
  }
});

router.put('/registro/:id', function(req, res) {
  for (var i = 0; i < dati.length; i++) {
    if (dati[i].id == req.params.id) {
      dati[i] = req.body;
      dati[i].id = req.params.id;
      res.send(dati[i]);
      break;
    }
  }
  console.log("macchina non trovata")

});

function stampa(dati){
for (var i = 0; i < dati.length; i++) {

  console.log(dati[i].id)
}


}
router.delete('/registro/:id', function(req, res) {
  console.log("ciao"+req.params.id)
  for (var i = 0; i < dati.length; i++) {
    console.log("dentro for:" +dati[i].id + " valore passato:"+ req.params.id)
    if (dati[i].id == req.params.id) {
              dati.splice(i, 1);
              lastId--
              break;
            }
     
      
    }
  res.send({msg: 'Delete succesfully'}, 200);
});

 //creo il server 
 app.get('/', function(req,res){

  res.sendFile(path.join(__dirname+'/index.html'))
 });

app.use('/api', router);




app.listen(8000);
console.log('Open http://localhost:8000 to access the files now'); 			// shoutout to the user
