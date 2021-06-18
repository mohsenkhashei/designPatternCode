import { Component } from "./Component";

export class Shape implements Component{
    move(): void {
        console.log('move shape');

    }
    render(): void {
        console.log('render shape');
    }
}