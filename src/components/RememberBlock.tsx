import React from "react";

type Phrase = {
    original: string;
    translation: string;
};

type RememberBlockProps = {
    title: string;
    phrases: Phrase[];
};

const RememberBlock: React.FC<RememberBlockProps> = ({ title, phrases }) => {
    return (
        <div className="bg-[var(--remember-bg)] p-4 sm:p-6 space-y-4 rounded-xl shadow-md  text-[var(--text-light)]">
            <h3 className="font-semibold text-lg ">{title}</h3>
            <div className="space-y-2">
                {phrases.map((phrase, index) => (
                    <p key={index}>
                        <span className="font-semibold">{phrase.original}</span> — {phrase.translation}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default RememberBlock;