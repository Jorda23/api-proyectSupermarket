import { body } from "express-validator";
import { positionModel } from "../models/position.model.js";

// Validation middleware for creating a position
export const validatePositionRules = [
  body("positionName")
    .notEmpty().withMessage("Position name is required")
    .custom(async (value) => {
      const position = await positionModel.findOne({
        where: { positionName: value },
      });

      if (position) {
        throw new Error("Position name must be unique");
      }

      return true;
    }),
];
