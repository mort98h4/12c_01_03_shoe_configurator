"use strict";

window.addEventListener("DOMContentLoaded", init);

let elementToColor;

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
    document.querySelector("input").addEventListener("input", colorSelect);
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

function colorSelect() {
    console.log("colorSelect");
    if (elementToColor != undefined) {
        elementToColor.style.fill = document.querySelector("input").value;
    }
}