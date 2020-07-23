;"use strict";
import * as cons from "./inout.mjs";

// +++++++++++++++++++++++++++++++++++++++++++++++
// INPUT PRESSES
export let command = document.getElementById("text-input");
export let terminal = document.getElementById("terminal");
export let previous_commands = []; 
export let previous_position = 0;
export var print_fuct = cons.log;
export var parse_func = cons.use_command;



export function use_event(event) {
    
    if (event.key === "Enter") {
        // handle command submission
        event.preventDefault();
        if (command.value != "") { // only do stuff if the text input box has stuff in it
        
            if (previous_commands[previous_commands.length - 1] != command.value) { // only track commands that aren't the same as the previous command
                previous_commands.push(command.value);
            }
            // display that the command that has been entered
            cons.log(command.value);
            cons.use_command(command.value);
        }
        command.value = ""; // reset the text input box
        previous_position = 0; 
    }
    if (event.key === "ArrowUp") {
        // get previous command
        event.preventDefault();
        if (previous_commands.length + previous_position != 0){ //only go to the previous command if there is a previous command
        previous_position -=1;
        }
        command.value = previous_commands[previous_commands.length + previous_position];
    }
    if (event.key === "ArrowDown") {
        // go the other way with previous commands
        event.preventDefault();
        if (previous_position < 0) { // don't go past the current line
            previous_position += 1;
            
        }
        if (previous_position < 0) {  //only show options that aren't the regular one
            command.value = previous_commands[previous_commands.length + previous_position];
        } else {
            command.value = ""; // otherwise display the blank regular one
        }
    
    }

};
