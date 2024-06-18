class newTask {
  constructor(task, date) {
    this.task = task;
    this.date = date;
  }
  complete(completed) {}
}

function createElement(type, className) {
  let element = document.createElement(type);
  if (className) {
    element.classList.add(className);
  }
  return element;
}

function createLi(text, className) {
  let li = createElement("li", className);
  li.innerText = text;

  return li;
}

function createUl(className) {
  let ul = createElement("ul", className);

  return ul;
}

document.getElementById("addNewTask").addEventListener("click", () => {
  const taskInp = document.getElementById("taskInp");
  const dateInp = document.getElementById("dateInp");

  let today = new Date();
  let taskDate = new Date(dateInp.value);

  if (isToday(taskDate)) {
    const todayList = document.getElementById("todayList");

    const task = createLi(taskInp.value, "todayTask");

    todayList.appendChild(task);

    todayColor();
  } else if (taskDate > today) {
    const taskList = document.getElementById("taskList");

    const task = new createLi(taskInp.value, "taskObjektiv");
    const toDate = new createLi(dateString(taskDate), "day");
    const addList = new createUl("task");
    const addListobjekt = new createLi("", "");

    addList.appendChild(task);

    addList.appendChild(toDate);

    addListobjekt.appendChild(addList);

    taskList.appendChild(addListobjekt);
  } else if (taskDate < today) {
    console.log("Liegt in der Vergangenheit oder ist kein Datum");
  }
});

function isToday(date) {
  const today = new Date();
  return (
    date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
  );
}

function dateString(date) {
  const string = `${date.getDate()} ${getMonthName(
    date.getMonth()
  )}, ${date.getFullYear()}`;
  return string;
}
