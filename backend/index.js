const express = require('express')
const DBConnection = require('./database/connection')
const bodyParser = require('body-parser');

blogRouter = require('./src/Routes/blogRouter')

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
app.use(bodyParser.json());

app.use('/blog', blogRouter)

DBConnection.connectToMongoDB(process.env.DATABASE_URL)