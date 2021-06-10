import { Filter } from "./Filter";

export class BlackAndWhiteFilter implements Filter{
    apply(fileName: string): void {
        console.log('Applying B@W');
    }

}