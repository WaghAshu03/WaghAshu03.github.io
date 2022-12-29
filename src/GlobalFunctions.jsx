// Background Images
import BgLight from "./Resources/Background-Img-Light.jpg";
import BgDark from "./Resources/Background-Img-Dark.jpg";

import ResizeMin from "./Resources/icon/ui/maximize.png";
import ResizeMax from "./Resources/icon/ui/maxmin.png";
import OpenLink from "./Resources/icon/ui/link.png";

// Drives
import cDrive from "./Resources/icon/c-drive.png";
import Drive from "./Resources/icon/drive.png";

// Folders
import Folder3dObjects from "./Resources/icon/Folders/3d-objects-folder.png";
import folder from "./Resources/icon/Folders/folder.png";
import DesktopFolder from "./Resources/icon/Folders/desktop-folder.png";
import DocumentsFolder from "./Resources/icon/Folders/documents-folder.png";
import DownloadsFolder from "./Resources/icon/Folders/downloads-folder.png";
import MusicFolder from "./Resources/icon/Folders/music-folder.png";
import PicturesFolder from "./Resources/icon/Folders/pictures-folder.png";
import OneDriveFolder from "./Resources/icon/Folders/onedrive-folder.png";
import VideosFolder from "./Resources/icon/Folders/videos-folder.png";
import DownArrowTailless from "./Resources/icon/ui/down-arrow-tailless.svg";

// Extensions
import UnknownExtensions from "./Resources/icon/Extensions/unknown-extensions.png";
import CodeExtension from "./Resources/icon/Extensions/code-extensions.png";
import ImageExtensions from "./Resources/icon/Extensions/image-extensions.png";
import MusicExtensions from "./Resources/icon/Extensions/music-extensions.png";
import TextExtensions from "./Resources/icon/Extensions/text-file-extensions.png";
import VideoExtensions from "./Resources/icon/Extensions/video-extensions.png";
import WebExtensions from "./Resources/icon/Extensions/web-extensions.png";
import WordDocExtensions from "./Resources/icon/Extensions/word-doc-extensions.png";
import ThisPC from "./Resources/icon/thispc.png";

let consoleId = 0;
export function consoleLog() {
  try {
    document.getElementById("ConsoleCleared").remove();
  } catch (error) {}
  let firstCommand = true;
  let consoleWindow = document.querySelector("#window1 .window-content");
  let newEle = document.createElement("div");
  newEle.id = `consoleId${consoleId}`;
  let finalMessage = "";

  for (let i = 0; i < arguments.length; i++) {
    finalMessage = finalMessage + (firstCommand ? ">\xa0\xa0" : "...\xa0\xa0");
    firstCommand = false;
    const element = arguments[i];

    if (typeof element === "object") {
      firstCommand = true;
      for (const prop in element) {
        finalMessage = finalMessage + (firstCommand ? "" : "...\xa0\xa0");
        firstCommand = false;
        finalMessage = finalMessage + `${prop} : ${element[prop]}\n`;
        // consoleWindow.append(newEle);
      }
    } else {
      finalMessage = finalMessage + `${element}\n`;
    }
    newEle.innerText = finalMessage + "\n";
    consoleWindow.append(newEle);
    consoleId = consoleId + 1;

    newEle.scrollIntoView({
      block: "end",
      inline: "nearest",
    });
  }
}

export function consoleClear() {
  try {
    document.getElementById("ConsoleCleared").remove();
  } catch (error) {}

  let consoleWindow = document.querySelector("#window1 .window-content");
  let newEle = document.createElement("div");
  newEle.id = "ConsoleCleared";
  newEle.innerHTML = "Console Cleared<hr>";
  consoleWindow.innerHTML = "";
  consoleWindow.append(newEle);
}

export function callFullScreenMode() {
  let elem = document.querySelector("body");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }

  console.log("Full Screen");
}

export function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }

  console.log("Closed Full Screen");
}

