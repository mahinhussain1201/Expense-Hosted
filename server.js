const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const colors=require('colors');
const path = require("path");
const connectDb = require('./config/connectDb');

dotenv.config();

//database
connectDb();

const app=express()  //rest object

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use('/api/v1/users',require('./routes/userRoute'))
app.use('/api/v1/transactions',require('./routes/transactionRoutes'))

app.use(cors({
  origin: 'https://expense-frontend-m3yyjyhqn-mahin-hussains-projects.vercel.app/', 
  methods: 'GET,POST',
  credentials: true // Allow credentials if needed
}));

//port
const PORT= process.env.PORT || 8080;

//listen server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
