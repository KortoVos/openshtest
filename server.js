var express = require('express'),
  app = express();
/*var counter = 0;
var BALL_SPEED = 15;
var WIDTH = 1200;
var HEIGHT = 800;
var TANK_INIT_HP = 100;
var mapSize = {"w":3000,"h":3000};
*/
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

//Static resources server
app.use(express.static(__dirname + '/www'));

app.get('/', function (req, res) {

      res.send('hello world');

  
});



app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;