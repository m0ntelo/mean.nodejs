import { Router } from "express";
import mensagemController from "../controllers/mensagem.controller";
import authMiddlewares from "../middlewares/auth.middlewares";

const mensagemRoute = Router()

mensagemRoute.post(
  '/:id',
  authMiddlewares.autorizarUsuarioByParams,
  authMiddlewares.autorizarUsuarioByToken, 
  mensagemController.enviar
)

mensagemRoute.get(
  '/:id',
  authMiddlewares.autorizarUsuarioByParams,
  authMiddlewares.autorizarUsuarioByToken, 
  mensagemController.listar
)

export default mensagemRoute