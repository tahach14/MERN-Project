const userModel=require("../models/userModel");
const {compare} = require("bcryptjs");

const{sign} =require("jsonwebtoken");
require("dotenv").config();

module.exports={
    login: async(body)=>{
        try{
            const user =await userModel.getuserByUserName(body.username);
            if(user.error || user.response==null){
                return{
                    error:"invalid credentials",
                }
            }
            const isValid=await compare(body.password,user.response.dataValues.password)
            if(!isValid){
                return{
                error:"invalid credentials",
                }
            }
            delete user.response.dataValues.password;
            const jwt = sign(user , process.env.SECRET ,{expiresIn:"30000"}); 
            
            return{
                response:jwt,
            }

        }catch(error){
            return{
                error:error.message,
            }
        }
    }
};