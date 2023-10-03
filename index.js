let input = document.querySelector("input");
let list = document.querySelector(".tasks-list");
let task = document.querySelector(".clear-task")
let alert = document.querySelector("#alertBox")
function addToDo() {
    if (input.value !== "") {
        let newTask = document.createElement("div");
        newTask.classList.add("d-flex")
        newTask.classList.add("justify-content-center")
        newTask.classList.add("my-3")
        newTask.innerHTML = `<li><p style = "width : 500px; display: inline-block">${input.value}</p><button class = "btn btn-success" onClick = editToDo(this)><i class="fa fa-pencil-square-o"></i></button> <button class = "clear-task btn btn-danger" onclick = clearThisToDo(this)><i class="fa fa-trash-o"></i></button></li>`;
        list.appendChild(newTask);
        input.value = ""
        alertBox.style.display = "none";
    }
    else {
        alertBox.style.display = "block";
    }
}

function clearThisToDo(i) {
    console.log(i.parentNode.remove())
}

function clearAll() {
    list.innerHTML = ""
    input.value = ""
    alertBox.style.display = "none";
}
function editToDo(item) {
    if (item.textContent === "Done") {
        const toDoName1 = item.previousElementSibling.value;
        const par = document.createElement("p")
        par.setAttribute("style", "display: inline-block; width : 500px")
        par.innerHTML = toDoName1;
        item.parentElement.replaceChild(par, item.previousElementSibling)
        item.innerHTML = `<i class="fa fa-pencil-square-o"></i>`
    } else {
        const toDoName = item.previousElementSibling.textContent;
        item.textContent = "Done";
        const input = document.createElement("input");
        input.value = toDoName;
        input.type = "text";
        input.classList.add("mx-5")
        item.parentElement.replaceChild(input, item.previousElementSibling)
    }
}