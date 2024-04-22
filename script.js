const B_Rook_L = document.getElementById("B_Rook_L");
const B_Rook_R = document.getElementById("B_Rook_R");

const B_Knight_L = document.getElementById("B_Knight_L");
const B_Knight_R = document.getElementById("B_Knight_R");

const B_Bishop_L = document.getElementById("B_Bishop_L");
const B_Bishop_R = document.getElementById("B_Bishop_R");

const B_Queen = document.getElementById("B_Queen");
const B_King = document.getElementById("B_King");

let piece;
let place;
document.addEventListener('dragstart',(ev)=>{
    piece = ev.target;

});

document.addEventListener('dragenter',(ev)=>{
    place=ev.target
    
})
document.addEventListener('dragend',(ev)=>{
    if (place.childElementCount == 0 && (place.className == "White" || place.className == "Black")){
        place.appendChild(piece);
    }else{
        console.log("invalid")
    }
    
})