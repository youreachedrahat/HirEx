const jwt=require("jsonwebtoken");
const {SECRET_KEY}=process.env;


const TokenGenerator_Middleware =(req,res,next)=>{
    const CCC="KeystoneDev";
    try{
        const New_User_Details=req.User;
        const New_Token = jwt.sign({
            New_User_Details,
        },
            CCC
        ,{
            expiresIn:"24h",
        });
        if(New_Token){
            res.cookie("KeyToken", New_Token,{
                expire: new Date(Date.now + 1000 * 60 * 60 * 24),
                httpOnly: true,
            });
            res.status(200).json({
                status:"Success",
                message:"User found Successfully!",
                data:New_Token,
            });
        }else{
            res.status(500).json({
                status:"Tokenization error",
                message:"Failed to create token!"
            });
        }
    }catch(Error){
        console.log("Error----------->",Error);
    }

   
};      
module.exports={
    TokenGenerator_Middleware,
}