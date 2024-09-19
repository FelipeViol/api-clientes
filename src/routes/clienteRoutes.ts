import { Router } from "express";
import { getAllClientes, getCliente, createCliente, updateCliente, deleteCliente } from "../controllers/clienteController";

const router = Router();

router.get("/clientes", getAllClientes);
router.get("/clientes/:id", getCliente);
router.post("/clientes", createCliente);
router.put("/clientes/:id", updateCliente);
router.delete("/clientes/:id", deleteCliente);

export default router;
