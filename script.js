const lib = ['a','b','c','d','e','f','g','h']
let piece;
let place;

document.addEventListener('dragstart',(ev)=>{
    selection = ev.target;
    piece = selection.className;

});

document.addEventListener('dragenter',(ev)=>{
    place=ev.target
    
})
document.addEventListener('dragend',(ev)=>{
    if (place.childElementCount == 0 && (place.className == "White" || place.className == "Black")){
        if (piece == "Pawn"){
            if(place.id == (lib[1]+"3")){

                console.log("pawn");
                place.appendChild(selection);
            }
        }
        if (piece == "Rook"){
            console.log("Rook");
            place.appendChild(selection);
        }
        if (piece == "Kinght"){
            console.log("Kinght");
            place.appendChild(selection);
        }
        if (piece == "Bishop"){
            console.log("Bishop");
            place.appendChild(selection);
        }
        if (piece == "Queen"){
            console.log("Queen");
            place.appendChild(selection);
        }
        if (piece == "King"){
            console.log("King");
            place.appendChild(selection);
        }
        
    }else{
        console.log("invalid")
    }
    
})


