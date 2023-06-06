import { categoryModel } from "../models/category.model.js";
import { validationResult } from "express-validator";

export const findAllCategory = async (req, res) => {
  try {
    const { count, rows } = await categoryModel.findAndCountAll();
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

  const { categoryName } = req.body;

  try {
    const category = await categoryModel.create({ categoryName });

    res.status(200).json({
      msg: "Category created successfully!",
      category,
    });
  } catch (error) {
    console.log(error);
  }
};

export const findOneCategory = async (req, res) => {
  const { idCategory } = req.params;

  try {
    const category = await categoryModel.findOne({ where: { idCategory } });

    if (category) res.status(200).json({ category });
    else
      res
        .status(404)
        .json({ msg: `Category with Id "${idCategory} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const deleteForId = async (req, res) => {
  const { idCategory } = req.params;

  try {
    const category = await categoryModel.destroy({ where: { idCategory } });

    if (category) res.status(200).json("Deleted!");
    else
      res
        .status(404)
        .json({ msg: `Category with Id "${idCategory} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const updateForId = async (req, res) => {
  const { idCategory } = req.params;
  const { categoryName } = req.body;

  try {
    const category = await categoryModel.findOne({ where: { idCategory } });

    category.set({ categoryName });
    await category.save();

    if (category) return res.status(200).json("Update!");
    else
      res.status(404).json({
        msg: `Category with Id "${idCategory} not found!"`,
      });
  } catch (error) {
    console.log(error);
  }
};
