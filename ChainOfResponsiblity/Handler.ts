import { HttpRequest } from "./HttpRequest";

export abstract class Handler {
    private next: Handler;

    constructor(next: Handler) {
        this.next = next;
    }

    handle(request: HttpRequest): void {
        if(this.doHandle(request)) {
            return;
        }
        if(this.next != null) {
            this.next.handle(request);
        }
    }

    abstract doHandle(request: HttpRequest): boolean;

}