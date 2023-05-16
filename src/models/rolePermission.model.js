import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { roleModel } from "./role.model.js";
import { permissionModel } from "./permission.model.js";

export const rolePermissionModel = sequelize.define("rolePermission", {
  idRole: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  idPermission: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});
// Relations
rolePermissionModel.belongsTo(roleModel, { foreignKey: "idRole" });
rolePermissionModel.belongsTo(permissionModel, { foreignKey: "idPermission" });
