const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//path = require("path");

var users = [
    {
        name: "saloni",
        email: "saloni@gmail.com",
        id: "1"
    },
    {
        name: "rakshit",
        email: "rakshit@gmail.com",
        id: "2"
    },
    {
        name: "shilpa",
        email: "shilpa@gmail.com",
        id: "3"
    },
    {
        name: "paresh",
        email: "paresh@gmail.com",
        id: "4"
    }
]


var user_id = 0;

///////get All Data//////////////
app.get('/users/', (req, res) =>
    res.send(users)
)
/////////get Data id wise/////////
app.get('/users/:id', (req, res) => {

    user_id = req.params.id;

    res.send(users.find(findUser))
})
/////////function For finding user/////
function findUser(user) {
    return user.id == user_id;
}

///////////////////////////////POST/////////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'www')));

app.post('/users/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let name = req.body.name;
    let email = req.body.email;
    let user_id = req.body.id;

    users.push({ name: name, email: email, id: user_id })
    //console.log(">>>>>>>>>>>>>",JSON.stringify(users.push({name:name,email:email,id:user_id})))
    res.send(users);

});


//////////////////////////DELETE///////////////////////
app.delete('/users/:id', function (req, res) {

    user_id = req.params.id;

    var userData = users.find(findUser);
    console.log("userData", userData)
    console.log("user_id", user_id)

    if (userData != null) {
        if (userData.id == user_id) {

            var splice = users.splice((userData.id) - 1, 1)
            console.log("splice", splice)

        }
    }
    res.send(users)


})

////////////////////////////PUT////////////////////////

app.put('/users/', function (req, res) {

    var UserData = users.find(function (user) {
        return user.id == req.body.id;
    })

    if (UserData != null) {
        console.log("UserData.id", UserData.id);
        console.log("req.body.id", req.body.id);
        if (UserData.id == req.body.id) {
            UserData.id == req.body.id;
            UserData.name = req.body.name;
            UserData.email = req.body.email;
        }
    }

    res.send(users);
})


app.listen(4000, () => console.log('Example app listening on port 4000!'))