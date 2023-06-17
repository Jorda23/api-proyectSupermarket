import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js"

export const employeesModel = sequelize.define("employees", {
  idEmployee: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false,
  }
},
{
  timestamps: false,
});


