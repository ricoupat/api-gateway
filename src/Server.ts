import App from "./App";
import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT) || 4000;
const server = new App(PORT);

server.listen();