import { Group } from "./Group";
import { Subteam } from "./Subteam";


var team = new Group();
team.add(new Subteam());

var group = new Group();
group.add(team);
group.Truck();
group.Human();

var team1 = new Group();
team1.add(new Subteam());

var group1 = new Group();
group1.add(team1);
group1.Truck();
group1.Human();