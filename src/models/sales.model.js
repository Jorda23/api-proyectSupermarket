import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { userModel } from "./user.model.js";

export const salesModel = sequelize.define("sales", {
  idSale: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  totalAmount: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false,
  },
  idUserSeller: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

// Relations
salesModel.belongsTo(userModel, {
  foreignKey: "idUserSeller",
  sourceKey: "idUser",
});
