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
            // const loginResponse =  await authService.login(validate)

            if(isLogin.error){
                return res.send(
                    {
                        error: isLogin.error
                    }
                )
            }
            res.cookie("token", isLogin.response,{httpOnly:true});
            // maxAge:60000,
        return res.send({
            // message: "login Api",
            // data: validate,
            response: true,
        })
    }catch(error){
        return res.send({
            // message : "error",
            error: error.message,
        });
    }
    },
    // logout: (req,res) => {

    //     return res.send({
    //         message: "logout Api",
    //         data: req.body,
    //     });
        
    //     },
};


// const arrSchema=joi.array().items(joi.string().min(0).required());
// module.exports={
//     sort: async(req,res)=>{
//         try{
//             const validate=await arrSchema.validateAsync(req.body);
//             const arrResponse=await authService.sort(validate)
//             if(arrResponse.error){
//                 return res.send({
//                     error:arrResponse.error
//                 })
//             }
            
            
//                 return res.send({
//                     response:arrResponse.response,
//                 })
                                     
            
//             // return res.send({
//             //     message:"sorting API",
//             //     data: validate,
//             // })
//         }catch(error){
//             return res.send(
//                 {
//                     message:error,
//                     error:error.message,
//                 }
//             )
//         }
//     },

//     maxnumber: async(req,res)=>{
//         try{
//             const validate=await arrSchema.validateAsync(req.body);
//             const arrResponse=await authService.maxnumber(validate)
//             if(arrResponse.error){
//                 return res.send({
//                     error:arrResponse.error
//                 })
//             }
            
            
//                 return res.send({
//                     response:arrResponse.response,
//                 })
                                     
            
//             // return res.send({
//             //     message:"sorting API",
//             //     data: validate,
//             // })
//         }catch(error){
//             return res.send(
//                 {
//                     message:error,
//                     error:error.message,
//                 }
//             )
//         }
//     },
//     minnumber: async(req,res)=>{
//         try{
//             const validate=await arrSchema.validateAsync(req.body);
//             const arrResponse=await authService.minnumber(validate)
//             if(arrResponse.error){
//                 return res.send({
//                     error:arrResponse.error
//                 })
//             }
            
            
//                 return res.send({
//                     response:arrResponse.response,
//                 })
                                     
            
//             // return res.send({
//             //     message:"sorting API",
//             //     data: validate,
//             // })
//         }catch(error){
//             return res.send(
//                 {
//                     message:error,
//                     error:error.message,
//                 }
//             )
//         }
//     }
   
// };