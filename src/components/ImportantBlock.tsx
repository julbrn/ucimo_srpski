import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const ImportantBlock = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-[var(--important-bg)] border-l-4 border-red-300 dark:border-red-400  rounded-xl shadow text-[var(--text-light)] p-4 sm:p-6 space-y-4">

            <div className="flex items-start gap-3">
                <ExclamationTriangleIcon className="w-6 h-6 mt-0.5 flex-shrink-0 text-red-500" />
                <div className=" leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ImportantBlock;