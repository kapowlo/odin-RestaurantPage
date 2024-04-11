export function contactPage(){
    const myContentDiv = document.querySelector("#content");
    removeChildElements(myContentDiv);

    const mySquare= document.createElement("div");
    mySquare.classList.add("square");
    myContentDiv.appendChild(mySquare);

    // make an h1, a bunch of paras and a text area
    const myh1Contact = document.createElement("h1");
    myh1Contact.classList.add("big-text");
    myh1Contact.textContent="Contact me"

    const firstPara=document.createElement("p");
    firstPara.classList.add("small-text");
    firstPara.textContent="kapowlo @randomfakemail.com "

    const secondPara=document.createElement("p");
    secondPara.classList.add("small-text");
    secondPara.textContent="phone:555-555-5555"

    const thirdPara=document.createElement("p");
    thirdPara.classList.add("small-text");
    thirdPara.textContent="Location:3312 avenue nowhere"

    const textField=document.createElement("textarea")
    textField.name = "post";
    textField.maxLength = "5000";
    textField.cols = "50";
    textField.rows = "20";
    textField.setAttribute("placeholder","Enter your text here...")

    //append  everything to mySquare
    mySquare.append(myh1Contact,firstPara,secondPara,thirdPara,textField);
}

function removeChildElements(myNode){
    myNode.textContent="";
}