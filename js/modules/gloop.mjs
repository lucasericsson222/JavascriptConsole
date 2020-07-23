;"use strict";

// +++++++++++++++++++++++++++++++++++++++++++++++
// GAME LOOP
let seconds_passed;
let old_time_stamp;
let fps;
function game_loop(time_stamp) {
    // calculate the number of seconds passed since the last frame
    seconds_passed = (time_stamp-old_time_stamp) / 1000;
    old_time_stamp = time_stamp;

    // calculate fps
    fps = Math.round(1/seconds_passed);
    print(Math.random());
    window.requestAnimationFrame(game_loop);
}

game_loop();
