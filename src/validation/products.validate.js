import { body } from "express-validator";
import { productsModel } from "../models/products.model.js";

export const validateProductRules = [
  body("productName")
    .notEmpty()
    .withMessage("Product name is required")
    .custom(async (value) => {
      const product = await productsModel.findOne({
        where: { productName: value },
      });

      if (product) {
        throw new Error("Product name must be unique");
      }

      return true;
    }),
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
