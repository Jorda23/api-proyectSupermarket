import { employeesModel } from "../models/employees.model.js";

export const findAllEmployees = async (req, res) => {
  try {
    const { count, rows } = await employeesModel.findAndCountAll();
    res.json({
      count,
      rows,
    });
  } catch (error) {
    console.log(error);
  }
};

export const create = async (req, res) => {
  const {
    firstName,
    lastName,
    age,
    birthDate,
    idPosition,
    idUser,
  } = req.body;

  try {
    const employees = await employeesModel.create({
      firstName,
      lastName,
      age,
      birthDate,
      idPosition,
      idUser,
    });

    res.status(200).json({
      msg: "Employees created successfully!",
      employees,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteForId = async (req, res) => {
  const { idEmployee } = req.params;

  try {
    const employees = await employeesModel.destroy({ where: { idEmployee } });

    if (employees) res.status(200).json("Deleted!");
    else
      res
        .status(404)
        .json({
          msg: `Employees with id "${idEmployee} not found!"`,
        });
  } catch (error) {
    console.log(error);
  }
};
