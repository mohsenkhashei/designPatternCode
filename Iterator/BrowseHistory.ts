import { Iterator } from './Iterator';

export class BrowseHistory{
    urls: string[] = new Array;

    push(url: string): void{
        this.urls.push(url);
    }

    pop(): string {
        var lastIndex = this.urls.length - 1;
        var lastUrl = this.urls[lastIndex];
        this.urls.splice(lastIndex, 1);

        return lastUrl;
    }

    getUrls(): string[] {
        return this.urls;
    }

    createIterator(): Iterator{
        return new ListIterator(this);
    }

}
export class ListIterator implements Iterator{
    private history!: BrowseHistory;
    private index: number = 0;

    constructor(history: BrowseHistory){
        this.history = history;
    }

    hasNext(): boolean {
        return (this.index < this.history.urls.length);
    }
    current(): string {
        return this.history.urls[this.index];
    }
    next(): void {
        this.index++;
    }

}



