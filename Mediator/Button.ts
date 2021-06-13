import { UIControl } from "./UIControl";

export class Button extends UIControl{
    private IsEnabled!: boolean;

    isEnabled(): boolean {
        return this.IsEnabled;
    }

    setEnabled(enabled: boolean) {
        this.IsEnabled = enabled;
        this.notifyEventHandlers();
    }
}