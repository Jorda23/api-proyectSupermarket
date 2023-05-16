import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";

export const positionModel = sequelize.define("position", {
  idPosition: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  positionName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
});
