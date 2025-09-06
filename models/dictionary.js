import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
export const Dictionary = sequelize.define("dictionary", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  term: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  letter: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});

