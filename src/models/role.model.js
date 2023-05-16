import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";

export const roleModel = sequelize.define("role", {
  idRole: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
