import { body } from "express-validator";

// Validation middleware for creating an order detail
export const validateOrderDetailRules = [
  body("orderNumber").notEmpty().withMessage("Order number is required"),
  body("productId").notEmpty().withMessage("Product ID is required"),
  body("productQuantity")
    .notEmpty()
    .withMessage("Product quantity is required")
    .isInt({ min: 1 })
    .withMessage("Product quantity must be a positive integer"),
  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),
  body("totalDetail")
    .notEmpty()
    .withMessage("Total detail amount is required")
    .isFloat({ min: 0 })
    .withMessage("Total detail amount must be a positive number"),
];
