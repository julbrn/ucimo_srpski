import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

const ArrowBack = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Функция для обработки прокрутки
  const handleScroll = () => {
    if (window.scrollY > 200 && window.scrollY < lastScrollY) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
    setLastScrollY(window.scrollY);
  };

  // Используем useEffect для отслеживания события прокрутки
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <Link
        to="/"
        className={`fixed top-4 left-4 z-50 items-center gap-2 px-4 py-2 rounded-xl 
                bg-[var(--field-light)] bg-opacity-80 hover:bg-[var(--field-light-hover)] 
                dark:bg-[var(--field-dark)] dark:hover:bg-[var(--field-dark-hover)] 
                text-[var(--text-light)] dark:text-[var(--text-dark)] 
                shadow transition-all duration-300 ease-in-out
                ${showArrow ? "" : "hidden"} sm:block`}
        aria-label="На главную страницу"
      >
        <ArrowLongLeftIcon className="w-8 h-6 inline-block pr-2" />
        <span className="font-medium text-base">К оглавлению</span>
      </Link>
    </div>
  );
};

export default ArrowBack;
