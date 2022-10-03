let emptyBoard = document.getElementsByClassName("board")
let circlesContainer = document.querySelector(".circlesContainer")
// let circleElement = document.getElementsByClassName("circleElement")



const generateCircleElements =()=>{
    console.log("generating circles")
    //generate 42 circles
    for(let i=0; i<42; i++){

        //step 1: create a new div
        let circleElement = document.createElement("div")
        console.log(circleElement)
        //step 2: give it an id
        circleElement.id = i

        //step3: give it a class (style)
        circleElement.classList.add("circleElement")
        // step4: append it to an existing element (its container)
        circlesContainer.appendChild(circleElement)

        //step5: create a new element: an image
        let circleImg = document.createElement("img")
        //step6: give the image element a url of the desired image
        circleImg.src = "circleElement.svg"
        //step6: append it to an existig element (its div)
        circleElement.appendChild(circleImg)


        if(i%7==0){
            circleElement.style.display = inline-block
        }

    }
}

generateCircleElements()