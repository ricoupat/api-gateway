import { Request } from "express";
import {StreamingRepository} from "../repositories/StreamingRepository";

export class StreamingService {
    private repository: StreamingRepository;

    constructor() {
        this.repository = new StreamingRepository();
    }

    async movieTrending() {
        const data = await this.repository.getMovieTrending();
        return data.result.map((res: any) => ({
            id: res.id,
            title: res.title,
            description: res.description,
            image: res.image,
            type: res.type
        }));
    }

    async seriesTrending() {
        const data = await this.repository.getSeriesTrending();
        return data.result.map((res: any) => ({
            id: res.id,
            title: res.title,
            description: res.description,
            image: res.image,
            type: res.type
        }));
    }

    async movieNewest() {
        const data = await this.repository.getMovieNewest();
        return data.result.map((res: any) => ({
            id: res.id,
            title: res.title,
            description: res.description,
            image: res.image,
            type: res.type
        }));
    }

    async seriesNewest() {
        const data = await this.repository.getSeriesNewest();
        return data.result.map((res: any) => ({
            id: res.id,
            title: res.title,
            description: res.description,
            image: res.image,
            type: res.type
        }));
    }

    async search(req: Request) {
        const data = await this.repository.postStreaming(req);
        return data.result.map((res: any) => ({
            id: res.id,
            title: res.title,
            description: res.description,
            image: res.image,
            type: res.type
        }));
    }

    async info(id: string) {
        const data = await this.repository.getInfo(id);
        return {
            "id": data.result.id,
            "title": data.result.title,
            "description": data.result.description,
            "image": data.result.image,
            "status": data.result.status,
            "duration": data.result.duration,
            "type": data.type,
            "genres": data.result.genres,
            "casts": data.result.casts,
            "totalEpisodes": data.result.totalEpisodes,
            "seasons": data.result.seasons,
            "episodes": data.result.episodes
        };
    }

    async sources(media_id: string, episode_id: string) {
        const data = await this.repository.getSources(media_id, episode_id);
        return data.map((res: any) => ({
            image: res.image,
            page: res.page
        }));
    }
}