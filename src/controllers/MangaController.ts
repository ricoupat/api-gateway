import { Request, Response } from "express";
import {MangaService} from "../services/MangaService";

export class MangaController {
    private service: MangaService;

    constructor() {
        this.service = new MangaService();
    }

    trending = async (req: Request, res: Response) => {
        try {
            const data = await this.service.trending();
            res.status(201).json(data);
        } catch (err) {
            res.status(400)
        }
    };

    newest = async (req: Request, res: Response) => {
        try {
            const data = await this.service.newest();
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
            const { id } = req.params;
            const data = await this.service.info(id);
            res.json(data);
        } catch (err) {
            res.status(400)
        }
    };

    chapter = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const data = await this.service.chapter(id);
        } catch (err) {
            res.status(400)
        }
    }
}