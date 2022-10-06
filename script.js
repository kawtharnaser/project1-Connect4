let emptyBoard = document.getElementsByClassName("board")
let circlesContainer = document.querySelector(".circlesContainer")
let gameStatusBox = document.querySelector(".gameStatusBox")

//always start with player1
let player1Turn = true

//an empty board to be populated with player1 and player2 tags according to the position of the coin
let board = [
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
]

//initialize a winner variable, set to null for now
let winner =""
//show which player's turn it is, we always start by player 1
gameStatusBox.innerHTML = "Player 1's Turn"



//this function gets called as soon as the DOM loads
//this function is what generates the board 
const generateCircleElements =()=>{
    //generating 42 circleElements: 6 rows and 7 columns
    for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 7; c++) {
          //step 1: create a new element / a div: the parent - an img: the child
          let circleElement = document.createElement("div");
          let imgElement = document.createElement("img");
          //step 2: give the div an id c-r, and give it a c class and an r class
          circleElement.id = `${c}-${r}`;
          circleElement.setAttribute("col", c);
          circleElement.setAttribute("row", r);
          //step3: give the div a class (style)
          circleElement.classList.add("circleElement");

          //style the img 
          imgElement.src = "./circleElement.svg";
          imgElement.style.height = "80%";
          imgElement.style.width = "80%";

          //give the img an id c-r, and give it a c class and an r class
          imgElement.id = `${c}-${r}`;
          imgElement.setAttribute("col", c);
          imgElement.setAttribute("row", r);

          //append the child (img) to the parent (div)
          circleElement.appendChild(imgElement);
          
       
          // step4: append the div to an existing element (its container)
          circlesContainer.appendChild(circleElement);

          //add an event listener to each component within the board
            imgElement.addEventListener("click", clickCircle);

      }
    };
}

//set arrays for each column, to be used in other methods
    column1 = [0,1,2,3,4,5]
    column2 = [0,1,2,3,4,5]
    column3 = [0,1,2,3,4,5]
    column4 = [0,1,2,3,4,5]
    column5 = [0,1,2,3,4,5]
    column6 = [0,1,2,3,4,5]
    column7 = [0,1,2,3,4,5]



    //this function gets triggered when a user clicks on one of the board's circles
