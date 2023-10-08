import * as side from "./side.js";
import * as info from "./info.js";
import * as product from "./product.js";

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


function productEvent()
{
    // Drag and drop
    var productList = document.getElementById("order-product-list-wrapper");
    var productSelected = document.getElementById("order-product-selected-wrapper");
    var productItems = document.querySelectorAll(".order-product-item");
    productItems.forEach(item => {
        item.draggable = true;
        item.addEventListener("click", product.handleClick);
        item.addEventListener("dragstart", product.handleDragStart);
    });
    productList.addEventListener("dragover", product.handleDragOver);
    productList.addEventListener("drop", product.handleDrop);
    productSelected.addEventListener("dragover", product.handleDragOver);
    productSelected.addEventListener("drop", product.handleDrop);

    // Move element with button
    var right = document.getElementById("moveRight");
    var left = document.getElementById("moveLeft");
    var allRight = document.getElementById("moveAllRight");
    var allLeft = document.getElementById("moveAllLeft");
    right.addEventListener("click", product.handleClickMoveRight);
    left.addEventListener("click", product.handleClickMoveLeft);
    allRight.addEventListener("click", product.handleClickMoveAllRight);
    allLeft.addEventListener("click", product.handleClickMoveAllLeft);

}

sidebarEvent();
buttonEvent();
productEvent();