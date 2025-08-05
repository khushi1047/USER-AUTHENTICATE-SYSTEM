const isLogin = async(req,res,next)=>{
    try{
        if(req.session.userId){
            next();
        }
        else{
            res.redirect('/login')
        }
    }
    catch(err){
        console.log(err.message)
    }
}

const isLogout = async(req,res,next)=>{
    try{
        if(req.session.userId){
            res.redirect('dashboard');
        }
        else{
            res.render('login')
        }
    }
    catch(err){
        console.log(err.message);
    }
}


export {isLogin,isLogout}