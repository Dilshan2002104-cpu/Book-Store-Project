import express, { json, request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//Middelware for phrasing request body
app.use(express.json())


//Middelware for hadling CORS POLICY
//option 1: Allow All Origins with Default of cors(*)
app.use(cors());
//option2: Allows custom origins
// app.use(
//     cors({
//         origin:"http://localhost:3000",
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type']
//     })
// )

// Basic route handler for the root URL
app.get('/', (req, res) => {
    return res.status(200).send("Welcome To MERN Stack");
});

// Connect to MongoDB and start the server
app.use('/books', booksRoute)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB:", err);
    });


