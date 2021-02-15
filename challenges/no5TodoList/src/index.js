const todoForm = document.querySelector(".js-todoFrom");
const textInput = document.querySelector(".js-text");
const pendingUl = document.querySelector(".js-pending-frame");
const finishedUl = document.querySelector(".js-finished-frame");

const TODO_LIST = "todoList";
const FINISH_LIST = "finishList";

let toDos = [];
let finisheds = [];

function todoPaint(todoData, kind, indexNum) {
  const li = document.createElement("li");
  li.id = indexNum;
  li.innerHTML = todoData;

  const delBtn = document.createElement("button");
  const finishBtn = document.createElement("button");

  delBtn.addEventListener("click", deleteBtnClickHandler);
  finishBtn.addEventListener("click", finishBtnClickHandler);
  delBtn.innerHTML = "❌";
  delBtn.value = kind === TODO_LIST ? TODO_LIST : FINISH_LIST;
  finishBtn.innerHTML = kind === TODO_LIST ? "✔" : "↩";
  finishBtn.value = kind === TODO_LIST ? TODO_LIST : FINISH_LIST;

  li.appendChild(delBtn);
  li.appendChild(finishBtn);

  if (kind === TODO_LIST) {
    pendingUl.appendChild(li);
  }

  if (kind === FINISH_LIST) {
    finishedUl.appendChild(li);
  }
}

function localSave(kind) {
  if (kind === TODO_LIST) {
    localStorage.setItem(TODO_LIST, JSON.stringify(toDos));
  }
  if (kind === FINISH_LIST) {
    localStorage.setItem(FINISH_LIST, JSON.stringify(finisheds));
  }
}

// 투두삭제펑션
function todoDelete(id, kind) {
  const delTarget = document.getElementById(id);
  if (kind === TODO_LIST) {
    const cleanToDos = toDos.filter(function (todo) {
      return todo.key !== id;
    });

    toDos = cleanToDos;
  }
  if (kind === FINISH_LIST) {
    const cleanFinisheds = finisheds.filter(function (finish) {
      return finish.key !== id;
    });
    finisheds = cleanFinisheds;
  }

  localSave(kind);
  delTarget.remove();
}

function toDoSave(taskData, kind) {
  let indexNum;
  if (kind === TODO_LIST) {
    indexNum = (kind === TODO_LIST ? "p" : "f") + toDos.length;
    const toDo = { key: indexNum, value: taskData };
    toDos.push(toDo);
  }

  if (kind === FINISH_LIST) {
    indexNum = (kind === TODO_LIST ? "p" : "f") + finisheds.length;
    const finish = { key: indexNum, value: taskData };
    finisheds.push(finish);
  }

  todoPaint(taskData, kind, indexNum);
  localSave(kind);
}

function getInputVal() {
  const reuslt = textInput.value;
  textInput.value = "";
  return reuslt;
}

function loadList() {
  const toDoList = localStorage.getItem(TODO_LIST);
  const finishList = localStorage.getItem(FINISH_LIST);
  if (toDoList !== null) {
    const todoLoad = JSON.parse(toDoList);
    todoLoad.forEach(function (obj) {
      toDoSave(obj.value, TODO_LIST);
    });
  }
  if (finishList !== null) {
    const finishLoad = JSON.parse(finishList);
    finishLoad.forEach(function (obj) {
      toDoSave(obj.value, FINISH_LIST);
    });
  }
}

todoForm.addEventListener("submit", todoFormHandler);

function finishBtnClickHandler(event) {
  const changeId = event.target.parentNode.id;
  const kind = event.target.value;
  let value = document.getElementById(changeId).innerText;
  value = value.substr(0, value.length - 2);
  todoDelete(changeId, kind);
  toDoSave(value, kind === TODO_LIST ? FINISH_LIST : TODO_LIST);
}

function deleteBtnClickHandler(event) {
  const delId = event.target.parentNode.id;
  const kind = event.target.value;
  todoDelete(delId, kind);
}

function todoFormHandler(event) {
  event.preventDefault();
  toDoSave(getInputVal(), TODO_LIST);
}

function init() {
  loadList();
}

init();
