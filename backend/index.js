const express = require('express')
const DBConnection = require('./database/connection')
const bodyParser = require('body-parser');
const cors = require('cors');

blogRouter = require('./src/Routes/blogRouter')

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],

}));

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
app.use(bodyParser.json());

app.use('/blog', blogRouter);

DBConnection.connectToMongoDB(process.env.DATABASE_URL);