import { AnchorNode } from "./AnchorNode";
import { HeadingNode } from "./HeadingNode";
import { HighlightOperation } from "./HighlightOperation";
import { HtmlDocument } from "./HtmlDocument";
import { PlainTextOperation } from "./PlainTextOperation";

var document = new HtmlDocument();
document.add(new HeadingNode());
document.add(new AnchorNode());
document.execute(new HighlightOperation());
document.execute(new PlainTextOperation());