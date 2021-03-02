"use strict";

window.addEventListener("DOMContentLoaded", init);

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
}