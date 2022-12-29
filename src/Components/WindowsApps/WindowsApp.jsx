import React from "react";
import "./WindowsApp.scss";
import {
  closeWindow,
  consoleLog,
  minimizeWindow,
  windowResize,
} from "../../GlobalFunctions";
import MinimizeIcon from "../../Resources/icon/ui/minimize.png";
import CloseIcon from "../../Resources/icon/ui/close.png";
import ResizeMax from "../../Resources/icon/ui/maxmin.png";

export function WindowResizeLeftHalf(windowId) {
  let AppWindow = document.getElementById(windowId);
  AppWindow.style.transition = "200ms";
  AppWindow.style.left = "0";
  AppWindow.style.top = "0";
  AppWindow.style.width = "50vw";
  AppWindow.style.height = `calc(100vh - 45px)`;
  setTimeout(() => {
    AppWindow.style.transition = "";
    document.getElementById(windowId + "-ResizeButton").src = ResizeMax;
  }, 200);
}

export function WindowResizeLeft60(windowId) {
  let AppWindow = document.getElementById(windowId);
  AppWindow.style.transition = "200ms";
  AppWindow.style.left = "0";
  AppWindow.style.top = "0";
  AppWindow.style.width = "60vw";
  AppWindow.style.height = `calc(100vh - 45px)`;
  setTimeout(() => {
    AppWindow.style.transition = "";
    document.getElementById(windowId + "-ResizeButton").src = ResizeMax;
  }, 200);
}

export function WindowResizeRightHalf(windowId) {
  let AppWindow = document.getElementById(windowId);
  AppWindow.style.transition = "200ms";
  AppWindow.style.left = "50%";
  AppWindow.style.top = "0";
  AppWindow.style.width = "50vw";
  AppWindow.style.height = `calc(100vh - 45px)`;
  setTimeout(() => {
    AppWindow.style.transition = "";
    document.getElementById(windowId + "-ResizeButton").src = ResizeMax;
  }, 200);
}

export function WindowResizeRight40(windowId) {
  let AppWindow = document.getElementById(windowId);
  AppWindow.style.transition = "200ms";
  AppWindow.style.left = "60%";
  AppWindow.style.top = "0";
  AppWindow.style.width = "40vw";
  AppWindow.style.height = `calc(100vh - 45px)`;
  setTimeout(() => {
    AppWindow.style.transition = "";
    document.getElementById(windowId + "-ResizeButton").src = ResizeMax;
  }, 200);
}

export function WindowResizeTopLeftQuarter(windowId) {
  let AppWindow = document.getElementById(windowId);
  AppWindow.style.transition = "200ms";
  AppWindow.style.left = "0";
  AppWindow.style.top = "0";
  AppWindow.style.width = "50vw";
  AppWindow.style.height = `calc(((100vh - 45px)/2) + 0.1rem)`;
  setTimeout(() => {
    AppWindow.style.transition = "";
    document.getElementById(windowId + "-ResizeButton").src = ResizeMax;
  }, 200);
}

export function WindowResizeBottomLeftQuarter(windowId) {
  let AppWindow = document.getElementById(windowId);
  AppWindow.style.transition = "200ms";
  AppWindow.style.left = 0;
  AppWindow.style.top = "calc(50% - 22px)";
  AppWindow.style.width = "50vw";
  AppWindow.style.height = `calc((100vh - 45px)/2)`;
  setTimeout(() => {
    AppWindow.style.transition = "";
    document.getElementById(windowId + "-ResizeButton").src = ResizeMax;
  }, 200);
}

export function WindowResizeTopRightQuarter(windowId) {
  let AppWindow = document.getElementById(windowId);
  AppWindow.style.transition = "200ms";
  AppWindow.style.left = "50%";
  AppWindow.style.top = "0";
  AppWindow.style.width = "50vw";
  AppWindow.style.height = `calc((100vh - 45px)/2  + 0.1rem)`;
  setTimeout(() => {
    AppWindow.style.transition = "";
    document.getElementById(windowId + "-ResizeButton").src = ResizeMax;
  }, 200);
}

export function WindowResizeBottomRightQuarter(windowId) {
  let AppWindow = document.getElementById(windowId);
  AppWindow.style.transition = "200ms";
  AppWindow.style.left = "50%";
  AppWindow.style.top = "calc(50% - 22px)";
  AppWindow.style.width = "50vw";
  AppWindow.style.height = `calc((100vh - 45px)/2)`;
  setTimeout(() => {
    AppWindow.style.transition = "";
    document.getElementById(windowId + "-ResizeButton").src = ResizeMax;
  }, 200);
}

