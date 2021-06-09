import { RunningState } from "./RunningState";
import { State } from "./State";
import { Stopwatch } from "./Stopwatch";

export class StoppedState implements State{

    private stopwatch: Stopwatch;

    constructor(stopwatch: Stopwatch) {
        this.stopwatch = stopwatch;
    }

    click(): void {
        this.stopwatch.setCurrentState(new RunningState(this.stopwatch));
        console.log('Running');
    }

}