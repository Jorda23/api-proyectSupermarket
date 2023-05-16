import { salesModel } from "../models/sales.model.js";

export const findAllSale = async (req, res) => {
  try {
    const { count, rows } = await salesModel.findAndCountAll();

    res.json({
      count,
      rows,
    });
  } catch (error) {
    console.log(error);
  }
};

export const create = async (req, res) => {
  const { totalAmount, idUserSeller } = req.body;

  try {
    const sale = await salesModel.create({
      totalAmount,
      idUserSeller,
    });

    res.status(200).json({
      msg: "Sales created successfully!",
      sale,
    });
  } catch (error) {
    console.log(error);
  }
};

export const findOneSale = async (req, res) => {
  const { idSale } = req.params;

  try {
    const sale = await salesModel.findOne({ where: { idSale } });

    if (sale) res.status(200).json({ sale });
    else res.status(404).json({ msg: `Sale with Id "${idSale} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const deleteForId = async (req, res) => {
  const { idSale } = req.params;

  try {
    const sale = await salesModel.destroy({ where: { idSale } });

    if (sale) res.status(200).json("Deleted!");
    else res.status(404).json({ msg: `Sale with Id "${idSale} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const updateForId = async (req, res) => {
  const { idSale } = req.params;
  const { totalAmount, idUserSeller } = req.body;

  try {
    const sale = await salesModel.findOne({ where: { idSale } });

    sale.set({ totalAmount, idUserSeller });
    await product.save();

    if (product) return res.status(200).json("Update!");
    else
      res.status(404).json({
        msg: `Sale with Id "${idSale} not found!"`,
      });
  } catch (error) {
    console.log(error);
  }
};