export function initDragElement() {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  var windows = document.getElementsByClassName("window");
  var elmnt = null;
  var currentZIndex = 100; //TODO reset z index when a threshold is passed

  for (var i = 0; i < windows.length; i++) {
    var window = windows[i];
    var header = getHeader(window);

    window.onmousedown = function () {
      this.style.zIndex = "" + ++currentZIndex;
    };

    if (header) {
      header.parentwindow = window;
      header.onmousedown = dragMouseDown;
    }
  }

  function dragMouseDown(e) {
    elmnt = this.parentwindow;
    elmnt.style.zIndex = "" + ++currentZIndex;

    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    if (!elmnt) {
      return;
    }

    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";

    console.log("--", window.id, "--");
    // if (e.clientX !== 0 && e.clientY !== 0)
    //   document.getElementById(window.id + "-ResizeButton").src = ResizeMax;

    let topPosition = e.clientY + "px";
    let leftPosition = e.clientX + "px";
    console.clear();
    console.log(`${window.id} Dragged to:`, { topPosition, leftPosition });
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function getHeader(element) {
    var headerItems = element.getElementsByClassName("window-header");

    if (headerItems.length === 1) {
      return headerItems[0];
    }

    return null;
  }
}

export function initResizeElement() {
  var windows = document.getElementsByClassName("window");
  var element = null;
  var startX, startY, startWidth, startHeight;

  for (var i = 0; i < windows.length; i++) {
    var p = windows[i];

    var right = document.createElement("div");
    right.className = "resizer-right";
    p.appendChild(right);
    right.addEventListener("mousedown", initDrag, false);
    right.parentwindow = p;

    var bottom = document.createElement("div");
    bottom.className = "resizer-bottom";
    p.appendChild(bottom);
    bottom.addEventListener("mousedown", initDrag, false);
    bottom.parentwindow = p;

    var both = document.createElement("div");
    both.className = "resizer-both";
    p.appendChild(both);
    both.addEventListener("mousedown", initDrag, false);
    both.parentwindow = p;
  }

  function initDrag(e) {
    element = this.parentwindow;

    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(
      document.defaultView.getComputedStyle(element).width,
      10
    );
    startHeight = parseInt(
      document.defaultView.getComputedStyle(element).height,
      10
    );
    document.documentElement.addEventListener("mousemove", doDrag, false);
    document.documentElement.addEventListener("mouseup", stopDrag, false);
  }

  function doDrag(e) {
    let windowWidth = startWidth + e.clientX - startX + "px";
    let windowHeight = startHeight + e.clientY - startY + "px";
    element.style.width = windowWidth;
    element.style.height = windowHeight;

    console.log("Window Resized to", { windowWidth, windowHeight });
    // if (
    //   windowWidth !== window.innerWidth &&
    //   windowHeight !== window.innerHeight - 45
    // )
    //   document.getElementById(p.id + "-ResizeButton").src = ResizeMax;
  }

  function stopDrag() {
    document.documentElement.removeEventListener("mousemove", doDrag, false);
    document.documentElement.removeEventListener("mouseup", stopDrag, false);
  }
}

// This Function Iterate Through Elements with given className
// It needs one parameter(eg. el), this parameter will represent individual element
export function iterateClass(givenClassName, iteratingFunction) {
  Array.prototype.forEach.call(
    document.getElementsByClassName(givenClassName),
    iteratingFunction
  );
}

export function iterateQuery(givenQuery, iteratingFunction) {
  Array.prototype.forEach.call(
    document.querySelectorAll(givenQuery),
    iteratingFunction
  );
}

export function openWindow(windowID) {
  let windowEle = document.getElementById(windowID);
  if (windowEle.style.display === "none") {
    windowEle.style.transform = `scale(0.9)`;
    windowEle.style.display = "grid";
    let scaleSize = 0.95;
    const blockInterval = setInterval(() => {
      scaleSize = scaleSize + 0.01;
      windowEle.style.transform = `scale(${scaleSize})`;
      windowEle.style.opacity = scaleSize;

      if (scaleSize >= 1) {
        scaleSize = 1;
        windowEle.style.transform = `scale(${scaleSize})`;
        windowEle.style.opacity = scaleSize;
        clearInterval(blockInterval);
      }
    }, 10);
  }

  console.log(windowID + " Opened");
}

export function windowResize(
  windowID,
  windowWidth = "100vw",
  windowHeight = "calc(100vh - 45px)",
  topPosition = 0,
  leftPosition = 0
) {
  let windowEle = document.getElementById(windowID);
  let transitionTime = "300ms";

  windowEle.style.transition = transitionTime;

  if (
    windowWidth === "100vw" &&
    windowHeight === "calc(100vh - 45px)" &&
    topPosition === 0 &&
    leftPosition === 0
  ) {
    document.getElementById(windowID + "-ResizeButton").src = ResizeMin;
  } else document.getElementById(windowID + "-ResizeButton").src = ResizeMax;

  windowEle.style.top = topPosition;
  windowEle.style.left = leftPosition;
  windowEle.style.width = windowWidth;
  windowEle.style.height = windowHeight;

  setTimeout(() => {
    windowEle.style.transition = "0ms";
    consoleLog({
      windowID,
      windowHeight,
      windowWidth,
      topPosition,
      leftPosition,
    });

    console.log(`${windowID} Resized to`, {
      windowWidth,
      windowHeight,
      topPosition,
      leftPosition,
    });
  }, transitionTime);
}

export function minimizeWindow(windowID) {
  let windowEle = document.getElementById(windowID);

  if (windowEle.style.display !== "none") {
    let scaleSize = 1;
    const blockInterval = setInterval(() => {
      scaleSize = scaleSize - 0.01;
      windowEle.style.transform = `scale(${scaleSize})`;
      windowEle.style.opacity = scaleSize - 0.3;

      if (scaleSize <= 0.92) {
        scaleSize = 0.92;
        windowEle.style.transform = `scale(${scaleSize})`;
        windowEle.style.display = "none";
        clearInterval(blockInterval);
      }
    }, 10);
  }

  console.log(windowID + " Minimize");
}

export function closeWindow(windowID) {
  let windowEle = document.getElementById(windowID);

  if (windowEle.style.display !== "none") {
    let scaleSize = 1;
    const blockInterval = setInterval(() => {
      scaleSize = scaleSize - 0.01;
      windowEle.style.transform = `scale(${scaleSize})`;
      windowEle.style.opacity = scaleSize - 0.3;

      if (scaleSize <= 0.92) {
        scaleSize = 0.92;
        windowEle.style.transform = `scale(${scaleSize})`;
        windowEle.style.display = "none";
        if (windowID === "FileExplorer") {
          renderFolder();
          while (folderAddressBack.length > 0) {
            folderAddressBack.pop();
          }
          while (folderAddressFoward.length > 0) {
            folderAddressFoward.pop();
          }

          document.getElementById(
            "FileExplorerBackButton"
          ).style.filter = `invert(${
            folderAddressBack.length === 0 ? 0.5 : 0
          })`;
          document.getElementById(
            "FileExplorerForwardButton"
          ).style.filter = `invert(${
            folderAddressFoward.length === 0 ? 0.5 : 0
          })`;
        }
        clearInterval(blockInterval);
      }
    }, 10);
  }

  console.log(windowID + " Closed");
}

export function addClassByAvailability(elementID, givenClassName) {
  let windowEle = document.getElementById(elementID);

  if (windowEle.classList.value.indexOf(givenClassName) === -1) {
    windowEle.classList.add(givenClassName);
  } else {
    windowEle.classList.remove(givenClassName);
  }
}

export const returnTimeAMPM = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const strTime = `${hours}:${minutes} ${ampm}`.toUpperCase();

  return strTime;
};

export function returnDate() {
  let date = new Date();

  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
}

