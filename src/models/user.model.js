import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";

export const userModel = sequelize.define("user", {
  idUser: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
