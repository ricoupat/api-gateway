import { Request } from "express";
import {HttpClient} from "@ricoupat/common-libs";

export class StreamingRepository {
    private client: HttpClient;

    constructor() {
        this.client = new HttpClient(process.env.BASE_URL || "", process.env.MANGA_BACKEND_KEY);
    }

    async getMovieTrending() {
        return this.client.get("/movie/trending");
    }

    async getSeriesTrending() {
        return this.client.get("/series/trending");
    }

    async getMovieNewest() {
        return this.client.get("/movie/trending");
    }

    async getSeriesNewest() {
        return this.client.get("/series/trending");
    }

    async postStreaming(req: Request) {
        return this.client.post("/search", req);
    }

    async getInfo(id: string) {
        return this.client.get(`/info/${id}`);
    }

    async getSources(media_id: string, episode_id: string) {
            return this.client.get(`/chapter/${media_id}/${episode_id}`)
    }
}