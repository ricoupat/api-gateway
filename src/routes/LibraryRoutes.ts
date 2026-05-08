import { Router } from "express";
import { LibraryController } from "../controllers/LibraryController";
import { AuthMiddleware } from "@ricoupat/common-libs";

export default class LibraryRoutes {
    public router: Router;
    private controller: LibraryController;
    private authMiddleware: AuthMiddleware;

    constructor() {
        this.router = Router();
        this.controller = new LibraryController();
        this.authMiddleware = new AuthMiddleware();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/book/trending",this.authMiddleware.authentification, this.controller.bookTrending);
        this.router.get("/manga/trending",this.authMiddleware.authentification, this.controller.mangaTrending);

        this.router.get("/book/newest",this.authMiddleware.authentification, this.controller.bookNewest);
        this.router.get("/manga/newest",this.authMiddleware.authentification, this.controller.mangaNewest);

        this.router.post("/search",this.authMiddleware.authentification, this.controller.search);

        this.router.get("/info/:id",this.authMiddleware.authentification, this.controller.info);

        this.router.get("/sources/:media-id/:chapter-id",this.authMiddleware.authentification, this.controller.sources);
    }
}