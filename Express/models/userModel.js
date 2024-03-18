const {models}=require("./index");
const{Op}=require("sequelize");
module.exports={
    createRole:async(body)=>{
        try{
            const role = await models.roles.create({...body});
            return{
                response:role,
            };

        }catch(error){
            return{
                error:error.message,
            };
        }
    },
    getRole:async()=>{
        try{
            const role = await models.roles.findAll();
            return{
                response:role,
            };

        }catch(error){
            return{
                error:error.message,
            };
        }
    },

    //address opr
    createAddress:async(body)=>{
        try{
            const createdAddress = await models.addresses.create({...body});
            return{
                response:createdAddress,
            };

        }catch(error){
            return{
                error:error.message,
            };
        }
    },
    //user opr
    createUser:async(body)=>{
        try{
            const createdUser = await models.users.create({...body});
            return{
                response:createdUser,
            };

        }catch(error){
            return{
                error:error.message,
            };
        }
    },

    getUser:async()=>{
        try{
            const user = await models.users.findAll({
                attributes: {
                    exclude:["password","createdAt","deletedAt","updatedAt"]
                },
                include:[{
                    model:models.addresses,
                    attributes:["addressId","address"]
                },
                {
                    model:models.roles,
                    attributes:["roleId","rolename"]

                }
            ],
            });
            return{
                response:user,
            };

        }catch(error){
            return{
                error:error.message,
            };
        }
    },

    deleteUser:async(userId)=>{
        try{
            const deleteduser = await models.users.destroy({
                where:{
                    userId:userId
                },
            });
            return{
                response:deleteduser,
            }

        }catch(error){
            return{
                error:error.message,
            };
        }
    },

    getuserByUserName:async(username)=>{
        try{
            const user = await models.users.findOne({
                where:{
                    username:username,
                }
            });
            return{
                response:user,
            };

        }catch(error){
            return{
                error:error.message,
            };
        }
    },
    recoverUser:async()=>{
        try{
            const recoveredUser = await models.users.update({
                deletedAt : null,
            },{
                where:{
                    deletedAt:{
                        [Op.ne]: null,
                    },
                },
                paranoid:false,
            });
            return{
                response:recoveredUser,
            }

        }catch(error){
            return{
                error:error.message,
            };
        }
    },



};