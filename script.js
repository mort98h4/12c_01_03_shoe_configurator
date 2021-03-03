"use strict";

window.addEventListener("DOMContentLoaded", init);

let elementToColor;
let colorValue;
let id;

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
    document.querySelector("input").addEventListener("input", selectColor);
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
    console.log(this.dataset.id);
    id = this.dataset.id;
    elementToColor = this;
    this.style.fill = "grey";
}

function selectColor() {
    console.log("colorSelect");
    if (elementToColor != undefined) {
        colorValue = document.querySelector("input").value;
        elementToColor.style.fill = colorValue;
        displayColor();
    }
}

function displayColor() {
    console.log(colorValue);
    const rgba = hexToRGBA(colorValue)

    document.querySelector(`.colorBox${id}`).style.backgroundColor = rgba;
    document.querySelector(`.colorBox${id}`).style.border = `1px solid ${colorValue}`;
    document.querySelector(`.hex${id}`).textContent = colorValue;
    document.querySelector(`.hex${id}`).style.color = colorValue;
}

function hexToRGBA(hex) {
    hex = hex.substring(1);
    const r = Number.parseInt(hex.substring(0, 2), 16);
    const g = Number.parseInt(hex.substring(2, 4), 16);
    const b = Number.parseInt(hex.substring(4, 6), 16);
    const a = 0.5
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}