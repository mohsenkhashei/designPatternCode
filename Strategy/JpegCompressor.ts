import { Compressor } from "./Compressor";

export class JpegCompressor implements Compressor {
    compress(fileName: string): void {
        console.log('Compressing using JPEG compressor');
    }

}