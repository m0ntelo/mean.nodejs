import { Router } from "express"
import usuarioController from "../controllers/usuario.controller"
import authMiddlewares from "../middlewares/auth.middlewares";

const usuarioRoute = Router()

usuarioRoute.post('/cadastro', usuarioController.cadastrar)
usuarioRoute.post('/login', usuarioController.autenticar)
usuarioRoute.get(
  '/:id',
  authMiddlewares.autorizarUsuarioByParams, 
  authMiddlewares.autorizarUsuarioByToken,
  usuarioController.autenticar
)

export default usuarioRoute
