"use strict";


let command = document.getElementById("text-input");
let terminal = document.getElementById("terminal");
let previous_commands = []; 
let previous_position = 0;

command.addEventListener("keydown", (event) => {
    
    if (event.key === "Enter") {
        // handle command submission
        event.preventDefault();
        if (command.value != "") { // only do stuff if the text input box has stuff in it
        
            if (previous_commands[previous_commands.length - 1] != command.value) { // only track commands that aren't the same as the previous command
                previous_commands.push(command.value);
            }
            // display that the command that has been entered
            print(command.value);
            use_command(command.value);
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

});

// print stuff duh
function print(message) {
    terminal.insertAdjacentHTML("beforeend", "<p>" + message + "</p>");
    terminal.scrollTop = terminal.scrollHeight; // ensure that the terminal follows the new inputs
}

// do stuff on input
function use_command(command) {
    if (command === "DOOOM") {
        for(let i = 0; i < 10; i++)
        {
            print("DOOOOOOOOOOOOOOM");
        }
    } else if (command === "clear") {
        terminal.innerHTML = "";
    }

}



let seconds_passed;
let old_time_stamp;
let fps;
function game_loop(time_stamp) {
    // calculate the number of seconds passed since the last frame
    seconds_passed = (time_stamp-old_time_stamp) / 1000;
    old_time_stamp = time_stamp;

    // calculate fps
    fps = Math.round(1/seconds_passed);

    window.requestAnimationFrame(gameLoop);
}

game_loop();








/* canvas
// canvas part

function setupCanvas(canvas) {
    // Get the device pixel ratio, falling back to 1.
    var dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    var rect = canvas.getBoundingClientRect();
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext('2d');
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    ctx.scale(dpr, dpr);
    return ctx;
}

let map_canvas = document.getElementById("map");
let ctx = setupCanvas(map_canvas);
// draw a red square
//ctx.fillStyle = "#FF0000";
//ctx.fillRect(100, 100, 200, 200);

map = {

}
*/