const userInput = document.getElementById("entry");
const currList = document.getElementById("things");
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");


submit.addEventListener('click', addToList);
clear.addEventListener('click', clearList);

function addToList(){
if(userInput.value != ""){
const para = document.createElement("li");
const node = document.createTextNode(userInput.value);
para.appendChild(node);
currList.appendChild(para);
}
userInput.value = "";
}

function clearList(){
const containing = document.querySelectorAll("li"); // returns how many li inside the thing currently
if(containing.length >= 1){
    // if there is atleast one li inside the whole doc
    currList.innerHTML = "";

}
}
