import React, { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter, useParams } from "react-router";
import Home from "./pages/Home";
import LoaderOverlay from "./components/LoaderOverlay";
import ThemeToggler from "./components/ThemeToggler";
import ScrollToTop from "./components/ScrollToTop";

const lessonsMap = {
  lesson01: lazy(() => import("./pages/Lesson01")),
  lesson02: lazy(() => import("./pages/Lesson02")),
  notFound: lazy(() => import("./pages/NotFound")),
};

function LessonWrapper() {
  const { id } = useParams();
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
