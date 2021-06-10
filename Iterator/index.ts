import { BrowseHistory } from "./BrowseHistory";
import { Iterator } from "./Iterator";

var history = new BrowseHistory();

history.push("a");
history.push("b");
history.push("c");
history.push("d");

var iterator: Iterator = history.createIterator();
while (iterator.hasNext()){
    var url = iterator.current();
    console.log(url);
    iterator.next();
}