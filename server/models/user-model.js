const bcrypt = require("bcryptjs");
const mongoose = require("mongoose"); //defining the schema
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true, 
    },
    phone: {
        type:String,
        require:true,
    },
    password: {
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
});


// secure the password with the bcrypt
userSchema.pre("save",async function (){
    console.log("pre method: "+this);
    const user = this;
    if(!user.isModified('password')){
        next();
    }

    try{
        const saltRound = await bcrypt.genSalt(10);
         const hash_password = await bcrypt.hash(user.password,saltRound);
         user.password = hash_password;
    }catch(error){
        next(error);
    }

});

//compare the password
userSchema.methods.comparePassword = async function (password){
    return bcrypt.compare(password,this.password);
}


// JWT: JSON Web Tokens(JWT): It is an open standard that defines
// a compact and self-contained way for securely transmitting information between
// parties as a JSON object. It is used for Authentication and Autherization

// Components of JSON 
// Header: 
// Payload:  
// Signature:   
// Tokens, such as JWTs are typically not stored in the database
// with othe user details. Instead, theya re issued by the server during
// authentication process and then stored on the client-side(e.g. in cookies or local storage) 
// for later use 

userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign(
        {
            userId: this.id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d",
        }
        );     
    } catch (error) {
        console.error(error);
    }
};



// define the model or the collection name
const User = new mongoose.model("Admin-User",userSchema);

module.exports = User;