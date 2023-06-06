import { body } from "express-validator";

// Validation middleware for creating a position
export const validatePositionRules = [
  body("positionName").notEmpty().withMessage("Position name is required"),
];
