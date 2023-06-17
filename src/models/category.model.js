import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { productsModel } from "../models/products.model.js";

export const categoryModel = sequelize.define("category", {
  idCategory: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  timestamps: false,
});

categoryModel.hasMany(productsModel, {
  foreignKey: "idCategory",
});

productsModel.belongsTo(categoryModel, {
  foreignKey: "idCategory",
});
