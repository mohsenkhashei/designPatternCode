import { State } from "./State";
import { StoppedState } from "./StoppedState";
import { Stopwatch } from "./Stopwatch";


export class RunningState implements State{

    private stopwatch: Stopwatch;

    constructor(stopwatch: Stopwatch){
        this.stopwatch = stopwatch;
    }

    click(): void {
        this.stopwatch.setCurrentState(new StoppedState(this.stopwatch));
        console.log('Stopped');

    }

}