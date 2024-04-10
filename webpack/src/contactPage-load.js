export function contactPage(){
    const myContentDiv = document.querySelector("#content");
    removeChildElements(myContentDiv);
}

function removeChildElements(myNode){
    myNode.textContent="";
}