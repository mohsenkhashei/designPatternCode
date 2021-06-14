import { Handler } from "./Handler";
import { HttpRequest } from "./HttpRequest";

export class Logger extends Handler {
    constructor(next: Handler) {
        super(next);
    }

    doHandle(request: HttpRequest): boolean {
        console.log("Log");
        return false;
    }
   
}