import { HtmlNode } from "./HtmlNode";
import { Operation } from "./Operation";

export class HtmlDocument {
    private nodes: HtmlNode[] = new Array;

    add(node: HtmlNode): void {
        this.nodes.push(node);
    }

    execute(operation: Operation): void {
        for(var item in this.nodes){
            this.nodes[item].execute(operation);
        }
    }
}