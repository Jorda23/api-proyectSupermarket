import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { salesModel } from "./sales.model.js";
import { productsModel } from "./products.model.js";

export const saleDetailModel = sequelize.define("saleDetail", {
  saleDetailId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false,
  }
},
{
  timestamps: false,
});

salesModel.hasMany(saleDetailModel, {
  foreignKey: "idSale"
})

saleDetailModel.belongsTo(salesModel, {
  foreignKey: "idSale"
})

productsModel.hasMany(saleDetailModel, {
  foreignKey: "productId"
})

saleDetailModel.belongsTo(productsModel, {
  foreignKey: "productId"
})

