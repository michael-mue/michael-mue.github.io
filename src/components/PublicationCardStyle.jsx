import { useState } from "react";

export default function PublicationCard({
  authors,
  title,
  venue,
  year,
  pdf,
  cite,
  link,
  children,
}) {
  const [showCite, setShowCite] = useState(false);

  function toggleCite() {
    setShowCite((v) => !v);
  }
  function copyCite() {
    navigator.clipboard.writeText(cite);
  }

  return (
    <div
      className="publication-card"
      style={{
        backgroundColor: "rgba(var(--color-card), 1)",
        marginBottom: "20px",
        padding: "15px",
        border: "1px solid rgba(var(--color-border), 1)",
        borderRadius: "5px",
      }}
    >
      <p style={{ margin: "0 0 10px 0", fontSize: "1em" }}>
        <span style={{ color: "rgba(var(--color-card-muted), 1)" }}>{authors}</span>
        {year && (
          <span style={{ color: "rgba(var(--color-card-muted), 1)" }}> ({year}). </span>
        )}
        <strong>{title}</strong>
        {venue && (
          <>
            . <span>{venue}.</span>
          </>
        )}
      </p>
      <div style={{ margin: "10px 0", display: "flex", gap: "8px" }}>
        {pdf && (
          <a
            href={pdf}
            className="flex items-center gap-1 p-2"
            aria-label="PDF of publication"
            target="_blank"
            rel="noopener"
            title="View PDF"
          >
            <span aria-hidden="true">📄</span>
            <span>PDF</span>
          </a>
        )}
        {cite && (
          <button
            type="button"
            className="flex items-center gap-1 p-2"
            aria-label="Show citation"
            title="Show citation"
            onClick={toggleCite}
          >
            <span aria-hidden="true">📑</span>
            <span>Cite</span>
          </button>
        )}
        {link && (
          <a
            href={link}
            className="flex items-center gap-1 p-2"
            aria-label="External publication link"
            target="_blank"
            rel="noopener"
            title="Visit publication page"
          >
            <span aria-hidden="true">🔗</span>
            <span>Link</span>
          </a>
        )}
      </div>
      {showCite && (
        <div
          style={{
            margin: "10px 0",
            padding: "16px",
            background: "rgba(var(--color-accent),0.05)",
            border: "1px solid rgba(var(--color-border), 1)",
            borderRadius: "5px",
            wordBreak: "break-word",
          }}
        >
          <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>{cite}</pre>
          <button type="button" onClick={copyCite} style={{ marginTop: "8px" }}>
            <span aria-hidden="true">📋</span>
            <span>Copy</span>
          </button>
        </div>
      )}
      {children && (
        <div style={{ margin: "10px 0", paddingLeft: "20px" }}>
          {children}
        </div>
      )}
    </div>
  );
}
