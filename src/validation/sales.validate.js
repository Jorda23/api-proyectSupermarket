import { body } from "express-validator";

// Validation middleware for creating a sale
export const validateSaleRules = [
  body("client")
    .notEmpty()
    .withMessage("client amount is required"),
];
