import User from "../models/userSchema";
const dashboard = async(req,res)=>{
    const user = User.findOne({'_id':req.session.userId});
    res.render('dashboard');
}
export default dashboard;