import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

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
        className={`fixed top-2 ${showArrow ? "" : "hidden"} sm:block md:block 
                    left-5 mb-10 p-4 rounded-full bg-white bg-opacity-50 z-50 flex items-center`}
        aria-label="На главную страницу"
      >
        <ArrowLongLeftIcon className="size-8 inline-block" />
        <span className="pl-2 font-medium text-lg">К оглавлению</span>
      </Link>
    </div>
  );
};

export default ArrowBack;