export let lightTheme = true;
export const changeTheme = () => {
  console.log("Theme Changed to", lightTheme ? "Light Theme" : "Dark Theme");
  document.getElementById("StartupMessage").style.backgroundColor = lightTheme
    ? "#e5eaff"
    : "rgb(43, 43, 43)";

  document.getElementById("StartupMessage").style.color = lightTheme
    ? "black"
    : "white";

  document.getElementById("StartupMessageFooter").style.backgroundColor =
    lightTheme ? "#dae2f2" : "rgb(32, 32, 32)";

  document.getElementById("StartupMessageFooter").style.boxShadow = lightTheme
    ? "box-shadow: rgba(255, 255, 255, 0.07) 0px 1px 2px, rgba(255, 255, 255, 0.07) 0px 2px 4px, rgba(255, 255, 255, 0.07) 0px 4px 8px, rgba(255, 255, 255, 0.07) 0px 8px 16px, rgba(255, 255, 255, 0.07) 0px 16px 32px, rgba(255, 255, 255, 0.07) 0px 32px 64px;"
    : "rgba(0, 0, 0, 0.35) 0px 5px 15px";

  document.getElementById("App").style.backgroundImage = `url(${
    lightTheme ? BgLight : BgDark
  })`;

  // Start Menu
  document.getElementById("StartMenu").style.backgroundColor = lightTheme
    ? "#e5eaffbb"
    : "#242424bb";

  // lightTheme
  //   ? "#e5eaffee"
  //   : "#242424cc";
  document.getElementById("StartMenu").style.color = lightTheme
    ? "#000"
    : "#fff";
  document.getElementById("StartMenuSearchBox").style.backgroundColor =
    lightTheme ? "#fff" : "#181818";

  document.querySelector(".StartMenuSearchBox img").style.filter = lightTheme
    ? "invert(0)"
    : "invert(1)";
  document.getElementById("StartMenuSearchBox").style.color = lightTheme
    ? "#000"
    : "#fff";

  document.getElementById("StartMenuFooter").style.backgroundColor = lightTheme
    ? "#dae2f2dd"
    : "#0000004d";

  document.getElementById("StartMenuFooter").style.boxShadow = lightTheme
    ? "box-shadow: rgba(255, 255, 255, 0.07) 0px 1px 2px, rgba(255, 255, 255, 0.07) 0px 2px 4px, rgba(255, 255, 255, 0.07) 0px 4px 8px, rgba(255, 255, 255, 0.07) 0px 8px 16px, rgba(255, 255, 255, 0.07) 0px 16px 32px, rgba(255, 255, 255, 0.07) 0px 32px 64px;"
    : "rgba(0, 0, 0, 0.35) 0px 5px 15px";

  document.getElementById("WindowsSearch").style.backgroundColor = lightTheme
    ? "#e5eaffee"
    : "#242424cc";
  document.getElementById("WindowsSearch").style.color = lightTheme
    ? "#000"
    : "#fff";

  document.getElementById("Taskbar").style.backgroundColor = lightTheme
    ? "#e5eaffcc"
    : "#242424cc";
  document.getElementById("Taskbar").style.color = lightTheme
    ? "black"
    : "white";

  document.getElementById("SearchIcon").style.filter = lightTheme
    ? "invert(0)"
    : "invert(1)";

  iterateClass("window", (e) => {
    e.style.transition = "300ms";
    e.style.backgroundColor = lightTheme ? "#e5eaff" : "#2b2b2b";
    e.style.color = lightTheme ? "black" : "white";
  });

  iterateClass("window-header", (e) => {
    e.style.background = lightTheme
      ? "#eff4f9"
      : "linear-gradient(90deg, rgba(31,32,42,1) 0%, rgba(30,32,44,1) 25%, rgba(29,32,46,1) 39%, rgba(28,31,50,1) 100%)";
    e.style.color = lightTheme ? "black" : "white";
  });

  iterateQuery(".WindowHeaderIcon img", (e) => {
    e.style.filter = lightTheme ? "invert(0)" : "invert(1)";
  });

  iterateClass("window-footer", (e) => {
    e.style.backgroundColor = lightTheme ? "#fff" : "#1c1c1c";
    e.style.color = lightTheme ? "black" : "white";
  });

  setTimeout(() => {
    iterateClass("window", (e) => {
      e.style.transition = "0ms";
    });
  }, 300);

  // File Explorer:
  document.getElementById("FileExplorer-content").style.backgroundColor =
    lightTheme ? "#fff" : "#191919";

  document.getElementById("FileExplorer-panel").style.background = lightTheme
    ? "linear-gradient(#eff4f9, #eff4f9, #eff4f9, #eff4f9)"
    : // : "linear-gradient(#171929, #17192c, #17192f, #171930)";
      "linear-gradient(90deg, rgba(31,32,42,1) 0%, rgba(30,32,44,1) 25%, rgba(29,32,46,1) 39%, rgba(28,31,50,1) 100%)";

  document.getElementById(
    "FileExplorer-panel"
  ).style.borderBottom = `1px solid ${lightTheme ? "#bbb" : "#444"}`;

  iterateClass("FEP-Items", (e) => {
    e.style.borderRight = `1px solid ${lightTheme ? "#bbb" : "#ffffff5f"}`;
  });

  document.getElementById(
    "FileExplorerAddressbarAndOperations"
  ).style.borderBottom = `1px solid ${lightTheme ? "#bbb" : "#444"}`;

  iterateQuery('.FileExplorerAddressBar > input[type="text"]', (e) => {
    e.style.backgroundColor = lightTheme ? "#fff" : "#191919";
    e.style.border = `1px solid ${lightTheme ? "#bbb" : "#444"}`;
  });

  iterateQuery(".FileExplorerAddressBar", (e) => {
    if (lightTheme) e.classList.add("FileExplorerAddressBarLight");
    else e.classList.remove("FileExplorerAddressBarLight");
  });

  iterateQuery(".FileExplorerSearchBar input", (e) => {
    e.style.backgroundColor = lightTheme ? "#fff" : "#191919";
    e.style.border = `1px solid ${lightTheme ? "#bbb" : "#444"}`;
    e.style.color = lightTheme ? "black" : "white";
  });

  // let FEAObuttons = document.getElementById("FileExplorerOperationButton");
  // console.log(FEAObuttons);
  iterateClass("FileExplorerOperationButton", (e) => {
    if (lightTheme) e.classList.add("FileExplorerOperationButtonLight");
    else e.classList.remove("FileExplorerOperationButtonLight");
  });

  document.getElementById(
    "FileExplorerLeftPanel"
  ).style.borderRight = `1px solid ${lightTheme ? "#bbb" : "#444"}`;

  iterateClass("DownArrowTailless", (e) => {
    if (!e.classList.contains("DownArrowTailless-Closed"))
      e.style.filter = `invert(${lightTheme ? 0 : 1})`;
  });

  iterateClass("DownArrowTailless-Closed", (e) => {
    e.style.filter = `invert(0.5)`;
  });

  iterateQuery(".FileExplorerLeftPanel hr", (e) => {
    e.style.borderBottom = `1px solid ${lightTheme ? "#bbb" : "#444"}`;
  });

  // File Explorer End

  document.getElementById("DesktopRightClickMenu").style.backgroundColor =
    lightTheme ? "#e5eaff" : "#115";
  document.getElementById("DesktopRightClickMenu").style.color = lightTheme
    ? "black"
    : "white";

  document.getElementById("SystemTrayMain1").style.backgroundColor = lightTheme
    ? "#e5eaffbb"
    : "#242424bb";
  document.getElementById("SystemTrayMain1").style.color = lightTheme
    ? "black"
    : "white";
  document.getElementById("SystemTrayMain2").style.backgroundColor = lightTheme
    ? "#dae2f2dd"
    : "#161616dd";

  document.getElementById("SystemTrayMain2").style.boxShadow = lightTheme
    ? "box-shadow: rgba(255, 255, 255, 0.07) 0px 1px 2px, rgba(255, 255, 255, 0.07) 0px 2px 4px, rgba(255, 255, 255, 0.07) 0px 4px 8px, rgba(255, 255, 255, 0.07) 0px 8px 16px, rgba(255, 255, 255, 0.07) 0px 16px 32px, rgba(255, 255, 255, 0.07) 0px 32px 64px;"
    : "rgba(0, 0, 0, 0.35) 0px 5px 15px";

  document.getElementById("SystemTrayMain2").style.color = lightTheme
    ? "black"
    : "white";

  iterateQuery(".SystemTrayButton", (e) => {
    e.style.backgroundColor = lightTheme
      ? e.classList.add("SystemTrayButtonLightTheme")
      : e.classList.remove("SystemTrayButtonLightTheme");
  });
  document.querySelector(".VolumeSeekbar img").style.filter = lightTheme
    ? "invert(0)"
    : "invert(1)";

  document.querySelector(".ScreenBrightness img").style.filter = lightTheme
    ? "invert(0)"
    : "invert(1)";
  document.querySelector(".SystemTrayMain2 div img").style.filter = lightTheme
    ? "invert(0)"
    : "invert(1)";

  lightTheme
    ? document
        .querySelector(".SystemTrayMain2")
        .classList.add("SystemTrayMain2Light")
    : document
        .querySelector(".SystemTrayMain2")
        .classList.remove("SystemTrayMain2Light");

  // Taskbar System Tray
  iterateQuery(".SystemTrayIcon div img", (e) => {
    e.style.filter = lightTheme ? "invert(0)" : "invert(1)";
  });

  lightTheme
    ? document
        .getElementById("SystemTrayIcon")
        .classList.add("SystemTrayIconLightTheme")
    : document
        .getElementById("SystemTrayIcon")
        .classList.remove("SystemTrayIconLightTheme");
  lightTheme
    ? document.getElementById("DateTime").classList.add("DateTimeLightTheme")
    : document
        .getElementById("DateTime")
        .classList.remove("DateTimeLightTheme");

  lightTheme = !lightTheme;
};

