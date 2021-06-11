import { UndoableCommand } from "./UndoableCommand";

export class History {
    private command: UndoableCommand[] = new Array;

    push(command: UndoableCommand): void {
        this.command.push(command);
    }

    pop(): UndoableCommand {
        return this.command.pop()!; // ! exclamation mark = Type 'UndoableCommand | undefined' is not assignable to type 'UndoableCommand'.
                                        //Type 'undefined' is not assignable to type 'UndoableCommand'.
    }

    size(): number {
        return this.command.length;
    }
}