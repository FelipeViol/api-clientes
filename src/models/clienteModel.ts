import mongoose, { Schema, Document } from "mongoose";

export interface ICliente extends Document {
  nome: string;
  idade: number;
  dataNascimento: Date;
  cpf: string;
}

const ClienteSchema: Schema = new Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  dataNascimento: { type: Date, required: true },
  cpf: { type: String, required: true, unique: true },
});

export const Cliente = mongoose.model<ICliente>("Cliente", ClienteSchema);
