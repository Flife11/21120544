export function handleClick()
{
    var parent = this.parentNode;
    for (const element of parent.children) {
        if (element.className.includes("nav-selected")) {
            element.classList.remove("nav-selected");
        }
    }
    this.classList.add("nav-selected");
}