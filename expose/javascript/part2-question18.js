
const intervalID = setInterval(timed, 1000)

function timed() {
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
}

