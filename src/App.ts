import express, { Application } from "express";
import MediaRoutes from "./routes/MediaRoutes";
import LibraryRoutes from "./routes/LibraryRoutes";

export default class App {
    public app: Application;
    private readonly port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
    }

    private initializeRoutes() {
        this.app.use("/media", new MediaRoutes().router);
        this.app.use("/library", new LibraryRoutes().router);

        this.app.get("/health", (_, res) => {
            res.json({ status: "ok" });
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`✅ Server running`);
        });
    }
}