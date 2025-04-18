import React from "react";
import { Link } from "react-router";
import { lessonsData } from "../assets/data/lessonsData";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        ПОЛНЫЙ КУРС СЕРБСКОГО ЯЗЫКА
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
        {lessonsData.map((lesson) => (
          <div
            key={lesson.id}
            className="block p-4 hover:shadow-md transition bg-zinc-50 dark:bg-zinc-800"
          >
            <Link to={`/${lesson.id}`} className="block">
              <h2 className="text-lg font-medium hover:text-blue-600">
                {lesson.title}
              </h2>
            </Link>
            {lesson.subLessons && (
              <div className="mt-4">
                <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-300">
                  {lesson.subLessons.map((subLesson) => (
                    <li key={subLesson.id}>
                      <Link
                        to={`/${lesson.id}#${subLesson.id}`}
                        className="hover:text-blue-600"
                      >
                        {subLesson.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
