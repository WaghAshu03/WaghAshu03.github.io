import React from "react";
import "./FileExplorer.scss";
import WindowsApp from "../WindowsApp";
import explorerLogo from "../../../Resources/icon/explorer.png";

function FileExplorer() {
  return (
    <WindowsApp
      windowId="FileExplorer"
      width="50vw"
      height="50vh"
      top="20vh"
      left="20vw"
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
                >
                  U
                </div>
              </div>

              <input
                type="text"
                className="FileExplorerAddressBar FEAO-Item"
                id="FileExplorerAddressBar"
              />

              <input
                type="text"
                className="FileExplorerSearchBar FEAO-Item"
                id="FileExplorerSearchBar"
              />
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
