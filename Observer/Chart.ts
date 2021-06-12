import { DataSource } from "./DataSource";
import { Observer } from "./Observer";

export class Chart implements Observer {

    update(value: number): void {
        console.log("Chart got updated: " + value)
    }

}