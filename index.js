var items = [];
var btnAdd = document.getElementById("btnAdd");
var btnRemove = document.getElementById("btnRemove");
var main = document.getElementById("main");
var txtField = document.getElementById("txtField");

btnAdd.addEventListener("click", function () {
    AddElement();
});
txtField.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        AddElement();
    }
});

function AddElement() {
    var tekst = document.getElementById("txtField").value;
    if (items.length == 0) {
        items[0] = tekst;
        main.appendChild(document.createElement("div")).innerText = items[0];
    } else {
        items[items.length] = tekst;
        main.appendChild(document.createElement("div")).innerText = items[items.length - 1];
    }
    document.getElementById("txtField").value = null;
}

btnRemove.addEventListener("click", function () {
    while (main.hasChildNodes) {
        main.removeChild(main.firstChild);
    }
});