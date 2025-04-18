import React from "react";

export default function LoaderOverlay() {
  return (
    <div className="fixed bg-transparent inset-0 z-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
    </div>
  );
}
