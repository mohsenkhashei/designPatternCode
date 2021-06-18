import { Component } from "./Component";

export class Group implements Component {
    private components: Component[] = new Array;
    
    add(comp: Component): void {
        this.components.push(comp);
    }
    
    render(): void {
        this.components.forEach((comp: Component) => {
            comp.render();
        })
    }

    move(): void {
        this.components.forEach((comp: Component) => {
            comp.move();
        })
    }
}