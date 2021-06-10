import { Compressor } from "./Compressor";

export class PngCompressor implements Compressor{
    compress(fileName: string): void {
        console.log('Compressing using PNG compressor');
    }

}