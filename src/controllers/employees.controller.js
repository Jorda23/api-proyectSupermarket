import { employeesModel } from "../models/employees.model.js";
import { validationResult } from "express-validator";
import { verifyToken } from "../middleware/verifyToken.js";

export const findAllEmployees = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const { count, rows } = await employeesModel.findAndCountAll();
      res.json({
        count,
        rows,
      });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export const create = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const columns = req.body;

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const employees = await employeesModel.create(columns);

      res.status(200).json({
        msg: "Employees created successfully!",
        employees,
      });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export const deleteForId = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { idEmployee } = req.params;

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const employees = await employeesModel.destroy({ where: { idEmployee } });

      if (employees) res.status(200).json("Deleted!");
      else
        res.status(404).json({
          msg: `Employees with id "${idEmployee} not found!"`,
        });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};
