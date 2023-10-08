import * as side from "./side.js";
import * as info from "./info.js";

function sidebarEvent()
{
    const sideList = document.querySelectorAll(".side-container-header");
    sideList.forEach(element => {
        element.draggable = true;
        element.addEventListener("dragstart", side.handleDragStart);
    });

    const dragTarget = document.querySelectorAll(".drag-target");
    dragTarget.forEach(element => {
        element.addEventListener("drop", side.handleDrop);
        element.addEventListener("dragover", side.handleDragOver);
    });

    const headers = document.querySelectorAll(".side-container-header");
    headers.forEach(element => {
        element.addEventListener("click", side.handleClick);
    });
}


function buttonEvent()
{
    var registerButton = document.getElementById("order-button-register");
    registerButton.addEventListener("click", info.handleValidInfo);
}


sidebarEvent();
buttonEvent();