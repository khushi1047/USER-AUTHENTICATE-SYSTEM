import express from "express"
import connectDB from "./db/db.js";
import route from "./routes/routes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import session from "express-session";

dotenv.config()
const app = express();

const DATABSEURL = process.env.DATABASE_URL || 'mongodb://localhost:27017/mydb';

const port = 3000;

// databse connection call
connectDB(DATABSEURL)

// body-parser
app.use(bodyParser.urlencoded())

// session
app.use(session({
  secret: 'process.env.SECRET_KEY',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))


// ejs set-up (all ejs files in views-folder)
app.set("views",'./views')
app.set('view engine','ejs')

// routes
app.use('/',route)


app.listen(port,()=>{
    console.log(`server is running at : https://localhost:${port}`)
})