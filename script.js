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




const generateCircleElements =()=>{
    console.log("generating circles")
    //generate 42 circles
    for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 7; c++) {
          //step 1: create a new div
          let circleElement = document.createElement("div");
          let imgElement = document.createElement("img");
          //step 2: give it an id
          circleElement.id = `${c}-${r}`;
          circleElement.setAttribute("col", c);
          circleElement.setAttribute("row", r);
          //step3: give it a class (style)
          circleElement.classList.add("circleElement");
          imgElement.src = "./circleElement.svg";
          imgElement.style.height = "80%";
          imgElement.style.width = "80%";
          imgElement.id = `${c}-${r}`;
          imgElement.setAttribute("col", c);
          imgElement.setAttribute("row", r);
          circleElement.appendChild(imgElement);
          
        //   console.log(circleElement);
          // step4: append it to an existing element (its container)
          circlesContainer.appendChild(circleElement);
        // }


        console.log(circleElement)
            imgElement.addEventListener("click", clickCircle);

      }
    };
}



    column1 = [0,1,2,3,4,5]
    column2 = [0,1,2,3,4,5]
    column3 = [0,1,2,3,4,5]
    column4 = [0,1,2,3,4,5]
    column5 = [0,1,2,3,4,5]
    column6 = [0,1,2,3,4,5]
    column7 = [0,1,2,3,4,5]

function clickCircle(event){
    console.log("you clicked on a circle")
    let clickedCircleId =event.target.id[0]
    let bottomCircleId
    let circleToBeChanged

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


    if (player1Turn == true)
    {
        gameStatusBox.innerHTML = "player 2's Turn"
        circleToBeChanged.children[0].src= "./pinkCircle.svg"
        // connect4EmptyArray[bottomCircleId] = "player1"
        let firstIndex = bottomCircleId[2]
        let secondIndex = bottomCircleId[0]
        board[firstIndex][secondIndex] = "player1"
        circleToBeChanged
        player1Turn = false
    }



    else{
        gameStatusBox.innerHTML = "player 1's Turn"
        circleToBeChanged.children[0].src= "./orangeCircle.svg"
        // connect4EmptyArray[bottomCircleId] = "player2"
        let firstIndex = bottomCircleId[2]
        let secondIndex = bottomCircleId[0]
        board[firstIndex][secondIndex] = "player2"
        player1Turn = true
    }
    console.log('board',board)


    if(winner!=""){
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 7; c++) {

        circleElementId = `${c}-${r}`;
        circleElement = document.getElementById(circleElementId)
        imgElement = circleElement.children[0]
        console.log(circleElement)
        console.log(imgElement)
        imgElement.removeEventListener("click", clickCircle)
       
            }
        }
    }
    winningConditions()
    
    }




    function winningConditions(){
        //check horizontal locations for a win
        for (let c=0; c < 7; c++){
            for (let r=5; r>= 0; r--){
                // check horizontal locations for a win / player1
                if (board[c+3] != undefined && board[r][c] == "player1" && board[r][c+1] == "player1" && board[r][c +2] == "player1" && board[r][c+3] == "player1"){
                    winner = "player1"
                    console.log("player 1 wins!")
                }
                //check vertical locations for a win / player1
                if (board[r+3] != undefined && board[r][c] == "player1" && board[r+1][c] == "player1" && board[r+2][c] == "player1" && board[r+3][c] == "player1"){
                    console.log("player1 wins!")
                    winner = "player1"
                }
                //check for positive slope locations for a win / player1
                if (board[r+3] != undefined && board[r][c] == "player1" && board[r+1][c+1] == "player1" && board[r+2][c+2] == "player1" && board[r+3][c+3] == "player1"){
                    console.log("player1 wins!")
                    winner = "player1"
                }
                //check for negative slope locations for a win / player1
                if (board[c+3] != undefined && board[r-3] && board[r][c] == "player1" && board[r-1][c+1] == "player1" && board[r-2][c+2] == "player1" && board[r-3][c+3] == "player1"){
                    console.log("player1 wins!")
                    winner = "player1"
                }


                // check horizontal locations for a win / player2
                if (board[c+3] != undefined && board[r][c] == 'player2' && board[r][c+1] == 'player2' && board[r][c +2] == 'player2' && board[r][c+3] == 'player2'){
                    console.log('player 2 wins!')
                    winner = "player2"
                }
                //check vertical locations for a win / player2
                if (board[r+3] != undefined && board[r][c] == "player2" && board[r+1][c] == "player2" && board[r+2][c] == "player2" && board[r+3][c] == "player2"){
                    console.log("player2 wins!")
                    winner = "player2"
                }
                //check for positive slope locations for a win / player1
                if (board[r+3] != undefined && board[r][c] == "player2" && board[r+1][c+1] == "player2" && board[r+2][c+2] == "player2" && board[r+3][c+3] == "player2"){
                    console.log("player2 wins!")
                    winner = "player2"
                }
                //check for negative slope locations for a win / player1
                if (board[c+3] != undefined && board[r-3] && board[r][c] == "player2" && board[r-1][c+1] == "player2" && board[r-2][c+2] == "player2" && board[r-3][c+3] == "player2"){
                    console.log("player2 wins!")
                    winner = "player2"
                }
        }
        

    }
    return gameStatusFun(winner)
}

let gameStatusFun = (winner)=>{
    //return winner if we already have one
    if(winner!=""){

        //add restart button when we have a winner
        let btn = document.createElement("button")
        btn.innerHTML ="Restart Game"
        btn.classList.add("button");
        document.body.appendChild(btn);

        btn.addEventListener("click", Restart)



        //show winner
        gameStatusBox.innerHTML = "The winner is " + winner


        //dont allow user to click anymore
           


    }

}

function Restart(){
    
//clearing the board
  for (let c = 0; c < 7; c++) {
        for (let r = 0; r < 6; r++) {
    bottomCircleId = c+"-"+r
    circleToBeChanged = document.getElementById(bottomCircleId)
    circleToBeChanged.children[0].src= "./circleElement.svg"
        }
    }

    gameStatusBox.innerHTML ="player 1's Turn"
    winner = ""
    player1Turn = true
    column1 = [0,1,2,3,4,5]
    column2 = [0,1,2,3,4,5]
    column3 = [0,1,2,3,4,5]
    column4 = [0,1,2,3,4,5]
    column5 = [0,1,2,3,4,5]
    column6 = [0,1,2,3,4,5]
    column7 = [0,1,2,3,4,5]

}






console.log(circlesContainer)


//CODE STARTS HERE 
//waiting for dom to load before executing code
document.addEventListener('DOMContentLoaded', ()=>{
//Adding a function to generate all circles in the board through a loop 
generateCircleElements()
})