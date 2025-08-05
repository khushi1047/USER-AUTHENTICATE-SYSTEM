import User from "../models/userSchema.js"
import bcrypt from "bcryptjs"

import session from "express-session"

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
            // res.render('login')
            res.redirect('/login')
        }
        else{
            console.log('user not created');
            res.redirect('/register');
            // res.render('register')
        }
     
        
    }
    catch(err){
        console.log(err.message);
    }
}


const Login = (req,res)=>{
    res.render('login');
}

const loginUser = async(req,res)=>{
    try{
        const user = await User.findOne({'email':req.body.email})
        if(user){
            const response = await bcrypt.compare(req.body.pwd,user.password);
            if(response){
                req.session.userId = user.id;
                res.redirect('/dashboard');
            }
            else{
                res.redirect('/login')
            }
            
        }
        else{
             res.redirect('/login')
        }
        
    }
    catch(err){
        console.log(err.message)
    }
}
const islogout =async(req,res)=>{
    try{
        req.session.destroy();
        res.redirect('/login')
    }catch(err){
        console.log(err.message)
    }
}
export {registerUser,home,register,Login,loginUser,islogout};