import React from "react";
import "./FileExplorer.scss";
import WindowsApp from "../WindowsApp";
import explorerLogo from "../../../Resources/icon/explorer.png";
import {
  renderFolder,
  extenstionsAndLogo,
  folderAddressBack,
  folderAddressFoward,
  FileExplorerBackButton,
  FileExplorerForwardButton,
  iterateClass,
  iterateQuery,
} from "../../../GlobalFunctions";
import FEPcopy from "../../../Resources/icon/ui/copy.png";
import FEPpaste from "../../../Resources/icon/ui/paste.png";
import FEPcut from "../../../Resources/icon/ui/cut.png";
import FEPrename from "../../../Resources/icon/ui/rename.png";
import FEPnew from "../../../Resources/icon/ui/new.png";
import FEPsort from "../../../Resources/icon/ui/sort.png";
import FEPview from "../../../Resources/icon/ui/view.png";
import RightArrow from "../../../Resources/icon/ui/right-arrow.svg";
import LeftArrow from "../../../Resources/icon/ui/left-arrow.svg";
import UpArrow from "../../../Resources/icon/ui/up-arrow.svg";
import DownArrowTailless from "../../../Resources/icon/ui/down-arrow-tailless.svg";
import SearchIcon from "../../../Resources/icon/search.png";
import HomeIcon from "../../../Resources/icon/home.webp";
import ThisPC from "../../../Resources/icon/thispc.png";
import cDrive from "../../../Resources/icon/c-drive.png";
import Drive from "../../../Resources/icon/drive.png";
import DesktopSm from "../../../Resources/icon/Folders/desktop-sm.png";
import DocumentsSm from "../../../Resources/icon/Folders/documents-sm.png";
import DownloadsSm from "../../../Resources/icon/Folders/downloads-sm.png";
import PicturesSm from "../../../Resources/icon/Folders/pictures-sm.png";
import MusicSm from "../../../Resources/icon/Folders/music-sm.png";
import VideosSm from "../../../Resources/icon/Folders/videos-sm.png";
import OnedriveSm from "../../../Resources/icon/Folders/onedrive-sm.png";
import NetworkIcon from "../../../Resources/icon/Folders/network.png";

setTimeout(() => {
  const input = document.querySelector(
    '.FileExplorerAddressBar > input[type="text"]'
  );
  const innerDiv = document.querySelector("#FEAB-Div");
  input.addEventListener("focus", function () {
    innerDiv.style.display = "none";
  });
  input.addEventListener("blur", function () {
    innerDiv.style.display = "flex";
  });
}, 10);

