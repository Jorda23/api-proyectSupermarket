import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { ordersModel } from "./orders.model.js";
import { productsModel } from "./products.model.js";

export const orderDetailModel = sequelize.define("orderDetail", {
  idDetail: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  orderNumber: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  idProduct: {
    type: DataTypes.UUID,
    allowNull: false,
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
});

// Relations
orderDetailModel.belongsTo(ordersModel, {
  foreignKey: "orderNumber",
});

orderDetailModel.belongsTo(productsModel, {
  foreignKey: "idProduct",
});
