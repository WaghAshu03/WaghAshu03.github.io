import "./App.scss";
import "./Components/WindowsApps/WindowsApp.scss";
import Desktop from "./Components/Desktop/Desktop";
import Taskbar from "./Components/Taskbar/Taskbar";
import RightClickMenus from "./Components/RightClickMenus/RightClickMenus";

// Windows Apps:
// Basic Structure of Windows App(Header, Body, Footer) is refered to as Window in this project which is Movable and Resizable.
import Window1 from "./Components/WindowsApps/Window1/Window1";
import Settings from "./Components/WindowsApps/Settings/Settings";
import FileExplorer from "./Components/WindowsApps/FileExplorer/FileExplorer";

import StartMenu from "./Components/StartMenu/StartMenu";
import StartupMessage from "./StartupMessage";
import EventListners from "./EventListners";
import SystemTray from "./Components/SystemTray/SystemTray";
import WindowsSearch from "./Components/WindowsSearch/WindowsSearch";
import CalenderAndNotifications from "./Components/CalenderAndNotifications/CalenderAndNotifications";
import { changeTheme } from "./GlobalFunctions";

setTimeout(() => {
  document.querySelector("#window1 .window-content").style.backgroundColor =
    "black";
  document.querySelector("#window1 .window-content").style.color = "white";
  document.querySelector("#window1 .window-content").innerText = "";
  document.getElementById("StartupMessage").style.visibility = "visible";
  console.log(window.innerHeight, window.innerWidth);

  changeTheme();
  changeTheme();
}, 10);

function App() {
  return (
    <div className="App" id="App">
      <Desktop />
      <Taskbar />
      <Window1 />
      <Settings />
      <RightClickMenus />
      <StartMenu />
      <WindowsSearch />
      <StartupMessage />
      <EventListners />
      <SystemTray />
      <CalenderAndNotifications />
      <FileExplorer />
      {/* Used To Remove Focus from Working Text Input */}
      <input type="text" id="EmptyInput" />
    </div>
  );
}

export default App;
