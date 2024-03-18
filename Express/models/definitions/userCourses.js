const {Model, DataTypes}=require("sequelize");
const sequelize = require("../../bin/dbConnection");


class USERSCOURSES extends Model{}

USERSCOURSES.init({
    usercourseId : {
        primaryKey : true,
        type : DataTypes.STRING(255),
    },
},
{
    timestamps : true,
    paranoid : true,
    sequelize,

});

module.exports= USERSCOURSES;