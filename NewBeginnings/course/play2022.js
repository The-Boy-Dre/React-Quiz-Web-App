console.log('welcome!');

let add = (x,y) => {
  return x + y;
}

console.log(add(4,5));

var app = express()

app.get('/login', function(req, res) {
  res.send('<h1> Please login </h1>')
});

app.get('/myData', function(req, res) {
  let myData = {
    name: 'Dondre',
    last_name: 'campbell'
  }
});


res.json(myData);