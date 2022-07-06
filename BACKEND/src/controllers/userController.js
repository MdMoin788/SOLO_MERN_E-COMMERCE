
const User = require("../models/userModel");
const jwt = require("jsonwebtoken")

require("dotenv").config();

const newToken = (user) => {
    return jwt.sign({user},process.env.JWT_SECRET_KEY)
}







// ------------------------------------------- SignUp ---------------------------------------------------



const register = async(req,res) => {

    let user = await User.findOne({email : req.body.email}).lean().exec()

    if(user){
        return res.send("Please try another email")
    }

    user = await User.create(req.body)

    const token = newToken(user)

    return res.send({user,token})

}



// --------------------------------------------- Login -----------------------------------------------------


const login = async(req,res) => {

    let user = await User.findOne({email : req.body.email})

    if(!user){
        return res.send("Please try another email password")
    }

    const match = user.checkPassword(req.body.password);

    if(!match){
        return res.send("please try another email or password")
    }

    const token = newToken(user)

    return res.send({user,token})
}


module.exports = {register,login}