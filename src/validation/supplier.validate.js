import { body } from "express-validator";

// Validation middleware for creating a supplier
export const validateSupplierRules = [
  body("supplierName").notEmpty().withMessage("Supplier name is required"),
  body("phoneNumber")
    .notEmpty()
    .withMessage("Phone number is required")
    .isInt()
    .withMessage("Phone number must be an integer"),
];
