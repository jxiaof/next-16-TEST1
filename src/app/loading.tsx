"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <p>加载中...</p>
      <div
        style={{
          display: "inline-block",
          width: "20px",
          height: "20px",
          border: "3px solid #f3f3f3",
          borderTop: "3px solid #3498db",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}