const sequelize=require("../bin/dbConnection");

const USERS = require("./definitions/users");

const COURSES =require("./definitions/courses");

const ADDRESSES =require("./definitions/addresses");

const ROLES =require("./definitions/roles");

const USERCOURSES =require("./definitions/userCourses");



//relations starts here

ADDRESSES.hasOne(USERS,{foreignKey:"addressId"});
USERS.belongsTo(ADDRESSES,{foreignKey: "addressId"});

ROLES.hasMany(USERS,{foreignKey:"roleId"});
USERS.belongsTo(ROLES,{foreignKey:"roleId"});

USERS.hasMany(USERCOURSES,{foreignKey:"userID"});
USERCOURSES.belongsTo(USERS,{foreignKey:"userID"});
COURSES.hasMany(USERCOURSES,{foreignKey:"courseID"});
USERCOURSES.belongsTo(COURSES,{foreignKey:"courseID"});

//relations ends here

const models = {
    users: USERS,
    courses:COURSES,
    addresses:ADDRESSES,
    roles:ROLES,
};


const db={};
db.sequelize= sequelize;
sequelize.models = models;

module.exports = {db,models};