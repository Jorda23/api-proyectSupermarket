import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../models/user.model.js";
import { validationResult } from "express-validator";
import { verifyToken } from "../middleware/verifyToken.js";

const JWT_SECRET_KEY = "645324853478";
const EXPIRATION_MINUTES = "30m";

export const findAllUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const { count, rows } = await userModel.findAndCountAll();
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

export const registerUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { userName, password } = req.body;

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const hashedPassword = await bcrypt.hash(password, 10); // Encriptar la contraseña con un factor de costo de 10

      const userCreate = await userModel.create({
        userName,
        password: hashedPassword,
      });

      res.status(200).json({
        msg: "User created successfully!",
        userCreate,
      });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export const loginUser = async (req, res) => {
  const columns = req.body;

  try {
    const user = await userModel.findOne({
      where: columns,
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid userName or password" })
        .end();
    }

    const payload = {
      userName: user.userName,
      password: user.password,
    };

    const accessToken = jwt.sign(payload, JWT_SECRET_KEY, {
      expiresIn: EXPIRATION_MINUTES,
    });

    res
      .json({
        access_token: accessToken,
        token_type: "Bearer",
        expires_in: EXPIRATION_MINUTES,
      })
      .end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};
