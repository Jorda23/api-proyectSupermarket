import { userModel } from "../models/user.model.js";
import {validationResult}  from "express-validator";

export const findAllUser = async (req, res) => {
  try {
    const { count, rows } = await userModel.findAndCountAll();
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
  
  const { userName, password } = req.body;

  try {
    const userExists = await userModel.findOne({ where: { userName } });

    if (userExists) {
      return res.status(400).json({
        msg: "Username already exists!",
      });
    }

    const user = await userModel.create({ userName, password });

    res.status(200).json({
      msg: "User created successfully!",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const findOneUser = async (req, res) => {
 
  const { idUser } = req.params;

  try {
    const user = await userModel.findOne({ where: { idUser } });

    if (user) res.status(200).json({ user });
    else res.status(404).json({ msg: `User with Id "${idUser}" not found!` });
  } catch (error) {
    console.log(error);
  }
};

export const deleteForId = async (req, res) => {
  const { idUser } = req.params;

  try {
    const user = await userModel.destroy({ where: { idUser } });

    if (user) res.status(200).json("Deleted!");
    else res.status(404).json({ msg: `User with Id "${idUser}" not found!` });
  } catch (error) {
    console.log(error);
  }
};

export const updateForId = async (req, res) => {
  const { idUser } = req.params;
  const { userName } = req.body;

  try {
    const user = await userModel.findOne({ where: { idUser } });

    user.set({ userName });
    await user.save();

    if (user) return res.status(200).json("Update!");
    else
      res.status(404).json({
        msg: `User with Id "${idUser}" not found!`,
      });
  } catch (error) {
    console.log(error);
  }
};
