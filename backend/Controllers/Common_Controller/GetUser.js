const Get_User =(req,res,next)=>{
    const {GotUser}=req;
    if(GotUser){
        res.status(200).json({
            status: "Success",
            message: "Token decode Successfully !",
            data:GotUser,
          });
    }else{
        res.status(500).json({
            status:"Error",
            message:"Unable to find user !",
        });
    }
}

module.exports={Get_User,}