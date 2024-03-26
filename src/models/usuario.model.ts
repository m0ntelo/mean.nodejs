import { Schema, model, Document } from "mongoose";
import { UsuarioInterface } from "../interfaces/usuario.interface";
import bcrypt from "bcrypt";

interface UsuarioModel extends UsuarioInterface, Document {}

const UsuarioSchema = new Schema({
  nome: {
    type: String,
    require: true
  },
  senha: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
    require: false
  }
});

UsuarioSchema.pre<UsuarioModel>('save', async function criptografarSenha() {
  this.senha = await bcrypt.hash(this.senha, 8)
})

UsuarioSchema.pre<UsuarioModel>('save', async function gerarAvatar() {
  const randomId = Math.floor(Math.random() * (1000000)) + 1

  this.avatar = `https://api.adorable.io/avatars/285/${randomId}.png`
})

export default model<UsuarioModel>('Usuario', UsuarioSchema)