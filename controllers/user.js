import User from "../models/userSchema.js"
import bcrypt from "bcryptjs"

const home = (req,res)=>{
    // res.send("hello")
    res.render('index')
}

const registerUser = (req,res) =>{
    res.render('register')
}

const register = async(req,res)=>{
    // value get kro pwd se or hash krwado
    const pwd = req.body.pwd;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(pwd, salt);
    try{
        const user = await User({
            'username': req.body.username,
            'email': req.body.email,
            'password':hashPassword

        })
        if(user){
            await user.save();
            console.log("user created")
            res.render('login')
        }
        else{
            console.log('user not created')
            // res.render('register')
        }
        // console.log(req.body);
        
    }
    catch(err){
        console.log(err.message);
    }
}


export {registerUser,home,register};