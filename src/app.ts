import express from "express";
import { connectDB } from "./config/db";
import clienteRoutes from "./routes/clienteRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api", clienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
