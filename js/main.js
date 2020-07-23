import * as cons from "./modules/inout.mjs";
import * as input from "./modules/input.mjs";

cons.command.addEventListener("keydown", event  => {input.use_event(event)});
