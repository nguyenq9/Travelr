//IMPORT THE LIBRARIES AND DEPENDENCIES HERE
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const axios = require('axios')

dotenv.config()

const app = express()

app.use(express.json())

const port = 1337

//SET THE VARIABLE OF THE DB EVIRONMENT
const url = process.env.DATABASE_URL

const google_api_key = process.env.GOOGLE_API_KEY
var current_user_email = ""

// user schema

//DEFINE THE SHCEMA HERE

const plan = {
  title: "First Time In Rome",
  location: "Rome",
  startDate: "2023-01-01",
  endDate: "2023-01-14",
  travelers: ["John", "Mary", "Paul"],
  hotels: ["4 seasons", "Holiday Inn", "Hilton"],
  activities: ["Colosseum", "Trevi Fountain", "Vatican Museum"],
  restaurants: ["Felice e Testaccio", "Pianostrada", "Marigold"],
}

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    }, 
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        unique: true,
        required: true,
    },
    plans: { 
        type : Array , 
        "default" : [plan], 
    }
})



//CREATE A MONGOOSE MODEL

const User = mongoose.model('User', userSchema);

module.exports = User;




//CONNECT THE MONGODB USING THE MONGOOSE
mongoose.set('strictQuery', false);
mongoose.connect(url, function(err){
    if (err) {
        console.log("{{connection err}}", err);
    } else {
        console.log("connection established");
    }
})



//DEFINE A ROOT ROUTE THAT SENDS A HELLO WORLD REPONSE
app.get("/", function (req, res) {
    res.send("Hello world!")
})


app.post('/api/signup', function (req, res) {
   //CODE HERE

    //Extract the required fields (firstName, lastName, email, password, and confirmPassword) from the request body and store them in separate variables.
    const {firstName, lastName, email, password, confirmPassword } = req.body;


    //Check if all the required fields are present in the request body. If any of the fields is missing, the code returns a failure status and an error message indicating that all input fields are required.
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        return res.json({
            status: 'fail',
            message: 'All input fields are required'
        })
    }


    //Use the bcrypt.hash function to hash the password before storing it in the database. The function takes the password and a salt value (12 in this case) as arguments, and returns the hashed password. If an error occurs while hashing the password, the code returns a failure status and an error message.

    bcrypt.hash(password, 10, function(err, hash) {
        if(err) {
            return res.json({
                status: 'fail',
                message: 'failed to hash the password'
            })
        }

        const newUser = {
            firstName,
            lastName,
            email,
            password: hash,
        }
    
        User.create(newUser, function(err, user) {
            if (err) {
                if (err.code === 11000) {
                    const key = Object.keys(err.keyValue)[0];
                    const message = `Duplicate ${key} value: "${err.keyValue[key]}". Please use another value!`
                    return res.json({
                        status: 'fail',
                        message,
                    })
                }
                return res.json({
                    status: 'fail',
                    message: 'Failed to create a new user',
                })
            }
            current_user_email = email
            res.json({
                status: 'success',
                message: "Successfully made a new user",
                data: {
                    user
                }
            })
        })
    })

    //Use the User.create method to create a new user in the database. The method takes the request body as an argument and returns the newly created user. If an error occurs or the user is not created, the code returns a failure status and an error message.

    //If the user is successfully created, the code returns a success status and the newly created user.
    
})

app.post('/api/login', function (req, res) {
    
    //Extract the required fields(email and password) from the request body and store them in separate variables.
    const { email, password } = req.body



    //If statement to check if both the email and password fields are present in the request body.If any of them is missing, the code returns a failure status and an error message indicating that all input fields are required.
    
    if (!email || !password) {
        return res.json({
            status: 'fail',
            message: 'All input fields are required'
        })
    }



    //Use the User.findOne method to retrieve the user from the database based on the email.If an error occurs or the user is not found, the code returns a failure status and an error message indicating that the email or password is invalid.

    User.findOne({email}, function(err, user) {
        if (err) {
            return res.json({
                status: 'fail',
                message: 'Failed to find the user',
            })
        }
        
        bcrypt.compare(password, user.password, function(err, isCorrectPassword) {
            if (err) {
                return res.json({
                    status: 'fail',
                    message: 'Failed to compare password'
                })
            }
            if (!isCorrectPassword) {
                return res.json({
                    status: 'fail',
                    message: 'Invalid username or password',
                })
            }
            current_user_email = email
            console.log(current_user_email);
            res.json({
                status: 'success',
                message: 'successfully logged in',
                data: {
                    user
                }
            })
        })
    })


    //Use the bcrypt.compare function to compare the password submitted by the user with the hashed password stored in the database.If the passwords do not match, the code returns a failure status and an error message indicating that the email or password is invalid.



    //If the email and password are correct, the code returns a success status and the user.


})

app.post('/api/createplan', function (req, res) {
    console.log("[PLAN A TRIP]");
    const { title, location, startDate, endDate} = req.body;


    if (!title || !location || !startDate || !endDate) {
        return res.json({
            status: 'fail',
            message: 'Missing required input fields. (key, title, location, startDate, endDate)'
        })
    }

    var location_image;
    var place_id;
    var get_url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${location}&types=geocode&key=AIzaSyAoKnUgNAayRCZVCVMwuMmEgmS7NJhQaQU`
    var config = {
        method: 'get',
        url: get_url,
        headers: { }
      };

    axios(config).then(function (res) {
        place_id = res.data['predictions'][0]['place_id']
        console.log(place_id)
      }).catch(function (err) {
        console.log(err)
      })

    get_url = `https://maps.googleapis.com/maps/api/place/details/json?fields=photo&place_id=${place_id}&key=AIzaSyAoKnUgNAayRCZVCVMwuMmEgmS7NJhQaQU`
      config = {
        method: 'get',
        url: get_url,
        headers: { }
      };

      axios(config).then(function (res) {
        place_id = res.data['predictions'][0]['place_id']
        console.log(place_id)
      }).catch(function (err) {
        console.log(err)
      })
    

    console.log("Updating " + current_user_email);
    User.updateOne(
        {email: current_user_email},
        {$push: { plans: {
            title,
            location,
            location_image: location_image,
            startDate, 
            endDate,
            travelers: [''],
            hotels: [''],
            activities: [''],
            restaurants: [''],
        }}},
        function (err, result) {
            if (err) {
                const message = `Error changing ${current_user_email}`
                return res.json({
                    status: 'fail',
                    message,
                })
            }
        }
    )

    res.json({
        status: 'success',
        message: 'Done making a plan',
    })
})

app.post('/api/deleteplan', function (req, res) {
    console.log("[DELETING A TRIP]");
    const { title } = req.body;


    if (!title) {
        return res.json({
            status: 'fail',
            message: 'Missing required input fields. (key, title, location, startDate, endDate)'
        })
    }

    console.log("Deleting "+ title + " from " + current_user_email);

    User.updateOne(
        {email: current_user_email},
        {$pull: {plans: {title: title}}},
        function (err, result) {
            if (err) {
                const message = `Error changing ${current_user_email}`
                return res.json({
                    status: 'failed deleting',
                    message,
                })
            }
        }
    )

    res.json({
        status: 'success',
        message: 'Done deleting a plan',
    })
})

app.post('/api/getplans', function (req, res) {
    console.log("RETTRIEVING PLANS");

    User.findOne(
        {email: current_user_email},
        function (err, result) {
            if (err) {
                const message = `Error finding ${current_user_email} object`
                return res.json({
                    status: 'fail',
                    message,
                })
            }

            res.json({
                status: "success",
                message: "Pulled user data",
                data: {
                    result
                }
            })
        }
        

    )
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})




