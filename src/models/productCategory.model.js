import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { productsModel } from "./products.model.js";
import { categoryModel } from "./category.model.js";

export const productCategoryModel = sequelize.define("productCategory", {
  idProduct: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  idCategory: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

// Relations
productCategoryModel.belongsTo(productsModel, {
  foreignKey: "idProduct",
});

productCategoryModel.belongsTo(categoryModel, {
  foreignKey: "idCategory",
});
