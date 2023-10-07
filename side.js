export function handleDragStart(e) 
{
    var id = this.parentNode.id;
    console.log(id);
    e.dataTransfer.setData("text", id);
}

export function handleDragOver(e)
{
    e.preventDefault();
}

export function handleDrop(e)
{
    console.log(this.children)
    var id = e.dataTransfer.getData("text");
    var item = document.getElementById(id);
    var curItem = this.children[0];
    item.parentNode.appendChild(curItem);
    this.appendChild(item);
}

export function handleClick(e)
{
    if (this.children[0].style.display == "none") {
        this.children[0].style.display = "block";
        this.children[1].style.display = "none";
        this.nextElementSibling.style.display = "block";
    } else {
        this.children[0].style.display = "none";
        this.children[1].style.display = "block";
        this.nextElementSibling.style.display = "none";
    }

}