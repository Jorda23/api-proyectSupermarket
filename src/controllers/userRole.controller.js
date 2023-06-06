import { userRoleModel } from "../models/userRole.model.js";
import {validationResult}  from "express-validator";

export const findAllUserRole = async (req, res) => {
  try {
    const { count, rows } = await userRoleModel.findAndCountAll();
    res.json({
      count,
      rows,
    });
  } catch (error) {
    console.log(error);
  }
};

export const create = async (req, res) => {
  
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { idUser, idRole } = req.body;

  try {
    const userRole = await userRoleModel.create({ idUser, idRole });

    res.status(200).json({
      msg: "User Role created successfully!",
      userRole,
    });
  } catch (error) {
    console.log(error);
  }
};
