const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

// app.use((req,res,next)=>{
//   res.setHeader('Access-Control-Allow-Origin','*'),
//   res.setHeader('Access-Control-Allow-Headers','*'),
//   next();
// })


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get('/',(req,res)=>res.status(200).send('hello world'));

const userpostsRouter = require('./routes/userposts');

app.use('/userposts', userpostsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});