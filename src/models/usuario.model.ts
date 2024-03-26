import { Schema, model } from "mongoose";

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

export default model('Usuario', UsuarioSchema)