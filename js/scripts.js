let command = document.getElementById("text-input");
let terminal = document.getElementById("terminal");
let previous_commands = [];
let previous_position = 0;

command.addEventListener("keydown", (event) => {
    
    if (event.key === "Enter") {
        // handle command submission
        event.preventDefault();
        if (command.value != "") {
        
            if (previous_commands[previous_commands.length - 1] != command.value) {
                previous_commands.push(command.value);
            }
            terminal.insertAdjacentHTML("beforeend", "<p>" + command.value + "</p>");
        }
        command.value = "";
        terminal.scrollTop = terminal.scrollHeight;
        previous_position = 0;
    }
    if (event.key === "ArrowUp") {
        // get previous command
        event.preventDefault();
        if (previous_commands.length + previous_position != 0){
        previous_position -=1;
        }
        command.value = previous_commands[previous_commands.length + previous_position];
    }
    if (event.key === "ArrowDown") {
        // go the other way with previous commands
        event.preventDefault();
        if (previous_position < 0) {
            previous_position += 1;
            
        }
        if (previous_position < 0) {
            command.value = previous_commands[previous_commands.length + previous_position];
        } else {
            command.value = "";
        }
    
    }

});


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

let map = document.getElementById("map");
let ctx = setupCanvas(map);

ctx.fillStyle = "#FF0000";
ctx.fillRect(100, 100, 200, 200);

