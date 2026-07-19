import React from "react";
import {Link} from "react-router-dom";
import {greeting} from "../../portfolio";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import "./Resume.scss";

// Extracts the file id from a Google Drive share link so we can build
// the /preview (viewer) and /export (direct download) URLs from it.
const getDriveFileId = link => {
  const match = link && link.match(/\/d\/([^/]+)/);
  return match ? match[1] : null;
};

export default function Resume() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark] = useLocalStorage("isDark", darkPref.matches);

  const fileId = getDriveFileId(greeting.resumeLink);
  const previewUrl = fileId
    ? `https://drive.google.com/file/d/${fileId}/preview`
    : greeting.resumeLink;
  const downloadUrl = fileId
    ? `https://drive.google.com/uc?export=download&id=${fileId}`
    : greeting.resumeLink;

  return (
    <div className={isDark ? "resume-page dark-mode" : "resume-page"}>
      <header className="resume-header">
        <div className="resume-header-left">
          <img
            className="resume-avatar"
            src={require("../../assets/images/my picture.png")}
            alt={greeting.username}
          />
          <div className="resume-header-title">
            <span className="resume-name">{greeting.username}</span>
            <span className="resume-subtitle">Resume</span>
          </div>
        </div>
        <Link to="/" className="resume-portfolio-btn">
          View {greeting.username.split(" ")[0]}&apos;s Portfolio
          <span className="resume-arrow">&#8594;</span>
        </Link>
      </header>

      <main className="resume-body">
        <div className="resume-viewer-wrapper">
          <iframe
            className="resume-viewer"
            src={previewUrl}
            title={`${greeting.username} Resume`}
            allow="autoplay"
          ></iframe>
        </div>

        <div className="resume-actions">
          <a
            className="resume-btn resume-btn-primary"
            href={downloadUrl}
            download
          >
            &#8681; Download PDF
          </a>
          <a
            className="resume-btn resume-btn-secondary"
            href={greeting.resumeLink}
            target="_blank"
            rel="noreferrer"
          >
            &#128279; Open in Drive
          </a>
        </div>
      </main>
    </div>
  );
}
