
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 300;

const MAXWIDTH = 1000;
const MAXHEIGHT = 800;

document.querySelector("#widthPlus").addEventListener("click", 
    function() {
        canvas.width = Math.min(canvas.width + 50, MAXWIDTH);
        canvas.height = Math.min(canvas.height + 50, MAXHEIGHT);
    });

// canvas.width  = 400;
// canvas.height = 300; 
// canvas.style.width  = '800px';
// canvas.style.height = '600px';


