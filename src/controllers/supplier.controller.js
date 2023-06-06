import { supplierModel } from "../models/supplier.model.js";
import { validationResult } from "express-validator";

export const findAllSupplier = async (req, res) => {
  try {
    const { count, rows } = await supplierModel.findAndCountAll();
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

  const { supplierName, phoneNumber } = req.body;

  try {
    const supplier = await supplierModel.create({ supplierName, phoneNumber });

    res.status(200).json({
      msg: "Supplier created successfully!",
      supplier,
    });
  } catch (error) {
    console.log(error);
  }
};

export const findOneSupplier = async (req, res) => {
  const { idSupplier } = req.params;

  try {
    const supplier = await supplierModel.findOne({ where: { idSupplier } });

    if (supplier) res.status(200).json({ user });
    else
      res
        .status(404)
        .json({ msg: `Supplier with Id "${idSupplier} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const deleteForId = async (req, res) => {
  const { idSupplier } = req.params;

  try {
    const supplier = await supplierModel.destroy({ where: { idSupplier } });

    if (supplier) res.status(200).json("Deleted!");
    else
      res
        .status(404)
        .json({ msg: `Supplier with Id "${idSupplier} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const updateForId = async (req, res) => {
  const { idSupplier } = req.params;
  const { supplierName } = req.body;

  try {
    const supplier = await supplierModel.findOne({ where: { idSupplier } });

    supplier.set({ supplierName });
    await supplier.save();

    if (supplier) return res.status(200).json("Update!");
    else
      res.status(404).json({
        msg: `Supplier with Id "${idUser} not found!"`,
      });
  } catch (error) {
    console.log(error);
  }
};
