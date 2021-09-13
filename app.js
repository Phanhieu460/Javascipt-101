const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const end = document.querySelector(".end");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
// console.log("teapMonth", tempMonth);
let tempDay = tempDate.getDate();
// console.log("tempDay", tempDay);
let futureDate = new Date(tempYear, tempMonth, tempDay, 15, 0, 0);

const year = futureDate.getFullYear();
const hours =
  futureDate.getHours() < 10
    ? `0${futureDate.getHours()}`
    : futureDate.getHours();
const minutes =
  futureDate.getMinutes() < 10
    ? `0${futureDate.getMinutes()}`
    : futureDate.getMinutes();

// console.log("minutes", minutes);
let month = months[futureDate.getMonth()];
const date = futureDate.getDate();
// console.log(futureDate.getDay());
const weekday = weekdays[futureDate.getDay()];

end.textContent = `Buổi Học Tiếp Theo ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}`;

const futureTime = futureDate.getTime();
// console.log("futureDate", futureDate);
function getRemainingTime() {
  const today = new Date().getTime();
  // console.log("today", today);

  const t = futureTime - today;

  // 1s=1000ms
  // 1p=60s
  // 1hr=60min
  // 1day=24hr

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);

  let hour = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hour, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdowm);
    deadline.innerHTML = `<h4 class="expired">Da Qua Thoi Gian</h4>`;
  }
}

let countdowm = setInterval(getRemainingTime, 1000);
getRemainingTime();
