import { Team } from "./Team";

export class Group implements Team {
    private team: Team[] = new Array;

    add(team: Team): void {
        this.team.push(team);
    }
    Truck(): void {
        this.team.forEach(element => {
            element.Truck();
        })
    }
    Human(): void {
        this.team.forEach(element => {
            element.Human();
        })
    }

}