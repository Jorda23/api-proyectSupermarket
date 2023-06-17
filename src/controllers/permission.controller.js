import { permissionModel } from "../models/permission.model.js";
import { validationResult } from "express-validator";
import { verifyToken } from "../middleware/verifyToken.js"

export const findAllPermissions = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const { count, rows } = await permissionModel.findAndCountAll();
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

    const errors = validationResult(req);

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await verifyToken(token);

      const permission = await permissionModel.create(columns);

      res.status(200).json({
        msg: "Permission created successfully!",
        permission,
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
    const { idPermission } = req.params;

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const permission = await permissionModel.destroy({
        where: { idPermission },
      });

      if (permission) res.status(200).json("Deleted!");
      else
        res
          .status(404)
          .json({ msg: `Permission with id "${idPermission} not found!"` });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};
