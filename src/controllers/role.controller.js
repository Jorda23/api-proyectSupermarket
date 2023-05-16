import { roleModel } from "../models/role.model.js";

export const findAllRole = async (req, res) => {
  try {
    const { count, rows } = await roleModel.findAndCountAll();
    res.json({
      count,
      rows,
    });
  } catch (error) {
    console.log(error);
  }
};

export const create = async (req, res) => {
  const { roleName } = req.body;

  try {
    const role = await roleModel.create({ roleName });

    res.status(200).json({
      msg: "Role created successfully!",
      role,
    });
  } catch (error) {
    console.log(error);
  }
};

export const findOneRole = async (req, res) => {
  const { idRole } = req.params;

  try {
    const role = await roleModel.findOne({ where: { idRole } });

    if (role) res.status(200).json({ role });
    else res.status(404).json({ msg: `Role with Id "${idRole} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const deleteForId = async (req, res) => {
  const { idRole } = req.params;

  try {
    const role = await roleModel.destroy({ where: { idRole } });

    if (role) res.status(200).json("Deleted!");
    else res.status(404).json({ msg: `Role with Id "${idRole} not found!"` });
  } catch (error) {
    console.log(error);
  }
};

export const updateForId = async (req, res) => {
  const { idRole } = req.params;
  const { roleName } = req.body;

  try {
    const role = await roleModel.findOne({ where: { idRole } });

    role.set({ roleName });
    await role.save();

    if (role) return res.status(200).json("Update!");
    else
      res.status(404).json({
        msg: `Role with Id "${idRole} not found!"`,
      });
  } catch (error) {
    console.log(error);
  }
};
