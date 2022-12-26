import React from "react";
import "./StartupMessage.scss";
import GithubIcon from "./Resources/github.webp";
import { callFullScreenMode, lightTheme } from "./GlobalFunctions";
import CloseIcon from "./Resources/icon/ui/close.png";

export function openStartupMessage() {
  let windowID = "StartupMessage";
  let windowEle = document.getElementById(windowID);

  if (windowEle.style.visibility === "hidden") {
    windowEle.style.transform = `translate(-50%, -50%) scale(0.9)`;
    let scaleSize = 0.95;
    windowEle.style.visibility = "visible";

    const blockInterval = setInterval(() => {
      scaleSize = scaleSize + 0.01;
      windowEle.style.transform = `translate(-50%, -50%) scale(${scaleSize})`;
      windowEle.style.opacity = scaleSize;

      if (scaleSize >= 1) {
        scaleSize = 1;
        windowEle.style.transform = `translate(-50%, -50%) scale(${scaleSize})`;
        windowEle.style.opacity = scaleSize;
        clearInterval(blockInterval);
      }
    }, 10);
  } else {
    console.log("no");
  }

  console.log(windowID + " Opened");
}

function closeStartupWindow() {
  let windowID = "StartupMessage";

  let windowEle = document.getElementById(windowID);

  if (windowEle.style.visibility !== "hidden") {
    let scaleSize = 1;
    const blockInterval = setInterval(() => {
      scaleSize = scaleSize - 0.01;
      windowEle.style.transform = `translate(-50%, -50%) scale(${scaleSize})`;
      windowEle.style.opacity = scaleSize - 0.3;

      if (scaleSize <= 0.88) {
        scaleSize = 0.88;
        windowEle.style.transform = `translate(-50%, -50%) scale(${scaleSize})`;
        windowEle.style.visibility = "hidden";
        clearInterval(blockInterval);
      }
    }, 10);
  }
}

function StartupMessage() {
  return (
    <div
      style={{
        width: window.innerWidth < 480 ? "92vw" : "480px",
        minWidth: window.innerWidth > 480 ? "480px" : 0,
      }}
      className="window"
      id="StartupMessage"
    >
      <div
        // className="WindowHeaderIcon WindowHeaderIconClose"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "50px",
          backgroundColor: "red",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // borderRadius: "8px",
        }}
        onClick={() => {
          closeStartupWindow();
        }}
      >
        <img
          src={CloseIcon}
          alt=""
          style={{
            height: "60%",
            filter: lightTheme ? "invert(1)" : "invert(1)",
          }}
        />
      </div>
      <div id="StartupMessageMain">
        <div id="StartupMessageHeading">About (Work in Progress)</div>
        <div style={{ marginBottom: "10px", textAlign: "justify" }}>
          <div
            style={{
              display: window.innerWidth < 480 ? "block" : "none",
              backgroundColor: "red",
              padding: "10px",
              marginBottom: "5px",
              borderRadius: "8px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Warning:</span> Mobile Phone
            Browser do not support some features like Draging, Resizing windows.
            Please open this site on a computer to access all its features.
          </div>

          <div style={{ marginTop: "10px", marginBottom: "12px" }}>
            <p>
              Hey There👋I'm Ashutosh, a full-stack developer from Pune, India.
              Welcome to my portfolio. This website replicates look and feel of
              Windows&nbsp;11 using React.js. Hope You Like This Project.
            </p>
            <p>
              This Project is licensed under{" "}
              <a
                href="https://github.com/WaghAshu03/waghashu03.github.io/blob/main/LICENSE"
                target="_blank"
              >
                MIT License
              </a>
            </p>
            <br />

            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 500,
              }}
            >
              About Me
            </div>

            <div id="StartupMessageAboutMe">
              <div id="DownloadResume" style={{}}>
                Download Resume
              </div>
              <div id="Socials">
                <div className="SocialsItem">
                  <img src={GithubIcon} id="SocialsGitLogo" alt="" />
                  <div>Github</div>
                </div>
                <div className="SocialsItem">
                  <div>Twitter</div>
                </div>
                <div className="SocialsItem">
                  <div>LinkedIn</div>
                </div>
                <div className="SocialsItem">
                  <div>
                    <a href="mailto:admin@ashutoshwagh.com">Email</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="StartupMessageFooter">
        <button
          id="LetsGoButton"
          onClick={() => {
            closeStartupWindow();
            callFullScreenMode();
          }}
        >
          Let's Go Full Screen!!!
        </button>
      </div>
    </div>
  );
}

export default StartupMessage;
