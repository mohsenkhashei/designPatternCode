import { Handler } from "./Handler";
import { HttpRequest } from "./HttpRequest";

export class Authenticator extends Handler {

    constructor(next: Handler) {
        super(next);
    }

    doHandle(request: HttpRequest): boolean {
        let isValid = (request.getUsername() == "admin" && request.getPassword() == "1234");
        console.log("Authentication");
        return !isValid;
    }
}