import express from "express";
import {home , registerUser, register,Login,loginUser,islogout} from '../controllers/user.js'
import dashboard from "../controllers/dashboard.js";
import { isLogin,isLogout} from "../auth/isAuthenticate.js";

const route = express.Router();

route.get('/',home);
route.get('/user-register',registerUser);
route.post('/register',register)
route.get('/login',isLogout,Login);
route.post('/login',loginUser)
route.get('/logout',isLogin,islogout)
route.get('/dashboard',isLogin,dashboard)



export default route;