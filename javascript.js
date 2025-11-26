const container = document.querySelector("#container")


const gridSquare = document.createElement("div");
gridSquare.classList.add("gridSquare");

gridSquare.style.border = "solid #000000ff";
gridSquare.style.padding = "50px 10px 20px 30px";


container.appendChild(gridSquare)


var gridClone = gridSquare.cloneNode(true)

container.appendChild(gridClone)

function gridMaker(){     for (let i = 0; i < 254; i++) {
   
        var gridClone = gridSquare.cloneNode(true)

        container.appendChild(gridClone)
    
    }
}

gridMaker()