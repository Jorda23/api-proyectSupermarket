import { productCategoryModel } from "../models/productCategory.model.js";

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

