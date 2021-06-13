import { EventHandler } from "./EventHandler";

export abstract class UIControl {
    private eventHandler: EventHandler[] = new Array;

    addEventHandler(observer: EventHandler): void {
        this.eventHandler.push(observer);
    }

    protected notifyEventHandlers(): void {
        this.eventHandler.forEach(observer =>{
            observer.handle();
        })
    }
}