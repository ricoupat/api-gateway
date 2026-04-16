import { Router } from "express";
import { StreamingController } from "../controllers/StreamingController";
import { AuthMiddleware } from "@ricoupat/common-libs";

export default class MangaRoutes {
    public router: Router;
    private controller: StreamingController;
    private authMiddleware: AuthMiddleware;

    constructor() {
        this.router = Router();
        this.controller = new StreamingController();
        this.authMiddleware = new AuthMiddleware();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/movie/trending",this.authMiddleware.authentification, this.controller.trending);
        this.router.get("/series/trending",this.authMiddleware.authentification, this.controller.trending);
        this.router.get("/movie/newest",this.authMiddleware.authentification, this.controller.newest);
        this.router.get("/series/newest",this.authMiddleware.authentification, this.controller.newest);
        this.router.post("/search",this.authMiddleware.authentification, this.controller.search);
        this.router.get("/info/:id",this.authMiddleware.authentification, this.controller.info);
        this.router.get("/sources/:media-id/:episode-id",this.authMiddleware.authentification, this.controller.chapter);
    }
}