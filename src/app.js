const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
//connect db
require('./dbs/mongo');
//handle routes
app.use('/', require('./routes'));
module.exports = app;

corsOptions = {
    origin: "http://localhost:3000"
}
app.use(cors(corsOptions))

app.use(
    cookieSession({
        name: 'bezkoder-session',
        keys: ['COOKIE_SECRET'],
        httpOnly: true,
    })
);
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

const db = require('./models')
const Role = db.role;
require('./routes/auths/auth')(app);
require('./routes/auths/user')(app);