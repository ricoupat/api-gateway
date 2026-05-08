import { Request, Response } from "express";
import { MediaService } from "../services/MediaService";

export class MediaController {
    private service: MediaService;

    constructor() {
        this.service = new MediaService();
    }

    movieTrending = async (req: Request, res: Response) => {
        try {
            const data = await this.service.movieTrending();
            res.status(201).json(data);
        } catch (err) {
            res.status(400)
        }
    };

    seriesTrending = async (req: Request, res: Response) => {
        try {
            const data = await this.service.seriesTrending();
            res.status(201).json(data);
        } catch (err) {
            res.status(400)
        }
    };

    movieNewest = async (req: Request, res: Response) => {
        try {
            const data = await this.service.movieNewest();
            res.status(201).json(data);
        } catch (err) {
            res.status(400)
        }
    };

    seriesNewest = async (req: Request, res: Response) => {
        try {
            const data = await this.service.seriesNewest();
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
            const episodeId = req.params.epid;
            const data = await this.service.sources(<string>mediaId, <string>episodeId);
            res.status(201).json(data)
        } catch (err) {
            res.status(400)
        }
    }
}