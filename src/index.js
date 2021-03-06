const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


require('./controllers/authController')(app);
require('./controllers/projectController')(app);


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('RESTful API server started on: ' + port);
});