function FileExplorer() {
  return (
    <WindowsApp
      windowId="FileExplorer"
      width="55vw"
      height="74vh"
      top="10.5vh"
      left="22vw"
      logo={explorerLogo}
      windowTitle="File Explorer"
      onClick={() => {}}
      content={
        <>
          <div className="FileExplorer-panel" id="FileExplorer-panel">
            {/* FEP: File Explorer Panel */}
            <div className="FEP-Items">
              <div
                id="FEP-New"
                title="Create a new item in the current location"
              >
                <img src={FEPnew} alt="" />
                &nbsp;&nbsp;New
              </div>
            </div>

            <div className="FEP-Items">
              <div id="FEP-cut" title="Cut">
                <img src={FEPcut} alt="" />
              </div>
              <div id="FEP-copy" title="Copy">
                <img src={FEPcopy} alt="" />
              </div>
              <div id="FEP-paste" title="Paste">
                <img src={FEPpaste} alt="" />
              </div>
              <div id="FEP-rename" title="Rename">
                <img src={FEPrename} alt="" />
              </div>
            </div>
            <div className="FEP-Items">
              <div id="FEP-sort" title="Sort and group options.">
                <img src={FEPsort} alt="" />
                &nbsp;&nbsp;Sort
              </div>
              <div id="FEP-view">
                <img src={FEPview} alt="" title="Layout and view options" />
                &nbsp;&nbsp;View
              </div>
            </div>
          </div>
          <div className="FileExplorer-body" id="FileExplorer-body">
            <div
              className="FileExplorerAddressbarAndOperations"
              id="FileExplorerAddressbarAndOperations"
            >
              <div className="FileExplorerOperationButtons FEAO-Item">
                <div
                  className="FileExplorerBackButton FileExplorerOperationButton"
                  id="FileExplorerBackButton"
                  onClick={() => FileExplorerBackButton()}
                >
                  <img src={LeftArrow} alt="" />
                </div>
                <div
                  className="FileExplorerBackButton FileExplorerOperationButton"
                  id="FileExplorerForwardButton"
                  onClick={() => FileExplorerForwardButton()}
                >
                  <img src={RightArrow} alt="" />
                </div>

                <div
                  className="FileExplorerBackButton FileExplorerOperationButton"
                  id="FileExplorerUpButton"
                  onClick={() => {
                    renderFolder(
                      document
                        .querySelector(".FileExplorerAddressBar input")
                        .value.split("\\")
                        .slice(0, -1)
                        .join("\\")
                    );
                  }}
                >
                  <img src={UpArrow} alt="" />
                </div>
              </div>

              <div
                className="FileExplorerAddressBar FEAO-Item"
                id="FileExplorerAddressBar"
              >
                <input type="text" />
                <div id="FEAB-Div">address</div>
                <img src={extenstionsAndLogo["folder"]} alt="s" />
              </div>

              <div
                className="FileExplorerSearchBar FEAO-Item dg"
                id="FileExplorerSearchBar"
              >
                <input type="text" placeholder="Search" />
                <div className="FESB-SearchIcon" id="FESB-SearchIcon">
                  <img src={SearchIcon} alt="" />
                </div>
                <div
                  className="FESB-SearchResults"
                  id="FESB-SearchResults"
                ></div>
              </div>
            </div>
            <div className="FileExplorerLeftPanel" id="FileExplorerLeftPanel">
              <div
                className="LeftPanelItem LeftPanelItem-Home"
                id="LeftPanelItem-Home"
                onClick={() => renderFolder("")}
              >
                &nbsp;
                <img src={HomeIcon} alt="" className="LeftPanelItem-Image" />
                Home
              </div>
              <div
                className="LeftPanelItem LeftPanelItem-OneDrive"
                id="LeftPanelItem-OneDrive"
                onClick={() => renderFolder("C:\\Users\\Ashu\\OneDrive\\")}
              >
                &nbsp;
                <img src={OnedriveSm} alt="" className="LeftPanelItem-Image" />
                OneDrive
              </div>
              <hr />
              <div
                className="LeftPanelItem LeftPanelItem-Desktop"
                id="LeftPanelItem-Desktop"
                onClick={() => renderFolder("C:\\Users\\Ashu\\Desktop\\")}
              >
                &nbsp;
                <img src={DesktopSm} alt="" className="LeftPanelItem-Image" />
                Desktop
              </div>
              <div
                className="LeftPanelItem LeftPanelItem-Documents"
                id="LeftPanelItem-Documents"
                onClick={() => renderFolder("C:\\Users\\Ashu\\Documents\\")}
              >
                &nbsp;
                <img src={DocumentsSm} alt="" className="LeftPanelItem-Image" />
                Documents
              </div>
              <div
                className="LeftPanelItem LeftPanelItem-Downloads"
                id="LeftPanelItem-Downloads"
                onClick={() => renderFolder("C:\\Users\\Ashu\\Downloads\\")}
              >
                &nbsp;
                <img src={DownloadsSm} alt="" className="LeftPanelItem-Image" />
                Downloads
              </div>
              <div
                className="LeftPanelItem LeftPanelItem-Pictures"
                id="LeftPanelItem-Pictures"
                onClick={() => renderFolder("C:\\Users\\Ashu\\Pictures\\")}
              >
                &nbsp;
                <img src={PicturesSm} alt="" className="LeftPanelItem-Image" />
                Pictures
              </div>
              <div
                className="LeftPanelItem LeftPanelItem-Music"
                id="LeftPanelItem-Music"
                onClick={() => renderFolder("C:\\Users\\Ashu\\Music")}
              >
                &nbsp;
                <img src={MusicSm} alt="" className="LeftPanelItem-Image" />
                Music
              </div>

              <div
                className="LeftPanelItem LeftPanelItem-Music"
                id="LeftPanelItem-Music"
                onClick={() => renderFolder("C:\\Users\\Ashu\\Videos")}
              >
                &nbsp;
                <img src={VideosSm} alt="" className="LeftPanelItem-Image" />
                Videos
              </div>
              <hr />
              <div
                className="LeftPanelItem LeftPanelItem-This PC"
                id="LeftPanelItem-This PC"
                onClick={() => renderFolder("")}
              >
                <img
                  src={DownArrowTailless}
                  className="DownArrowTailless"
                  alt=""
                />
                <img src={ThisPC} alt="" className="LeftPanelItem-Image" />
                This PC
              </div>
              <div
                className="LeftPanelItem LeftPanelItem-C"
                id="LeftPanelItem-C"
                onClick={() => renderFolder("C:\\")}
              >
                <img
                  src={DownArrowTailless}
                  className="DownArrowTailless DownArrowTailless-Closed"
                  alt=""
                />
                <img src={cDrive} alt="" className="LeftPanelItem-Image" />
                Windows 11 (C:)
              </div>
              <div
                className="LeftPanelItem LeftPanelItem-D"
                id="LeftPanelItem-D"
                onClick={() => renderFolder("D:\\")}
              >
                <img
                  src={DownArrowTailless}
                  className="DownArrowTailless DownArrowTailless-Closed"
                  alt=""
                />
                <img src={Drive} alt="" className="LeftPanelItem-Image" />
                Data (D:)
              </div>
              <hr />
              <div
                className="LeftPanelItem LeftPanelItem-Network"
                id="LeftPanelItem-Network"
              >
                <img
                  src={DownArrowTailless}
                  className="DownArrowTailless DownArrowTailless-Closed"
                  alt=""
                />
                <img src={NetworkIcon} alt="" className="LeftPanelItem-Image" />
                Network
              </div>
              <br />
            </div>
            <div className="FileExplorerMain" id="FileExplorerMain">
              Main
            </div>
          </div>
        </>
      }
      footer="Footer"
    />
  );
}

export default FileExplorer;
