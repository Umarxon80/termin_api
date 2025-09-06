import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import { Author } from "./Author.js";

export const Topic = sequelize.define("topic", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  is_checked: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  is_approved: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

Topic.hasOne(Author);
Author.hasMany(Topic);

