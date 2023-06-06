import { body } from "express-validator";

export const validateProductRules = [
  body("productName").notEmpty().withMessage("Product name is required"),
  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),
  body("stockQuantity")
    .notEmpty()
    .withMessage("Stock quantity is required")
    .isFloat({ min: 0 })
    .withMessage("Stock quantity must be a positive number"),
  body("idUserMakes")
    .notEmpty()
    .withMessage("User ID making the product is required"),
  body("idCategory").notEmpty().withMessage("Category ID is required"),
];
