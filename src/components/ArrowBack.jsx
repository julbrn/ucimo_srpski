import { useState, useEffect } from "react";
import { Link } from "react-router";

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
      {/* Стрелка всегда будет видна на десктопах и планшетах, на мобильных — появляется при прокрутке */}
      <Link
        to="/"
        className={`fixed top-2 ${showArrow ? "" : "hidden"} sm:block md:block 
                    left-5 mb-10 p-4 rounded-full bg-white bg-opacity-50 z-50`}
        aria-label="На главную страницу"
      >
        <svg
          width="40"
          height="40"
          className="inline-block"
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400.004 400.004"
        >
          <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z"></path>
        </svg>{" "}
        <span className="pl-2 font-medium text-lg">К оглавлению</span>
      </Link>
    </div>
  );
};

export default ArrowBack;
