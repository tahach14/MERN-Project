const joi = require("joi");
const authService=require("../service/authService");


const loginSchema = joi.object().keys({
    username : joi.string().min(1).required(),
    password : joi.string().min(6).required(),
});

module.exports ={
    login: async(req, res)=>{
        try{
            const validate = await loginSchema.validateAsync(req.body);
            const isLogin=await authService.login(validate);

            if(isLogin.error){
                return res.send(
                    {
                        error: isLogin.error
                    }
                )
            }
            res.cookie("token", isLogin.response,{maxAge:60000,httpOnly:true});
            
        return res.send({
            response: true,
        })
    }catch(error){
        return res.send({
            error: error.message,
        });
    }
    },
};