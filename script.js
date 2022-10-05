let emptyBoard = document.getElementsByClassName("board")
let circlesContainer = document.querySelector(".circlesContainer")

let player1Turn = true

let board = [
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
]


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
          imgElement.addEventListener("click", clickCircle);
        //   console.log(circleElement);
          // step4: append it to an existing element (its container)
          circlesContainer.appendChild(circleElement);
        // }
      }
    };
}

    // let column1 = ["0","7","14","21","28","35"]
    // let column2 = ["1","8","15","22","29","36"]
    // let column3 = ["2","9","16","23","30","37"]
    // let column4 = ["3","10","17","24","31","38"]
    // let column5 = ["4","11","18","25","32","39"]
    // let column6 = ["5","12","19","26","33","40"]
    // let column7 = ["6","13","20","27","34","41"]

    column1 = [0,1,2,3,4,5]
    column2 = [0,1,2,3,4,5]
    column3 = [0,1,2,3,4,5]
    column4 = [0,1,2,3,4,5]
    column5 = [0,1,2,3,4,5]
    column6 = [0,1,2,3,4,5]
    column7 = [0,1,2,3,4,5]


    // let row1 = ["0","1","2","3","4","5"]
    // let row2 = ["6","7","8","9","10","11"]
    // let row3 = ["12","13","14","15","16","17"]
    // let row4 = ["18","19","20","21","22","23"]
    // let row5 = ["24","25","26","27","28","28"]
    // let row6 = ["29","30","31","32","33","34"]
    // let row7 = ["35","36","37","38","39","40","41"]


    //create an array called connect4EmptyArray, with 42 empty elements
    // let connect4EmptyArray = new Array(42);
    // connect4EmptyArray.fill("");
    // console.log(connect4EmptyArray)
    // console.log(connect4EmptyArray.length)




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
        circleToBeChanged.children[0].src= "./pinkCircle.svg"
        // connect4EmptyArray[bottomCircleId] = "player1"
        let firstIndex = bottomCircleId[2]
        let secondIndex = bottomCircleId[0]
        board[firstIndex][secondIndex] = "player1"
        circleToBeChanged
        player1Turn = false
    }



    else{
        circleToBeChanged.children[0].src= "./orangeCircle.svg"
        // connect4EmptyArray[bottomCircleId] = "player2"
        let firstIndex = bottomCircleId[2]
        let secondIndex = bottomCircleId[0]
        board[firstIndex][secondIndex] = "player2"
        player1Turn = true
    }
    console.log('board',board)


    winningConditions()
    
    }




    function winningConditions(){
        //check horizontal locations for a win
        for (let c=0; c < 7; c++){
            for (let r=5; r>= 0; r--){
                // check horizontal locations for a win / player1
                if (board[c+3] != undefined && board[r][c] == "player1" && board[r][c+1] == "player1" && board[r][c +2] == "player1" && board[r][c+3] == "player1"){
                    console.log("player 1 wins!")
                }
                //check vertical locations for a win / player1
                if (board[r+3] != undefined && board[r][c] == "player1" && board[r+1][c] == "player1" && board[r+2][c] == "player1" && board[r+3][c] == "player1"){
                    console.log("player1 wins!")
                }
                //check for positive slope locations for a win / player1
                if (board[r+3] != undefined && board[r][c] == "player1" && board[r+1][c+1] == "player1" && board[r+2][c+2] == "player1" && board[r+3][c+3] == "player1"){
                    console.log("player1 wins!")
                }
                //check for negative slope locations for a win / player1
                if (board[c+3] != undefined && board[r-3] && board[r][c] == "player1" && board[r-1][c+1] == "player1" && board[r-2][c+2] == "player1" && board[r-3][c+3] == "player1"){
                    console.log("player1 wins!")
                }


                // check horizontal locations for a win / player2
                if (board[c+3] != undefined && board[r][c] == 'player2' && board[r][c+1] == 'player2' && board[r][c +2] == 'player2' && board[r][c+3] == 'player2'){
                    console.log('player 2 wins!')
                }
                //check vertical locations for a win / player2
                if (board[r+3] != undefined && board[r][c] == "player2" && board[r+1][c] == "player2" && board[r+2][c] == "player2" && board[r+3][c] == "player2"){
                    console.log("player2 wins!")
                }
                //check for positive slope locations for a win / player1
                if (board[r+3] != undefined && board[r][c] == "player2" && board[r+1][c+1] == "player2" && board[r+2][c+2] == "player2" && board[r+3][c+3] == "player2"){
                    console.log("player2 wins!")
                }
                //check for negative slope locations for a win / player1
                if (board[c+3] != undefined && board[r-3] && board[r][c] == "player2" && board[r-1][c+1] == "player2" && board[r-2][c+2] == "player2" && board[r-3][c+3] == "player2"){
                    console.log("player2 wins!")
                }
        }
        

    }
}






console.log(circlesContainer)


//CODE STARTS HERE 
//waiting for dom to load before executing code
document.addEventListener('DOMContentLoaded', ()=>{
//Adding a function to generate all circles in the board through loop
generateCircleElements()
//adding an event listener to listen for clicks on circle elements
// for(let i=0; i<circlesContainer.length; i++){
//     circlesContainer[i].addEventListener("click", clickCircle)
// }

    // circlesContainer.addEventListener("click", clickCircle)



})