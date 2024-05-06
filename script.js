const whiteTaken = document.getElementById('White_captured')
const BlackTaken = document.getElementById('Black_captured')

let piece;
let place;
let turn = "W"

document.addEventListener('dragstart', (ev) => {
    selection = ev.target;
    piece = selection.className;
    

});

document.addEventListener('dragenter', (ev) => {
    place = ev.target


})
document.addEventListener('dragend', () => {
    let color = selection.id.split("_")
    let pieceColor = selection.id.split("_")

    if (turn == pieceColor[0]) {
        if ((place.childElementCount == 0 || place.childElementCount == 1) && (place.className == "White" || place.className == "Black" || place.parentElement.className == "White" || place.parentElement.className == "Black")) {
            if (piece == "Pawn") {
                let lenOfSquare;
                let squareNumber;
                let newSquare;
                let firstMove;
                
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
                let rookAttack = false;
                let blocked = false;
                let start = selection.parentElement.id.split("_");
                let square = place.id.split("_");
                let squareA = place.parentElement.id.split("_");
                debugger
                if(((start[0] == square[0]) ||(start[1] == square[1]))||((start[0] == squareA[0]) ||(start[1] == squareA[1]))){
                   
                   let v_H = start[0] - square[0];
                   let up_down = start[1] - square[1];
                   
                   
                   if (isNaN(v_H)){
                    v_H = start[0] - squareA[0];
                    up_down = start[1] - squareA[1];
                    rookAttack = true;
                   }
                   
                   debugger
                   
                    if ((v_H == 0) ){
                        debugger
                        if(up_down < 0){
                            debugger
                            if(rookAttack){
                                for(let i = (parseInt(start[1]) +1); i<squareA[1]; i++){
                                
                                
                                
                                    let checkSquare = document.getElementById(start[0]+"_"+i)
                                    
                                    
                                       
                                        if (checkSquare.childElementCount == 1){
                                            blocked = true;
                                            v_H = 0;
                                            plus_minus = 0;
                                        }
                                        
                                        
                                 
                                }
                            }else{
                                for(let i = (parseInt(start[1]) +1); i<square[1]; i++){
                                
                                
                                
                                    let checkSquare = document.getElementById(start[0]+"_"+i)
                                    
            
                                       
                                        if (checkSquare.childElementCount == 1){
                                            blocked = true;
                                            v_H = 0;
                                            plus_minus = 0;
                                        }
                                        
                                        
                                    
                                }
                            
                            }
                            }
                            
                        else if (up_down > 0){
                            debugger
                            if(rookAttack){
                                for(let i = (parseInt(start[1])-1); i>squareA[1]; i--){
                                
                                    let checkSquare = document.getElementById(start[0]+"_"+i)
                            
                                    if (checkSquare.childElementCount == 1){
                                        blocked = true;
                                        v_H = 0;
                                        plus_minus = 0;
                                    }
                                }
                            }else{
                                for(let i = (parseInt(start[1])-1); i>square[1]; i--){
                                
                                    let checkSquare = document.getElementById(start[0]+"_"+i)
                            
                                    if (checkSquare.childElementCount == 1){
                                        blocked = true;
                                        v_H = 0;
                                        plus_minus = 0;
                                    }
                                }
                            
                            }
                           
                        }
                        

                        
                    }
                    else if (v_H > 0){
                        debugger
                        if(rookAttack){
                            for(let i = (parseInt(start[1])-1); i>squareA[1]; i--){
                            
                                let checkSquare = document.getElementById(start[0]+"_"+i)
                        
                                if (checkSquare.childElementCount == 1){
                                    blocked = true;
                                    v_H = 0;
                                    plus_minus = 0;
                                }
                            }
                        }else{
                            for(let i = (parseInt(start[1])-1); i>square[1]; i--){
                            
                                let checkSquare = document.getElementById(start[0]+"_"+i)
                        
                                if (checkSquare.childElementCount == 1){
                                    blocked = true;
                                    v_H = 0;
                                    plus_minus = 0;
                                }
                            }
                        
                        }
                    }
                    else if (v_H < 0){
                        debugger
                        if(rookAttack){
                            for(let i = (parseInt(start[1]) +1); i<squareA[1]; i++){
                            
                            
                            
                                let checkSquare = document.getElementById(start[0]+"_"+i)
                                
                                if(checkSquare.childElementCount == 1){
                                   
                                    if (checkSquare.childElementCount == 1){
                                        blocked = true;
                                        v_H = 0;
                                        plus_minus = 0;
                                    }
                                    
                                    
                                }
                            }
                        }else{
                            debugger
                            for(let i = (parseInt(start[1]) +1); i<square[1]; i++){
                            
                            
                            
                                let checkSquare = document.getElementById(start[0]+"_"+i)
                                debugger
                               
                                   
                                    if (checkSquare.childElementCount == 1){
                                        debugger
                                        blocked = true;
                                        v_H = 0;
                                        plus_minus = 0;
                                    }
                                    
                                    
                                
                            }
                        
                        }
                    }
                    
                    if(((place.parentElement.className === "White")||(place.parentElement.className === "Black"))&& (!blocked)){
                        let takeColor = place.className.split("_")
                        if((color[0] == "W")&&(takeColor[0] != color[0])){
                            
                            takenPiece = place
                            place.parentElement.appendChild(selection);
    
                            place.parentElement.removeChild(place);
                            whiteTaken.appendChild(takenPiece);
    
                            v_H = 0;
                            plus_minus = 0;
                            turn = "B"
                            rookAttack = false;
                        }
                        if((color[0] == "B")&&(takeColor[0] != color[0])){
                            
                            takenPiece = place
                            place.parentElement.appendChild(selection);
    
                            place.parentElement.removeChild(place);
                            BlackTaken.appendChild(takenPiece);
    
                            v_H = 0;
                            plus_minus = 0;
                            turn = "W"
                            rookAttack = false;
                        }
                        v_H = 0;
                        plus_minus = 0;
                    }
                    else if (!blocked){
                        place.appendChild(selection)
                        turn = "B"
                        v_H = 0;
                        plus_minus = 0;
                    }
                   
                }
            }
            else if (piece == "Knight") {
                let square = selection.parentElement.id.split("_")
                let squareShort1 = (((parseInt(square[0]) -2).toString()) + "_"+((parseInt(square[1]) +1).toString()))
                let squareLong1 = (((parseInt(square[0]) -1).toString()) + "_"+((parseInt(square[1]) +2).toString()))
                let squareLong2 = (((parseInt(square[0]) +1).toString()) + "_"+((parseInt(square[1]) +2).toString()))
                let squareShort2 = (((parseInt(square[0]) +2).toString()) + "_"+((parseInt(square[1]) +1).toString()))
                let squareShort3 = (((parseInt(square[0]) +2).toString()) + "_"+((parseInt(square[1]) -1).toString()))
                let squareLong3 = (((parseInt(square[0]) +1).toString()) + "_"+((parseInt(square[1]) -2).toString()))
                let squareLong4 = (((parseInt(square[0]) -1).toString()) + "_"+((parseInt(square[1]) -2).toString()))
                let squareShort4 = (((parseInt(square[0]) -2).toString()) + "_"+((parseInt(square[1]) -1).toString()))
                console.log(squareShort1)
                console.log(squareLong1)
                console.log(squareShort2)
                console.log(squareLong2)
                console.log(squareShort2)
                console.log(squareShort3)
                console.log(squareLong3)
                console.log(squareLong4)
                console.log(squareShort4)

                if(place ==(squareShort1 || squareLong1 || squareLong2 || squareShort2 || squareShort3 || squareLong3 || squareLong4 || squareShort4)){
                   debugger
                    if(place.parentElement.childElementCount == 1){
                        if(color[0] == "W"){
                            
                            takenPiece = place
                            place.parentElement.appendChild(selection);
    
                            place.parentElement.removeChild(place);
                            whiteTaken.appendChild(takenPiece);
    
                            
                            turn = "B"
                        }
                        if(color[0] == "B"){
                            
                            takenPiece = place
                            place.parentElement.appendChild(selection);
    
                            place.parentElement.removeChild(place);
                            BlackTaken.appendChild(takenPiece);
    
                            place.appendChild(selection)
                            turn = "W"
                        }
                    }else{
                        place.appendChild(selection);
                        if(color[0] == "W"){
                            turn = "B"
                        }
                        else if (color[0] == "B"){
                            turn = "W"
                        }
                    }
                }
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
        console.log("not your turn");
    }
});