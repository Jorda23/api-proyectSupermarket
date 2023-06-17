import express from "express";
import cors from "cors";
import { DATABASE, PORT } from "./config/EnvConfig.js";
import sequelize from "./database/connection.js";
import apiRouter from "./routes/index.js";
import { userModel } from "./models/user.model.js";
import { permissionModel } from "./models/permission.model.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Rutas de la API
app.use("/api/v1", apiRouter); // Quité la barra final en el prefijo de la API

async function main() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log("Successfully connected to the database --> " + DATABASE);

    await createDefaultAdmin();

    console.log("Default admin user created.");
  } catch (error) {
    console.log(error);
  }
}

async function createDefaultAdmin() {
  const defaultAdmin = {
    userName: "admin",
    password: "password",
    permission: {
      permissionName: "admin",
    },
  };

  const [adminUser, created] = await userModel.findOrCreate({
    where: { userName: defaultAdmin.userName },
    defaults: defaultAdmin,
    include: [permissionModel],
  });

  if (created) {
    console.log("Default admin user created.");
  } else {
    console.log("Admin user already exists.");
  }

  console.log("Admin user ID:", adminUser.idUser);

  if (adminUser.permission) {
    adminUser.permission.idPermission = adminUser.idUser;
    await adminUser.permission.save();
    console.log("Admin permission ID updated.");
  }
}

main();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
