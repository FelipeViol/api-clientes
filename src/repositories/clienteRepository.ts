import { Cliente, ICliente } from "../models/clienteModel";

export const getClientes = async (): Promise<ICliente[]> => {
  return Cliente.find();
};

export const getClienteById = async (id: string): Promise<ICliente | null> => {
  return Cliente.findById(id);
};

export const createCliente = async (data: ICliente): Promise<ICliente> => {
  const cliente = new Cliente(data);
  return cliente.save();
};

export const updateCliente = async (id: string, data: Partial<ICliente>): Promise<ICliente | null> => {
  return Cliente.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCliente = async (id: string): Promise<ICliente | null> => {
  return Cliente.findByIdAndDelete(id);
};
