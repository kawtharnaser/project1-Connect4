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
        // circleElement.src="circleElement.svg"
        // circleElement.style.backgroundRepeat = 'no-repeat'
        // circleElement.style.backgroundImage="url('./circleElement.svg')"
        // circleElement.style.backgroundSize="contain"
        circleElement.classList.add("circleElement")
        imgElement.src="./circleElement.svg"
        imgElement.style.height = '13%'
        imgElement.style.width = '13%'
        imgElement.id = i
        circleElement.appendChild(imgElement)

        // circleElement.style.marginRight = "30px"
        imgElement.addEventListener("click", clickCircle)
        console.log(circleElement)
        
        // step4: append it to an existing element (its container)
        circlesContainer.appendChild(circleElement)


    }
}

function clickCircle(event){
    console.log("bloop")
    let clickedCircleId =event.target.id 
    for(let i=0; i<=35; i=i+7)
    if(clickedCircleId == i){
    let circleUnderneathId = String(35)
    let circleToBeChanged = document.getElementById(circleUnderneathId)


    if (player1Turn == true)
    {
        circleToBeChanged.children[0].src= "./pinkCircle.svg"
        player1Turn = false

    }



    else{
        circleToBeChanged.children[0].src= "./orangeCircle.svg"
        player1Turn = true
    }
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
