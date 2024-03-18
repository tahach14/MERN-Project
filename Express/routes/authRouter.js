
const routers = require ("express").Router();
const{login,}=require("../controllers/authController");
// const{sort,maxnumber,minnumber}=require("../controllers/authController");

// routers.post("/getmax", maxnumber);
// routers.post("/getsort", sort);
// routers.post("/getmin", minnumber);
routers.post("/getlogin", login);


// routers.post("/getLogout", logout);
module.exports= routers;

