import React from "react";
import { Link } from "react-router";

function NextLessonButton({ nextId }: { nextId: string }) {
  if (!nextId) return null;

  return (
    <div className="mt-10 text-right">
      <Link
        to={`/${nextId}`}
        className="inline-block bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium py-2 px-6 rounded-lg transition"
      >
        Следующий урок →
      </Link>
    </div>
  );
}

export default NextLessonButton;
