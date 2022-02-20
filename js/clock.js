const clock = document.querySelector("h2.clock");
const todayTxt = document.querySelector("div.today-txt");
function getDay() {
  const today = new Date();
  const year = String(today.getFullYear());
  const month = String(today.getMonth());
  const date = String(today.getDate());
  const day = String(today.getDay());
  todayTxt.innerText = `${year}년 ${month}월 ${date}일 ${day}요일`;
}
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getDay();
getClock();
setInterval(getClock, 1000);
