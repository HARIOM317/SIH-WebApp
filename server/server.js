require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

// lets solve cors policy 
const corsOptions = {
    origin:" http://localhost:3000",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}

const authRoute = require('./router/auth-router');
const contactRoute = require("./router/contact-router");
const teamRoute = require('./router/teamRouter');
const adminRoute = require('./router/admin-router'); 
const problemStatementRouter = require('./router/problemStatementRouter');

app.use(cors(corsOptions)); 

app.use(express.json());//express middleware it will make server handle json files

app.use("/api/auth",authRoute); //admin login+registration
app.use("/api/form",contactRoute); //contact form submission
app.use('/api/team', teamRoute); //team registration form submission
app.use('/api/admin',adminRoute);//for getting all admin users, 
app.use('/api', problemStatementRouter);

app.use(errorMiddleware);


// app.get("/",(req,res)=>{
//    res.status(200).send("Welcome to the first page");
// });

// app.get("/register",(req,res)=>{
//     res.status(200).send("welco me to the register page");     
// });

// app.get("/login",(req,res)=>{
//     res.status(200).send("Welcome to login page");
// });



const PORT = process.env.PORT;

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port: ${PORT}`);
    });
});
