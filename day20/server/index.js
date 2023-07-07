
const express = require('express')
const cors = require('cors')
const client = require("mongodb").MongoClient;
const objId = require("mongodb").ObjectId;

const app = express();
app.use(express.json());
app.use(express.json());
app.use(cors());


client.connect('mongodb+srv://dtanwer:123123123@cluster0.aha0szi.mongodb.net/?retryWrites=true&w=majority').then((database) => {
    dbInstance = database.db("location");
    locationInstance = dbInstance.collection('location');
    console.log("connected")
}).catch(err => {
    console.log('Not Connected')
})
app.get('/', async (req, res) => {
     locationInstance.find().toArray().then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
    })
})
app.post('/:km', async (req, res) => {
    const dis = req.params.km*1000;
    const geo=req.body;
    // await locationInstance.createIndex( { "loc" : "2dsphere" } )
    console.log(geo)
     locationInstance.find(
        {
            "location": {
                $near: {
                    $geometry:geo,
                    $maxDistance: dis
                },
            
            }
        }).toArray().then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err)
        })
})

app.post('/add', (req, res) => {

    locationInstance.insertMany(req.body).then((response) => {
        console.log("inserted");
        res.status(200).json(response)
    })
})



app.listen(5000, () => {
    console.log('server is Running at 5000');
})