function removeSelectedClass(selectedClass, children)
{
    for (const element of children) {
        if (element.className.includes(selectedClass)) {
            element.classList.remove(selectedClass);
        }
    }
}

export function handleClick()
{
    var content = this.innerHTML;
    var parent = this.parentNode;
    var selectedClass = "";
    if (parent.id=="nav") selectedClass = "nav-selected";
    else selectedClass = "footer-selected";
    removeSelectedClass(selectedClass, parent.children);
    this.classList.add(selectedClass);

    if (parent.id=="nav") {
        selectedClass = "footer-selected";
        parent = document.getElementById("footer");
    } else {
        selectedClass = "nav-selected";
        parent = document.getElementById("nav");
    }

    removeSelectedClass(selectedClass, parent.children);
        for (const element of parent.children) {
            if (element.innerHTML==content) {
                element.classList.add(selectedClass);
                return;
            }
        }
}