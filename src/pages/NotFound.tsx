import React from "react";
import ArrowBack from "../components/ArrowBack";

function NotFound() {
    return (
        <div className="max-w-3xl mx-auto p-6 text-center relative">
            <ArrowBack />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Ой! Такой урок не найден
            </h2>
            <p className="text-gray-600 text-lg mb-6">
                Возможно, вы перешли по неверной ссылке, или этот урок ещё находится в разработке.
            </p>
            <p className="text-gray-500">
                Пожалуйста, выберите доступный урок на главной странице или попробуйте позже.
            </p>
        </div>
    );
}

export default NotFound;
