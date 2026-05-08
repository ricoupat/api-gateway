import { Router } from "express";
import { MediaController } from "../controllers/MediaController";
import { AuthMiddleware } from "@ricoupat/common-libs";

export default class MangaRoutes {
    public router: Router;
    private controller: MediaController;
    private authMiddleware: AuthMiddleware;

    constructor() {
        this.router = Router();
        this.controller = new MediaController();
        this.authMiddleware = new AuthMiddleware();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/movie/trending",this.authMiddleware.authentification, this.controller.movieTrending);
        this.router.get("/series/trending",this.authMiddleware.authentification, this.controller.seriesTrending);
        this.router.get("/movie/newest",this.authMiddleware.authentification, this.controller.movieNewest);
        this.router.get("/series/newest",this.authMiddleware.authentification, this.controller.seriesNewest);
        this.router.post("/search",this.authMiddleware.authentification, this.controller.search);
        this.router.get("/info/:id",this.authMiddleware.authentification, this.controller.info);
        this.router.get("/sources/:media-id/:episode-id",this.authMiddleware.authentification, this.controller.sources);
    }
}