import { UIControl } from "./UIControl";

export class ListBox extends UIControl {
    private selection!: string;

    getSelection(): string {
        return this.selection;
    }

    setSelection(selection: string): void {
        this.notifyEventHandlers();
    }
}