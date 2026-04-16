import { Request } from "express";
import {HttpClient} from "@ricoupat/common-libs";

export class MangaRepository {
    private client: HttpClient;

    constructor() {
        this.client = new HttpClient(process.env.BASE_URL || "", process.env.MANGA_BACKEND_KEY);
    }

    async getTrending() {
        return this.client.get("/trending");
    }

    async getNewest() {
        return this.client.get("/newest");
    }

    async postManga(req: Request) {
        return this.client.post("/search", req);
    }

    async getInfo(id: string) {
        return this.client.get(`/info/${id}`);
    }

    async getChapter(id: string) {
        return this.client.get(`/chapter/${id}`)
    }
}