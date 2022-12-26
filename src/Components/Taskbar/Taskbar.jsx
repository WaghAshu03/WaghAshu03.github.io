import React from "react";
import "./Taskbar.scss";
import {
  openWindow,
  returnDate,
  returnTimeAMPM,
  clickStart,
  clickSystemTrayIcon,
  clickWindowsSearch,
  replaceStartToSearch,
  toggleCalenderAndNotifications,
} from "../../GlobalFunctions";
import Windows11Logo from "../../Resources/icon/windows.png";
import terminalLogo from "../../Resources/icon/terminal.png";
import settingsLogo from "../../Resources/icon/settings.png";
import WifiIcon from "../../Resources/icon/ui/wifi.png";
import AudioIcon1 from "../../Resources/icon/ui/audio1.png";
import AudioIcon2 from "../../Resources/icon/ui/audio2.png";
import AudioIcon3 from "../../Resources/icon/ui/audio3.png";
import SearchIcon from "../../Resources/icon/search.png";
import TaskViewIcon from "../../Resources/icon/TaskView.png";
import BatteryIcon from "../../Resources/icon/ui/battery.png";

setInterval(() => {
  document.querySelector(".DateTime .Time").innerText = returnTimeAMPM();
  document.querySelector(".DateTime .Date").innerText = returnDate();
}, 1000);

function Taskbar() {
  return (
    <div className="Taskbar" id="Taskbar">
      <div></div>
      <div className="TaskbarIcons" id="TaskbarIcons">
        <div
          className="TaskbarIcon"
          onClick={() => {
            clickStart();
            clickWindowsSearch(false);
          }}
        >
          <div>Start</div>
          <img src={Windows11Logo} alt="Windows 11 Logo" id="Windows11Logo" />
        </div>

        <div
          className="TaskbarIcon"
          onClick={() => {
            clickWindowsSearch();
            clickStart(false);
          }}
        >
          <div>Search</div>
          <img src={SearchIcon} alt="SearchIcon" id="SearchIcon" />
        </div>

        <div className="TaskbarIcon">
          <div>Task&nbsp;View</div>
          <img src={TaskViewIcon} alt="TaskViewIcon" id="TaskViewIcon" />
        </div>

        <div className="TaskbarIcon" onClick={() => openWindow("window1")}>
          <div>File&nbsp;Explorer</div>
          <img
            src={terminalLogo}
            alt="Windows 11 Logo"
            id="Windows11Explorer"
          />
        </div>

        <div className="TaskbarIcon" onClick={() => openWindow("settings")}>
          <div>Settings</div>
          <img
            src={settingsLogo}
            alt="Windows 11 Logo"
            id="Windows11Explorer"
          />
        </div>
      </div>

      <div className="TaskbarOptions" id="TaskbarOptions">
        <div
          className="SystemTrayIcon SystemTrayIconLightTheme"
          id="SystemTrayIcon"
          onClick={() => {
            clickSystemTrayIcon();
          }}
        >
          <div>
            <img src={WifiIcon} alt="" />
          </div>
          <div>
            <img src={AudioIcon3} alt="" />
          </div>
          <div>
            <img src={BatteryIcon} alt="" />
          </div>
        </div>
        <div
          className="DateTime DateTimeLightTheme"
          id="DateTime"
          onClick={() => toggleCalenderAndNotifications()}
        >
          <div className="Time">Time</div>
          <div className="Date">Date</div>
        </div>
      </div>
    </div>
  );
}

export default Taskbar;
