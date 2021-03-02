"use strict";

window.addEventListener("DOMContentLoaded", init);

let elementToColor;
let colorValue;

async function init() {
    console.log("init");
    const response = await fetch("jordan-01.svg");
    const svgData = await response.text();

    document.querySelector("#shoeSVG").innerHTML = svgData;
    makeInteractive();
}

function makeInteractive() {
    console.log("makeInteractive");
    document.querySelectorAll(".interactive_group").forEach(group => {
        group.addEventListener("mouseover", highlightPath);
        group.addEventListener("click", clickOnGroup);
    })
    // document.querySelectorAll(".color_btn").forEach(button => {
    //     button.addEventListener("click", clickOnColor);
    // })
    document.querySelector("input").addEventListener("input", selectColor);
    document.querySelector("button").addEventListener("click", clickSubmitColor);
}

function highlightPath() {
    console.log("highlightPath");
    this.style.stroke = "#000000";
    this.style.strokeWidth = "2";
    this.addEventListener("mouseout", () => {
        this.style.stroke = "none";
    })
}

function clickOnGroup() {
    console.log("clickOnGroup");
    elementToColor = this;
    this.style.fill = "grey";
}

// function clickOnColor() {
//     console.log("clickOnColor");
//     if (elementToColor != undefined) {
//         elementToColor.style.fill = this.getAttribute("fill");
//     }
// }

function selectColor() {
    console.log("colorSelect");
    if (elementToColor != undefined) {
        colorValue = document.querySelector("input").value;
        elementToColor.style.fill = colorValue;
        
        // function clickSubmitColor() {
        //     document.querySelector("button").removeEventListener("click", clickSubmitColor);
        //     submitColor(colorValue);
        // }
    }
}

function clickSubmitColor() {
    console.log(colorValue);
    const colorList = document.querySelector(".color_list");
    
    

    const newColor = document.createElement("div");
    newColor.innerHTML = `<div class="colorBox" style="background-color: ${colorValue}"></div><p class="hexValue">${colorValue.toUpperCase()}</p>`;
    colorList.appendChild(newColor);
    console.log(colorList.childElementCount);
    if (colorList.childElementCount >= 10) {
        colorList.removeChild(colorList.childNodes[0]);
    }
}