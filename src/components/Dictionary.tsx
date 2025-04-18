import React from "react";

const Glossary = ({ phrases }) => {
    return (
        <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="font-semibold text-2xl text-center text-gray-800 mb-4">
                СЛОВАРЬ
            </h3>
            <div className="space-y-4">
                {phrases.map((phrase, index) => (
                    <p
                        key={index}
                        className="flex items-center justify-start gap-2 text-lg text-gray-800 transition-all duration-300 ease-in-out hover:text-blue-600"
                    >
                        <span className="font-semibold text-blue-600">{phrase.original}</span> — {phrase.translation}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Glossary;

