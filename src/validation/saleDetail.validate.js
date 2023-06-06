import { body } from "express-validator";

// Validation middleware for creating a sale detail
export const validateSaleDetailRules = [
  body("idSale").notEmpty().withMessage("Sale ID is required"),
  body("idProduct").notEmpty().withMessage("Product ID is required"),
  body("quantity")
    .notEmpty()
    .withMessage("Quantity is required")
    .isInt({ min: 1 })
    .withMessage("Quantity must be a positive integer"),
  body("salePrice")
    .notEmpty()
    .withMessage("Sale price is required")
    .isFloat({ min: 0 })
    .withMessage("Sale price must be a positive number"),
];
