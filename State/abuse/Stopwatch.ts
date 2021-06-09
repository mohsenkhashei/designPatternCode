import { State } from "./State";
import { StoppedState } from "./StoppedState";

export class Stopwatch{
    private currentState: State = new StoppedState(this);

    getCurrentState() {
        return this.currentState;
    }

    setCurrentState(currentState: State) {
        this.currentState = currentState;
    }

    click(): void {
        this.currentState.click();
    }

    //Abuse this if and else to more complex implementation
    // click(): void {
    //     if(isRunning){
    //         isRunning = false;
    //         console.log('stopped');
    //     }else{
    //         isRunning = true;
    //         console.log('Running');
    //     }
    // }
}