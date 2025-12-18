"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>发生错误</h2>
      <p>{error.message || "未知错误"}</p>
      <button
        onClick={reset}
        style={{
          padding: "0.5rem 1rem",
          cursor: "pointer",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "0.25rem",
        }}
      >
        重试
      </button>
    </div>
  );
}