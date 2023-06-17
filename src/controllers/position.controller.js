import { positionModel } from "../models/position.model.js";
import { validationResult } from "express-validator";
import { verifyToken } from "../middleware/verifyToken.js";

export const findAllPosition = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const { count, rows } = await positionModel.findAndCountAll();
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

      const position = await positionModel.create(columns);

      res.status(200).json({
        msg: "Position created successfully!",
        position,
      });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export const findOnePosition = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { idPosition } = req.params;

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const position = await positionModel.findOne({
        where: { idPosition },
      });

      if (position) res.status(200).json({ position });
      else
        res
          .status(404)
          .json({ msg: `Position with id "${idPosition} not found!"` });
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
    const { idPosition } = req.params;

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const position = await positionModel.destroy({
        where: { idPosition },
      });

      if (position) res.status(200).json("Deleted!");
      else
        res
          .status(404)
          .json({ msg: `Position with id "${idPosition} not found!"` });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};
