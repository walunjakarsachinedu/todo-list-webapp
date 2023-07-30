
class Task {
  taskName;
  checked;
  constructor(taskName, checked) {
    this.taskName = taskName;
    this.checked = checked;
  }
}

class Tasks {
  tasks = [];

  getAllTask() {
    return this.tasks;
  }

  addTask(task, checked=false) { 
    this.tasks.push(new Task(task, checked));
  }

  removeTask(index) { 
    this.tasks.splice(index, 1);
  }

  updateTask(index, value) { 
    this.tasks[index].taskName = value;
  }

  get length() {
    return this.tasks.length;
  }

}


const tasks = new Tasks();
const taskAddButton = document.getElementById("add-task-button");
const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    addNewTask(inputBox.value);
  }
}

function addNewTask(taskName) {
  inputBox.value = '';
  console.log("new task is entered");
  if(taskName == "") return;
  let task = document.createElement('div');
  task.innerHTML = `
  <div class="task"> 
  <img src="./images/unchecked.png" alt="" data-checked="false" onclick="toggleTask(this)">
  <input class="task-name" value="${taskName}" placeholder="Enter task name"> </input>
  <span class="material-symbols-outlined icon-button" onclick="removeTask(this)">
    close
  </span>
</div>
  `; 
  tasks.addTask(taskName);
  taskList.appendChild(task);
  console.log(tasks);
}


function toggleTask(task) {
  const src = task.getAttribute("src");
  if(src == "./images/unchecked.png") {
    task.setAttribute("src", "./images/checked.png");
  } 
  if(src == "./images/checked.png") {
    task.setAttribute("src", "./images/unchecked.png");
  }
}

function removeTask(task) {
  task.parentNode.remove();
}

taskAddButton.addEventListener('click', () => addNewTask(inputBox.value));
inputBox.addEventListener("keypress", handleKeyPress);