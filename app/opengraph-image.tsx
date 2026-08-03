import { ImageResponse } from "next/og";

export const alt = "Pacheco Lab — comunidade gratuita no WhatsApp e Discord";
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
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F8F4",
          color: "#17201D",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 24,
              background: "#17201D",
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            PL
          </div>
          <div style={{ display: "flex", fontSize: 25, fontWeight: 700 }}>
            Pacheco Lab
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div style={{ display: "flex", color: "#0F7540", fontSize: 24, fontWeight: 700 }}>
            Comunidade gratuita de tecnologia
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.03,
              letterSpacing: "-2.6px",
            }}
          >
            Aprenda tecnologia com outras pessoas.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, fontSize: 20, fontWeight: 700 }}>
          <div
            style={{
              display: "flex",
              padding: "11px 18px",
              borderRadius: 8,
              background: "#0F7540",
              color: "#FFFFFF",
            }}
          >
            Grupo no WhatsApp
          </div>
          <div
            style={{
              display: "flex",
              padding: "11px 18px",
              border: "2px solid #4F5BD5",
              borderRadius: 8,
              background: "#FFFFFF",
              color: "#343FAD",
            }}
          >
            Servidor no Discord
          </div>
        </div>
      </div>
    ),
    size,
  );
}
