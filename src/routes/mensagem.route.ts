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

export default mensagemRoute