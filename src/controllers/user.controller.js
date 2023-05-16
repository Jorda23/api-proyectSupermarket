import { hasPassword } from "../helpers/hashPassword.js";
import { userModel } from "../models/user.model.js";

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
  const { userName, password } = req.body;

  try {
    const userExists = await userModel.findOne({ where: { userName } }); // Verificar si el usuario ya existe

    if (userExists) {
      // Si el usuario ya existe, enviar un mensaje al cliente
      return res.status(400).json({
        msg: "username already exists!",
      });
    }

    const newPassword = hasPassword(password);
    const user = await userModel.create({ userName, password: newPassword });

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
    else
      res
        .status(404)
        .json({ msg: `User with Id "${idUser} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const deleteForId = async (req, res) => {
  const { idUser } = req.params;

  try {
    const user = await userModel.destroy({ where: { idUser } });

    if (user) res.status(200).json("Deleted!");
    else
      res
        .status(404)
        .json({ msg: `User with Id "${idUser} not found!"` });
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
        msg: `User with Id "${idUser} not found!"`,
      });
  } catch (error) {
    console.log(error);
  }
};
