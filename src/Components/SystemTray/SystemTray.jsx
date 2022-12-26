import React from "react";
import "./SystemTray.scss";
import WifiIcon from "../../Resources/icon/ui/wifi.png";
import BluetoothIcon from "../../Resources/icon/ui/bluetooth.png";
import AirplaneIcon from "../../Resources/icon/ui/airplane.png";
import SaverIcon from "../../Resources/icon/ui/saver.png";
import AudioIcon1 from "../../Resources/icon/ui/audio1.png";
import AudioIcon2 from "../../Resources/icon/ui/audio2.png";
import AudioIcon3 from "../../Resources/icon/ui/audio3.png";
import NightLightIcon from "../../Resources/icon/ui/nightlight.png";
import BrightnessLogo from "../../Resources/icon/ui/sun.png";
import AccessiblilityIcon from "../../Resources/icon/ui/accessibility.png";
import BatteryIcon from "../../Resources/icon/ui/battery.png";

function toggleSystemTrayButton(buttonId) {
  const buttonEle = document.getElementById(buttonId);

  buttonEle.classList.value.includes("SystemTrayButtonActive")
    ? buttonEle.classList.remove("SystemTrayButtonActive")
    : buttonEle.classList.add("SystemTrayButtonActive");
}

setTimeout(() => {
  document.getElementById("BrightnessSlider").value = 100;
}, 0);

function ActionCenter() {
  return (
    <div className="SystemTray" id="SystemTray">
      {/* <div className="SystemTrayMusic" id="SystemTrayMusic">
        SystemTrayMusic
      </div> */}
      <div className="SystemTrayMain SystemTrayMain1" id="SystemTrayMain1">
        <div
          className="SystemTrayButton Wifi SystemTrayButtonActive"
          id="Wifi"
          onClick={() => toggleSystemTrayButton("Wifi")}
        >
          <img src={WifiIcon} alt="" />
          <div>Wifi</div>
        </div>
        <div
          className="SystemTrayButton Bluetooth SystemTrayButtonActive"
          id="Bluetooth"
          onClick={() => toggleSystemTrayButton("Bluetooth")}
        >
          <img src={BluetoothIcon} alt="" />
          <div>Bluetooth</div>
        </div>
        <div
          className="SystemTrayButton AirplaneMode"
          id="AirplaneMode"
          onClick={() => toggleSystemTrayButton("AirplaneMode")}
        >
          <img src={AirplaneIcon} alt="" />
          <div>Airplane mode</div>
        </div>
        <div
          className=" SystemTrayButton BatterySaver"
          id="BatterySaver"
          onClick={() => toggleSystemTrayButton("BatterySaver")}
        >
          <img src={SaverIcon} alt="" />
          <div>Battery Saver</div>
        </div>
        <div
          className="SystemTrayButton NightLight"
          id="NightLight"
          onClick={() => toggleSystemTrayButton("NightLight")}
        >
          <img src={NightLightIcon} alt="" />
          <div>Night Light</div>
        </div>
        <div
          className="SystemTrayButton Accessibility"
          id="Accessibility"
          onClick={() => toggleSystemTrayButton("Accessibility")}
        >
          <img src={AccessiblilityIcon} alt="" />
          <div>Accessibility</div>
        </div>
        <div
          className="SystemTrayButton NearbySharing"
          id="NearbySharing"
          onClick={() => toggleSystemTrayButton("NearbySharing")}
        >
          <img src={AccessiblilityIcon} alt="" />
          <div>Nearby Sharing</div>
          {/* NearbySharing */}
        </div>
        <div
          className="SystemTrayButton Project"
          id="Project"
          onClick={() => toggleSystemTrayButton("Project")}
        >
          <img src={AccessiblilityIcon} alt="" />
          <div>Project</div>
          {/* Project */}
        </div>
        <div
          className="SystemTrayButton Cast"
          id="Cast"
          onClick={() => toggleSystemTrayButton("Cast")}
        >
          <img src={AccessiblilityIcon} alt="" />
          <div>Cast</div>
          {/* Cast */}
        </div>
        <div className="ScreenBrightness" id="ScreenBrightness">
          <div>
            <img src={BrightnessLogo} alt="" />
          </div>
          <input
            type="range"
            name=""
            className="slider"
            id="BrightnessSlider"
            min="20"
            max="100"
            onChange={(e) => {
              document.getElementById("App").style.filter = `brightness(${
                e.target.value / 100
              })`;
              console.clear();
              console.log(
                `Brightness Changed to: ${parseInt(
                  (e.target.value - 20) * 1.25
                )}%`
              );
            }}
          />
        </div>
        <input data-plyr="volume" type="range" className="sliders" />
        <div className="VolumeSeekbar" id="VolumeSeekbar">
          <div>
            <img src={AudioIcon3} alt="" />
          </div>
          <input type="range" name="" className="slider" id="" />
        </div>
      </div>
      <div className="SystemTrayMain SystemTrayMain2" id="SystemTrayMain2">
        <div>
          <img src={BatteryIcon} alt=""></img>
          100%
        </div>
      </div>
    </div>
  );
}

export default ActionCenter;
