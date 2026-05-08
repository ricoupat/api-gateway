import { Request, Response } from "express";
import { LibraryService } from "../services/LibraryService";

export class LibraryController {
    private service: LibraryService;

    constructor() {
        this.service = new LibraryService();
    }

    bookTrending = async (req: Request, res: Response) => {
        try {
            const data = await this.service.bookTrending();
            res.status(201).json(data);
        } catch (err) {
            res.status(400)
        }
    };

    mangaTrending = async (req: Request, res: Response) => {
        try {
            const data = await this.service.mangaTrending();
            res.status(201).json(data);
        } catch (err) {
            res.status(400)
        }
    };

    bookNewest = async (req: Request, res: Response) => {
        try {
            const data = await this.service.bookNewest();
            res.status(201).json(data);
        } catch (err) {
            res.status(400)
        }
    };

    mangaNewest = async (req: Request, res: Response) => {
        try {
            const data = await this.service.mangaNewest();
            res.status(201).json(data);
        } catch (err) {
            res.status(400)
        }
    };

    search= async (req: Request, res: Response) => {
        try {
            const data = await this.service.search(req);
            res.status(201).json(data);
        } catch (err) {
            res.status(400)
        }
    };

    info = async (req: Request, res: Response) => {
        try {
            const mediaId = req.params.id;
            const data = await this.service.info(<string>mediaId);
            res.json(data);
        } catch (err) {
            res.status(400)
        }
    };

    sources = async (req: Request, res: Response) => {
        try {
            const mediaId = req.params.id;
            const chapterId = req.params.cid;
            const data = await this.service.sources(<string>mediaId, <string>chapterId);
            res.status(201).json(data)
        } catch (err) {
            res.status(400)
        }
    }
}