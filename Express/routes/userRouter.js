
const {createRole,getRole,createUser,deleteUser,getUser,recoverUser}=require("../controllers/userController");
const routers = require ("express").Router();
const {middleware}=require("../middleware");

routers.post("/createRole",createRole);
routers.get("/getRole",getRole);
routers.post("/createUser",createUser);
routers.get("/getUser",getUser);
routers.delete("/deleteUser",deleteUser);
routers.patch("/recoverUser",recoverUser);

module.exports=routers;
