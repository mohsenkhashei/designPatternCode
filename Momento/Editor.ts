import { EditorState } from "./EditorState";

export class Editor{
    private content!: string; 

    getContent(): string{
        return this.content;
    }

    setContent(content: string): void{
        this.content = content;
    }

    createState(): EditorState{
        return new EditorState(this.content);
    }

    restore(state: EditorState): void{
        this.content = state.getContent();
    }

}