"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          width: '100%',
          padding: "16px 120px",
          boxSizing: 'border-box',
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 900,
            letterSpacing: -0.5,
            fontSize: "1.25rem",
            textDecoration: "none",
            color: "inherit",
            display: 'inline-block',
          }}
        >
          TRISTAN GOVIER
        </Link>

        <nav style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center", justifyContent: 'flex-end' }}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "inherit",
              transition: "all 0.2s ease-in-out",
            }}
          >
            Resume
          </a>
          <Link
            href="/projects"
            style={{
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "inherit",
              transition: "all 0.2s ease-in-out",
            }}
          >
            Projects
          </Link>

          <a
            href="https://www.linkedin.com/in/tristan-govier"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 6, background: 'transparent', textDecoration: 'none' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.98 3.5C4.98 4.60457 4.08 5.5 2.98 5.5C1.87998 5.5 0.97998 4.60457 0.97998 3.5C0.97998 2.39543 1.87998 1.5 2.98 1.5C4.08 1.5 4.98 2.39543 4.98 3.5Z" fill="#111" />
              <path d="M0.5 8.98H5.46V23.5H0.5V8.98Z" fill="#111" />
              <path d="M8.5 8.98H13.12V10.64H13.18C13.89 9.53 15.66 8.34 18.06 8.34C22.5 8.34 23 11.18 23 15.5V23.5H18.04V16.86C18.04 14.24 17.58 12.5 15.04 12.5C12.5 12.5 12.04 14.6 12.04 16.68V23.5H7.08V8.98H8.5Z" fill="#111" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
