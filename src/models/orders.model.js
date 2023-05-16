import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { supplierModel } from "./supplier.model.js";

export const ordersModel = sequelize.define("orders", {
  orderNumber: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  idSupplier: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  userReceivesOrder: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false,
  },
  totalOrderAmount: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false,
  },
});

// Relations
ordersModel.belongsTo(supplierModel, {
  foreignKey: "idSupplier",
});
