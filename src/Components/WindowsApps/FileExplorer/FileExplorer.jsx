import React from "react";
import "./FileExplorer.scss";
import WindowsApp from "../WindowsApp";
import explorerLogo from "../../../Resources/icon/explorer.png";
import { renderFolder, extenstionsAndLogo } from "../../../GlobalFunctions";

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
      width="70vw"
      height="75vh"
      top="12vh"
      left="8vw"
      logo={explorerLogo}
      windowTitle="File Explorer"
      content={
        <>
          <div className="FileExplorer-panel" id="FileExplorer-panel">
            Panel
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
                >
                  B
                </div>
                <div
                  className="FileExplorerBackButton FileExplorerOperationButton"
                  id="FileExplorerForwardButton"
                >
                  F
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
                  U
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
                <div className="FESB-SearchResults" id="FESB-SearchResults">
                  d
                </div>
              </div>
            </div>
            <div className="FileExplorerLeftPanel" id="FileExplorerLeftPanel">
              LeftPanel
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
