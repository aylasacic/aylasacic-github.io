let canvas;
let el = document.getElementById('portrait')
console.log(el)

const p = document.createElement('p')



function setup(){
    canvas = createCanvas(400,400)
    el.appendChild(p)
    // canvas.parent("portrait")
    // document.getElementById("portait").appendChild(canvas);
}

function draw(){
    background(220)
}