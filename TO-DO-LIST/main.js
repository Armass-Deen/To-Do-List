const button = document.getElementById("add");
const todolist = document.getElementById("todolist");
const input = document.getElementById("input");

var todos = [];
window.onload = () => {
  todos = JSON.parse(localStorage.getItem("Tasks")) || [];
  console.log(todos);

  todos.map((org) => {
    addtodo(org);
  });

  //   todos.forEach((itration) => {
  //     addtodo(itration);
  //   });

  //    for(let i=0;i<todos.length;i++){
  //     addtodo(todos[i])
  //    }
};

button.addEventListener("click", () => {
  todos.push(input.value);
  localStorage.setItem("Tasks", JSON.stringify(todos));
  console.log(todos);
  addtodo(input.value);
  input.value = "";
});

function addtodo(todo) {
  var para = document.createElement("h3");
  para.innerHTML = todo;
  todolist.appendChild(para);

  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
  });
  para.addEventListener("dblclick", () => {
    todolist.removeChild(para);
    console.log(todo);
    remove(todo);
  });
}
function remove(todo) {
  let index = todos.indexOf(todo);
  todos.splice(index, 1);
  localStorage.setItem("Tasks", JSON.stringify(todos));
}
