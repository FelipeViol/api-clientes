import { Request, Response } from "express";
import { listarClientes, obterCliente, criarCliente, editarCliente, excluirCliente } from "../services/clienteService";

export const getAllClientes = async (req: Request, res: Response) => {
    const clientes = await listarClientes();
    res.json(clientes);
};

export const getCliente = async (req: Request, res: Response) => {
    const cliente = await obterCliente(req.params.id);
    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).json({ message: "Cliente não encontrado" });
    }
};

export const createCliente = async (req: Request, res: Response) => {
    const cliente = await criarCliente(req.body);
    res.status(201).json(cliente);
};

export const updateCliente = async (req: Request, res: Response) => {
    const cliente = await editarCliente(req.params.id, req.body);
    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).json({ message: "Cliente não encontrado" });
    }
};

export const deleteCliente = async (req: Request, res: Response) => {
    const cliente = await excluirCliente(req.params.id);
    if (cliente) {
        res.json({ message: "Cliente excluído" });
    } else {
        res.status(404).json({ message: "Cliente não encontrado" });
    }
};
