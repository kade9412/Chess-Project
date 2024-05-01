const whiteTaken = document.getElementById('White_captured')
const BlackTaken = document.getElementById('Black_captured')

let piece;
let place;
let turn = "W"
let blocked = false;
document.addEventListener('dragstart', (ev) => {
    selection = ev.target;
    piece = selection.className;

});

document.addEventListener('dragenter', (ev) => {
    place = ev.target


})
document.addEventListener('dragend', (ev) => {
    pieceColor = selection.id.split("_")
    if (turn == pieceColor[0]) {
        if ((place.childElementCount == 0 || place.childElementCount == 1) && (place.className == "White" || place.className == "Black" || place.parentElement.className == "White" || place.parentElement.className == "Black")) {
            if (piece == "Pawn") {
                let lenOfSquare;
                let squareNumber;
                let newSquare;
                let firstMove;
                let color = selection.id.split("_")
                square = selection.parentElement.id.split("_")

                if ((square[1] == "2" && color[0] == "W") || (square[1] == "7" && color[0] == "B")) {
                    firstMove = true;
                }
                if (color[0] == "W") {
                    if (firstMove == true) {
                        lenOfSquare = square.length - 1;
                        let squareNumber1 = parseInt(square[lenOfSquare]) + 1
                        let newSquare1 = square[0] + "_" + squareNumber1;
                        let squareNumber2 = parseInt(square[lenOfSquare]) + 2
                        let newSquare2 = square[0] + "_" + squareNumber2;
                        squareNumber = parseInt(square[lenOfSquare]) + 1
                        newSquare = square[0] + "_" + squareNumber;
                        let newASquare1 = ((parseInt(square[0]) + 1).toString()) + "_" + squareNumber.toString();
                        let newASquare2 = ((parseInt(square[0]) - 1).toString()) + "_" + squareNumber.toString();
                            if (place.parentElement.childElementCount == 1 && ((place.parentElement.id == newASquare2) || (place.parentElement.id == newASquare1))) {

                                let Ochild = place.id.split("_");
                                let Ychild = selection.id.split("_");
                                if (Ochild[0] != Ychild[0]) {
                                    takenPiece = place
                                    place.parentElement.appendChild(selection);

                                    place.parentElement.removeChild(place);
                                    whiteTaken.appendChild(takenPiece);

                                    firstMove = false;
                                    turn = "B"
                                }
                            }
                            else if ((place.id == newSquare1) || (place.id == newSquare2)) {


                                place.appendChild(selection);
                                turn = "B"
                                firstMove = false;
                            }
                            else {
                                alert("invalid move")
                            }
                        
                    }
                    else {

                        lenOfSquare = square.length - 1;
                        squareNumber = parseInt(square[lenOfSquare]) + 1
                        newSquare = square[0] + "_" + squareNumber;
                        let newASquare1 = ((parseInt(square[0]) + 1).toString()) + "_" + squareNumber.toString();
                        let newASquare2 = ((parseInt(square[0]) - 1).toString()) + "_" + squareNumber.toString();

                        if (place.id == newSquare || place.parentElement.id == newSquare || ((place.parentElement.id == newASquare2) || (place.parentElement.id == newASquare1))) {
                            if (place.parentElement.childElementCount == 1 && ((place.parentElement.id == newASquare2) || (place.parentElement.id == newASquare1))) {

                                let Ochild = place.id.split("_");
                                let Ychild = selection.id.split("_");
                                if (Ochild[0] != Ychild[0]) {
                                    takenPiece = place
                                    place.parentElement.appendChild(selection);

                                    place.parentElement.removeChild(place);
                                    whiteTaken.appendChild(takenPiece);

                                    firstMove = false;
                                    turn = "B"
                                }
                            }
                            else if (place.className == "White" || place.className == "Black") {


                                place.appendChild(selection);
                                turn = "B"
                            }
                            else {
                                alert("invalid move")
                            }
                        }
                    }

                }
                if (color[0] == "B") {
                    if (firstMove == true) {
                        lenOfSquare = square.length - 1;
                        let squareNumber1 = parseInt(square[lenOfSquare]) - 1
                        let newSquare1 = square[0] + "_" + squareNumber1;
                        let squareNumber2 = parseInt(square[lenOfSquare]) - 2 
                        let newSquare2 = square[0] + "_" + squareNumber2;
                        squareNumber = parseInt(square[lenOfSquare]) - 1
                        newSquare = square[0] + "_" + squareNumber;
                        let newASquare1 = ((parseInt(square[0]) + 1).toString()) + "_" + squareNumber.toString();
                        let newASquare2 = ((parseInt(square[0]) - 1).toString()) + "_" + squareNumber.toString();
                            if (place.parentElement.childElementCount == 1 && ((place.parentElement.id == newASquare2) || (place.parentElement.id == newASquare1))) {

                                let Ochild = place.id.split("_");
                                let Ychild = selection.id.split("_");
                                if (Ochild[0] != Ychild[0]) {
                                    takenPiece = place
                                    place.parentElement.appendChild(selection);

                                    place.parentElement.removeChild(place);
                                    BlackTaken.appendChild(takenPiece);

                                    firstMove = false;
                                    turn = "W"
                                }
                            }
                            else if ((place.id == newSquare1) || (place.id == newSquare2)) {


                                place.appendChild(selection);
                                turn = "W"
                                firstMove = false;
                            }
                            else {
                                alert("invalid move")
                            }
                        
                    }
                    else {

                        lenOfSquare = square.length - 1;
                        squareNumber = parseInt(square[lenOfSquare]) - 1
                        newSquare = square[0] + "_" + squareNumber;
                        let newASquare1 = ((parseInt(square[0]) + 1).toString()) + "_" + squareNumber;
                        let newASquare2 = ((parseInt(square[0]) - 1).toString()) + "_" + squareNumber;

                        if (place.id == newSquare || place.parentElement.id == newSquare || ((place.parentElement.id == newASquare2) || (place.parentElement.id == newASquare1))) {
                            if (place.parentElement.childElementCount == 1 && ((place.parentElement.id == newASquare2) || (place.parentElement.id == newASquare1))) {

                                let Ochild = place.id.split("_");
                                let Ychild = selection.id.split("_");
                                if (Ochild[0] != Ychild[0]) {
                                    takenPiece = place
                                    place.parentElement.appendChild(selection);

                                    place.parentElement.removeChild(place);
                                    BlackTaken.appendChild(takenPiece);

                                    firstMove = false;
                                    turn = "W"
                                }
                            }
                            else if (place.className == "White" || place.className == "Black") {


                                place.appendChild(selection);
                                turn = "W"
                            }
                            else {
                                alert("invalid move")
                            }
                        }
                    }

                }


            }
            else if (piece == "Rook") {
                blocked = false;
                let start = selection.parentElement.id.split("_")
                square = place.id.split("_")
                
                if((start[0] == square[0]) ||(start[1] == square[1])){
                   
                   let direction = start[0] - square[1];
                   console.log(direction)
                   if(direction < 0 ){
                    for(let i = start[0]; i<square[1]; i++){
                        i++;
                        let checkSquare = document.getElementById(start[0]+"_"+i)
                        console.log(checkSquare)
                        if(checkSquare.childElementCount == 1){
                
                            blocked = true;
                            direction = 0;
             
                            
                        }
                    }
                   }
                   else if(direction > 0){
                        for(let i = start[0]; i>square[1]; i--){
                            i--;
                            let checkSquare = document.getElementById(start[0]+"_"+i)
                            console.log(checkSquare)
                            if(checkSquare.childElementCount == 1){
                    
                                blocked = true;
                                direction = 0;
                                
                                
                            }
                        }
                    }
                    else if (direction == 0 ){
                        direction = start[1] - square[0]
                        if(direction < 0 ){
                            for(let i = start[0]; i<square[1]; i++){
                                i++;
                                let checkSquare = document.getElementById(i+"_"+start[0])
                                console.log(checkSquare)
                                debugger
                                if(checkSquare.childElementCount == 1){
                        
                                    blocked = true;
                                    direction = 0;
                     
                                    
                                }
                            }
                           }
                           else if(direction > 0){
                                for(let i = start[0]; i>square[1]; i--){
                                    i--;
                                    let checkSquare = document.getElementById(i+"_"+start[0])
                                    console.log(checkSquare)
                                    debugger
                                    if(chgeckSquare.childElementCount == 1){
                            
                                        blocked = true;
                                        direction = 0;
                                        
                                        
                                    }
                                }
                            }
                    }
                        


                        if(!blocked){
                            place.appendChild(selection)
                            turn = "B"
                            direction = 0;
                        }
                        
                }
            }
            else if (piece == "Knight") {
                console.log("Kinght");
                place.appendChild(selection);
            }
            else if (piece == "Bishop") {
                console.log("Bishop");
                place.appendChild(selection);
            }
            else if (piece == "Queen") {
                console.log("Queen");
                place.appendChild(selection);
            }
            else if (piece == "King") {
                console.log("King");
                place.appendChild(selection);
            }
            else {
                console.log("invalid")
            }
        }
    }else{
        alert("not your turn");
    }
});