console.log("hey");

const socket = io();

socket.on("btn", data => {
    console.log("Button clicked.");
});