import React from "react";

interface GrammarBlockProps {
    children: React.ReactNode;
}

const GrammarBlock: React.FC<GrammarBlockProps> = ({ children }) => {
    return (
        <div className="border-l-4 border-[var(--accent)] p-4 sm:p-6 space-y-4">
            {children}
        </div>
    );
};

export default GrammarBlock;
