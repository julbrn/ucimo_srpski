import React from "react";

interface TextBlockProps {
    children: React.ReactNode;
}

const TextBlock: React.FC<TextBlockProps> = ({ children }) => {
    return (
        <div className="bg-white dark:bg-[var(--field-dark)]  rounded-2xl   text-gray-900 dark:text-white leading-relaxed  shadow-md p-4 sm:p-6 space-y-4">
            {children}
        </div>
    );
};

export default TextBlock;
