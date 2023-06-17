import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { ordersModel } from "./orders.model.js";
import { productsModel } from "./products.model.js";

export const orderDetailModel = sequelize.define("orderDetail", {
  idDetail: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderNumber: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  productQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false,
  },
  totalDetail: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false,
  },
},
{
  timestamps: false,
});

// Relations
orderDetailModel.belongsTo(ordersModel, {
  foreignKey: "orderNumber",
});

orderDetailModel.belongsTo(productsModel, {
  foreignKey: "productId",
});
