import express from "express"
import connectDB from "./db/db.js";
import route from "./routes/routes.js";
import bodyParser from "body-parser";

const app = express();

const DATABSEURL = process.env.DATABSEURL || 'mongodb://127.0.0.1:27017/';

const port = 3000;

// databse connection call
connectDB(DATABSEURL)

// body-parser
app.use(bodyParser.urlencoded())


// ejs set-up (all ejs files in views-folder)
app.set("views",'./views')
app.set('view engine','ejs')

// routes
app.use('/',route)


app.listen(port,()=>{
    console.log(`server is running at : https://localhost:${port}`)
})