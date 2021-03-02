"use strict";

window.addEventListener("DOMContentLoaded", init);

async function init() {
    console.log("init");
    const response = await fetch("jordan-01.svg");
    const svgData = await response.text();

    document.querySelector("#shoeSVG").innerHTML = svgData;
}