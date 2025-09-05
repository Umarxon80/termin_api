import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";




export const Social=sequelize.define("social",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull:false,
        unique:true
    },
    icon:{
        type:DataTypes.STRING,
    }
})