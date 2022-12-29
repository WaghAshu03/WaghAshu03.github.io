import React from "react";
import WindowsApp from "../WindowsApp";
import terminalLogo from "../../../Resources/icon/terminal.png";

function terminal() {
  return (
    <WindowsApp
      windowId="window1"
      width="50vw"
      height="50vh"
      top="0"
      left="0"
      logo={terminalLogo}
      windowTitle="Console"
      panel={<>Panel</>}
      content={""}
      footer="Footer"
    />
  );
}

export default terminal;
