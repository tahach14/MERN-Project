const userModel = require("../models/userModel");
const {v4:uuid}= require("uuid");
const {hash} = require("bcryptjs");

module.exports={
    createRole:async(body)=>{
        try{
            body.roleId = uuid();
            const role= await userModel.createRole(body);
            if(role.error){
                return{
                    error:role.error,
                };
            }
return{
    response:role.response,
};
        }catch(error){
            return{
            error:error.message,
        }
    }
},
getRole:async()=>{
    try{
        const role= await userModel.getRole();
        if(role.error){
            return{
                error:role.error,
            };
        }
return{
response:role.response,
};
    }catch(error){
        return{
        error:error.message,
    }
}
},

//user opr
createUser:async(body)=>{
    try{
        const address={
            addressId:uuid(),
            address:body.address,
        }
        const createdAddress=await userModel.createAddress(address);
        if(createdAddress.error){
            return{
                error:createdAddress.error,
            };
        }

        const isUser=await userModel.getuserByUserName(body.username);
        if(isUser.error || isUser.response){
            return{
                error:"user already exist",
            };
        }
        const user={
            userId:uuid(),
            username:body.username,
            password:await hash(body.password,10),
            roleId:body.roleId,
            addressId:address.addressId,
        };
        const createdUser=await userModel.createUser(user);
        if(createdUser.error){
            return{
                error:createdUser.error
            }
        }
        delete createdUser.response.dataValues.password;
return{
response:createdUser.response,
};
    }catch(error){
        return{
        error:error.message,
    }
}
},

getUser:async()=>{
    try{
        const user= await userModel.getUser();
        if(user.error){
            return{
                error:user.error,
            };
        }
return{
response:user.response,
};
    }catch(error){
        return{
        error:error.message,
    }
}
},




deleteUser:async(query)=>{
    try{
        const deleteduser=await userModel.deleteUser(query.userId);
        if(deleteduser.error){
            return{
                error:deleteduser.error,
            }
        }
        return{
            response:deleteduser.response,
        }
    }catch(error){
        return{
        error:error.message,
    }
}
},

recoverUser:async()=>{
    try{
        const recoveredUser=await userModel.recoverUser();
        if(recoveredUser.error){
            return{
                error:recoveredUser.error,
            }
        }
        return{
            response:recoveredUser.response,
        }
    }catch(error){
        return{
            error:error.message,
        };
    }
},
};