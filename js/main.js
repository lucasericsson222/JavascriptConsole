import * as cons from "./modules/inout.mjs";
import * as input from "./modules/input.mjs";
import * as room from "./modules/room.mjs";
import * as player from "./modules/player.mjs";


cons.command.addEventListener("keydown", event  => {input.use_event(event)});


var my_room = new room.room();
my_room.id = 1;
my_room.name = "HELLO WORLD";
my_room.desc = "LONG DESCRIPTION </br> isn't this dual line cool </br> probably will change this one day to allow </br> multiline without html";
my_room.coord = [1,1,1];
my_room.print_desc();

player.set_current_room(my_room);