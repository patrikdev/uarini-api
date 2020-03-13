const ctlListProducts = require('./controllers/ctlListProducts');
const express = require('express');
const cors = require('cors');
const app = express();

app.set('json spaces', 2);
app.use(cors());

app.get('/', function(req, res) {
  res.json({
    status: 'ok',
  });
});

app.get('/products', ctlListProducts)

app.listen(8080, function() {
  console.log('Uarini api listening on port 8080');
});