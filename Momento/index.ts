import { Editor } from "./Editor";
import { History } from "./history";

var editor = new Editor();
var history = new History();

editor.setContent('a');
history.push(editor.createState());
console.log(editor.getContent());
editor.setContent('b');
history.push(editor.createState());
console.log(editor.getContent());
editor.setContent('c');
console.log(editor.getContent());


editor.restore(history.pop());
console.log(editor.getContent());
