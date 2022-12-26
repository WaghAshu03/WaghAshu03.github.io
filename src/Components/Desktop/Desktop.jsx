import React from "react";
import "./Desktop.scss";
import {
  initDragElement,
  initResizeElement,
  iterateClass,
  callFullScreenMode,
  closeFullscreen,
  changeTheme,
  clickStart,
  consoleClear,
  clickSystemTrayIcon,
  openWindow,
  clickWindowsSearch,
  toggleCalenderAndNotifications,
} from "../../GlobalFunctions";
import { useEffect } from "react";
import { openStartupMessage } from "../../StartupMessage";

function Desktop() {
  useEffect(() => {
    initDragElement();
    initResizeElement();
  });

  return (
    <div
      className="Desktop"
      id="Desktop"
      onClick={() => {
        clickStart(false);
        clickWindowsSearch(false);
        clickSystemTrayIcon(false);
        toggleCalenderAndNotifications(false);
      }}
    >
      {/* Windows */}
      <button onClick={changeTheme}>Change Theme</button>
      <button onClick={callFullScreenMode}>Full Screen</button>
      <button onClick={closeFullscreen}>Exit Full Screen</button>
      <button onClick={consoleClear}>Clear Console</button>
      <button onClick={openStartupMessage}>Startup Message</button>
    </div>
  );
}

export default Desktop;
