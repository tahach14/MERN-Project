require("dotenv").config();
const{Sequelize}=require("sequelize");


const database=new Sequelize({
    port : process.env.DB_PORT,
    host : process.env.DB_HOST,
    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    dialect : process.env.DB_DIALECT,
});

database.authenticate().then((value)=>{
    console.log("Database connected successfully", value)
}).catch((error)=>{
    console.log(error.message);
});


module.exports=database;