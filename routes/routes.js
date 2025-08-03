import express from "express";
import {home , registerUser, register} from '../controllers/user.js'
const route = express.Router();

route.get('/',home);
route.get('/user-register',registerUser);
route.post('/register',register)




export default route;