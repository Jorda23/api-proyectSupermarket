import { productsModel } from "../models/products.model.js";
import { validationResult } from "express-validator";

export const findAllProduct = async (req, res) => {
  try {
    const { count, rows } = await productsModel.findAndCountAll();

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

  const columns = req.body;

  try {
    const product = await productsModel.create(columns);

    res.status(200).json({
      msg: "Product created successfully!",
      product,
    });
  } catch (error) {
    console.log(error);
  }
};

export const findOneProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await productsModel.findOne({ where: { productId } });

    if (product) res.status(200).json({ product });
    else
      res
        .status(404)
        .json({ msg: `Product with Id "${productId} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const deleteForId = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await productsModel.destroy({ where: { productId } });

    if (product) res.status(200).json("Deleted!");
    else
      res
        .status(404)
        .json({ msg: `Product with Id "${productId} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

