import { AnchorNode } from "./AnchorNode";
import { HeadingNode } from "./HeadingNode";
import { Operation } from "./Operation";

export class PlainTextOperation implements Operation {
    apply(heading: HeadingNode | AnchorNode): void {
        if(heading instanceof HeadingNode) {
            console.log('text-heading');
        }
        if(heading instanceof AnchorNode) {
            console.log('text-anchor');
        }
    }

}