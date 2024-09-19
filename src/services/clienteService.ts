import { ICliente } from "../models/clienteModel";
import { getClientes, getClienteById, createCliente, updateCliente, deleteCliente } from "../repositories/clienteRepository";

export const listarClientes = async (): Promise<ICliente[]> => {
  return getClientes();
};

export const obterCliente = async (id: string): Promise<ICliente | null> => {
  return getClienteById(id);
};

export const criarCliente = async (data: ICliente): Promise<ICliente> => {
  return createCliente(data);
};

export const editarCliente = async (id: string, data: Partial<ICliente>): Promise<ICliente | null> => {
  return updateCliente(id, data);
};

export const excluirCliente = async (id: string): Promise<ICliente | null> => {
  return deleteCliente(id);
};
