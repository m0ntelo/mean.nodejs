import { Schema, model } from "mongoose";
import { MensagemInterface } from "../interfaces/mensagem.interface";

interface MensagemModel extends MensagemInterface, Document {}

const MensagemSchema = new Schema({
  texto: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  remetente: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    require: true
  },
  destinatario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    require: true
  }
});

export default model<MensagemModel>('Mensagem', MensagemSchema)