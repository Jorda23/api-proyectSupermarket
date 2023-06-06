import { productCategoryModel } from "../models/productCategory.model.js";
import { validationResult } from "express-validator";

export const findAllProductCategory = async (req, res) => {
  try {
    const { count, rows } = await productCategoryModel.findAndCountAll();

    res.json({
      count,
      rows,
    });
  } catch (error) {
    console.log(error);
  }
};

export const create = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { idProduct, idCategory } = req.body;

  try {
    const productCategory = await productCategoryModel.create({
        idProduct, idCategory 
    });

    res.status(200).json({
      msg: "Product category created successfully!",
      productCategory,
    });
  } catch (error) {
    console.log(error);
  }
};

