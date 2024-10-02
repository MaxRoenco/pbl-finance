const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb } = require('./db')
const cors = require('cors');  // Import the cors package
const axios = require('axios')

// init app & middleware
const app = express()
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
    methods: ['GET', 'POST', 'PATCH', 'DELETE'] // Allow specific HTTP methods
}));

// db connection
let db;

connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log('app listening on port 3000');
        })
        db = getDb();
    } else {

    }
})


app.get('/users/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)) {
        db.collection('users')
        .findOne({_id: new ObjectId(req.params.id)})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not fetch user'})
        })
    } else {
        res.status(500).json({error: 'The user id is invalid'})
    }
})

app.post('/register', (req, res) => {
    const user = req.body;
    db.collection('users')
        .findOne({ username: user.username })
        .then(result => {
            if(result) {
                res.status(201).json({ exists: "username" })
            } else {
                db.collection('users')
                    .findOne({ email: user.email })
                    .then(result => {
                        if(result) {
                            res.status(201).json({ exists: "email" })
                        } else {
                            const newUser = {
                                username: user.username,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                email: user.email,
                                password: user.password,
                                phoneNumber: user.phoneNumber,
                                assets: [],
                                posts: [],
                                deposit: {
                                    initial: 0,
                                    invested: 0,
                                }
                            }
                            db.collection('users')
                                .insertOne(newUser)
                                .then(result => {
                                    res.status(201).json({ exists: "false", id: result.insertedId })
                                })
                                .catch(err => {
                                    res.status(500).json({ err: 'could not create a new document' })
                                })
                        }
                    })
                    .catch(err => {
                        res.status(500).json({ err: 'could not create a new document' })
                    })
            }
        })
        .catch(err => {
            res.status(500).json({ err: 'could not create a new document' })
        })
})

app.post('/login', (req, res) => {
    const user = req.body;
    db.collection('users')
        .findOne({ username: user.username, password: user.password })
        .then(result => {
            if(result) {
                res.status(201).json({ exists: "true", id: result._id })
            } else {
                res.status(201).json({ exists: "false" })
            }
        })
        .catch(err => {
            res.status(500).json({ err: 'could not create a new document' })
        })
})

app.post('/buy', async (req, res) => {
    const { symbol, money, userId } = req.body; // User specifies symbol and money to invest
    console.log(symbol, money, userId)
    const interval = '1m'; // Using 1-minute interval for current price data
    const startTime = Date.now(); // Get current timestamp
    
    try {
      // Fetch current price (real-time price for the symbol)
      const response = await axios.get('https://api.binance.com/api/v3/ticker/price', {
        params: { symbol: symbol }
      });
      const closePriceOnStart = parseFloat(response.data.price);
      console.log(`Close price on start for ${symbol}: ${closePriceOnStart} USDT`);
  
      const quantity = money / closePriceOnStart;
  
      const asset = {
        symbol,
        quantity,
        money,
        interval,
        closePriceOnStart,
        startTime: new Date(startTime),
        _id: new ObjectId()
      }
      
      const collection = db.collection('users');
      const result = await collection.updateOne(
        { _id: new ObjectId(userId) },
        { $push: { assets: asset } } 
        );
    
        console.log(result)
      res.send(`Bought ${quantity} ${symbol} at ${closePriceOnStart} USDT`);
  
    } catch (error) {
      console.error('Error during buying:', error);
      res.render('error', { error });
    }
  });