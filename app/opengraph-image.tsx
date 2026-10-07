import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const bars = [30, 42, 36, 55, 48, 62, 58, 75, 68, 82, 74, 90];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          padding: 72,
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              border: "2px solid #27272a",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {site.initials}
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#a1a1aa" }}>{site.hero.status}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
            <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>{site.name}</div>
            <div style={{ marginTop: 24, fontSize: 32, color: "#a1a1aa", lineHeight: 1.3 }}>{site.hero.headline}</div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 180 }}>
            {bars.map((b, i) => (
              <div
                key={i}
                style={{
                  width: 14,
                  height: `${b * 2}px`,
                  borderRadius: 3,
                  background: i === bars.length - 1 ? "#3b82f6" : "#27272a",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
