import { categoryModel } from "../models/category.model.js";
import { validationResult } from "express-validator";
import { verifyToken } from "../middleware/verifyToken.js";

export const findAllCategory = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const { count, rows } = await categoryModel.findAndCountAll();
      res.json({
        count,
        rows,
      });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export const create = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const columns = req.body;

    const errors = validationResult(req);

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await verifyToken(token);

      const category = await categoryModel.create(columns);

      res.status(200).json({
        msg: "Category created successfully!",
        category,
      });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export const findOneCategory = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { idCategory } = req.params;

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const category = await categoryModel.findOne({ where: { idCategory } });

      if (category) res.status(200).json({ category });
      else
        res
          .status(404)
          .json({ msg: `Category with Id "${idCategory} not found!"` });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export const deleteForId = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { idCategory } = req.params;

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const category = await categoryModel.destroy({ where: { idCategory } });

      if (category) res.status(200).json("Deleted!");
      else
        res
          .status(404)
          .json({ msg: `Category with Id "${idCategory} not found!"` });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};
