import React from "react";
import "./CalenderAndNotifications.scss";
import BellIcon from "../../Resources/icon/ui/accessibility.png";

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

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = new Date();
let currentDate = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();
let visibleMonth = currentMonth;
let visibleYear = currentYear;

function getFirstDayOfMonth(year = currentYear, month = currentMonth) {
  let temp = new Date(year, month, 1).getDay();
  if (temp === 0) return 7;
  return temp;
}

function getDaysInMonth(year = currentYear, month = currentMonth) {
  return new Date(year, month + 1, 0).getDate();
}

function changeMonth(customInput = 1) {
  visibleMonth = visibleMonth + customInput;

  if (visibleMonth === -1) {
    visibleMonth = 11;
    visibleYear = visibleYear - 1;
  }
  if (visibleMonth === 12) {
    visibleMonth = 0;
    visibleYear = visibleYear + 1;
  }
  renderCalender(visibleYear, visibleMonth);
}

function renderCalender(year = currentYear, month = currentMonth) {
  document.getElementById(
    "current-month"
  ).innerText = `${months[month]}, ${year}`;
  document.getElementById("todays-date").innerText = `${
    days[date.getDay()]
  },${currentDate} ${months[currentMonth]}`;
  document.getElementById("CalenderMain").innerHTML = "";

  let firstDay = getFirstDayOfMonth(year, month);
  let TotalDays = getDaysInMonth(year, month);
  let TotalDaysPrevMonth = getDaysInMonth(year, month - 1);
  let TotalCalenderDateDiv = 0;

  for (let i = 0; i < firstDay - 1; i++) {
    let div = document.createElement("div");
    div.classList.add("gray-text");
    div.classList.add("CalenderDate");
    div.innerText = TotalDaysPrevMonth - firstDay + 2 + i;
    document.getElementById("CalenderMain").append(div);
    TotalCalenderDateDiv++;
  }

  for (let i = 0; i < TotalDays; i++) {
    let div = document.createElement("div");
    div.classList.add("CalenderDate");
    if (
      year === currentYear &&
      month === currentMonth &&
      i + 1 === currentDate
    ) {
      div.innerHTML = `<div class="blue-circle">${i + 1}</div>`;
    } else {
      div.innerHTML = `<div class="calender-date">${i + 1}</div>`;
    }

    document.getElementById("CalenderMain").append(div);
    TotalCalenderDateDiv++;
  }

  let i = 1;
  while (TotalCalenderDateDiv < 42) {
    let div = document.createElement("div");
    div.classList.add("gray-text");
    div.classList.add("CalenderDate");
    div.innerText = i++;
    document.getElementById("CalenderMain").append(div);
    TotalCalenderDateDiv++;
  }

  console.clear();
  console.log("Calender Updated To", {
    Month: months[month],
    month,
    Year: year,
    firstDay,
    TotalDays,
    TotalDaysPrevMonth,
  });
}

let calenderOriginalSize = 0;
setTimeout(() => {
  renderCalender();
  calenderOriginalSize = document.getElementById(
    "calender-collapsable"
  ).offsetHeight;
}, 10);

let bab = true;
function collapseCalender(collapse, maxHeight) {
  let collapsableDiv = document.getElementById("calender-collapsable");
  if (collapse) {
    let targetSize = calenderOriginalSize;
    while (targetSize <= 0) {
      collapsableDiv.style.height = targetSize + "px";
      targetSize--;
      console.log(targetSize);
    }
  } else {
    let targetSize = 0;
    while (targetSize >= calenderOriginalSize) {
      collapsableDiv.style.height = targetSize + "px";
      targetSize++;
      console.log(targetSize);
    }
  }
}

function CalenderAndNotifications() {
  return (
    <div className="CalenderAndNotifications" id="CalenderAndNotifications">
      <div className="Notifications" id="Notifications">
        <div className="NotificationsHeader">
          <div>Notification</div>
          {/* <img src={BellIcon} alt="" /> */}
        </div>
        <div className="NotificationsBody">No New Notifications</div>
      </div>
      <div className="Calender" id="Calender">
        <div>
          <div className="todays-date" id="todays-date">
            TodaysDate
          </div>
          <button
            onClick={() => {
              // bab
              //   ? (document.querySelector(
              //       ".calender-collapsable"
              //     ).style.height = "0px")
              //   : (document.querySelector(
              //       ".calender-collapsable"
              //     ).style.height = "fit-content");

              collapseCalender(bab, 300);
              // document.querySelector(".calender-collapsable").style.height =
              //   "0px";
              bab = !bab;
              // document.querySelector(".Calender").style.height = "50px";
              // document.querySelector(".Calender").style.height = "0px";
            }}
          >
            Collapse
          </button>
        </div>
        <div className="calender-collapsable" id="calender-collapsable">
          <div className="CalenderOptions">
            <div className="current-month" id="current-month">
              TodaysDate
            </div>
            <div
              className="CalenderOptionUpArrow"
              onClick={() => changeMonth(-1)}
            >
              UP&nbsp;
            </div>
            <div
              className="CalenderOptionDownArrow"
              onClick={() => changeMonth(1)}
            >
              DOWN
            </div>
          </div>
          <div className="CalenderDays">
            <div className="CalenderDay">Mon</div>
            <div className="CalenderDay">Tue</div>
            <div className="CalenderDay">Wed</div>
            <div className="CalenderDay">Thur</div>
            <div className="CalenderDay">Fri</div>
            <div className="CalenderDay">Sat</div>
            <div className="CalenderDay">Sun</div>
          </div>
          <div className="CalenderMain" id="CalenderMain"></div>
        </div>
      </div>
    </div>
  );
}

export default CalenderAndNotifications;
