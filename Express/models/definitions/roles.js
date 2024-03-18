const {Model, DataTypes}=require("sequelize");
const sequelize = require("../../bin/dbConnection");


class ROLES extends Model{}

ROLES.init({
    roleId : {
        primaryKey : true,
        type : DataTypes.STRING(255),
    },
    rolename : {
        unique : true,
        type : DataTypes.STRING(50),
        allowNull : false,
    },
},
{
    timestamps : true,
    paranoid : true,
    sequelize,

});

module.exports= ROLES;