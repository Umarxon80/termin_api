import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import { Category } from "./category.js";
export const Description = sequelize.define("description", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
});

Description.belongsTo(Category)
Category.hasMany(Description)