let startVisible = true;
export function clickStart(clickElse = "custom-input") {
  if (clickElse !== "custom-input") {
    startVisible = clickElse;
    console.log("-------------------");
    console.log("Start", startVisible);
    console.log("-------------------");
  } else {
    console.log("-------------------");
    console.log(clickElse);
    console.log("-------------------");
  }
  clickSystemTrayIcon(false);
  toggleCalenderAndNotifications(false);

  if (startVisible) {
    document.querySelector(".StartMenuSearchBox div").innerText = "";
    // setTimeout(() => {
    //   document.querySelector(".StartMenuSearchBox div").focus();
    // }, 151);
  }

  let startMenu = document.getElementById("StartMenu");
  let startMenuHeigth = startMenu.offsetHeight;

  startMenu.style.transform = startVisible
    ? `translate(-50%, ${0}px)`
    : `translate(-50%, ${startMenuHeigth + 10}px)`;

  console.log("Start Menu", startVisible ? "Opened" : "Closed");
  startVisible || togglePowerOptions(false);
  startVisible = !startVisible;

  startMenu.style.visibility = startVisible ? "hidden" : "visible";
}

let windowsSearchVisible = true;
export function clickWindowsSearch(clickElse = "custom-input") {
  if (clickElse !== "custom-input") {
    windowsSearchVisible = clickElse;
    console.log("-------------------");
    console.log("Windows Search", windowsSearchVisible);
    console.log("-------------------");
  } else {
    console.log("-------------------");
    console.log(clickElse);
    console.log("-------------------");
  }

  clickSystemTrayIcon(false);
  toggleCalenderAndNotifications(false);

  document.getElementById("WindowsSearchBox").innerHTML = "";
  renderSearchResults();

  let windowSearch = document.getElementById("WindowsSearch");
  let windowSearchHeigth = windowSearch.offsetHeight;
  let StartMenu = document.getElementById("StartMenu");

  windowSearch.style.height = StartMenu.offsetHeight - 20 + "px";
  windowSearch.style.width = StartMenu.offsetWidth - 40 + "px";

  windowSearch.style.transform = windowsSearchVisible
    ? `translate(-50%, ${0}px)`
    : `translate(-50%, ${windowSearchHeigth + 10}px)`;

  console.log("Windows Search", windowsSearchVisible ? "Opened" : "Closed");
  windowsSearchVisible = !windowsSearchVisible;

  windowSearch.style.visibility = windowsSearchVisible ? "hidden" : "visible";
}

let SystemTrayVisible = true;
export function clickSystemTrayIcon(clickElse = "custom-input") {
  if (clickElse !== "custom-input") {
    SystemTrayVisible = clickElse;
    console.log("-------------------");
    console.log("System Tray", SystemTrayVisible);
    console.log("-------------------");
  } else {
    console.log("-------------------");
    console.log(clickElse);
    console.log("-------------------");
  }

  let SystemTray = document.getElementById("SystemTray");
  let SystemTrayHeigth = SystemTray.offsetHeight;

  SystemTray.style.transform = SystemTrayVisible
    ? `translate(0%, ${0}px)`
    : `translate(0%, ${SystemTrayHeigth + 55}px)`;

  console.log("System Tray", SystemTrayVisible ? "Opened" : "Closed");
  SystemTrayVisible = !SystemTrayVisible;

  SystemTray.style.visibility = SystemTrayVisible ? "hidden" : "visible";
}

