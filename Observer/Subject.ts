import { Observer } from "./Observer";

export class Subject {
    private observers: Observer[] = new Array;

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }
    remvoeObserver(observer: Observer): void {
        let index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }

    notifyObservers(value: number): void {
        this.observers.forEach(element => {
            element.update(value);
        });
    }
}