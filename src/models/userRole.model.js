import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { userModel } from "./user.model.js";
import { roleModel } from "./role.model.js";

export const userRoleModel = sequelize.define("userRole", {
  idUser: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  idRole: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

// Relations
userRoleModel.belongsTo(userModel, { foreignKey: "idUser" });
userRoleModel.belongsTo(roleModel, { foreignKey: "idRole" });