function clickCircle(event){
    //initializing a variable that stores the value of the column of the circle that has been clicked, 0 here is the 1st index of the id c-r
    let clickedCircleId =event.target.id[0]
    //this variable gets the id of the last circle within the column
    let bottomCircleId
    //this variable gets the element of the bottomCircleId
    let circleToBeChanged

    // now we check column by column to know which column has the user clicked on

    //checking for 1st column
    if(clickedCircleId == 0){
        bottomCircleId = 0+"-"+column1.slice(-1)
        circleToBeChanged = document.getElementById(bottomCircleId)
        column1.pop()
       
    }

   //checking for 2nd column
   if(clickedCircleId == 1){
    bottomCircleId = 1+"-"+column2.slice(-1)
    circleToBeChanged = document.getElementById(bottomCircleId)
    column2.pop()
}

   //checking for 3rd column
   if(clickedCircleId == 2){
    bottomCircleId = 2+"-"+column3.slice(-1)
    circleToBeChanged = document.getElementById(bottomCircleId)
    column3.pop()
}

   //checking for 4th column
   if(clickedCircleId == 3){
    bottomCircleId = 3+"-"+column4.slice(-1)
    circleToBeChanged = document.getElementById(bottomCircleId)
    column4.pop()
}


   //checking for 5th column
   if(clickedCircleId == 4){
    bottomCircleId = 4+"-"+column5.slice(-1)
    circleToBeChanged = document.getElementById(bottomCircleId)
    column5.pop()
}

   //checking for 6th column
   if(clickedCircleId ==5){
    bottomCircleId = 5+"-"+column6.slice(-1)
    circleToBeChanged = document.getElementById(bottomCircleId)
    column6.pop()
}

   //checking for 7th column
   if(clickedCircleId ==6){
    bottomCircleId = 6+"-"+column7.slice(-1)
    circleToBeChanged = document.getElementById(bottomCircleId)
    column7.pop()
}


//now we check who's turn is it
    if (player1Turn == true)
    {
        //show the player's turn - its always gonna be opposite because this function gets triggered after the player has clicked on the circle and made his move already
        gameStatusBox.innerHTML = "player 2's Turn"
        //change the image of the bottom most empty circle the user has picked
        circleToBeChanged.children[0].src= "./pinkCircle.svg"
        
        //getting the index of the row that the user has placed his coin at c-r
        let firstIndex = bottomCircleId[2]
          //getting the index of the column that the user has placed his coin at c-r
        let secondIndex = bottomCircleId[0]
        //assigning that index (r-c) in the board to the name of the player
        board[firstIndex][secondIndex] = "player1"
        //switching turns
        player1Turn = false
    }

    else{
        gameStatusBox.innerHTML = "player 1's Turn"
        circleToBeChanged.children[0].src= "./orangeCircle.svg"
        let firstIndex = bottomCircleId[2]
        let secondIndex = bottomCircleId[0]
        board[firstIndex][secondIndex] = "player2"
        player1Turn = true
    }

    //if we already have a winner (winningConditions does not return null)
    if(winner!=""){
        //looping through all circles
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 7; c++) {

        //getting each circle's id
        circleElementId = `${c}-${r}`;
        //getting the element that has the id
        circleElement = document.getElementById(circleElementId)
        //getting the 1st child of the circle div - the img
        imgElement = circleElement.children[0]
        //removing the event listener from the img
        imgElement.removeEventListener("click", clickCircle)
       
            }
        }
    }
    //look if we have a winner
    winningConditions()
    
    }




    function winningConditions(){
        //looping through the whole board starting from the bottom left-most cell
        for (let c=0; c < 7; c++){
            for (let r=5; r>= 0; r--){
                // check horizontal locations for a win / player1
                if (board[c+3] != undefined && board[r][c] == "player1" && board[r][c+1] == "player1" && board[r][c +2] == "player1" && board[r][c+3] == "player1"){
                    winner = "player1"
                }
                //check vertical locations for a win / player1
                if (board[r+3] != undefined && board[r][c] == "player1" && board[r+1][c] == "player1" && board[r+2][c] == "player1" && board[r+3][c] == "player1"){
                    winner = "player1"
                }
                //check for positive slope locations for a win / player1
                if (board[r+3] != undefined && board[r][c] == "player1" && board[r+1][c+1] == "player1" && board[r+2][c+2] == "player1" && board[r+3][c+3] == "player1"){
                    winner = "player1"
                }
                //check for negative slope locations for a win / player1
                if (board[c+3] != undefined && board[r-3] && board[r][c] == "player1" && board[r-1][c+1] == "player1" && board[r-2][c+2] == "player1" && board[r-3][c+3] == "player1"){
                    winner = "player1"
                }


                // check horizontal locations for a win / player2
                if (board[c+3] != undefined && board[r][c] == 'player2' && board[r][c+1] == 'player2' && board[r][c +2] == 'player2' && board[r][c+3] == 'player2'){
                    winner = "player2"
                }
                //check vertical locations for a win / player2
                if (board[r+3] != undefined && board[r][c] == "player2" && board[r+1][c] == "player2" && board[r+2][c] == "player2" && board[r+3][c] == "player2"){
                    winner = "player2"
                }
                //check for positive slope locations for a win / player1
                if (board[r+3] != undefined && board[r][c] == "player2" && board[r+1][c+1] == "player2" && board[r+2][c+2] == "player2" && board[r+3][c+3] == "player2"){
                    winner = "player2"
                }
                //check for negative slope locations for a win / player1
                if (board[c+3] != undefined && board[r-3] && board[r][c] == "player2" && board[r-1][c+1] == "player2" && board[r-2][c+2] == "player2" && board[r-3][c+3] == "player2"){
                    winner = "player2"
                }
        }
        

    }
    //pass the winner to the gameStatusFun and run it
    return gameStatusFun(winner)
}

let gameStatusFun = (winner)=>{
    //return winner if we already have one
    if(winner!=""){

        //add restart button when we have a winner
        let btn = document.createElement("button")
        //style it
        btn.innerHTML ="Restart Game"
        btn.classList.add("button");
        //show it on the page
        document.body.appendChild(btn);
        //add an event listener to the button
        btn.addEventListener("click", Restart)



        //show winner in the gameStatus Box
        gameStatusBox.innerHTML = "The winner is " + winner

    }

}

function Restart(){
    
//clearing the board by looping through columns and rows
  for (let c = 0; c < 7; c++) {
        for (let r = 0; r < 6; r++) {
            //getting the id of all circles
    bottomCircleId = c+"-"+r
    //getting the elements that have these ids assigned
    circleToBeChanged = document.getElementById(bottomCircleId)
    //changing the picture to an empty circle
    circleToBeChanged.children[0].src= "./circleElement.svg"
        }
    }

    //make sure we always start at player1
    gameStatusBox.innerHTML ="player 1's Turn"
    player1Turn = true

    //clear the winner
    winner = ""

    //columns with occupied circles have been popped off the array, that is why we have to set new empty columns since we have new empty circles.
    column1 = [0,1,2,3,4,5]
    column2 = [0,1,2,3,4,5]
    column3 = [0,1,2,3,4,5]
    column4 = [0,1,2,3,4,5]
    column5 = [0,1,2,3,4,5]
    column6 = [0,1,2,3,4,5]
    column7 = [0,1,2,3,4,5]

}



//CODE STARTS HERE 
//waiting for dom to load before executing code
document.addEventListener('DOMContentLoaded', ()=>{
//Adding a function to generate all circles in the board through a loop 
generateCircleElements()
})