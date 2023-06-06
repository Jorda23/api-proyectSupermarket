import { positionModel } from "../models/position.model.js";
import { validationResult } from "express-validator";

export const findAllPosition = async (req, res) => {
  try {
    const { count, rows } = await positionModel.findAndCountAll();
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

  const { positionName } = req.body;

  try {
    const position = await positionModel.create({ positionName });

    res.status(200).json({
      msg: "Position created successfully!",
      position,
    });
  } catch (error) {
    console.log(error);
  }
};

export const findOnePosition = async (req, res) => {
  const { idPosition } = req.params;

  try {
    const position = await positionModel.findOne({
      where: { idPosition },
    });

    if (position) res.status(200).json({ position });
    else
      res
        .status(404)
        .json({ msg: `Position with id "${idPosition} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const deleteForId = async (req, res) => {
  const { idPosition } = req.params;

  try {
    const position = await positionModel.destroy({
      where: { idPosition },
    });

    if (position) res.status(200).json("Deleted!");
    else
      res
        .status(404)
        .json({ msg: `Position with id "${idPosition} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const updateForId = async (req, res) => {
  const { idPosition } = req.params;
  const { positionName } = req.body;

  try {
    const position = await positionModel.findOne({
      where: { idPosition },
    });

    position.set({ positionName });
    await position.save();

    if (position) return res.status(200).json("Update!");
    else
      res.status(404).json({
        msg: `Position with id "${idPosition} not found!"`,
      });
  } catch (error) {
    console.log(error);
  }
};
