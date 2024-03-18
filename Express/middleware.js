const{verify}=require("jsonwebtoken");
require("dotenv").configs;

module.exports={
    middleware: async(req,res,next)=>{
        try{
            if(req.cookies.token==undefined||null){
                return res.send({
                    error:"unauthorised user",
                });
            }
            verify(req.cookies.token, process.env.SECRET, (error,user)=>{
                if(error){
                    return res.send({
                        error:"unauthorised user",
                    });
                }
            console.log("user data",user);
            next();
        })

        }catch(error){
            return res.send({
                error:error.message,
            }

            )
        }
    }
};