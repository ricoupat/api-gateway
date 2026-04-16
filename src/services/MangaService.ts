import { Request } from "express";
import {MangaRepository} from "../repositories/MangaRepository";

export class MangaService {
    private repository: MangaRepository;

    constructor() {
        this.repository = new MangaRepository();
    }

    async trending() {
        const data = await this.repository.getTrending();
        return data.result.map((res: any) => ({
            id: res.id,
            title: res.title,
            description: res.description,
            image: res.image
        }));
    }

    async newest() {
        const data = await this.repository.getNewest();
        return data.result.map((res: any) => ({
            id: res.id,
            title: res.title,
            description: res.description,
            image: res.image
        }));
    }

    async search(req: Request) {
        const data = await this.repository.postManga(req);
        return data.result.map((res: any) => ({
            id: res.id,
            title: res.title,
            description: res.description,
            image: res.image
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
            "chapters": data.result.chapters,
            "genres": data.result.genres,
            "authors": data.result.authors
        };
    }

    async chapter(id: string) {
        const data = await this.repository.getChapter(id);
        return data.map((res: any) => ({
            image: res.image,
            page: res.page
        }));
    }
}