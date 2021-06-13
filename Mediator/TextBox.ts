import { UIControl } from "./UIControl";

export class TextBox extends UIControl {
    private content!: string;

    getContent(): string {
        return this.content;
    }

    setContent(content: string): void {
        this.content = content;
        this.notifyEventHandlers();
    }
}