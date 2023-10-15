const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value === ''){
    alert("Please enter some data!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li); 
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  inputBox.value="";
  saveData();
}

listContainer.addEventListener("click",function(e){
 if(e.target.tagName === "LI"){
  e.target.classList.toggle("checked");
 }
 else if(e.target.tagName === "SPAN"){
  e.target.parentElement.remove();
  saveData();
 }
},false);

function saveData(){
  localStorage.setItem("data" , listContainer.innerHTML);
}
function showTask() {
  const storedData = localStorage.getItem("data");
  if (storedData) {
    listContainer.innerHTML = storedData;
    console.log(storedData);
  }
}
showTask();
// Add a localStorage change event listener to track changes in the data.
window.addEventListener("storage", function (e) {
  if (e.key === "data") {
    console.log(e.newValue);
    listContainer.innerHTML = e.newValue; // Update the listContainer immediately
  }
});