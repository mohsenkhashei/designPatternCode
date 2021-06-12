import { DataSource } from "./DataSource";
import { Observer } from "./Observer";

export class SpreadSheet implements Observer {
   
    update(value: number): void {
        console.log("SpreadSheet got notified: " + value);
    }


}