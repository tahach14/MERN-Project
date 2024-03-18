
const {createRole,getRole,createUser,deleteUser,getUser,recoverUser}=require("../controllers/userController");
// const { getUser } = require("../models/userModel");
const routers = require ("express").Router();
const {middleware}=require("../middleware");

routers.post("/createRole",createRole);
routers.get("/getRole",getRole);
routers.post("/createUser",createUser);
routers.get("/getUser",getUser);
routers.delete("/deleteUser",deleteUser);
routers.patch("/recoverUser",recoverUser);


module.exports=routers;


// const routers = require ("express").Router();

// // router.get("/getuser", (req,res) => {

// // return res.send("Get All Users Api");

// // });
// const{signup,deleteuser}=require("../controllers/userController");
// routers.get("/getsignup", signup);
// routers.delete("/:id", deleteuser);

// module.exports= routers;

