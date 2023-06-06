import { saleDetailModel } from "../models/saleDetail.model.js";
import { validationResult } from "express-validator";

export const findAllSaleDetail = async (req, res) => {
  try {
    const { count, rows } = await saleDetailModel.findAndCountAll();

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

  const { idSale, idProduct, quantity, salePrice, totalDetail } = req.body;

  try {
    const saleDetail = await saleDetailModel.create({
      idSale,
      idProduct,
      quantity,
      salePrice,
      totalDetail,
    });

    res.status(200).json({
      msg: "Sale detail created successfully!",
      saleDetail,
    });
  } catch (error) {
    console.log(error);
  }
};

export const findOneSaleDetail = async (req, res) => {
  const { idSaleDetail } = req.params;

  try {
    const saleDetail = await saleDetailModel.findOne({
      where: { idSaleDetail },
    });

    if (saleDetail) res.status(200).json({ saleDetail });
    else
      res
        .status(404)
        .json({ msg: `Sale detail with Id "${idSaleDetail} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const deleteForId = async (req, res) => {
  const { idSaleDetail } = req.params;

  try {
    const saleDetail = await saleDetailModel.destroy({
      where: { idSaleDetail },
    });

    if (saleDetail) res.status(200).json("Deleted!");
    else
      res
        .status(404)
        .json({ msg: `Sale with Id "${idSaleDetail} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const updateForId = async (req, res) => {
  const { idSaleDetail } = req.params;
  const { idSale, idProduct, quantity, salePrice, totalDetail } = req.body;

  try {
    const saleDetail = await saleDetailModel.findOne({
      where: { idSaleDetail },
    });

    saleDetail.set({ idSale, idProduct, quantity, salePrice, totalDetail });
    await saleDetail.save();

    if (saleDetail) return res.status(200).json("Update!");
    else
      res.status(404).json({
        msg: `Sale detail with Id "${idSaleDetail} not found!"`,
      });
  } catch (error) {
    console.log(error);
  }
};
