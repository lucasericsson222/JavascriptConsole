
export let command = document.getElementById("text-input");
export let terminal = document.getElementById("terminal");

// print stuff duh
export function log(message) {
    terminal.insertAdjacentHTML("beforeend", "<p>" + message + "</p>" );
    terminal.scrollTop = terminal.scrollHeight; // ensure that the terminal follows the new inputs
}
export function use_command(command) {
    if (command === "DOOOM") {
        for(let i = 0; i < 10; i++)
        {
            log("DOOOOOOOOOOOOOOM");
        }
    } else if (command === "clear") {
        terminal.innerHTML = "";
    } 

}