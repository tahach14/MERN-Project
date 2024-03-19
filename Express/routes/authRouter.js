
const routers = require ("express").Router();
const{login}=require("../controllers/authController");

routers.post("/getlogin", login);

module.exports= routers;

