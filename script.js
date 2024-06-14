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

let backgroundSwitch = true;

const homeScreen = document.getElementById("homeScreen");
const taskScreen = document.getElementById("addTaskScreen");

document.getElementById("homeBtn").addEventListener("click", () => {
  homeScreen.style.display = "flex";
  taskScreen.style.display = "none";
});

document.getElementById("addTaskBtn").addEventListener("click", () => {
  homeScreen.style.display = "none";
  taskScreen.style.display = "block";
});

document.getElementById("styleBtn").addEventListener("click", () => {
  let backgroundImage = backgroundSwitch
    ? "url(img/background.svg)"
    : "url(img/background.jpg)";

  let styleIcon = backgroundSwitch ? "img/light.svg" : "img/dark.svg";
  document.body.style.backgroundImage = backgroundImage;

  document.getElementById("styleImg").src = styleIcon;

  let todayTasks = document.getElementsByClassName("todayTask");

  let textColor = backgroundSwitch ? "white" : "rgb(79, 79, 79)";

  for (let i = 0; i < todayTasks.length; i++)
    todayTasks[i].style.color = textColor;

  backgroundSwitch = !backgroundSwitch;
});
