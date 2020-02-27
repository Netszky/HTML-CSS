const element = document.querySelector(".nuit");
const bac = document.querySelector(".mode")

function changelogo() {
    console.log(element.src.match(/nuit\.png/g) == "nuit.png");
    if (element.src.match(/nuit\.png/g)) {
        element.src = "jour.png";
        bac.href = "CSS/ChocolatNoirJ.css"
        element.title = "Mode Jour"
    } else if (element.src.match(/jour\.png/g) == "jour.png") {
        element.src = "nuit.png";
        bac.href = "CSS/ChocolatNoirN.css"
        element.title="Mode Nuit"
    }
}
element.onclick = changelogo;