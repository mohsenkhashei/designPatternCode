export class HtmlDocument {
    private content!: string;

    getContent(): string {
        return this.content;
    }

    setContent(content: string): void {
        this.content = content;
    }

    makeBold(): void {
        this.content = '<b>' + this.content + '</b>';
    }
}