function Window(props) {
  function windowResizeFunction() {
    if (
      document.getElementById(props.windowId).style.width === "100vw" &&
      (document.getElementById(props.windowId).style.height ===
        "calc(100vh - 45px)" ||
        "calc(-45px + 100vh)") &&
      document.getElementById(props.windowId).style.top === "0px" &&
      document.getElementById(props.windowId).style.left === "0px"
    ) {
      windowResize(
        props.windowId,
        props.width,
        props.height,
        props.top,
        props.left
      );
    } else {
      windowResize(props.windowId);
    }
  }
  setTimeout(() => {
    document.getElementById(props.windowId).style.width = props.width;
    document.getElementById(props.windowId).style.height = props.height;
    document.getElementById(props.windowId).style.top = props.top;
    document.getElementById(props.windowId).style.left = props.left;
  }, 10);

  return (
    <div className="window" id={props.windowId} onClick={props.onClick}>
      <div
        className={"window-header " + props.windowId + "-header"}
        id={props.windowId + "-header"}
        onDoubleClick={windowResizeFunction}
      >
        <img
          className="window-header-logo"
          id={props.windowId + "-header-logo-img"}
          draggable="false"
          src={props.logo}
          alt=""
        />
        <div
          className="window-header-text"
          id={props.windowId + "-header-text"}
        >
          {props.windowTitle}
        </div>
        <div
          className="WindowHeaderIcon"
          onClick={() => {
            minimizeWindow(props.windowId);
          }}
        >
          <img src={MinimizeIcon} alt="" />
        </div>
        <button className="WindowHeaderIcon WindowHeaderIconResize">
          <div
            className="WindowHeaderIconResizeImageContainer"
            onClick={windowResizeFunction}
          >
            <img src={ResizeMax} id={props.windowId + "-ResizeButton"} alt="" />
          </div>
          <div className="WindowHeaderIconResizeBridge"></div>
          <div className="WindowHeaderIconResizeBox">
            <div className="WindowHeaderIconResizeBoxOption WindowHeaderIconResizeBoxOption1">
              <div
                className="WindowHeaderIconResizeBoxOption1-1"
                onClick={() => WindowResizeLeftHalf(props.windowId)}
              ></div>
              <div
                className="WindowHeaderIconResizeBoxOption1-2"
                onClick={() => WindowResizeRightHalf(props.windowId)}
              ></div>
            </div>
            <div className="WindowHeaderIconResizeBoxOption WindowHeaderIconResizeBoxOption2">
              <div
                className="WindowHeaderIconResizeBoxOption2-1"
                onClick={() => WindowResizeLeft60(props.windowId)}
              ></div>
              <div
                className="WindowHeaderIconResizeBoxOption2-2"
                onClick={() => WindowResizeRight40(props.windowId)}
              ></div>
            </div>
            <div className="WindowHeaderIconResizeBoxOption WindowHeaderIconResizeBoxOption3">
              <div
                className="WindowHeaderIconResizeBoxOption3-1"
                onClick={() => WindowResizeLeftHalf(props.windowId)}
              ></div>
              <div
                className="WindowHeaderIconResizeBoxOption3-2"
                onClick={() => WindowResizeTopRightQuarter(props.windowId)}
              ></div>
              <div
                className="WindowHeaderIconResizeBoxOption3-3"
                onClick={() => WindowResizeBottomRightQuarter(props.windowId)}
              ></div>
            </div>
            <div className="WindowHeaderIconResizeBoxOption WindowHeaderIconResizeBoxOption4">
              <div
                className="WindowHeaderIconResizeBoxOption4-1"
                onClick={() => WindowResizeTopLeftQuarter(props.windowId)}
              ></div>
              <div
                className="WindowHeaderIconResizeBoxOption4-2"
                onClick={() => WindowResizeTopRightQuarter(props.windowId)}
              ></div>
              <div
                className="WindowHeaderIconResizeBoxOption4-3"
                onClick={() => WindowResizeBottomLeftQuarter(props.windowId)}
              ></div>
              <div
                className="WindowHeaderIconResizeBoxOption4-4"
                onClick={() => WindowResizeBottomRightQuarter(props.windowId)}
              ></div>
            </div>
          </div>
        </button>
        <div
          className="WindowHeaderIcon WindowHeaderIconClose"
          onClick={() => {
            closeWindow(props.windowId);
          }}
        >
          <img src={CloseIcon} alt="" />
        </div>
      </div>

      <div
        className={"window-content " + props.windowId + "-content"}
        id={props.windowId + "-content"}
      >
        {props.content} <br />
        <br />
      </div>

      <div
        className={"window-footer " + props.windowId + "-footer"}
        id={props.windowId + "-footer"}
      >
        {props.footer}
      </div>
    </div>
  );
}

export default Window;
