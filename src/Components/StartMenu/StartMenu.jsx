import React from "react";
import "./StartMenu.scss";
import {
  clickStart,
  clickWindowsSearch,
  consoleLog,
  iterateClass,
  togglePowerOptions,
} from "../../GlobalFunctions";
import SearchIcon from "../../Resources/icon/search.png";
import PowerIcon from "../../Resources/icon/ui/power.png";
import { replaceStartToSearch } from "../../GlobalFunctions";

// setTimeout(() => {
//   document
//     .querySelector(".StartMenuSearchBox div")
//     .addEventListener("keydown", (k) => {
//       let searchMenuText = document.querySelector(
//         ".StartMenuSearchBox div"
//       ).innerText;
//       console.log(`${searchMenuText}${k.key.length === 1 ? k.key : ""}`);

//       replaceStartToSearch();
//       // document.querySelector(".StartMenuSearchBox div").innerText = "";
//     });
// }, 10);

function StartMenu() {
  return (
    <div
      className="StartMenu"
      id="StartMenu"
      onClick={() => {
        let Start = document.getElementById("StartMenu");
        console.log({
          Height: Start.offsetHeight,
          Width: Start.Width,
        });
      }}
    >
      <div
        className="StartMenuMain"
        id="StartMenuMain"
        onClick={() => togglePowerOptions(false)}
      >
        <div
          className="StartMenuSearchBox StartMenuItem"
          id="StartMenuSearchBox"
          onClick={replaceStartToSearch}
        >
          &nbsp; &nbsp;
          <img src={SearchIcon} alt="SearchIcon" id="SearchIcon" />
          &nbsp;
          <div contentEditable="true" placeholder="Search"></div>
        </div>
        <div
          className="StartMenuPinnedIcons StartMenuItem"
          id="StartMenuPinnedIcons"
        >
          <div
            className="StartMenuPinnedIconsHeading"
            id="StartMenuPinnedIconsHeading"
          >
            Pinned
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon1">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon2">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon3">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon4">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon5">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon6">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon7">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon8">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon9">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon10">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon11">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon12">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon13">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon14">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon15">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon16">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon17">
            Item
          </div>
          <div className="StartMenuPinnedIcon" id="StartMenuPinnedIcon18">
            Item
          </div>
        </div>
        <div
          className="StartMenuRecommendationContainer StartMenuItem"
          id="StartMenuRecommendationContainer"
        >
          <div
            className="StartMenuRecommendationHeading"
            id="StartMenuRecommendationHeading"
          >
            Recommended
          </div>
          <div
            className="StartMenuRecommendation"
            id="StartMenuRecommendation1"
          >
            Recommended
          </div>
          <div
            className="StartMenuRecommendation"
            id="StartMenuRecommendation2"
          >
            Recommended
          </div>
          <div
            className="StartMenuRecommendation"
            id="StartMenuRecommendation3"
          >
            Recommended
          </div>
          <div
            className="StartMenuRecommendation"
            id="StartMenuRecommendation4"
          >
            Recommended
          </div>
          <div
            className="StartMenuRecommendation"
            id="StartMenuRecommendation5"
          >
            Recommended
          </div>
          <div
            className="StartMenuRecommendation"
            id="StartMenuRecommendation6"
          >
            Recommended
          </div>
        </div>
      </div>
      <div className="StartMenuFooter StartMenuItem" id="StartMenuFooter">
        <div className="StartMenuAccount" id="StartMenuAccount">
          Account
        </div>
        <div
          className="StartMenuPowerIcon"
          id="StartMenuPowerIcon"
          onClick={() => togglePowerOptions()}
        >
          <div className="StartMenuPowerOptions" id="StartMenuPowerOptions">
            <div className="StartMenuPowerOption SigninOption">
              <img src={PowerIcon} alt="" /> Sign-in Options
            </div>
            <div className="StartMenuPowerOption Sleep">
              <img src={PowerIcon} alt="" /> Sleep
            </div>
            <div className="StartMenuPowerOption Shutdown">
              <img src={PowerIcon} alt="" /> Shutdown
            </div>
            <div className="StartMenuPowerOption Restart">
              <img src={PowerIcon} alt="" /> Restart
            </div>
          </div>
          <div className="PowerIcon" id="PowerIcon">
            <img src={PowerIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartMenu;
