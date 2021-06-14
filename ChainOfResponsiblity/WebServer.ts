import { Handler } from "./Handler";
import { HttpRequest } from "./HttpRequest";

export class Webserver {
    private handler: Handler;

    constructor(handler: Handler) {
        this.handler = handler;
    }

    handle(request: HttpRequest): void {
        this.handle(request); 
    }
}