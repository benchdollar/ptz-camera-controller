import  testImage from '../assets/testimage_fullhd.gif'

const DEFAULT_IMAGE = testImage;

export default class Preset {
    private id: number;
    private title: string;
    private image: string;

    constructor(id: number, title: string, image?: string) {
        this.id = id;
        this.title = title
        this.image = image ? image : DEFAULT_IMAGE;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getImage(): string {
        return this.image;
    }

}
