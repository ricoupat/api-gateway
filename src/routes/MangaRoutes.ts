import { Router } from "express";
import { MangaController } from "../controllers/MangaController";
import { AuthMiddleware } from "@ricoupat/common-libs";

export default class MangaRoutes {
    public router: Router;
    private controller: MangaController;
    private authMiddleware: AuthMiddleware;

    constructor() {
        this.router = Router();
        this.controller = new MangaController();
        this.authMiddleware = new AuthMiddleware();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/trending",this.authMiddleware.authentification, this.controller.trending);
        this.router.get("/newest",this.authMiddleware.authentification, this.controller.newest);
        this.router.post("/search",this.authMiddleware.authentification, this.controller.search);
        this.router.get("/info/:id",this.authMiddleware.authentification, this.controller.info);
        this.router.get("/chapter/:id",this.authMiddleware.authentification, this.controller.chapter);
    }
}