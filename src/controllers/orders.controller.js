import { ordersModel } from "../models/orders.model.js";

export const findAllOrder = async (req, res) => {
  try {
    const { count, rows } = await ordersModel.findAndCountAll();
    res.json({
      count,
      rows,
    });
  } catch (error) {
    console.log(error);
  }
};

export const create = async (req, res) => {
  const { idSupplier, userReceivesOrder, totalOrderAmount } = req.body;

  try {
    const orders = await ordersModel.create({
      idSupplier,
      userReceivesOrder,
      totalOrderAmount,
    });

    res.status(200).json({
      msg: "Order created successfully!",
      orders,
    });
  } catch (error) {
    console.log(error);
  }
};

export const findOneOrder = async (req, res) => {
  const { orderNumber } = req.params;

  try {
    const orders = await ordersModel.findOne({ where: { orderNumber } });

    if (orders) res.status(200).json({ orders });
    else
      res
        .status(404)
        .json({ msg: `Order with Id "${orderNumber} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const deleteForId = async (req, res) => {
  const { orderNumber } = req.params;

  try {
    const orders = await ordersModel.destroy({ where: { orderNumber } });

    if (orders) res.status(200).json("Deleted!");
    else
      res
        .status(404)
        .json({ msg: `Order with Id "${orderNumber} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const updateForId = async (req, res) => {
  const { orderNumber } = req.params;
  const { idSupplier, userReceivesOrder, totalOrderAmount } = req.body;

  try {
    const orders = await ordersModel.findOne({ where: { orderNumber } });

    orders.set({ idSupplier, userReceivesOrder, totalOrderAmount });
    await orders.save();

    if (orders) return res.status(200).json("Update!");
    else
      res.status(404).json({
        msg: `Order with Id "${orderNumber} not found!"`,
      });
  } catch (error) {
    console.log(error);
  }
};
