import { Request } from "express";
import {LibraryRepository} from "../repositories/LibraryRepository";

export class LibraryService {
    private repository: LibraryRepository;

    constructor() {
        this.repository = new LibraryRepository();
    }

    async bookTrending() {
        const data = await this.repository.getBookTrending();
        return data.result.map((res: any) => ({
            id: res.id,
            title: res.title,
            description: res.description,
            image: res.image,
            type: res.type
        }));
    }

    async mangaTrending() {
        const data = await this.repository.getMangaTrending();
        return data.result.map((res: any) => ({
            id: res.id,
            title: res.title,
            description: res.description,
            image: res.image,
            type: res.type
        }));
    }

    async bookNewest() {
        const data = await this.repository.getBookNewest();
        return data.result.map((res: any) => ({
            id: res.id,
            title: res.title,
            description: res.description,
            image: res.image,
            type: res.type
        }));
    }

    async mangaNewest() {
        const data = await this.repository.getMangaNewest();
        return data.result.map((res: any) => ({
            id: res.id,
            title: res.title,
            description: res.description,
            image: res.image,
            type: res.type
        }));
    }

    async search(req: Request) {
        const data = await this.repository.postReading(req);
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
            "type": data.type,
            "genres": data.result.genres,
            "author": data.result.author,
            "chapters": data.result.chapters,
        };
    }

    async sources(media_id: string, chapter_id: string) {
        const data = await this.repository.getSources(media_id, chapter_id);
        return data.map((res: any) => ({
            media: res.media.url,
        }));
    }
}