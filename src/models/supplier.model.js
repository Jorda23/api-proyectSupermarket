import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";

export const supplierModel = sequelize.define("supplier", {
  idSupplier: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  supplierName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
{
  timestamps: false,
});
