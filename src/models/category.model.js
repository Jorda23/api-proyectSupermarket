import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";

export const categoryModel = sequelize.define("category", {
  idCategory: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
