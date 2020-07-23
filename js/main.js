import * as cons from "./modules/inout.mjs";
import * as input from "./modules/input.mjs";
import * as room from "./modules/room.mjs";
import * as player from "./modules/player.mjs";


cons.command.addEventListener("keydown", event  => {input.use_event(event)});


var my_room = new room.room();
my_room.load("../js/json/my_room.json");


player.set_current_room(my_room);