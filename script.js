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
    if ((place.childElementCount == 0 || place.childElementCount == 1) && (place.className == "White" || place.className == "Black"|| place.parentElement.className == "White" ||place.parentElement.className == "Black")){
        if (piece == "Pawn"){
            let lenOfSquare;
            let squareNumber;
            let newSquare;
            let firstMove;
            square = selection.parentElement.id.split("_")
            if(square[1] == "2"){
                firstMove =true;
            }
            if(firstMove == true){
                lenOfSquare = square.length -1;
                let squareNumber1 = parseInt(square[lenOfSquare]) + 1
                let newSquare1 = square[0] + "_" + squareNumber1;
                let squareNumber2 = parseInt(square[lenOfSquare]) + 2
                let newSquare2 = square[0] + "_" + squareNumber2;
                if((place.id == newSquare1) ||(place.id == newSquare2) ){
                        place.appendChild(selection);
                        console.log("pawn");
                        firstMove = false;
                }
            }else{
                
                lenOfSquare = square.length -1;
                squareNumber = parseInt(square[lenOfSquare]) + 1
                newSquare = square[0] + "_" + squareNumber;
                let newASquare1 = ((parseInt(square[0]) +1).toString())+"_"+ squareNumber;
                let newASquare2 = ((parseInt(square[0]) -1).toString())+"_"+ squareNumber;
                
                if(place.id == newSquare ){
                    if(place.parentElement.childElementCount == 1 && ((place.parentElement.id = newASquare2)||(place.parentElement.id = newASquare1))){
                        console.log("child")
                        let Ochild = place.childElement.id.split("_");
                        let Ychild = selection.id.split("_");
                        if(Ochild[0] != Ychild[0]){
                            place.appendChild(selection);
                            console.log("pawn");
                            firstMove = false;
                        }
                    }else{

                        console.log("pawn");
                        place.appendChild(selection);
                    }
                }
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


