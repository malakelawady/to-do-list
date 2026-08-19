function addTask(){
    let input = document.getElementById('input');
    let list = document.getElementById('list');
    if (input.value === "") return;
    let li = document.createElement('li');
    li.innerHTML = input.value + '<button onclick="this.parentElement.remove()">Delete</button>';
    list.appendChild(li);
    input.value = "";
}