import { Group } from "./Group";
import { Shape } from "./Shape";

var group1 = new Group();
group1.add(new Shape());
group1.add(new Shape());

var group2 = new Group();
group2.add(group1);
group2.add(group1);
group2.render();
group2.move();