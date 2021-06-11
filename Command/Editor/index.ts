import { BoldCommand } from "./BoldCommand";
import { History } from "./History";
import { HtmlDocument } from "./HtmlDocument";
import { UndoCommand } from "./UndoCommand";

var history  = new History();
var document = new HtmlDocument();
document.setContent('hello world');

var boldCommand = new BoldCommand(document, history);
boldCommand.execute();
console.log(document.getContent());

// boldCommand.unexecute();
// console.log(document.getContent());

var undoCommand = new UndoCommand(history);
undoCommand.execute();
console.log(document.getContent());