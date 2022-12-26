import React from "react";
import Windows from "../Windows";
import terminalLogo from "../../../Resources/icon/terminal.png";

function terminal() {
  return (
    <Windows
      windowId="window1"
      width="50vw"
      height="50vh"
      top="0px"
      left="0px"
      logo={terminalLogo}
      windowTitle="Console"
      panel={<>Panel</>}
      content={""}
      footer="Footer"
    />
  );
}

export default terminal;
