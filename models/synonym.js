import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import { Description } from "./description.js";
import { Dictionary } from "./dictionary.js";
export const Synonym = sequelize.define("synonym", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

Dictionary.belongsToMany(Description,{through:Synonym})
Description.belongsToMany(Dictionary,{through:Synonym})
Synonym.belongsTo(Dictionary)
Synonym.belongsTo(Description)