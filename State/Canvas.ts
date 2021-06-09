import { Tool } from "./Tool";

export class Canvas {
 
    private currentTool!: Tool;


    mouseUp(): void{
        this.currentTool.mouseUp();
    }
    mouseDown(): void{
        this.currentTool.mouseDown();
    }

    getCurrentTool(): Tool{
        return this.currentTool;
    }

    setCurrentTool(currentTool: Tool): void{
        this.currentTool = currentTool;
    }
}