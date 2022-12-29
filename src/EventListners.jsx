import React from "react";
import {
  clickSystemTrayIcon,
  iterateClass,
  clickStart,
  toggleCalenderAndNotifications,
  renderFolder,
  folderAddressBack,
  folderAddressFoward,
} from "./GlobalFunctions";
// import { useEffect } from "react";

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
    document.getElementById("DesktopRightClickMenu").style.top = e.pageY + "px";
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

  document.querySelector(".FileExplorerAddressBar input").value = "This PC";
  renderFolder();
  while (folderAddressBack.length > 0) {
    folderAddressBack.pop();
  }
  while (folderAddressFoward.length > 0) {
    folderAddressFoward.pop();
  }
  document.getElementById("FileExplorerBackButton").style.filter = `invert(${
    folderAddressBack.length === 0 ? 0.5 : 0
  })`;
  document.getElementById("FileExplorerForwardButton").style.filter = `invert(${
    folderAddressFoward.length === 0 ? 0.5 : 0
  })`;

  document
    .querySelector(".FileExplorerAddressBar input")
    .addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        let FileExplorerAddressBar = document.querySelector(
          ".FileExplorerAddressBar input"
        );
        document.querySelector("#EmptyInput").focus();
        let address = FileExplorerAddressBar.value;
        renderFolder(address);
      }
    });
}, 10);

function EventListners() {
  return <></>;
}

export default EventListners;