export function replaceStartToSearch() {
  let startMenu = document.getElementById("StartMenu");
  let windowsSearch = document.getElementById("WindowsSearch");
  let windowsSearchBox = document.getElementById("WindowsSearchBox");

  startMenu.style.transition = "0ms";
  windowsSearch.style.transition = "0ms";
  clickStart(false);
  clickWindowsSearch(true);

  windowsSearchBox.focus();

  setTimeout(() => {
    startMenu.style.transition = "150ms";
    windowsSearch.style.transition = "150ms";
  }, 0);
}

let powerOptionVisible = true;
export function togglePowerOptions(customInput = "custom-input") {
  if (customInput !== "custom-input") powerOptionVisible = customInput;

  let powerOptionsElement = document.getElementById("StartMenuPowerOptions");

  if (powerOptionVisible) {
    powerOptionsElement.style.visibility = "visible";
    setTimeout(() => {
      powerOptionsElement.style.opacity = 1;
      powerOptionsElement.style.top = "-10rem";
    }, 0);
    console.log("Inside IF: Power Options");
  } else {
    powerOptionsElement.style.opacity = 0;
    powerOptionsElement.style.top = "-8.9rem";
    setTimeout(() => {
      powerOptionsElement.style.visibility = "hidden";
    }, 0);
    console.log("Inside Else: Power Options");
  }
  console.log({ powerOptionVisible });
  console.log({ powerOptionVisible });
  powerOptionVisible = !powerOptionVisible;
}

let CalenderAndNotificationVisible = true;
export function toggleCalenderAndNotifications(customInput = "custom-input") {
  if (customInput !== "custom-input")
    CalenderAndNotificationVisible = customInput;

  let CalenderAndNotifications = document.getElementById(
    "CalenderAndNotifications"
  );

  CalenderAndNotificationVisible
    ? (CalenderAndNotifications.style.transform = "translate(0px, 0px)")
    : (CalenderAndNotifications.style.transform = "translate(360px, 0px)");

  CalenderAndNotificationVisible = !CalenderAndNotificationVisible;
}

export const folderStructure = {
  C: {
    PerfLogs: {},
    "Program Files": {
      AMD: {},
      "Brave Software": {},
      Git: {},
      Google: {},
      "Internet Explorer": {},
      Java: {},
      "Windows PowerShell": {},
      "Notepad++": {},
    },
    "Program Files (x86)": {
      "Brave Software": {},
      "Common Files": {},
      Microsoft: {},
      MySQL: {},
      "Windows Defender": {},
      "Windows Kits": {},
      "Windows Mail": {},
      "Windows Media Player": {},
      "Windows Multimedia Platform": {},
      "Windows NT": {},
      "Windows Photo Viewer": {},
      "Windows Portable Devices": {},
      "Windows PowerShell": {},
    },
    Users: {
      Ashu: {
        "3D Objects": {},
        Contacts: {},
        Desktop: {},
        Documents: {},
        Downloads: {},
        Favourites: {},
        OneDrive: {},
        Pictures: {},
        Searches: {},
        Music: {},
        Videos: {},
      },
      Public: {
        "Public Documents": {},
        "Public Downloads": {},
        "Public Music": {},
        "Public Pictures": {},
        "Public Videos": {},
      },
    },
    Windows: {
      Boot: {},
      Fonts: {},
      Logs: {},
      Media: {},
      "Microsoft.NET": {},
      security: {},
      "Service Profiles": {},
      "Service State": {},
      servicing: {},
      Setup: {},
      "Shell Components": {},
      System: {},
      System32: {},
      SystemApps: {},
      "System Resources": {},
      SystemTemp: {},
      SysWOW64: {},
      Temp: {},
    },
  },
  D: {
    Documents: {
      Work: {
        "Report.docx": 8,
        "Presentation.pptx": 5,
      },
      Personal: {
        "Vacation Photos": {
          "Spain.jpg": 12,
          "France.jpg": 10,
        },
      },
    },
    Videos: {
      Movies: {
        Action: {
          "Die Hard.mp4": 150,
          "Lethal Weapon.mp4": 500,
        },
        Comedy: {
          "The Hangover.mp4": 600,
          "Old Dogs.mp4": 1024,
        },
      },
      "TV Shows": {
        Sample: {},
        "Breaking Bad.mp4": 802,
        "Game of Thrones.mp4": 87,
      },
    },
  },
};

export const driveName = {
  C: "Windows 11",
  D: "Data",
  E: "Drive",
  F: "Drive",
};

export const driveSize = {
  C: { used: 184.7, total: 237 },
  D: { used: 152.4, total: 756 },
  E: { used: 10, total: 100 },
  F: { used: 10, total: 100 },
};

export const extenstionsAndLogo = {
  unknown: UnknownExtensions,
  txt: TextExtensions,
  // exe: "exe",
  py: CodeExtension,
  js: CodeExtension,
  ts: CodeExtension,
  jsx: CodeExtension,
  tsx: CodeExtension,
  json: CodeExtension,
  css: CodeExtension,
  html: WebExtensions,
  png: ImageExtensions,
  jpg: ImageExtensions,
  jpeg: ImageExtensions,
  gif: ImageExtensions,
  svg: ImageExtensions,
  pdf: WebExtensions,
  docx: WordDocExtensions,
  doc: WordDocExtensions,
  // lnk: "lnk",
  mp3: MusicExtensions,
  mp4: VideoExtensions,

  // Folder Logos:
  folder: folder,
  "3D Objects": Folder3dObjects,
  Desktop: DesktopFolder,
  Documents: DocumentsFolder,
  Downloads: DownloadsFolder,
  // Favourites: "Favourites",
  OneDrive: OneDriveFolder,
  Pictures: PicturesFolder,
  Videos: VideosFolder,
  Music: MusicFolder,

  // Drives:
  "This PC": ThisPC,
  C: cDrive,
  D: Drive,
  E: Drive,
  F: Drive,
};

