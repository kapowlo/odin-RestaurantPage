export function menuPage(){
    const myContentDiv = document.querySelector("#content");
    const menuHeader =document.createElement("h1");

    removeChildElements(myContentDiv);

    menuHeader.textContent="Menu";
    menuHeader.classList.add("big-text")
    myContentDiv.appendChild(menuHeader);

    /*--------------------------------section for 1st para-------------------------------------------- */
    const firstPara=document.createElement("p");
    firstPara.textContent="Specialty:";
    firstPara.classList.add("small-text" );
    myContentDiv.appendChild(firstPara);

    //add image for specialty 
    const myImageMenuSpecialty=document.createElement("img");
    myImageMenuSpecialty.src="../src/myAssets/menu-specialty.jpeg"
    myImageMenuSpecialty.style.width="500px";
    myImageMenuSpecialty.style.height="500px";
    myContentDiv.appendChild(myImageMenuSpecialty);

    /*-----------------------------------section for 2nd para------------------------------------------- */
    const secondPara=document.createElement("p");
    secondPara.classList.add("small-text","wrapper-main-dish");
    secondPara.textContent="Main dish:";
    myContentDiv.appendChild(secondPara);

    //add images for main dish
    const myImageMenuMainDish1 = document.createElement("img");
    myImageMenuMainDish1.src="../src/myAssets/menu-maindish-1.jpeg"
    myImageMenuMainDish1.style.width="400px";
    myImageMenuMainDish1.style.height="400px";
    myImageMenuMainDish1.classList.add("img-margin")

    const myImageMenuMainDish2 = document.createElement("img");
    myImageMenuMainDish2.src="../src/myAssets/menu-maindish-2.webp"
    myImageMenuMainDish2.style.width="400px";
    myImageMenuMainDish2.style.height="400px";
   
    
    myContentDiv.appendChild(myImageMenuMainDish1);
    myContentDiv.insertBefore(myImageMenuMainDish2,myImageMenuMainDish1);

     /*-----------------------------------section for 3rd para------------------------------------------- */
    const thirdPara=document.createElement("p");
    thirdPara.classList.add("small-text","wrapper-main-dish");
    thirdPara.textContent="Sides:";
    myContentDiv.appendChild(thirdPara);

    //add images for Sides
    const myImageSides1 = document.createElement("img");
    myImageSides1.src="../src/myAssets/menu-sideDish-1.jpeg";
    myImageSides1.style.width="350px";
    myImageSides1.style.height="350px";
    myImageSides1.classList.add("img-margin")

    const myImageSides2 = document.createElement("img");
    myImageSides2.src="../src/myAssets/menu-sideDish-2.jpeg";
    myImageSides2.style.width="350px";
    myImageSides2.style.height="350px";
   

    myContentDiv.appendChild(myImageSides1);
    myContentDiv.insertBefore(myImageSides2,myImageSides1);
}

function removeChildElements(myNode){
    myNode.textContent="";
}