import { Router } from "express";
import CategoriaController from "../controller/ProductosController";

const routes= Router();

routes.get("", CategoriaController.getAll)
routes.get("/getOne/:id", CategoriaController.getOne)
routes.post("", CategoriaController.create)
/*
routes.put("/:id", CategoriaController.update)
routes.delete("/:id", CategoriaController.delete)
*/

export default routes;