export function iterateFolderStructure(obj, address, toFind = "") {
  toFind = toFind.trim().replace("/", "\\");
  console.clear();
  console.log({ Searched: toFind });
  if (toFind === "") return [];

  let searchedElements = [];

  for (const fileFolder in obj) {
    let slashCount = address.split("\\").length - 1;
    let tabs = "";
    for (let index = 0; index < slashCount; index++) {
      tabs += "\t";
    }

    if (
      fileFolder.toLowerCase().includes(toFind.toLowerCase())
      // || address.toLowerCase().includes(toFind.toLowerCase())
    ) {
      // let fileExtension = fileFolder.substring(fileFolder.lastIndexOf(".") + 1);
      searchedElements.push({
        logo:
          typeof obj[fileFolder] === "object"
            ? extenstionsAndLogo[fileFolder] === undefined
              ? extenstionsAndLogo["folder"]
              : extenstionsAndLogo[fileFolder]
            : extenstionsAndLogo[
                fileFolder.substring(fileFolder.lastIndexOf(".") + 1)
              ],
        type:
          typeof obj[fileFolder] === "object"
            ? address === ""
              ? "drive"
              : "folder"
            : fileFolder.substring(fileFolder.lastIndexOf(".") + 1),
        name: fileFolder,
        address: address === "" ? "This PC" : address.replace("\\\\", "\\"),
        size:
          typeof obj[fileFolder] === "object"
            ? `${Object.keys(obj[fileFolder]).length} items`
            : obj[fileFolder] < 1024
            ? `${obj[fileFolder].toFixed(2)} MB`
            : `${(obj[fileFolder] / 1024).toFixed(2)} GB`,
      });
    }

    if (typeof obj[fileFolder] === "object") {
      if (address !== "") {
        let returnedValue = iterateFolderStructure(
          obj[fileFolder],
          address + "\\" + fileFolder,
          toFind
        );

        for (const key in returnedValue) {
          searchedElements.push(returnedValue[key]);
        }
      } else {
        let returnedValue = iterateFolderStructure(
          obj[fileFolder],
          fileFolder + ":\\",
          toFind
        );
        for (const key in returnedValue) {
          searchedElements.push(returnedValue[key]);
        }
      }
    } else {
    }
  }
  return searchedElements;
}

export const folderAddressBack = [];
export function FileExplorerBackButton() {
  if (folderAddressBack.length > 0) {
    let address = folderAddressBack.pop();
    if (address === "This PC") address = "";
    folderAddressFoward.push(pwd);
    renderFolder(address, true);
  }
  document.getElementById("FileExplorerBackButton").style.filter = `invert(${
    folderAddressBack.length === 0 ? 0.5 : 0
  })`;
  document.getElementById("FileExplorerForwardButton").style.filter = `invert(${
    folderAddressFoward.length === 0 ? 0.5 : 0
  })`;
  console.log({ folderAddressBack, folderAddressFoward });
}

export const folderAddressFoward = [];
export function FileExplorerForwardButton() {
  if (folderAddressFoward.length > 0) {
    let address = folderAddressFoward.pop();
    if (address === "This PC") address = "";
    folderAddressBack.push(pwd);
    renderFolder(address, true);
  }

  document.getElementById("FileExplorerBackButton").style.filter = `invert(${
    folderAddressBack.length === 0 ? 0.5 : 0
  })`;
  document.getElementById("FileExplorerForwardButton").style.filter = `invert(${
    folderAddressFoward.length === 0 ? 0.5 : 0
  })`;
  console.log({ folderAddressBack, folderAddressFoward });
}

export function renderSearchResults() {
  let windowSearchBox = document.getElementById("WindowsSearchBox");

  let folderStructureResults = iterateFolderStructure(
    folderStructure,
    "",
    windowSearchBox.innerText
  );

  // All Searched Results will have keys: logo, type, name, address, and size(if applicable else it will be null).
  let totalResults = [...folderStructureResults];

  let WindowsSearchResultsContainer = document.getElementById(
    "WindowsSearchResultsContainer"
  );

  let WindowsSearchSingleResultContainer = document.getElementById(
    "WindowsSearchSingleResultContainer"
  );

  WindowsSearchResultsContainer.innerHTML = "";

  let WindowsSearchResultNum = 1;

  console.log(totalResults);
  for (const SearchedResult of totalResults) {
    let logo = SearchedResult.logo;
    let type = SearchedResult.type;
    if (["folder", "drive"].includes(type))
      type = type.charAt(0).toUpperCase() + type.slice(1);
    let name = SearchedResult.name;
    let address = SearchedResult.address;
    let size = SearchedResult.size;

    let div = document.createElement("div");
    div.classList.add("WindowsSearchedResult");
    div.id = "WindowsSearchedResult" + WindowsSearchResultNum;
    div.title = `${name} (${address})`;
    if (["Folder", "Drive"].includes(type)) {
      div.onclick = () => {
        clickWindowsSearch(false);
        setTimeout(() => {
          openWindow("FileExplorer");
        }, 135);
        setTimeout(() => {
          renderFolder(
            ["This PC", ""].includes(address) ? name : address + "\\" + name
          );
        }, 140);
      };
    }

    if (WindowsSearchResultNum === 1) {
      div.style.borderTop = "1px solid #ffffff5f";
      div.style.paddingTop = "0.5em";
    }

    div.innerHTML = `
    <div class="WindowsSearchedResultLogo"><img src=${logo} alt=${type} /></div>\
    <div class="WindowsSearchedResultLabel">${name}</div>\
    <div class="WindowsSearchedResultType">${type}</div>\
    `;
    WindowsSearchResultsContainer.append(div);

    if (WindowsSearchResultNum === 1) {
      WindowsSearchSingleResultContainer.innerHTML = `
      <div class="WindowsSearchSingleResultLogo"><img src=${logo} alt=${type} /></div>\
      <div class="WindowsSearchSingleResultLabel">${name}</div>\
      <div class="WindowsSearchSingleResultType">${type}</div>\
      <hr />\
      <div class="WindowsSearchSingleResultOpen" title="${name} (${address})"><img src=${OpenLink} alt=${"Open"} />Open</div>\
      `;

      if (["Folder", "Drive"].includes(type)) {
        document.querySelector(".WindowsSearchSingleResultOpen").onclick =
          () => {
            clickWindowsSearch(false);
            setTimeout(() => {
              openWindow("FileExplorer");
            }, 150);
            setTimeout(() => {
              renderFolder(
                ["This PC", ""].includes(address) ? name : address + "\\" + name
              );
            }, 155);
          };
      }
    }

    WindowsSearchResultNum++;

    if (WindowsSearchResultNum - 1 === 6) {
      break;
    }
  }

  if (windowSearchBox.innerText !== "") {
    let div = document.createElement("div");
    div.classList.add("WindowsSearchedResult");
    div.id = "WindowsSearchedResult" + (WindowsSearchResultNum + 1);

    div.innerHTML = `
  <div class="WindowsSearchedResultLogo"><img src=${WebExtensions} alt=${"Search"} /></div>\
  <div class="WindowsSearchedResultLabel">${windowSearchBox.innerText}</div>\
  <div class="WindowsSearchedResultType">${"See web results"}</div>\
  `;

    if (totalResults.length === 0) {
      div.style.borderTop = "1px solid #ffffff5f";
      div.style.paddingTop = "0.5em";
      div.style.paddingTop = "0.5em";

      WindowsSearchSingleResultContainer.innerHTML = `
      <div class="WindowsSearchSingleResultLogo"><img src=${WebExtensions} alt=${"Search"} /></div>\
      <div class="WindowsSearchSingleResultLabel">${
        windowSearchBox.innerText
      }</div>\
      <div class="WindowsSearchSingleResultType">${"Edge"}</div>\
      <hr />\
      <div class="WindowsSearchSingleResultOpen"><img src=${OpenLink} alt=${"Open"} />See web results</div>\
      `;
    }
    div.title = "Search: " + windowSearchBox.innerText;

    WindowsSearchResultsContainer.append(div);
  } else {
    WindowsSearchSingleResultContainer.innerHTML = "";
  }
}

