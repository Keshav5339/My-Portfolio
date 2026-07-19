import React from "react";
import "./PositionCard.scss";

export default function PositionCard({position, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className={[
        "position-card",
        isDark && "dark-mode",
        position.url && "position-card-clickable"
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={() => openUrlInNewTab(position.url, position.title)}
    >
      <div className="position-card-accent"></div>
      <div className="position-card-body">
        {position.logo && (
          <div className="position-logo-wrapper">
            <img
              src={position.logo}
              alt={position.title}
              className="position-logo"
            />
          </div>
        )}
        <div className="position-card-text">
          <h3
            className={
              isDark ? "position-title dark-mode-text" : "position-title"
            }
          >
            {position.title}
          </h3>
          <p
            className={
              isDark ? "position-desc dark-mode-text" : "position-desc"
            }
          >
            {position.description}
          </p>
        </div>
      </div>
      {position.url && (
        <div className="position-link-hint">
          View details <span className="position-link-arrow">&#8594;</span>
        </div>
      )}
    </div>
  );
}
