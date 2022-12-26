import "./App.scss";
import "./Components/Windows/Windows.scss";
import Desktop from "./Components/Desktop/Desktop";
import Taskbar from "./Components/Taskbar/Taskbar";
import Window1 from "./Components/Windows/Window1/Window1";
import RightClickMenus from "./Components/RightClickMenus/RightClickMenus";
import Settings from "./Components/Windows/Settings/Settings";
import StartMenu from "./Components/StartMenu/StartMenu";
import StartupMessage from "./StartupMessage";
import EventListners from "./EventListners";
import SystemTray from "./Components/SystemTray/SystemTray";
import WindowsSearch from "./Components/WindowsSearch/WindowsSearch";
import CalenderAndNotifications from "./Components/CalenderAndNotifications/CalenderAndNotifications";

setTimeout(() => {
  document.querySelector("#window1 .window-content").style.backgroundColor =
    "black";
  document.querySelector("#window1 .window-content").style.color = "white";
  document.querySelector("#window1 .window-content").innerText = "";
  // document.getElementById("StartupMessage").style.maxHeight =
  //   document.getElementById("StartupMessage").offsetHeight;
  document.getElementById("StartupMessage").style.visibility = "visible";
  console.log(window.innerHeight, window.innerWidth);
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
    </div>
  );
}

export default App;
