import React, { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter, useParams } from "react-router";
import Home from "./pages/Home";
import LoaderOverlay from "./components/LoaderOverlay";
import ThemeToggler from "./components/ThemeToggler";
import ScrollToTop from "./components/ScrollToTop";

const lessonsMap: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  lesson01: lazy(() => import("./pages/Lesson01")),
  lesson02a: lazy(() => import("./pages/lesson02/Lesson02a")),
  lesson02b: lazy(() => import("./pages/lesson02/Lesson02b")),
  lesson02v: lazy(() => import("./pages/lesson02/Lesson02v")),
  // lesson02d: lazy(() => import("./pages/lesson02/Lesson02d")),
  // lesson03a: lazy(() => import("./pages/lesson03/Lesson03a")),
  // lesson03b: lazy(() => import("./pages/lesson03/Lesson03b")),
  // lesson03c: lazy(() => import("./pages/lesson03/Lesson03c")),
  // и т.д.
  notFound: lazy(() => import("./pages/NotFound")),
};

function LessonWrapper() {
  const { id } = useParams<{ id: string }>();
  const LessonComponent = lessonsMap[id] || lessonsMap.notFound;

  return (
    <Suspense fallback={<LoaderOverlay />}>
      <LessonComponent />
      <ScrollToTop />
    </Suspense>
  );
}

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/:id", element: <LessonWrapper /> },
    {
      path: "*",
      element: (
        <Suspense fallback={<LoaderOverlay />}>
          <lessonsMap.notFound />
        </Suspense>
      ),
    },
  ]);

  return (
    <div className="text-[var(--text-light)] dark:text-[var(--text-dark)] bg-white dark:bg-[var(--bg-dark)] ">
      <ThemeToggler />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
