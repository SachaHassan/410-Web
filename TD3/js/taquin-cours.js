'use strict';

function onLoad() {
    console.log("Processus de chargement du document terminé…");
    const boxElements = document.querySelectorAll(".box");

    for (let i = 0; i < boxElements.length; i++) {
        const boxElement = boxElements[i];
        boxElement.addEventListener("click", () => {
            console.log("click on box", i);
        });
    }
}

let boxList = document.querySelectorAll(".box");

boxList.forEach(function (box) {
    box.addEventListener("click", function selection(event) {
        let clickedBox = event.target;
        let emptyBox = document.querySelector(".empty");

        if (clickedBox !== box) {
            clickedBox = clickedBox.parentNode;
        }

        if (clickedBox === emptyBox) {
            return;
        }

        const clickedBoxRow = clickedBox.id.charAt(1);
        const clickedBoxCol = clickedBox.id.charAt(4);
        const emptyBoxRow = emptyBox.id.charAt(1);
        const emptyBoxCol = emptyBox.id.charAt(4);


        if (Math.abs(parseInt(emptyBoxRow - clickedBoxRow) + parseInt(emptyBoxCol - clickedBoxCol)) === 1) {
            clickedBox.classList.add("empty");
            emptyBox.classList.remove("empty");
            emptyBox.innerHTML = clickedBox.innerHTML;
            clickedBox.innerHTML = "";
        }





    });
});


window.onload = onLoad;