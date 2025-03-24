const User = require("../models/user-model");
const bcrypt = require("bcryptjs"); //hasing the password for security

//controller refers to a part of your code that is responsible for habdling the application logic

// home page logic

const home = async (req,res)=>{
    try {
        res
        .status(200)
        .send(
            "Welcome to the first routed page"
            );
    } catch (error) {
        console.log(error);
    }
};


// //------  User registration logic-----

// 1. get registration data: retrieve user data(username,email,password)
// 2. check email existence: check if the user alreadcy exists
// 3. Hash Password: securely hash the password
// 4. create user: create a new user with hashed password
// 5. save to db: save user data to the database 
// 6. respond: respond with "registration successful" or handle errors

const register = async (req,res)=>{
    try{
        console.log(req.body);
        // res.status(200).json({message: req.body});
        // const data = req.body;
        // res.status(200).json({data});

        const {username,email,phone,password} = req.body;
        const userExist = await User.findOne({email});
 
        if(userExist){
            return res.status(400).json({msg:"email already exists"});
        }

        // hasing the password
        // const saltRound = 10; //more is more secure and time consuming
        // const hash_password = await bcrypt.hash(password,saltRound); 
        // password:hash_password

        const userCreated = await User.create({
            username,
            email,
            phone,
            password
        });
  
        res.status(201).json({
            msg:"Registration Successful!", 
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    }
    catch(error){
        // res.status(500).json("internal server error");
        next(error);
    }
};

//User Login Logic
const login = async(req,res)=>{
    try{
        const {email, password} = req.body;

        const userExist = await User.findOne({email});
        console.log(userExist);
        if(!userExist){
            return res.status(400).json({message:"Invalid Credentials"});
        }

        // const user = await bcrypt.compare(password,userExist.password);
        const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json({
                msg:"Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }else{
            res.status(401).json({message:"Invalid email or password"});
        }
    }
    catch(error){
        res.status(500).json("internal server erro");
    }
}

const user = async (req, res) => {
    try {
      // const userData = await User.find({});
      const userData = req.user;
      console.log(userData);
      return res.status(200).json({ msg: userData });
    } catch (error) {
      console.log(` error from user route ${error}`);
    }
  };


module.exports = {home,register,login,user};