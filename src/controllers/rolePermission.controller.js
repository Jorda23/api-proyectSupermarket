import { rolePermissionModel } from "../models/rolePermission.model.js";

export const findAllRolePermission = async (req, res) => {
  try {
    const { count, rows } = await rolePermissionModel.findAndCountAll();
    res.json({
      count,
      rows,
    });
  } catch (error) {
    console.log(error);
  }
};

export const create = async (req, res) => {
  const { idRole, idPermission } = req.body;

  try {
    const rolePermission = await rolePermissionModel.create({
      idRole,
      idPermission,
    });

    res.status(200).json({
      msg: "Role Permission created successfully!",
      rolePermission,
    });
  } catch (error) {
    console.log(error);
  }
};
