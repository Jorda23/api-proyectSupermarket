import { body } from "express-validator";
import { supplierModel } from "../models/supplier.model.js"
// Validation middleware for creating a supplier
export const validateSupplierRules = [
  body("supplierName").notEmpty().withMessage("Supplier name is required")
  .custom(async (value) => {
    const supplier = await supplierModel.findOne({
      where: { supplierName: value },
    });

    if (supplier) {
      throw new Error("supplier name must be unique");
    }

    return true;
  }),
  body("phoneNumber")
    .notEmpty()
    .withMessage("Phone number is required")
    .isInt()
    .withMessage("Phone number must be an integer"),
];
