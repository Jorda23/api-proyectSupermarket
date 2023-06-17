import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { supplierModel } from "./supplier.model.js";

export const ordersModel = sequelize.define("orders", {
  orderNumber: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idSupplier: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  userReceivesOrder: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false,
  },
  totalOrderAmount: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false,
  },
},
{
  timestamps: false,
});

// Relations
ordersModel.belongsTo(supplierModel, {
  foreignKey: "idSupplier",
});
