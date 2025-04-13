// RememberBlock.jsx
import React from "react";

const RememberBlock = ({ title, phrases }) => {
    return (
        <div className="bg-blue-50 p-4 rounded-lg shadow-md mb-6">
            <h3 className="font-semibold text-lg mt-6 mb-4 text-gray-800">{title}</h3>
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

export default RememberBlock;
