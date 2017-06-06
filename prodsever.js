var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
var router = express.Router();

router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});

app.use(router);

var data = require('./data.json');
var recommend = data[0].recomend
var banner=data[0].banner
var makeup = data[1].makeUp
var banner1=data[1].banner

var RouterPath = express.Router()
RouterPath.get('/0', function (req, res) {
  res.json({
    data: [banner,recommend]
  })
});
RouterPath.get('/3', function (req, res) {
  res.json({
    data: [banner1,makeup]
  })
})
app.use('/api',RouterPath)
app.use(express.static('./dist'))
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
});
