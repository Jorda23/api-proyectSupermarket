import { body } from "express-validator";
import { roleModel } from "../models/role.model.js";

// Validation middleware for creating a role
export const validateRoleRules = [
  body("roleName")
    .notEmpty()
    .withMessage("Role name is required")
    .custom(async (value) => {
      const role = await roleModel.findOne({
        where: { roleName: value },
      });

      if (role) {
        throw new Error("Role name must be unique");
      }

      return true;
    }),
];
