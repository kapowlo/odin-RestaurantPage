export function pageLoad(){
    const myContentDiv = document.querySelector("#content")

    removeChildElements(myContentDiv);

    const myH1header = document.createElement("h1");
    myH1header.textContent="Hi,Welcome to Kapowlo's Restaurant!";
    myH1header.classList.add("big-text")
    myContentDiv.appendChild(myH1header);

    const myRestaurantImage = document.createElement("img");
    myRestaurantImage.src="../src/myAssets/restaurant-bg.jpg";
    myRestaurantImage.alt="the inside of a beautiful restaurant";
    myRestaurantImage.style.width="600px";
    myRestaurantImage.style.height="600px";
    myContentDiv.appendChild(myRestaurantImage);

    const firstPara = document.createElement("p")
    firstPara.classList.add("small-text")
    firstPara.textContent="This is one of the most popular restaurant on earth, the customer service is impeccable,the food is delicious";

    const secondPara = document.createElement("p");
    secondPara.classList.add("small-text")
    secondPara.textContent="Please consider eating at Kapowlo's restaurant and bring as many people as you want!";

    myContentDiv.append(firstPara,secondPara);
}

function removeChildElements(myNode){
    myNode.textContent="";
}