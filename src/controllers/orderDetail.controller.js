import { orderDetailModel } from "../models/orderDetail.model.js";
import { validationResult } from 'express-validator';


export const findAllOrderDetail = async (req, res) => {
  try {
    const { count, rows } = await orderDetailModel.findAndCountAll();
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
    const orderDetail = await orderDetailModel.create(columns);

    res.status(200).json({
      msg: "Order detail created successfully!",
      orderDetail,
    });
  } catch (error) {
    console.log(error);
  }
};

export const findOneOrderDetail = async (req, res) => {
  const { idDetail } = req.params;

  try {
    const orderDetail = await orderDetailModel.findOne({ where: { idDetail } });

    if (orderDetail) res.status(200).json({ orderDetail });
    else
      res
        .status(404)
        .json({ msg: `Order detail with Id "${idDetail} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const deleteForId = async (req, res) => {
  const { idDetail } = req.params;

  try {
    const orderDetail = await orderDetailModel.destroy({ where: { idDetail } });

    if (orderDetail) res.status(200).json("Deleted!");
    else
      res
        .status(404)
        .json({ msg: `Order detail with Id "${idDetail} not found!"` });
  } catch (error) {
    console.log(error);
  }
};
