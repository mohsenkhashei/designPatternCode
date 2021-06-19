import { Team } from "./Team";

export class Subteam implements Team {
    Truck(): void {
        console.log('one truck');
    }
    Human(): void {
        console.log('two persons');
    }
     
}