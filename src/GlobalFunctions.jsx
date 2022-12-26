import BgLight from "./Resources/Background-Img-Light.jpg";
import BgDark from "./Resources/Background-Img-Dark.jpg";
import ResizeMin from "./Resources/icon/ui/maximize.png";
import ResizeMax from "./Resources/icon/ui/maxmin.png";

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
    ? "#e5eaff"
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
    e.style.backgroundColor = lightTheme ? "#15a5ff" : "#112";
    e.style.color = lightTheme ? "black" : "white";
  });

  iterateQuery(".WindowHeaderIcon img", (e) => {
    e.style.filter = lightTheme ? "invert(0)" : "invert(1)";
  });

  iterateClass("window-footer", (e) => {
    e.style.backgroundColor = lightTheme ? "#e5eaff" : "#1c1c1c";
    e.style.color = lightTheme ? "black" : "white";
  });

  setTimeout(() => {
    iterateClass("window", (e) => {
      e.style.transition = "0ms";
    });
  }, 300);

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
          "Old Dogs.mp4": 1824,
        },
      },
      "TV Shows": {
        "Breaking Bad.mp4": 802,
        "Game of Thrones.mp4": 8007,
      },
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
        "Breaking Bad.mp4": 802,
        "Game of Thrones.mp4": 87,
      },
    },
  },
  E: {
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
        "Breaking Bad.mp4": 802,
        "Game of Thrones.mp4": 87,
      },
    },
  },
  F: {
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
        "Breaking Bad.mp4": 802,
        "Game of Thrones.mp4": 87,
      },
    },
  },
};

export const extenstionsAndLogo = {
  exe: "exe",
  py: "py",
  js: "js",
  jsx: "jsx",
  json: "json",
  css: "css",
  html: "html",
  png: "png",
  jpg: "jpg",
  jpeg: "jpeg",
  gif: "gif",
  svg: "svg",
  ppt: "ppt",
  pptx: "pptx",
  pdf: "pdf",
  docx: "docx",
  doc: "doc",
  lnk: "lnk",
  folder: "folder",
  mp3: "mp3",
  mp4: "mp4",
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
      fileFolder.toLowerCase().includes(toFind.toLowerCase()) ||
      address.toLowerCase().includes(toFind.toLowerCase())
    ) {
      // let fileExtension = fileFolder.substring(fileFolder.lastIndexOf(".") + 1);
      searchedElements.push({
        logo:
          typeof obj[fileFolder] === "object"
            ? extenstionsAndLogo["folder"]
            : extenstionsAndLogo[
                fileFolder.substring(fileFolder.lastIndexOf(".") + 1)
              ],
        name: fileFolder,
        address: address.replace("\\\\", "\\"),
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

export function renderSearchResults() {
  let windowSearchBox = document.getElementById("WindowsSearchBox");

  let folderStructureResults = iterateFolderStructure(
    folderStructure,
    "",
    windowSearchBox.innerText
  );

  // All Searched Results will have keys: logo, name, address, and size(if applicable else it will be null).
  let totalResults = [...folderStructureResults];

  console.log(totalResults);
  for (const SearchedResult of totalResults) {
    let logo = SearchedResult.logo;
    let name = SearchedResult.name;
    let address = SearchedResult.address;
    let size = SearchedResult.size;
    console.log(
      `logo\t:${logo}\nname\t: ${name}\naddress\t: ${address}\nsize\t: ${size}`
    );
  }
}

function GlobalFunctions() {
  return <div>GlobalFunctions</div>;
}

export default GlobalFunctions;
