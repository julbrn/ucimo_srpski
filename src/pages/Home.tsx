import React from "react";
import { Link } from "react-router";
import { lessonsData } from "../assets/data/lessonsData";

type SubLesson = {
  id: string;
  title: string;
};

type Lesson = {
  id: string;
  title: string;
  subLessons?: SubLesson[];
};

export default function Home() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        ПОЛНЫЙ КУРС СЕРБСКОГО ЯЗЫКА
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
        {lessonsData.map((lesson) => (
          <div
            key={lesson.id}
            className="block p-4 rounded-xl hover:shadow-md transition bg-[var(--field-light)] hover:bg-[var(--field-light-hover)] cursor-pointer 
            dark:bg-[var(--field-dark)] dark:hover:bg-[var(--field-dark-hover)]"
          >
            {/* Если нет subLessons — ссылка на сам урок */}
            {!lesson.subLessons ? (
              <Link to={`/${lesson.id}`} className="block">
                <h2 className="text-lg font-medium hover:text-[var(--accent)] transition-colors">
                  {lesson.title}
                </h2>
              </Link>
            ) : (
              <>
                <Link
                  to={`/${lesson.id}a`}
                  className="hover:text-[var(--accent)] transition-colors"
                ><h2 className="text-lg font-medium">{lesson.title}</h2></Link>
                <div className="mt-4">
                  <ul className="list-disc list-inside text-sm dark:text-[var(--text-dark)]">
                    {lesson.subLessons.map((subLesson) => (
                      <li key={subLesson.id} className="mb-4">
                        <Link
                          to={`/${subLesson.id}`}
                          className="hover:text-[var(--accent)] transition-colors"
                        >
                          {subLesson.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}