import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";

export const permissionModel = sequelize.define("permission", {
  idPermission: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  permissionName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
});
