import { Request } from "express";
import { HttpClient } from "@ricoupat/common-libs";

export class LibraryRepository {
    private client: HttpClient;

    constructor() {
        this.client = new HttpClient(process.env.BASE_URL || "", process.env.MANGA_BACKEND_KEY);
    }

    async getBookTrending() {
        return this.client.get("/book/trending");
    }

    async getMangaTrending() {
        return this.client.get("/manga/trending");
    }

    async getBookNewest() {
        return this.client.get("/book/trending");
    }

    async getMangaNewest() {
        return this.client.get("/manga/trending");
    }

    async postReading(req: Request) {
        return this.client.post("/search", req);
    }

    async getInfo(id: string) {
        return this.client.get(`/info/${id}`);
    }

    async getSources(media_id: string, episode_id: string) {
        return this.client.get(`/chapter/${media_id}/${episode_id}`)
    }
}