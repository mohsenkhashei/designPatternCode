import { AnchorNode } from "./AnchorNode";
import { HeadingNode } from "./HeadingNode";

export interface Operation {
    apply(heading: HeadingNode): void;
    apply(anchor: AnchorNode): void;
}