// Gets the Folder Structure of a Folder based on given address
export function getFoldersStructure(address) {
  console.log("Getting Folder Structure for " + address);
  address = address.replace(":", "").replace(/\//g, "\\").replace("\\\\", "\\");

  if (address.charAt(address.length - 1) === "\\")
    address = address.slice(0, -1);

  address = address.split("\\");

  let Result = folderStructure;

  for (let index = 0; index < address.length; index++) {
    if (index === 0) Result = Result[address[index].toUpperCase()];
    else Result = Result[address[index]];
    if (Result === undefined) return undefined;
  }
  return Result;
}

export function removeEmptySpacesFromArray(array) {
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== "") temp.push(array[i]);
  }
  return temp;
}

let pwd = "This PC";
export function renderFolder(address = "", BackOrForwardButtonPressed = false) {
  console.log("Rendering Folder " + address);
  address = address.replace("/", "\\").split("\\");
  if (address[0] !== "" && !address[0].includes(":")) {
    address[0] = address[0].toUpperCase() + ":";
  }
  address = address.join("\\");
  if (address === "") {
    address = "This PC";
    let div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100px";
    div.style.background = "red";
    div.innerHTML = "Dfsf";
    document.getElementById("FileExplorerMain").append(div);
  }

  let givenFolderStructure = ["", "This PC"].includes(address)
    ? folderStructure
    : getFoldersStructure(address);
  let FileExplorerMain = document.getElementById("FileExplorerMain");

  if (givenFolderStructure !== undefined) {
    document.getElementById("FileExplorer-footer").innerText =
      Object.keys(givenFolderStructure).length + " Items";
    if (BackOrForwardButtonPressed === false) folderAddressBack.push(pwd);
    pwd = address;

    document.getElementById("FileExplorerBackButton").style.filter = `invert(${
      folderAddressBack.length === 0 ? 0.5 : 0
    })`;
    document.getElementById(
      "FileExplorerForwardButton"
    ).style.filter = `invert(${folderAddressFoward.length === 0 ? 0.5 : 0})`;

    FileExplorerMain.innerHTML = "";

    if (["", "This PC"].includes(address)) {
      let divLabel = document.createElement("div");
      divLabel.classList.add("ThisPC-Main-Labels");
      divLabel.style.width = "100%";
      divLabel.style.height = "1.5rem";
      divLabel.style.display = "flex";
      divLabel.style.alignItems = "center";
      divLabel.style.whiteSpace = "nowrap";
      // divLabel.style.background = "red";
      divLabel.innerHTML = `<img src=${DownArrowTailless} class="DownArrowTailless" alt=""/><div style="margin-left: 0.46rem">Folders (5)</div><hr style="width: calc(100% - 8rem); height: 0; border: none; border-bottom: 0.1rem solid #888">`;
      document.getElementById("FileExplorerMain").append(divLabel);

      let div = document.createElement("div");
      div.style.width = "100%";
      div.style.display = "flex";
      div.style.flexWrap = "wrap";
      let FoldersToAdd = [
        "Documents",
        "Downloads",
        "Pictures",
        "Music",
        "Videos",
      ];

      for (let i = 0; i < FoldersToAdd.length; i++) {
        let ThisPCFileExplorerItem = document.createElement("div");
        ThisPCFileExplorerItem.classList.add("FileExplorerItem");
        ThisPCFileExplorerItem.onclick = () => {
          iterateClass("FileExplorerItem", (e) => {
            e.setAttribute("is-focused", "false");
            e.setAttribute("is-outlined", "false");
          });
          ThisPCFileExplorerItem.setAttribute("is-focused", "true");
          ThisPCFileExplorerItem.setAttribute("is-outlined", "true");
        };
        ThisPCFileExplorerItem.ondblclick = () =>
          renderFolder(`C:\\Users\\Ashu\\${FoldersToAdd[i]}`);

        let img = document.createElement("img");
        img.src = extenstionsAndLogo[FoldersToAdd[i]];
        let innerDiv = document.createElement("div");
        innerDiv.innerText = FoldersToAdd[i];
        ThisPCFileExplorerItem.append(img);
        ThisPCFileExplorerItem.append(innerDiv);
        div.append(ThisPCFileExplorerItem);
      }

      document.getElementById("FileExplorerMain").append(div);

      let divLabel2 = document.createElement("div");
      divLabel2.classList.add("ThisPC-Main-Labels");
      divLabel2.style.width = "100%";
      divLabel2.style.height = "1.5rem";
      divLabel2.style.display = "flex";
      divLabel2.style.alignItems = "center";
      divLabel2.style.whiteSpace = "nowrap";
      divLabel2.style.marginTop = "0.5rem";
      divLabel2.style.marginBottom = "1rem";

      // divLabel2.style.marginLeft = "0.46rem";
      divLabel2.innerHTML = `<img src=${DownArrowTailless} class="DownArrowTailless" alt=""/><div style="margin-left: 0.46rem">Devices and drives (2)</div><hr style="width: calc(100% - 12.5rem); height: 0; border: none; border-bottom: 0.1rem solid #888">`;
      document.getElementById("FileExplorerMain").append(divLabel2);
    }

    for (const item in givenFolderStructure) {
      let ItemLogo =
        typeof givenFolderStructure[item] === "object"
          ? extenstionsAndLogo[item] === undefined
            ? extenstionsAndLogo["folder"]
            : extenstionsAndLogo[item]
          : extenstionsAndLogo[item.substring(item.lastIndexOf(".") + 1)];

      let div = document.createElement("div");
      div.classList.add("FileExplorerItem");

      let percentDiskSpaceUsed;
      if (["C", "D", "E", "F"].includes(item))
        percentDiskSpaceUsed =
          (driveSize[item]["used"] / driveSize[item]["total"]) * 100;

      div.innerHTML = ["C", "D", "E", "F"].includes(item)
        ? `<img src=${ItemLogo} alt=${item}/>\
        <div class="DriveNameAndSize">\
          <div>${driveName[item]} (${item}:)</div>\
          <div class="DriveSize" style="grid-template-columns: ${percentDiskSpaceUsed}% auto;">\
            <div class="DriveSizeUsed" style="background-color: ${
              percentDiskSpaceUsed > 80 ? "#f00" : "#26a0da"
            }"></div>\
            <div class="DriveSizeFree"></div>
          </div>\
          <div class="DriveSizeText">\
            ${(driveSize[item]["total"] - driveSize[item]["used"]).toFixed(
              1
            )} GB free of ${driveSize[item]["total"]} GB
          </div>\
        </div>`
        : `<img src=${ItemLogo} alt=${item}/><div>${item}</div>`;

      if (typeof givenFolderStructure[item] === "object") {
        console.log(
          (address + "\\" + item)
            .replace("/", "\\")
            .replace("This PC\\", "")
            .replace("\\\\", "\\")
        );

        div.ondblclick = () => {
          let folderAddress = (address + "\\" + item)
            .replace("/", "\\")
            .replace("This PC\\", "")
            .replace("\\\\", "\\");

          renderFolder(folderAddress);
        };
      }
      div.onclick = () => {
        iterateClass("FileExplorerItem", (e) => {
          e.setAttribute("is-focused", "false");
          e.setAttribute("is-outlined", "false");
        });
        div.setAttribute("is-focused", "true");
        div.setAttribute("is-outlined", "true");
      };

      FileExplorerMain.append(div);
    }

    // Setting Up Address Bar
    let finalAddress =
      address === ""
        ? "This PC"
        : address.length === 1
        ? address + ":"
        : address;
    document.querySelector(".FileExplorerAddressBar input").value =
      finalAddress;
    finalAddress =
      finalAddress === "This PC"
        ? ""
        : finalAddress.replace(":", "").split("\\");

    if (typeof finalAddress !== "string")
      finalAddress = removeEmptySpacesFromArray(finalAddress);

    let AddressBarDiv = document.querySelector("#FEAB-Div");
    AddressBarDiv.innerHTML = "";

    let div = document.createElement("div");
    div.classList.add("FEAB-Div-Item");
    div.style.display = "flex";
    div.onclick = () => renderFolder("");
    div.innerHTML = `<div class="FEAB-Div-Item-Gt">&gt;</div>`;
    AddressBarDiv.append(div);

    let div2 = document.createElement("div");
    div2.classList.add("FEAB-Div-Item");
    div2.style.display = "flex";
    div2.onclick = () => renderFolder("");
    // div2.innerHTML = `<div class="FEAB-Div-Item-Label">This PC</div><div class="FEAB-Div-Item-Gt"><img src=${DownArrowTailless} class="DownArrowTailless" alt=""/></div>`;
    div2.innerHTML = `<div class="FEAB-Div-Item-Label">This PC</div><div class="FEAB-Div-Item-Gt">&gt;</div>`;
    AddressBarDiv.append(div2);

    for (let i = 0; i < finalAddress.length; i++) {
      let combinedAddress = "";
      for (let j = 0; j < i + 1; j++) {
        if (j === 0) combinedAddress = finalAddress[j] + ":\\";
        else combinedAddress = combinedAddress + finalAddress[j] + "\\";
      }

      let div = document.createElement("div");
      div.classList.add("FEAB-Div-Item");
      let divLabel =
        i === 0
          ? driveName[finalAddress[0]] + ` (${finalAddress[0]}:)`
          : finalAddress[i];
      //

      div.innerHTML = `\
      <div class="FEAB-Div-Item-Label">${divLabel}</div>\
      <div class="FEAB-Div-Item-Gt">&gt;</div>`;
      div.style.display = "flex";

      if (i !== finalAddress.length - 1)
        div.onclick = () => renderFolder(combinedAddress);

      if (finalAddress[i].trim() !== "") AddressBarDiv.append(div);
    }

    console.log("--------------------");
    // File Explorer Header Icon and Text
    let folderName =
      typeof finalAddress === "string"
        ? "This PC"
        : finalAddress[finalAddress.length - 1];

    let folderNameImgSrc =
      extenstionsAndLogo[folderName] === undefined
        ? extenstionsAndLogo["folder"]
        : extenstionsAndLogo[folderName];
    document.querySelector(".FileExplorerAddressBar img").src =
      folderNameImgSrc;
    document.getElementById("FileExplorer-header-logo-img").src =
      folderNameImgSrc;
    document.getElementById("FileExplorer-header-text").innerText = [
      "C",
      "D",
      "E",
      "F",
    ].includes(folderName)
      ? driveName[folderName] + ` (${folderName}:)`
      : folderName;

    console.log({ pwd, address });
  } else {
    window.alert("Invalid Address " + address);
  }
}

function GlobalFunctions() {
  return <div>GlobalFunctions</div>;
}

export default GlobalFunctions;
