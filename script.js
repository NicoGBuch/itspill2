
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 300;

const MAXWIDTH = 1000;
const MAXHEIGHT = 800;

let widthInput = document.querySelector("#widthInput");
widthInput.value = canvas.width;

widthInput.addEventListener("input", 
    function()  {
        widthInput.value = Math.min(Math.max(widthInput.value, 0), MAXWIDTH);
        canvas.width = widthInput.value;
    }, false);

document.querySelector("#widthPlus").addEventListener("click", 
    function() {
        canvas.width = Math.min(canvas.width + 50, MAXWIDTH);
        widthInput.value = canvas.width;
    });
document.querySelector("#widthMinus").addEventListener("click", 
    function() {
        canvas.width = Math.max(canvas.width - 50, 0);
        widthInput.value = canvas.width;
    });

// canvas.width  = 400;
// canvas.height = 300; 
// canvas.style.width  = '800px';
// canvas.style.height = '600px';


