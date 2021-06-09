import { BrushTool } from "./BrushTool";
import { Canvas } from "./Canvas";
import { SelectionTool } from "./SelectionTool";

var canvas = new Canvas();
canvas.setCurrentTool(new SelectionTool());
console.log(canvas.mouseDown());
console.log(canvas.mouseUp());

canvas.setCurrentTool(new BrushTool());
console.log(canvas.mouseDown());
console.log(canvas.mouseUp());