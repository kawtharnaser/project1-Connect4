let emptyBoard = document.getElementsByClassName("board")
let circlesContainer = document.querySelector(".circlesContainer")

let player1Turn = true









const generateCircleElements =()=>{
    console.log("generating circles")
    //generate 42 circles
    for(let i=0; i<42; i++){
        
        //step 1: create a new div
        let circleElement = document.createElement("div")
        let imgElement = document.createElement("img")
        //step 2: give it an id
        circleElement.id = i
        //step3: give it a class (style)
        circleElement.classList.add("circleElement")
        imgElement.src="./circleElement.svg"
        imgElement.style.height = '80%'
        imgElement.style.width = '80%'
        imgElement.id = i
        circleElement.appendChild(imgElement)

        imgElement.addEventListener("click", clickCircle)
        console.log(circleElement)
        
        // step4: append it to an existing element (its container)
        circlesContainer.appendChild(circleElement)


    }
}

    let column1 = ["0","7","14","21","28","35"]
    let column2 = ["1","8","15","22","29","36"]
    let column3 = ["2","9","16","23","30","37"]
    let column4 = ["3","10","17","24","31","38"]
    let column5 = ["4","11","18","25","32","39"]
    let column6 = ["5","12","19","26","33","40"]
    let column7 = ["6","13","20","27","34","41"]


    let row1 = ["0","1","2","3","4","5"]
    let row2 = ["6","7","8","9","10","11"]
    let row3 = ["12","13","14","15","16","17"]
    let row4 = ["18","19","20","21","22","23"]
    let row5 = ["24","25","26","27","28","28"]
    let row6 = ["29","30","31","32","33","34"]
    let row7 = ["35","36","37","38","39","40","41"]




function clickCircle(event){
    console.log("you clicked on a circle")
    let clickedCircleId =event.target.id 
    let buttomCircleId
    let circleToBeChanged


    //checking for 1st column
    if(column1.includes(clickedCircleId)){
        buttomCircleId = column1.slice(-1)
        circleToBeChanged = document.getElementById(buttomCircleId)
        column1.pop()
    }

   //checking for 2nd column
   if(column2.includes(clickedCircleId)){
    buttomCircleId = column2.slice(-1)
    circleToBeChanged = document.getElementById(buttomCircleId)
    column2.pop()
}

   //checking for 3rd column
   if(column3.includes(clickedCircleId)){
    buttomCircleId = column3.slice(-1)
    circleToBeChanged = document.getElementById(buttomCircleId)
    column3.pop()
}

   //checking for 4th column
   if(column4.includes(clickedCircleId)){
    buttomCircleId = column4.slice(-1)
    circleToBeChanged = document.getElementById(buttomCircleId)
    column4.pop()
}


   //checking for 5th column
   if(column5.includes(clickedCircleId)){
    buttomCircleId = column5.slice(-1)
    circleToBeChanged = document.getElementById(buttomCircleId)
    column5.pop()
}

   //checking for 6th column
   if(column6.includes(clickedCircleId)){
    buttomCircleId = column6.slice(-1)
    circleToBeChanged = document.getElementById(buttomCircleId)
    column6.pop()
}

   //checking for 7th column
   if(column7.includes(clickedCircleId)){
    buttomCircleId = column7.slice(-1)
    circleToBeChanged = document.getElementById(buttomCircleId)
    column7.pop()
}


    if (player1Turn == true)
    {
        circleToBeChanged.children[0].src= "./pinkCircle.svg"
        player1Turn = false

    }



    else{
        circleToBeChanged.children[0].src= "./orangeCircle.svg"
        player1Turn = true
    }
    // let circleUnderneathId = String((Number(event.target.id)))
    // let circleToBeChanged = document.getElementById(circleUnderneathId)
    
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
