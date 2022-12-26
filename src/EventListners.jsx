import React from "react";
import {
  clickSystemTrayIcon,
  iterateClass,
  clickStart,
  toggleCalenderAndNotifications,
} from "./GlobalFunctions";
// import { useEffect } from "react";

function EventListners() {
  setTimeout(() => {
    iterateClass("window", (e) => {
      if (e.id !== "StartupMessage") e.style.display = "none";
      e.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        clickSystemTrayIcon(false);
        toggleCalenderAndNotifications(false);
        clickStart(false);
      });
    });

    document.getElementById("Desktop").addEventListener("contextmenu", (e) => {
      e.preventDefault();
      document.getElementById("DesktopRightClickMenu").style.display = "block";
      document.getElementById("DesktopRightClickMenu").style.top =
        e.pageY + "px";
      document.getElementById("DesktopRightClickMenu").style.left =
        e.pageX + "px";
      clickSystemTrayIcon(false);
      toggleCalenderAndNotifications(false);
      clickStart(false);
    });

    document.addEventListener("mousedown", (e) =>
      iterateClass("RightClickMenu", (ele) => {
        ele.style.display = "none";
      })
    );
  }, 10);

  return <></>;
}

export default EventListners;
