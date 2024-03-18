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
            const jwt = sign(user , process.env.SECRET); 
            // , {expiresIn:"30000"}
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


// const bcrypt = require("bcryptjs");


// module.exports={
//     login : async (validate)=>{
//         try{
//              validate.password = await bcrypt.hash(validate.password,10)
//             // if(validate.username==="person1" && validate.password=="123456"){
//                 console.log("check")
//                 return {
//                     response: validate
//                 }
            // }
            // return{
            //     response: "false"
            // }

//         }catch(error){
//             return{
//                 error:error.message
//             }
//         }

//     },
//     logout : ()=>{
//         return "logout service"

//     }
// }
// function sorting(arr){
//     const len=arr.length;
//     for(let i=0;i<len-1;i++){
//         for(let j=0;j<len-1;j++){
//             if(arr[j]>arr[j+1]){
//                 const temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr;
// }
// function maximumnumber(arr){
//     let max=arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }
// function mainimumnumber(arr){
//     let min=arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i];
//         }
//     }
//     return min;
// }


// module.exports={
//     sort: async(validate)=>{
//         try{
//             // validate=await validate.sorting((a,b)=>{ return b-a});
//             validate= await sorting(validate);
            
//             return {
//                 response:validate,
//              }}catch(error){
//         return{
//             error:error.message
//         }
//     }

//     },
//     maxnumber: async(validate)=>{
//         try{
//             // validate=await validate.sorting((a,b)=>{ return b-a});
//             validate= await maximumnumber(validate);
            
//             // const a=validate[0];
//             return {
//                 response:validate,
//                 // maxvalue:a
//              }}catch(error){
//         return{
//             error:error.message
//         }
//     }

//     },
//     minnumber: async(validate)=>{
//         try{
//             // validate=await validate.sorting((a,b)=>{ return b-a});
//             validate= await mainimumnumber(validate);
            
//             // const a=validate[0];
//             return {
//                 response:validate,
//                 // maxvalue:a
//              }}catch(error){
//         return{
//             error:error.message
//         }
//     }
// }

    
// };