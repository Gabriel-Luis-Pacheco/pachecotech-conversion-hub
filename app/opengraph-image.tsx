import { ImageResponse } from "next/og";

export const alt = "Pacheco Lab. — Comunidade gratuita de tecnologia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#0B0F14",
          color: "#F3F5F7",
          padding: "66px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 540,
            height: 540,
            right: -70,
            top: 42,
            border: "1px solid #27665F",
            borderRadius: "50%",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 360,
            height: 360,
            right: 20,
            top: 132,
            border: "1px dashed #2BB3A3",
            borderRadius: "50%",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 190,
            height: 190,
            right: 105,
            top: 217,
            borderRadius: "50%",
            background: "#133A38",
            boxShadow: "0 0 80px #2BB3A355",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", width: 760 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, fontWeight: 700 }}>
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#2BB3A3",
                display: "flex",
              }}
            />
            Pacheco Lab.
          </div>
          <div style={{ display: "flex", marginTop: 72, color: "#38C7B6", fontSize: 20 }}>
            Comunidade gratuita de tecnologia
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 64,
              fontWeight: 650,
              lineHeight: 1.04,
              letterSpacing: "-2.5px",
            }}
          >
            Aprenda, compartilhe e evolua com outras pessoas.
          </div>
          <div style={{ display: "flex", marginTop: "auto", color: "#AAB4BF", fontSize: 19 }}>
            Programação · Dados · Automação · Carreira
          </div>
        </div>
      </div>
    ),
    size,
  );
}
