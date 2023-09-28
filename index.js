let input = document.querySelector("input");
let list = document.querySelector(".tasks-list");
let task = document.querySelector(".clear-task")
function addToDo() {
    if (input.value !== "") {
        let newTask = document.createElement("div");
        newTask.classList.add("d-flex")
        newTask.classList.add("justify-content-center")
        newTask.classList.add("my-3")
        newTask.innerHTML = `<li><p class= "mx-5">${input.value}</p></li> <button class = "clear-task btn btn-danger" onclick = clearThisToDo(this)><i class="fa fa-trash-o"></i></button>`;
        list.appendChild(newTask);
        input.value = ""
    }
    else {
alert("Please type something in the box!")
    }
}

function clearThisToDo(i) {
    console.log(i.parentNode.remove())
}

function clearAll() {
    list.innerHTML = ""
    input.value = ""
}
