const whiteTaken = document.getElementById('White_captured')
const BlackTaken = document.getElementById('Black_captured')

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
            let color = selection.id.split("_")
            if((square[1] == "2" && color[0] == "W") || (square[1] == "7"&& color[0] =="B")){
                firstMove =true;
            }
            if(color[0]=="W"){
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
                    
                    if(place.id == newSquare || place.parentElement.id == newSquare ||((place.parentElement.id = newASquare2)||(place.parentElement.id = newASquare1))){
                        if(place.parentElement.childElementCount == 1 && ((place.parentElement.id = newASquare2)||(place.parentElement.id = newASquare1))){
                            console.log("child")
                            let Ochild = place.id.split("_");
                            let Ychild = selection.id.split("_");
                            if(Ochild[0] != Ychild[0]){
                                takenPiece = place
                                place.parentElement.appendChild(selection);
                                
                                place.parentElement.removeChild(place);
                                whiteTaken.appendChild(takenPiece);
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
            if(color[0]=="B"){
                if(firstMove == true){
                    lenOfSquare = square.length -1;
                    let squareNumber1 = parseInt(square[lenOfSquare]) - 1
                    let newSquare1 = square[0] + "_" + squareNumber1;
                    let squareNumber2 = parseInt(square[lenOfSquare]) - 2
                    let newSquare2 = square[0] + "_" + squareNumber2;
                    if((place.id == newSquare1) ||(place.id == newSquare2) ){
                            place.appendChild(selection);
                            console.log("pawn");
                            firstMove = false;
                            
                    }
                }else{
                    
                    lenOfSquare = square.length -1;
                    squareNumber = parseInt(square[lenOfSquare]) - 1
                    newSquare = square[0] + "_" + squareNumber;
                    let newASquare1 = ((parseInt(square[0]) +1).toString())+"_"+ squareNumber;
                    let newASquare2 = ((parseInt(square[0]) -1).toString())+"_"+ squareNumber;
                    
                    if(place.id == newSquare || place.parentElement.id == newSquare){
                        if(place.parentElement.childElementCount == 1 && ((place.parentElement.id = newASquare2)||(place.parentElement.id = newASquare1))){
                            console.log("child")
                            let Ochild = place.id.split("_");
                            let Ychild = selection.id.split("_");
                            if(Ochild[0] != Ychild[0]){
                                place.parentElement.appendChild(selection);
                                place.parentElement.removeChild(place)
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
            
           
        }
        else if (piece == "Rook"){
            console.log("Rook");
            place.appendChild(selection);
        }
        else if (piece == "Knight"){
            console.log("Kinght");
            place.appendChild(selection);
        }
        else if (piece == "Bishop"){
            console.log("Bishop");
            place.appendChild(selection);
        }
        else if (piece == "Queen"){
            console.log("Queen");
            place.appendChild(selection);
        }
        else if (piece == "King"){
            console.log("King");
            place.appendChild(selection);
        }
        
    }else{
        console.log("invalid")
    }
    
})


