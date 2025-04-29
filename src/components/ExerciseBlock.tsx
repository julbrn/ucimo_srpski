import React from "react";

interface ExerciseBlockProps {
    title: string;
    children: React.ReactNode;
}

const ExerciseBlock: React.FC<ExerciseBlockProps> = ({ title, children }) => {
    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-lg">{title}</h3>
            {children}
        </div>
    );
};

export default ExerciseBlock;