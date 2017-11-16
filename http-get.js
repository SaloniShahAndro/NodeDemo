const express = require('express');
const app = express();

app.get('/users/:userId/books/:bookId', (req, res) =>
res.send(req.params)

)

app.get('/api/users', function (req, res) {
    var user_id = req.param('id');
    var token = req.param('token');
    var geo = req.param('geo');

    res.send(user_id + ' ' + token + ' ' + geo);
});

app.get('/api/:version', function (req, res) {
    res.send(req.params);
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))