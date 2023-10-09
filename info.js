import { handleClickMoveAllLeft } from "./product.js";

function dateCompare(value)
{
    const date = value.split("-");
    const curDate = new Date();
    if (parseInt(date[0])==curDate.getFullYear()) {
        if (parseInt(date[1])==curDate.getMonth()+1) {
            return (parseInt(date[2])>=curDate.getDate()) 
        } else return (parseInt(date[1])>=curDate.getMonth()+1);
    } else return (parseInt(date[0])>=curDate.getFullYear());
}

function checkValidInput(name, value)
{
    if (name=="name") {
        if (value.length==0) return "*Họ và tên chưa được điền";
        if (!value.includes(" ") || value[value.length-1]==" ") return "*Họ và tên chưa hợp lệ";
    }
    if (name=="address") {
        if (value.length==0) return "*Địa chỉ chưa được điền";
        if (!value.includes(" ") || value[value.length-1]==" ") return "*Địa chỉ chưa hợp lệ";
    }
    if (name=="phoneNumber") {
        if (value.length!=10) return "*Số điện thoại phải có đủ 10 ký số";
        if (!/^[0-9]*$/.test(value)) return "*Số điện thoại phải là ký số";
        if (value[0]!='0') return "*Số điện thoại phải bắt đầu bằng chữ số 0";
    }
    if (name==undefined) {
        var sexRadio = document.getElementsByName("sex");
        if (!sexRadio[0].checked && !sexRadio[1].checked) return "*Vui lòng chọn giới tính";
    }
    if (name=="date") {
        if (value.length==0) return "*Vui lòng chọn ngày giao hàng";
        if (!dateCompare(value)) return "*Ngày giao hàng không được trước ngày hiện tại";
    }
    if (name=="email") {
        if (value.length==0) return "*Vui lòng nhập Email";
        const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        if (emailRegex.test(value)==false) return "*Email không hợp lệ";
    }
    return null;
}

export function handleValidInfo()
{
    const orderInfoInput = document.querySelectorAll(".order-info-input");
    orderInfoInput.forEach((input, index) => {
        var invalidString = checkValidInput(input.name, input.value);
        var log = input.parentNode.nextElementSibling;
        if (invalidString!=null) {
            log.innerHTML=invalidString;
            log.style.display = "block";
            if (input.children.length==0) input.style.border = ".5px solid lightsalmon";
        } else {
            log.style.display = "none";
            input.style.borderColor = "black";
        }
    });
}

function Delete()
{
    handleClickMoveAllLeft();
    const orderInfoInput = document.querySelectorAll(".order-info-input");
    orderInfoInput.forEach(input => {
        if (input.children.length==0) input.value = "";
        else {
            var sexRadio = document.getElementsByName("sex");
            sexRadio[0].checked = false;
            sexRadio[1].checked = false;
        }
    });
}

function checkInput(orderInfoInput)
{
    var flag = true;
    orderInfoInput.forEach(input => {
        var invalidString = checkValidInput(input.name, input.value);
        if (invalidString!=null) {
            flag = false;
        }
    });
    return flag;
}

function checkProductList(productSelected)
{
    var flag = true;
    if (productSelected.children.length==0) {
        var announcement = document.getElementById("order-product-announcement")
        var announcementStyle = getComputedStyle(announcement);
        if (announcementStyle.display=="none") {
            announcement.style.display = "block"
            announcement.innerHTML = "*Vui lòng chọn sản phẩm cần mua";
        } else announcement.style.display = "none";
        flag = false;
    }
    return flag;
}

export function handleRegister()
{
    // Check valid input
    const orderInfoInput = document.querySelectorAll(".order-info-input");
    if (!checkInput(orderInfoInput)) return;

    // Check empty product list
    var productSelected = document.getElementById("order-product-selected-wrapper");
    if (!checkProductList(productSelected)) return;

    // Add data from input to table
    // Get input value
    var table = document.getElementById("order-customer");
    const inputValue = [];
    orderInfoInput.forEach(input => {
        if (input.name==undefined) {
            var sexRadio = document.getElementsByName("sex");
            if (sexRadio[0].checked) inputValue.push(sexRadio[0].value);
            else inputValue.push(sexRadio[1].value);
        } else inputValue.push(input.value);
    });

    // Get product value
    const productValue = [];
    for (let i=0; i<productSelected.children.length; ++i) {
        var element = productSelected.children[i];
        productValue.push(element.children[1].innerHTML);
    }

    const html=`<td class="order-customer--align-left">${inputValue[0]}</td>
                <td>${inputValue[3]}</td>
                <td class="order-customer--align-left">${inputValue[1]}</td>
                <td>${inputValue[4].split("-").reverse().join("/")}</td>
                <td class="order-customer--align-left">${productValue.join("; ")}</td>`
    
    var newtr = document.createElement("tr");
    newtr.innerHTML = html;
    newtr.className = "newRegister";

    table.appendChild(newtr);

    //Delete input and product selected list
    Delete();
}

export function handleDelete()
{
    const table = document.getElementById("order-customer");
    var index = 0;
    while (index<table.children.length) {
        var element = table.children[index];
        if (element.className=="newRegister") {
            table.removeChild(element);
        } else index += 1;
    }
}