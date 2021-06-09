
export class EditorState{
    readonly content: string;

    constructor(content: string){
        this.content = content;
    }

    getContent(): string{
        return this.content;
    }
}