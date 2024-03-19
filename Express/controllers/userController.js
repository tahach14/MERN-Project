const userService = require("../service/userService");
const joi = require("joi");

const createRoleSchema = joi.object().keys({
         rolename: joi.string().required(),
         });
        
        
 const deleteUserSchema = joi.object().keys({
            userId: joi.string().min(1).required(),
            });
   
const createUserSchema=joi.object().keys({
            username: joi.string().required(),
            password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
            confirmPassword: joi.ref("password"),
            address: joi.string().required(),
            roleId: joi.string().required(),
         });

module.exports={
    createRole: async(req,res)=>{
        try{
            const validate=await createRoleSchema.validateAsync(req.body);
            const role = await userService.createRole(validate);

if(role.error){
    return res.send({
        error:role.error,
    });
}
return res.send({
    response:role.response,
});
        }catch(error){
            return res.send({
                error:error.message,
            });
        }
    },
    getRole: async(req,res)=>{
        try{
            const role = await userService.getRole();

if(role.error){
    return res.send({
        error:role.error,
    });
}
return res.send({
    response:role.response,
});
        }catch(error){
            return res.send({
                error:error.message,
            });
        }
    },



    createUser: async(req,res)=>{
        try{
            const validate=await createUserSchema.validateAsync(req.body);
            const createdUser = await userService.createUser(validate);

if(createdUser.error){
    return res.send({
        error:createdUser.error,
    });
}
return res.send({
    response:createdUser.response,
});
        }catch(error){
            return res.send({
                error:error.message,
            });
        }
    },


    getUser: async(req,res)=>{
        try{
            const user = await userService.getUser();

if(user.error){
    return res.send({
        error:user.error,
    });
}
return res.send({
    response:user.response,
});
        }catch(error){
            return res.send({
                error:error.message,
            });
        }
    },


    deleteUser: async(req,res)=>{
        try{
            const validate=await deleteUserSchema.validateAsync(req.query);
            const deleteduser=await userService.deleteUser(validate);
            if(deleteduser.error){
                return res.send({
                    error:deleteduser.error
                });
            }
            return res.send({
                response:deleteduser.response
            });

        }catch(error){
            return res.send({
                error:error.message,
            });
        }
    },

    recoverUser:async(req,res)=>{
        try{
            const recoveredUser=await userService.recoverUser();
            if(recoveredUser.error){
                return res.send({
                    error:recoveredUser.error,
                })
            }
            return res.send({
                response:recoveredUser.response,
            });
        }catch(error){
            return{
                error:error.message,
            };
        }
    },
};