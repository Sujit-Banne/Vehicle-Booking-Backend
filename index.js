const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const seed = require('./seed')

require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//connection to db
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('connected to db');
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        })
    }).catch(err => {
        console.log(err);
    })