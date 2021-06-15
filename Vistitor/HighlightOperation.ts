import { AnchorNode } from "./AnchorNode";
import { HeadingNode } from "./HeadingNode";
import { Operation } from "./Operation";

export class HighlightOperation implements Operation {
    apply(heading: HeadingNode | AnchorNode): void {
        if(heading instanceof HeadingNode) {
            console.log('highlight-heading');
        }
        if(heading instanceof AnchorNode) {
            console.log('highlight-anchor');
        }
    }

}