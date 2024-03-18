const {Model, DataTypes}=require("sequelize");
const sequelize = require("../../bin/dbConnection");

class COURSES extends Model{}

COURSES.init({
    courseId : {
        primaryKey : true,
        type : DataTypes.STRING(255),
    },
    coursename : {
        unique : true,
        type : DataTypes.STRING(34),
        allowNull : false,
    },
    coursecode:{
        unique : true,
        type : DataTypes.STRING(34),
        allowNull : false,

    }
},
{
    timestamps : true,
    paranoid : true,
    sequelize,

});

module.exports=COURSES;
