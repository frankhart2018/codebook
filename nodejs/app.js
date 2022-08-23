const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res, next) => {
    return res.send(JSON.stringify({
        "status": "ok"
    }))
});

app.use(bodyParser.urlencoded());
app.listen(8080);