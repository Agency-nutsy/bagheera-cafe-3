import { ImageResponse } from "next/og";

export const alt = "Bagheera Cafe & Lounge — Hudson Lane, Delhi";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0A0F0D 0%, #1a2f1e 40%, #0D1C15 70%, #0A0F0D 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Decorative border */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
            border: "2px solid rgba(243, 208, 107, 0.3)",
            borderRadius: 8,
            display: "flex",
          }}
        />

        {/* Gold accent line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "30%",
            right: "30%",
            height: 4,
            background: "linear-gradient(90deg, transparent, #F3D06B, #D4AF37, #F3D06B, transparent)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Cafe name */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              letterSpacing: 12,
              color: "#F3D06B",
              display: "flex",
            }}
          >
            BAGHEERA
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: 8,
              color: "rgba(253, 245, 230, 0.6)",
              marginTop: 8,
              display: "flex",
            }}
          >
            CAFE & LOUNGE
          </div>

          {/* Divider line */}
          <div
            style={{
              width: 120,
              height: 2,
              background: "linear-gradient(90deg, transparent, #F3D06B, transparent)",
              marginTop: 24,
              marginBottom: 24,
              display: "flex",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 20,
              fontWeight: 400,
              letterSpacing: 4,
              color: "rgba(243, 208, 107, 0.8)",
              display: "flex",
            }}
          >
            Step Into The Wild Side of Luxury
          </div>

          {/* Location */}
          <div
            style={{
              fontSize: 16,
              fontWeight: 400,
              letterSpacing: 3,
              color: "rgba(253, 245, 230, 0.45)",
              marginTop: 16,
              display: "flex",
            }}
          >
            Hudson Lane | GTB Nagar | New Delhi
          </div>
        </div>

        {/* Gold accent line at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "30%",
            right: "30%",
            height: 4,
            background: "linear-gradient(90deg, transparent, #F3D06B, #D4AF37, #F3D06B, transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
