import React from "react";
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
      <button className={`nav-item`} onClick={() => openNewTab(link)}>
        <p>{text}</p>
      </button>
    </div>
  );
};
