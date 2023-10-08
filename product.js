export function handleDragStart(e) 
{
    var id = this.id;
    e.dataTransfer.setData("text", id);
}

export function handleDragOver(e)
{
    e.preventDefault();
}

export function handleDrop(e)
{
    var id = e.dataTransfer.getData("text");
    var item = document.getElementById(id);
    this.appendChild(item);
}

export function handleClick(e)
{
    if (this.className.includes("selected")) {
        this.classList.remove("selected");
    } else this.classList.add("selected");
}

export function handleClickMoveRight()
{
    var productList = document.getElementById("order-product-list-wrapper");
    var productSelected = document.getElementById("order-product-selected-wrapper");
    var index = 0;
    while (index<productList.children.length) {
        var listItem = productList.children[index];
        if (listItem.className.includes("selected")) {
            productSelected.appendChild(listItem);
        } else index += 1;
    }
}

export function handleClickMoveLeft()
{
    var productList = document.getElementById("order-product-list-wrapper");
    var productSelected = document.getElementById("order-product-selected-wrapper");
    var index = 0;
    while (index<productSelected.children.length) {
        var listItem = productSelected.children[index];
        if (listItem.className.includes("selected")) {
            productList.appendChild(listItem);
        } else index += 1;
    }
}

export function handleClickMoveAllRight()
{
    var productList = document.getElementById("order-product-list-wrapper");
    var productSelected = document.getElementById("order-product-selected-wrapper");
    while (productList.children.length!=0) {
        var listItem = productList.children[0];
        productSelected.appendChild(listItem);
    }
}

export function handleClickMoveAllLeft()
{
    var productList = document.getElementById("order-product-list-wrapper");
    var productSelected = document.getElementById("order-product-selected-wrapper");
    while (productSelected.children.length!=0) {
        var listItem = productSelected.children[0];
        productList.appendChild(listItem);
    }
}