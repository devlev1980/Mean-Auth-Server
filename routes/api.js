const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const User = require('../models/user');

const connectionStringToMLab = 'mongodb://devlev1980:papa2207@ds237072.mlab.com:37072/usersdb';


//Connect to DB
mongoose.connect(connectionStringToMLab, err => {
    if (err) {
        console.log('Something was wrong with the connection', err);
    } else {
        console.log('Connected to MongoDb');
    }
})

router.get('/', (request, response) => {
    response.send('From API Router')
});
router.post('/register', (request, response) => {
    let userData = request.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log('Error!', error)
        } else {
            response.status(200).send(registeredUser)
        }
    });

});

router.post('/login',(request,response)=>{
    let userData = request.body;
    User.findOne({email: userData.email},(error,user)=>{
        if(error){
            console.log('Error!',error)
        }else{
            if(!user){
                response.status(401).send('Invalid email')
            }else{
                if(user.password !== userData.password){
                    response.status(401).send('Invalid password')
                }else{
                    response.status(200).send(user);
                }
            }
        }
    })
});

router.get('/events', (req,res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ]
    res.json(events)
})

router.get('/special',(req, res) => {
    let specialEvents = [
        {
            "_id": "1",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ];
    res.json(specialEvents)
});


module.exports = router;