function dateCompare(value)
{
    console.log(value);
    const date = value.splt("-");
    const curDate = Date();
    if (date[0]==curDate.getFullYear()) {
        if (date[1]==curDate.getMonth()+1) {
            return (date[2]>=curDate.getDate()) 
        } else return (date[1]>=curDate.getMonth()+1);
    } else return (date[0]>=curDate.getFullYear());
}

function checkValidInput(name, value)
{
    if (name=="name") {
        if (value.length==0) return "*Họ và tên chưa được điền";
        if (!value.includes(" ")) return "*Họ và tên chưa hợp lệ";
    }
    if (name=="address") {
        if (value.length==0) return "*Địa chỉ chưa được điền";
        if (!value.includes(" ")) return "*Địa chỉ chưa hợp lệ";
    }
    if (name=="phoneNumber") {
        if (value.length!=10) return "*Số điện thoại phải có đủ 10 ký số";
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
        console.log(value, name);
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