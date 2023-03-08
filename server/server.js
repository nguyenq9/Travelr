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

const guideSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    headersrc: {
        type: String,
        required: true,
    },
    publishDate: {
        type: String,
        required: true,
    },
    p1: {
        type: String,
        required: true,
    },
    p2: {
        type: String,
        required: true,
    },
    p3: {
        type: String,
        required: true,
    },
    imagesrc: {
        type: String,
        required: true,
    }
})



//CREATE A MONGOOSE MODEL

const User = mongoose.model('User', userSchema);

const Guide = mongoose.model('Guide', guideSchema);

module.exports = { User, Guide }


//CONNECT THE MONGODB USING THE MONGOOSE
mongoose.set('strictQuery', false);
mongoose.connect(url, function(err){
    if (err) {
        console.log("{{connection err}}", err);
    } else {
        console.log("connection established");
    }
})

// CREATE GUIDES IF NOT ALREADY CREATED
Guide.findOne({title: 'Giro d\'Italia'}, function (err, result) {
    if(!result) {
        Guide.create(
            {
                title: 'Giro d\'Italia',

                author: 'Nomadic Matt',

                description: 'Italy is one of Europes most iconic and popular destinations. Home to incredible food, fabulous wine, tons of ancient ruins, and picturesque landscapes, it should come as no surprise that this is one of the most sought-after travel destinations in the world. Ive been visiting for years and I fall in love with the country each and every time. Vineyards in Tuscany, history in Florence, ancient streets in Rome, gorgeous views at Cinque Terre, romantic canals in Venice, and so much more. Italy travel leaves no visitor underwhelmed.',

                headersrc: 'https://media.nomadicmatt.com/italyguide.jpg',

                publishDate: 'February 16, 2023',

                p1: 'Italy is one of Europes most iconic and popular destinations. Home to incredible food, fabulous wine, tons of ancient ruins, and picturesque landscapes, it should come as no surprise that this is one of the most sought-after travel destinations in the world. Ive been visiting for years and I fall in love with the country each and every time. Vineyards in Tuscany, history in Florence, ancient streets in Rome, gorgeous views at Cinque Terre, romantic canals in Venice, and so much more. Italy travel leaves no visitor underwhelmed.',

                p2: 'Whether youre a budget backpacker or a luxe honeymooner looking to splash out, youll be able to have an amazing experience here. Just dont rush. Italy is best experienced slowly so pace yourself. Soak in the atmosphere and way of life as you explore. Relax, take in the scenery, enjoy a cappuccino or a glass of wine. The slower you go, the better youll be able to appreciate the charms and nuance of this iconic southern European gem. This travel guide to Italy can help you plan your trip, save money, and make the most of your time in this dreamy destination.',
                
                p3: 'While crowded, Venice is an amazing place to visit. Its not the cheapest destination in Italy but the citys iconic architecture and picturesque canals are everything you dream them to be. The main sights not to be missed include Piazza San Marco, Doges Palace, Rialto Bridge, the Basilica San Marco, and the citys countless museums. Be sure to head to the old Jewish Ghetto for hip bars and cheap drinks (the English word ghetto comes from this area of Venice). Venice is also home to several world-class festivals. In late winter, the epic Carnival takes place here, and in August, the prestigious Venice Film Festival takes over the nearby island of Lido.',

                imagesrc: 'https://media.nomadicmatt.com/2022/italyguide4.jpg'
                
            }, function(err, user) {
                if (err) {
                    console.log(err)
                }
        })
    }
})

Guide.findOne({title: 'Essentials of Japan'}, function (err, result) {
    if(!result) {
        Guide.create(
            {
                title: 'Essentials of Japan',
    
                author: 'Shannon O\'Donnell',
    
                description: 'Japan is a fascinating place. Its a country thriving on contradictions. Japans gorgeous ancient history is present, and it lives alongside space-age technology and development. This is a thoroughly modern country that looks nothing like the West. The Japanese have cultivated a strong national identity that is only enhanced by modern technology. From robots at restaurants to cat cafes to towering temples—its an assault to the senses.',
    
                headersrc: 'https://photos.smugmug.com/photos/i-DfQgmrk/0/X2/i-DfQgmrk-X2.jpg',
    
                publishDate: 'January 21, 2023',
    
                p1: 'Japan is a fascinating place. Its a country thriving on contradictions. Japans gorgeous ancient history is present, and it lives alongside space-age technology and development. This is a thoroughly modern country that looks nothing like the West. The Japanese have cultivated a strong national identity that is only enhanced by modern technology. From robots at restaurants to cat cafes to towering temples—its an assault to the senses.',
    
                p2: 'Its a wonderful destination for all types of travelers—it has pilgrimage routes, Mount Fuji, whale watching, ancient temples, and a booming food tourism industry. The country also has an advanced transportation infrastructure that makes navigating a cinch. I visited for the first time in 2015. After seven years of travel, I stood under Tokyos towering skyline and felt a wave of culture shock wash over me. Its not like any place youve visited before. And while I heartily recommend visiting Japan, there are some ethical tourism concerns, so be sure to check the responsible travel section. Continue reading for a guide to things you should know before you go, and tips about navigating Japan. Or skip straight to the Japan travel guides by city!',
                
                p3: 'Japan has a rich, complex, and varied history. Its these very complexities that have created such a fascinating culture today. Japan has spent centuries vacillating between isolationist tendencies and rapid outward expansion. Though its a moderately sized country, it has the 10th highest population in the world—most of that is densely packed into urban centers. Even more remarkable is that much of Japanese land isnt inhabited. The terrain is forested mountains and volcanoes. The country is very, very homogeneous—98.5% of the country is ethnically Japanese. Shintoism, the predominate religion dates back to 1,000 B.C.E., and is often practiced alongside Buddhism.',
    
                imagesrc: 'https://photos.smugmug.com/Asia/Japan/Tokyo/i-pB46bkT/0/X2/Tokyo-55-X2.jpg'
                
            }, function(err, user) {
                if (err) {
                    console.log(err)
                }
        })
    }
})

