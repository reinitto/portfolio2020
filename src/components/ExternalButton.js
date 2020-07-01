import React from "react";
import externalIcon from "../icons8-external-link.svg";
export let ExternalButton = ({ link, text }) => {
  let openNewTab = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <img
        style={{
          position: "absolute",
          width: "14px",
        }}
        src={externalIcon}
        alt="external link icon"
      />
      <button className={`nav-item`} onClick={() => openNewTab(link)}>
        <p>{text}</p>
      </button>
    </div>
  );
};
