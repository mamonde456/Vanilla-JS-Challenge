const todayTxt = document.querySelector("div.today-txt");

function getDay() {
  const today = new Date();
  const year = String(today.getFullYear());
  const month = String(today.getMonth());
  const date = String(today.getDate());
  let day = String(today.getDay());

  switch (day) {
    case "0":
      day = "일";
      break;
    case "1":
      day = "월";
      break;
    case "2":
      day = "화";
      break;
    case "3":
      day = "수";
      break;
    case "4":
      day = "목";
      break;
    case "5":
      day = "금";
      break;
    case "6":
      day = "토";
      break;
  }

  todayTxt.innerText = `${year}년 ${month}월 ${date}일 ${day}요일`;
}

getDay();
//clock

const clock = document.querySelector("h2.clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// login

const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const todo = document.querySelector(".todo-form");
const login = document.createElement("div");
const quotes = document.querySelector(".quote");

const CLASSNAME_HIDDNE = "hidden";
const USERNAME = "username";
const MOVEQUOTES = "moveQuotes";
const MOVECLOCK = "moveClock";

function onLoginSubmint(event) {
  event.preventDefault();
  loginForm.classList.add(CLASSNAME_HIDDNE);
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(CLASSNAME_HIDDNE);
  todo.classList.remove(CLASSNAME_HIDDNE);
  clock.classList.add(MOVECLOCK);
  quotes.classList.add(MOVEQUOTES);
}

const saveUsername = localStorage.getItem(USERNAME);

if (saveUsername === null) {
  loginForm.classList.remove(CLASSNAME_HIDDNE);
  quotes.classList.remove(MOVEQUOTES);
  clock.classList.remove(MOVECLOCK);
  todo.classList.add(CLASSNAME_HIDDNE);
  loginForm.addEventListener("submit", onLoginSubmint);
} else {
  paintGreeting(saveUsername);
}

//todo
