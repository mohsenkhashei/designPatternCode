import { BlackAndWhiteCommand } from "./BlackAndWhiteCommand";
import { CompositeCommand } from "./CompositeCommand";
import { ResizeCommand } from "./ResizeCommand";

var composite = new CompositeCommand();
composite.add(new ResizeCommand());
composite.add(new BlackAndWhiteCommand());
composite.execute();