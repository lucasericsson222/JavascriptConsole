// +++++++++++++++++++++++++++++++++++++++++++++++
// CANVAS / MAP


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



