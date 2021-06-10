import { BlackAndWhiteFilter } from "./BlackAndWhiteFilter";
import { ImageStorage } from "./ImageStorage";
import { JpegCompressor } from "./JpegCompressor";
import { PngCompressor } from "./PngCompressor";

var imageStorage = new ImageStorage();
imageStorage.store('a',new JpegCompressor(), new BlackAndWhiteFilter());
imageStorage.store('a',new PngCompressor(), new BlackAndWhiteFilter());