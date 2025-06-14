import { useState, useEffect } from "react";
import React from "react";
import ThemeToggler from "./components/ThemeToggler";
import { Document, Page, pdfjs } from "react-pdf";
import Sidebar from "./components/SideBar";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { ArrowsRightLeftIcon, BookOpenIcon, ChevronLeftIcon, ChevronRightIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const toc = [
  { lekcija: 1, title: "Dobar dan", page: 12 },
  { lekcija: 2, title: "Moja zemlja", page: 18 },
  { lekcija: 3, title: "Razumeš li?", page: 26 },
  { lekcija: 4, title: "Moja porodica", page: 34 },
  { lekcija: 5, title: "Moj svet", page: 42 },
  { lekcija: 6, title: "Šta radiš?", page: 50 },
  { lekcija: 7, title: "Srećan put", page: 60 },
  { lekcija: 8, title: "Stil života", page: 72 },
  { lekcija: 9, title: "Upomoć!", page: 84 },
  { lekcija: 10, title: "Kako je kod vas?", page: 98 },
  { lekcija: 11, title: "Odelo (ne) čini čoveka", page: 110 },
  { lekcija: 12, title: "Hotel s pet zvezdica", page: 120 },
  { topic: "Dodatak", page: 187 },
  { topic: "Testovi", page: 193 },
];

function App() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(() => {
    const savedPage = localStorage.getItem("lastPageNumber");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const [sidebarWidth, setSidebarWidth] = useState<number>(300);
  const [pdfWidth, setPdfWidth] = useState<number>(() => {
    const savedWidth = localStorage.getItem("pdfWidth");
    return savedWidth ? parseInt(savedWidth, 10) : 800;
  });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showToc, setShowToc] = useState<boolean>(false);
  useEffect(() => {
    localStorage.setItem("pdfWidth", String(pdfWidth));
  }, [pdfWidth]);
  useEffect(() => {
    localStorage.setItem("lastPageNumber", String(pageNumber));
  }, [pageNumber]);

  const minSidebar = 200;
  const maxSidebar = 600;


  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= numPages) {
      setPageNumber(page);
      setShowToc(false); // close TOC if open
    }
  };

  const increaseWidth = () => setPdfWidth((w) => Math.min(w + 100, 2000));
  const decreaseWidth = () => setPdfWidth((w) => Math.max(w - 100, 200));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const newWidth = Math.min(
        maxSidebar,
        Math.max(minSidebar, window.innerWidth - e.clientX)
      );
      setSidebarWidth(newWidth);
    };

    const handleMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        e.deltaY < 0 ? increaseWidth() : decreaseWidth();
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="text-[var(--text-light)] dark:text-[var(--text-dark)] bg-white dark:bg-[var(--bg-dark)] h-screen overflow-hidden flex flex-col">
      <ThemeToggler />

      <div className="p-2 sm:p-4 flex flex-wrap items-center gap-2 sm:gap-4 shrink-0">
        <button onClick={() => setShowToc(true)} className="px-3 py-1 rounded flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200">
          <BookOpenIcon className="h-5 w-5" />
          <span className="hidden sm:inline ml-1">Содержание</span>
        </button>
        <button onClick={() => goToPage(pageNumber - 1)} disabled={pageNumber === 1} className="px-3 py-1 rounded  dark:bg-gray-600 dark:hover:bg-gray-500 disabled:opacity-50 flex items-center text-gray-800 dark:text-gray-200">
          <ChevronLeftIcon className="h-5 w-5" />
          <span className="hidden sm:inline ml-1">Назад</span>
        </button>
        <span>
          Стр.
          <input type="number" value={pageNumber} min={1} max={numPages} onChange={(e) => goToPage(Number(e.target.value))} className="w-16 mx-2 border px-2 py-1 rounded text-center" />
          / {numPages}
        </span>
        <button onClick={() => goToPage(pageNumber + 1)} disabled={pageNumber === numPages} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 disabled:opacity-50 flex items-center text-gray-800 dark:text-gray-200">
          <ChevronRightIcon className="h-5 w-5" />
          <span className="hidden sm:inline ml-1">Вперёд</span>
        </button>
        <button onClick={decreaseWidth} className="ml-4 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 flex items-center text-gray-800 dark:text-gray-200">
          <MinusIcon className="h-5 w-5" />
          <span className="hidden sm:inline ml-1">Уменьшить</span>
        </button>
        <button onClick={increaseWidth} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 flex items-center text-gray-800 dark:text-gray-200">
          <PlusIcon className="h-5 w-5" />
          <span className="hidden sm:inline ml-1">Увеличить</span>
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* PDF viewer */}
        <div
          style={{ flex: `0 0 calc(100% - ${sidebarWidth}px)` }}
          className="overflow-y-auto px-4 flex justify-center"
        >
          <div className="my-auto">
            <Document
              file={`${import.meta.env.BASE_URL}pdf/Učimo-srpski.pdf`}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="text-center mt-10 text-[var(--text-light)] dark:text-[var(--text-dark)] bg-white dark:bg-[var(--bg-dark)]">Загрузка...</div>}
            >
              <Page
                pageNumber={pageNumber}
                width={pdfWidth}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                renderMode="canvas"
                loading={<div className="text-center mt-10 text-[var(--text-light)] dark:text-[var(--text-dark)] bg-white dark:bg-[var(--bg-dark)]">Загрузка...</div>}
              />
            </Document>
          </div>
        </div>

        {/* Resizer */}
        <div
          onMouseDown={() => setIsDragging(true)}
          className="w-4 bg-gray-300 hover:bg-gray-200 dark:bg-gray-500 dark:hover:bg-gray-400 transition-colors cursor-col-resize flex items-center justify-center"
          style={{ cursor: 'col-resize' }}
        >
          <ArrowsRightLeftIcon className="size-6 text-gray-400 dark:text-gray-100" />
        </div>

        {/* Sidebar (placeholder) */}

        <div style={{ width: `${sidebarWidth}px` }} className="overflow-y-auto p-4">
          <Sidebar currentPage={pageNumber}></Sidebar>
        </div>

        {/* Floating TOC */}
        {showToc && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-70 z-40"
              onClick={() => setShowToc(false)}
            ></div>
            <div className="text-[var(--text-light)] absolute top-20 left-1/2 -translate-x-1/2 z-50 bg-white shadow-[0_0_40px_rgba(0,0,0,0.6)] p-4 rounded-lg max-h-[70vh] overflow-y-auto w-96">
              <button
                onClick={() => setShowToc(false)}
                className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
              >
                ✖
              </button>
              <ul className="space-y-2">
                {toc.map(({ lekcija, title, topic, page }, index) => (
                  <li
                    key={lekcija ?? topic ?? index}
                    className="cursor-pointer hover:text-blue-600"
                    onClick={() => goToPage(page)}
                  >
                    {lekcija ? (
                      <>
                        <span className="font-semibold">Lekcija {lekcija}:</span> {title}
                      </>
                    ) : (
                      <span className="font-semibold">{topic}</span>
                    )}
                  </li>
                ))}
              </ul>

            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default App;
