import { EditorState } from "./EditorState";

export class History<EditorState>{
    private states:EditorState[] = new Array ; // Array of T 

    push(state: EditorState): void {
        this.states.push(state);
    }

    pop(): any {
        var lastIndex = this.states.length - 1;
        var lastState = this.states[lastIndex];
        this.states.splice(lastIndex, 1);

        return lastState;

    }
    
  
}