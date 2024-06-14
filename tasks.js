document.getElementById("addNewTask").addEventListener("click", () => {
  const taskInp = document.getElementById("taskInp");
  const dateInp = document.getElementById("dateInp");

  const task = document.createElement("li");

  let today = new Date();
  let taskDate = new Date(dateInp.value);

  if (isToday(taskDate)) {
    const todayList = document.getElementById("todayList");

    task.className = "todayTask";
    task.innerText = taskInp.value;

    todayList.appendChild(task);
  } else if (taskDate > today) {
    const addListobjekt = document.createElement("li");
    const addList = document.createElement("ul");
    const toDate = document.createElement("li");
    const taskList = document.getElementById("taskList");

    task.className = "taskObjektiv";
    toDate.className = "day";
    addList.className = "task";

    task.innerText = taskInp.value;
    addList.appendChild(task);

    toDate.innerText = `${taskDate.getDate()} ${getMonthName(
      taskDate.getMonth()
    )}, ${taskDate.getFullYear()}`;

    addList.appendChild(toDate);

    addListobjekt.appendChild(addList);

    taskList.appendChild(addListobjekt);
  } else if (taskDate < today) {
    console.log("Liegt in der Vergangenheit oder ist kein datum");
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
