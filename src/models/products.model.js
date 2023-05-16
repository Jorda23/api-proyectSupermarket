import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { userModel } from "./user.model.js"

export const productsModel = sequelize.define("products", {
  idProduct: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false,
  },
  stockQuantity: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false,
  },
  idUserMakes: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  idCategory: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

// Relations
productsModel.belongsTo(userModel, {
  foreignKey: "idUserMakes",
  sourceKey: "idUser",
});