Guide.findOne({title: 'Classic Route 66'}, function (err, result) {
    if(!result) {
        Guide.create(
            {
                title: 'Classic Route 66',
    
                author: 'Jessica Norah',
    
                description: 'A Route 66 road trip is a driving adventure along what is probably the most famous road in the world. Historic Route 66 spans over 2,400 miles and crosses 8 states, starting in Chicago, Illinois and terminating at the Pacific Coast in Santa Monica, California. Given its “66” designation in 1926, it became a well-traveled highway, bringing together people from all walks of life.',
    
                headersrc: 'https://independenttravelcats.com/wp-content/uploads/2015/12/Route-66-road-marker_by_Laurence-Norah.jpg',
    
                publishDate: 'February 21, 2023',
    
                p1: 'A Route 66 road trip is a driving adventure along what is probably the most famous road in the world. Historic Route 66 spans over 2,400 miles and crosses 8 states, starting in Chicago, Illinois and terminating at the Pacific Coast in Santa Monica, California. Given its “66” designation in 1926, it became a well-traveled highway, bringing together people from all walks of life.',
    
                p2: 'John Steinbeck would refer to Route 66 as “the mother road, the road of flight” for those trying to escape the Dust Bowl and ravages of the Great Depression in the 1930s. Later it would support a countless number of vacationing families from the Midwest heading to the Grand Canyon or Disneyland. As more Americans took to the highway, a roadside culture would spring up along Route 66—motels, diners, gas stations, tourist attractions—to cater to a population that was increasingly mobile.',
                
                p3: 'Today it is that classic roadside culture and the appeal of the open road that continues to attract tourists. Route 66 has inspired songs, films, TV shows, books, and even a clothing brand. Even though Route 66 was officially decommissioned in 1985, people from around the world come to drive this mythic highway, stay in vintage motels, gawk at odd roadside attractions, and eat American road food. For some travelers, it is a trip back in time to revisit a road they once traveled on a family holiday, whereas for others a Route 66 road trip is the ultimate symbol of Americana.',
    
                imagesrc: 'https://independenttravelcats.com/wp-content/uploads/2015/12/Route-66-gas-station_by_Laurence-Norah.jpg'
                
            }, function(err, user) {
                if (err) {
                    console.log(err)
                }
        })
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

    var location_image = "";
    var place = location.split(' ').join('-').toLowerCase()
    var get_url = `https://api.teleport.org/api/urban_areas/slug:${place}/images/`
    var config = {
        method: 'get',
        url: get_url,
        headers: { }
    };
    console.log(get_url)
    axios(config).then(function (response) {
        location_image = response.data['photos'][0]['image']['mobile']
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

    }).catch(function (err) {
        console.log(err)
        User.updateOne(
            {email: current_user_email},
            {$push: { plans: {
                title,
                location,
                location_image: "https://www.ytravelblog.com/wp-content/uploads/2018/11/planning-a-trip-tips-and-challenges-2.jpg",
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

app.post('/api/getallguides', function (req, res) {
    console.log("Getting Guides...");

    Guide.find(
        {},
        function (err, result) {
            if (err) {
                const message = 'Error getting guides'
                return res.json({
                    status: 'fail',
                    message,
                })
            }

            res.json({
                status: "success",
                message: "Pulled all guides",
                data: {
                    result
                }
            })
        }
    )
})

app.post('/api/getguide', function (req, res) {
    const id = req.query.id
    console.log(`Getting guide: ${id}...`);

    Guide.findById(id, function (err, result) {
        if (result) {
            res.json({
                status: "success",
                message: `Pulled guide: ${id}`,
                data: {
                    result
                }
            })
        } else {
            const message = `Error getting guide: ${id}`
            res.json({
                status: 'fail',
                message,
            })
        }
    })
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})




