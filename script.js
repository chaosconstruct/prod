const container = document.querySelector(".container");



for (let i = 0; i < 16 ;i ++){

    // subcontainer

    const subcontainer = document.createElement("div");
    subcontainer.setAttribute("id",`${i}`);                       //have to create a new dev and then append
    subcontainer.classList.add("subcontainer");
    container.appendChild(subcontainer);

    for (let j = 0; j < 16 ; j++){

        

        const box = document.createElement("div");
        // Set color in JS
        box.style.background = "blue";
        box.classList.add("box");
        subcontainer.appendChild(box);



    }

}




const boxes = document.querySelectorAll(".box");
boxes.forEach(box=>{
    box.addEventListener("mouseover",function(){
    box.style.background = "red";
});
});












