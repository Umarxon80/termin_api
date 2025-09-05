import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { Author } from "./Author.js";
import { Social } from "./social.js";




export const Author_social=sequelize.define("author_social",{
    social_link:{
        type:DataTypes.STRING,
        unique:true
    }
})
Author.belongsToMany(Social,{through:Author_social})
Social.belongsToMany(Author,{through:Author_social})

Author_social.belongsTo(Author)
Author_social.belongsTo(Social)
