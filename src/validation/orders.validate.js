import { body } from "express-validator";

// Validation middleware for creating an order
export const validateOrderRules = [
  body("idSupplier").notEmpty().withMessage("Supplier ID is required"),
  body("userReceivesOrder")
    .notEmpty()
    .withMessage("User receiving the order is required")
    .isFloat({ min: 0 })
    .withMessage("User receives order must be a positive number"),
  body("totalOrderAmount")
    .notEmpty()
    .withMessage("Total order amount is required")
    .isFloat({ min: 0 })
    .withMessage("Total order amount must be a positive number"),
];
