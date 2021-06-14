import { Handler } from "./Handler";
import { HttpRequest } from "./HttpRequest";

export class Compressor extends Handler {

    constructor(next: Handler) {
        super(next);
    }
    doHandle(request: HttpRequest): boolean {
        console.log("Compress");
        return false;
    }
}