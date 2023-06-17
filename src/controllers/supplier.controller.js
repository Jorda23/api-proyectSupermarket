import { supplierModel } from "../models/supplier.model.js";
import { validationResult } from "express-validator";
import { verifyToken } from "../middleware/verifyToken.js";

export const findAllSupplier = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const { count, rows } = await supplierModel.findAndCountAll();
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

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const supplier = await supplierModel.create(columns);

      res.status(200).json({
        msg: "Supplier created successfully!",
        supplier,
      });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export const findOneSupplier = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { idSupplier } = req.params;

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const supplier = await supplierModel.findOne({
        where: { idSupplier },
      });
      
      if (supplier) res.status(200).json({ supplier });
      else
        res
          .status(404)
          .json({ msg: `Supplier with id "${idSupplier} not found!"` });
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

    const { idSupplier } = req.params;

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const supplier = await supplierModel.destroy({ where: { idSupplier } });

      if (supplier) res.status(200).json("Deleted!");
      else
        res
          .status(404)
          .json({ msg: `Supplier with Id "${idSupplier} not found!"` });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};
