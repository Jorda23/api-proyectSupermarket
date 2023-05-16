import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js"
import { positionModel } from "./position.model.js";
import { userModel } from "./user.model.js";

export const employeesModel = sequelize.define("employees", {
  idEmployee: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
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
    type: DataTypes.STRING,
    allowNull: false,
  },
  idUser: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true // aquí se agrega la propiedad unique
  }
});

// Relations
employeesModel.belongsTo(positionModel, { foreignKey: 'idPosition' });
employeesModel.belongsTo(userModel, { foreignKey: 'idUser' });
