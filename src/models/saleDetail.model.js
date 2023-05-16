import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { salesModel } from "./sales.model.js";
import { productsModel } from "./products.model.js";

export const saleDetailModel = sequelize.define("saleDetail", {
  idSaleDetail: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  idSale: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  idProduct: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  salePrice: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false,
  },
  totalDetail: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false,
  },
});

// Relations
saleDetailModel.belongsTo(salesModel, {
  foreignKey: "idSale",
});

saleDetailModel.belongsTo(productsModel, {
  foreignKey: "idProduct",
});
