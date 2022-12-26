import React from "react";
import "./WindowsSearch.scss";
import { iterateQuery, renderSearchResults } from "../../GlobalFunctions";
import SearchIcon from "../../Resources/icon/search.png";

function highlightCategory(category) {
  iterateQuery(".WindowsSearchCategory", (e) => {
    if (e.innerHTML === category) {
      e.setAttribute("status", "active");
      console.log(category);
    } else e.setAttribute("status", "");
    console.log(e);
  });
}

setTimeout(() => {
  let windowSearchBox = document.getElementById("WindowsSearchBox");
  windowSearchBox.addEventListener("keyup", (e) => {
    if (e.key.length === 1 || e.key === "Backspace") renderSearchResults();
  });
  windowSearchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") e.preventDefault();
  });
}, 10);

function WindowsSearch() {
  return (
    <div className="WindowsSearch" id="WindowsSearch">
      <div className="StartMenuSearchBox WindowsSearchBox">
        &nbsp; &nbsp;
        <img src={SearchIcon} alt="SearchIcon" id="SearchIcon" />
        &nbsp;
        <div
          contentEditable="true"
          placeholder="Search"
          id="WindowsSearchBox"
        ></div>
      </div>

      <div className="WindowsSearchCategories" id="WindowsSearchCategories">
        <div
          className="WindowsSearchCategory"
          status="active"
          onClick={() => highlightCategory("All")}
        >
          All
        </div>
        <div
          className="WindowsSearchCategory"
          onClick={() => highlightCategory("Apps")}
        >
          Apps
        </div>
        <div
          className="WindowsSearchCategory"
          onClick={() => highlightCategory("Documents")}
        >
          Documents
        </div>
        <div
          className="WindowsSearchCategory"
          onClick={() => highlightCategory("Web")}
        >
          Web
        </div>
        <div
          className="WindowsSearchCategory"
          onClick={() => highlightCategory("Folders")}
        >
          Folders
        </div>
        <div
          className="WindowsSearchCategory"
          onClick={() => highlightCategory("Pictures")}
        >
          Pictures
        </div>
      </div>
      <div className="WindowsSearchResults" id="WindowsSearchResults">
        WindowsSearch
      </div>
      <div className="WindowsSearchSingleResult" id="WindowsSearchSingleResult">
        WindowsSearch
      </div>
    </div>
  );
}

export default WindowsSearch;
