const {Model, DataTypes}=require("sequelize");
const sequelize = require("../../bin/dbConnection");


class ADDRESSES extends Model{}

ADDRESSES.init({
    addressId : {
        primaryKey : true,
        type : DataTypes.STRING(255),
    },
    address : {
        type : DataTypes.STRING(255),
        allowNull : false,
    },
},
{
    timestamps : true,
    paranoid : true,
    sequelize,

});

module.exports= ADDRESSES;