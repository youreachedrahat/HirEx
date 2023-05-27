const {SignUp_Model} =require ("../../DatabaseSetup/Mongoose.SignUp.Schema");
const bcrypt=require("bcryptjs");
const LoginFunction=async (req,res,next)=>{
    const {Res_EmailId,Res_Password,Res_TypeOfUser}=req.body;
    console.log(req.body);
    console.log(req.cookies);
    const Login_Check= await SignUp_Model.findOne({
        emailId:Res_EmailId, 
    });
    if(!Login_Check){
        res.status(500).json({
            status:"Error",
            message:"Email is not valid!"
        })
    }
    else{
        const is_Match= await bcrypt.compare(Res_Password, Login_Check.Password);
        if (!is_Match){
            res.status(500).json({
                status:"Error",
                message:"Password is not valid!"
            })
        }  
        
    if(Login_Check && is_Match){

         //Adding found user object to req.user for token generation.
         req.User=Login_Check;
         //Calling authentication middleware for token generation.
         next();
    }  
    }

}
module.exports={
    LoginFunction,
}