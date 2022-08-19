const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

dotenv.config();
app.use(express.json());

const port = process.env.PORT || 3000;

mongoose
    .connect(
        process.env.MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(
        console.log("Connected to MongoDB")
    )
    .catch((err) => {
        console.log(err + "\nError brrr :(")
    });

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});