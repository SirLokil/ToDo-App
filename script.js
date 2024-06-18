window.onload = () => {
  const pDate = document.getElementById("date");
  const date = new Date();

  pDate.innerText = `${date.getDate()} ${getMonthName(
    date.getMonth()
  )}, ${date.getFullYear()}`;
};

function getMonthName(numMonth) {
  switch (numMonth) {
    case 0:
      return "Januar";
    case 1:
      return "Febuar";
    case 2:
      return "März";
    case 3:
      return "April";
    case 4:
      return "Mai";
    case 5:
      return "Juni";
    case 6:
      return "Juli";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "Oktober";
    case 10:
      return "November";
    case 11:
      return "Dezember";
    default:
      return "{Month}";
  }
}

let backgroundSwitch = false;

const homeScreen = document.getElementById("homeScreen");
const taskScreen = document.getElementById("addTaskScreen");
let todayTasks = document.getElementsByClassName("todayTask");

let currentPage = "home";

document.getElementById("homeBtn").addEventListener("click", () => {
  toHome();
});

document.getElementById("addTaskBtn").addEventListener("click", () => {
  if (currentPage === "home") {
    toNewTask();
  } else {
    toHome();
  }
});

function toHome() {
  homeScreen.style.display = "flex";
  taskScreen.style.display = "none";
  currentPage = "home";
}

function toNewTask() {
  homeScreen.style.display = "none";
  taskScreen.style.display = "block";
  currentPage = "task";
}

document.getElementById("styleBtn").addEventListener("click", () => {
  backgroundSwitch = !backgroundSwitch;

  let backgroundImage = backgroundSwitch
    ? "url(img/background.svg)"
    : "url(img/background.jpg)";

  let styleIcon = backgroundSwitch ? "img/light.svg" : "img/dark.svg";
  document.body.style.backgroundImage = backgroundImage;

  document.getElementById("styleImg").src = styleIcon;

  todayColor();
});

function todayColor() {
  let textColor = backgroundSwitch ? "white" : "rgb(79, 79, 79)";

  console.log(todayTasks);

  for (let i = 0; i < todayTasks.length; i++)
    todayTasks[i].style.color = textColor;
}

for (let i = 0; i < todayTasks.length; i++) {
  todayTasks[i].addEventListener("click", (e) => {
    if (e.target.attributes.class.value.split(" ").includes("complete")) {
      e.target.classList.remove("complete");
    } else {
      e.target.classList.add("complete");
    }
  });
}
