import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { employeesModel } from "../models/employees.model.js"

export const positionModel = sequelize.define("position", {
  idPosition: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  positionName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
},
{
  timestamps: false,
});

positionModel.hasMany(employeesModel, {
  foreignKey: "idPosition",
});

employeesModel.belongsTo(positionModel, {
  foreignKey: "idPosition",
});

