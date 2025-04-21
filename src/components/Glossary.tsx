import React from "react";

const Glossary = ({ title, phrases }) => {
    return (
        <div className=" bg-green-200 p-4 rounded-xl shadow-md mb-6 text-[var(--text-light)]">
            <h3 className="font-semibold text-lg mt-6 mb-4 ">СЛОВАРЬ</h3>
            <div className="space-y-2">
                {phrases.map((phrase, index) => (
                    <p key={index} className="mb-2">
                        <span className="font-semibold">{phrase.original}</span> — {phrase.translation}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Glossary;

