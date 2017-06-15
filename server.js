const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const cors = require('cors');
const corsOptions = {
	origin: 'http://localhost:3000'
};
const config = require('./config.js')
const profileCtrl = require('./controllers/profileCtrl.js'); 
const userCtrl = require('./controllers/userCtrl.js');

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));
app.use(express.static(__dirname + '/public'))

app.get('/users', userCtrl.getUsers)
app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.getFriendsProfiles)









app.listen(3000, function() {
  console.log('listening at port 3000');
});