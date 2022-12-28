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
    <div className="window" id={props.windowId}>
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
            // closeWindow(props.windowId);
            minimizeWindow(props.windowId);
          }}
        >
          <img src={MinimizeIcon} alt="" />
        </div>
        <button className="WindowHeaderIcon" onClick={windowResizeFunction}>
          <img src={ResizeMax} id={props.windowId + "-ResizeButton"} alt="" />
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
