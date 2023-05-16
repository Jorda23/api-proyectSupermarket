import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";

export const supplierModel = sequelize.define("supplier", {
  idSupplier: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  supplierName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
