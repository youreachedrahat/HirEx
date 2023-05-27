const jwt= require("jsonwebtoken");


const GetUserMiddleware =async (req,res,next)=>{
    let Token;
    // const AuthorizationToken= req.headers.Authorization || req.cookies.KeyToken;
    if (req.cookies.KeyToken) {
        Token = req.cookies.KeyToken;
    } else if (req.headers.authorization) {
        Token = req.headers.authorization;
    }else{
        Token = req.headers.Authorization;
    }
    try{
        if(!Token){
            res.status(500).json({
                status:"Error",
                message:"Unauthorized Access !",
            });
        }else{
            const GotUser= jwt.verify(Token, "KeystoneDev");
            req.GotUser=GotUser;
            next();
        }
    }catch(Error){
        console.log(Error);
    }
}
module.exports={
    GetUserMiddleware,
};