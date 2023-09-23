let listMaker = document.getElementById("list_maker");
let listInputDiv = document.getElementById("list_input_div");
let toDoInput = document.getElementById("to-do_input");
let addButton = document.getElementById("add_button");


addButton.addEventListener("click", function addToDo(){

    var inputValue = toDoInput.value;

    if(inputValue === ""){
        alert("Input is Empty");
    } else


    var paragraph = document.createElement("p");
    paragraph.innerText = inputValue;
    paragraph.classList.add("paragraph_style");

    let controlDiv = document.createElement("div");
    controlDiv.classList.add("controlDiv_style")

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox_style");

    var remove = document.createElement("p");
    remove.innerText = "X";
    remove.classList.add("remove_style")

    var toDo = document.createElement("div");
    toDo.classList.add("to_do");

    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            paragraph.style.textDecoration = "line-through";
        } else {
            paragraph.style.textDecoration = "none";
        }
    });



    toDo.appendChild(paragraph);

    controlDiv.appendChild(checkbox);

    controlDiv.appendChild(remove);

    toDo.appendChild(controlDiv)

    listMaker.appendChild(toDo);

    remove.addEventListener("click", function removeeToDo(){
        listMaker.removeChild(toDo);
    });

    toDoInput.value = "";
});