import React from "react";
import ArrowBack from "../components/ArrowBack";

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen max-w-3xl mx-auto p-6 relative text-[var(--text-light)] dark:text-[var(--text-dark)]">
            <ArrowBack />
            <div className="bg-[var(--field-light)] dark:bg-[var(--field-dark)] p-8 rounded-xl shadow text-center mt-16">
                <h2 className="text-3xl font-bold mb-4">Урок не найден 😕</h2>
                <p className="text-lg mb-4">
                    Возможно, вы перешли по неверной ссылке или этот урок ещё не добавлен.
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400">
                    Пожалуйста, вернитесь на главную страницу и выберите один из доступных уроков.
                </p>
            </div>
        </div>
    );
};

export default NotFound;

