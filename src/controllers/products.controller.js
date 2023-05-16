import { productsModel } from "../models/products.model.js";

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
  const { productName, price, stockQuantity, idUserMakes, idCategory } =
    req.body;

  try {
    const product = await productsModel.create({
      productName,
      price,
      stockQuantity,
      idUserMakes,
      idCategory,
    });

    res.status(200).json({
      msg: "Product created successfully!",
      product,
    });
  } catch (error) {
    console.log(error);
  }
};

export const findOneProduct = async (req, res) => {
  const { idProduct } = req.params;

  try {
    const product = await productsModel.findOne({ where: { idProduct } });

    if (product) res.status(200).json({ product });
    else
      res
        .status(404)
        .json({ msg: `Product with Id "${idProduct} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const deleteForId = async (req, res) => {
  const { idProduct } = req.params;

  try {
    const product = await productsModel.destroy({ where: { idProduct } });

    if (product) res.status(200).json("Deleted!");
    else
      res
        .status(404)
        .json({ msg: `Product with Id "${idProduct} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const updateForId = async (req, res) => {
  const { idProduct } = req.params;
  const { productName, price, stockQuantity, idUserMakes, idCategory } =
    req.body;

  try {
    const product = await productsModel.findOne({ where: { idProduct } });

    product.set({ productName, price, stockQuantity, idUserMakes, idCategory });
    await product.save();

    if (product) return res.status(200).json("Update!");
    else
      res.status(404).json({
        msg: `Product with Id "${idProduct} not found!"`,
      });
  } catch (error) {
    console.log(error);
  }
};
