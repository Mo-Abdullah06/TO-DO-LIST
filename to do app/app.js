let getul = document.querySelector("#ul");


function send(){
let a = document.querySelector(".inpu")
let li = document.createElement("li")
let litext = document.createTextNode(a.value)
li.appendChild(litext)
getul.appendChild(li)
a.value = ""
let delete1 = document.createElement("button")
let deletetext = document.createTextNode("Delete")
li.appendChild(delete1)
delete1.appendChild(deletetext)
delete1.setAttribute("onclick", "del(this)")
let edit = document.createElement("button")
let edittext = document.createTextNode("Edit")
edit.appendChild(edittext)
li.appendChild(edit)
delete1.setAttribute("class","delete")
edit.setAttribute("class", "edit")
edit.setAttribute("onclick", "edit(this)")
}

function del(a){
a.parentNode.remove()
}

function reset(){
    getul.innerHTML = ""
}
function edit(a){
    let update = prompt("enter your update value",a.parentNode.firstChild.nodeValue)
    a.parentNode.firstChild.nodeValue = update
}