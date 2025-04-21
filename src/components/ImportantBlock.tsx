import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const ImportantBlock = ({ children }) => {
    return (
        <div className="bg-rose-50 border-l-4 border-rose-300 dark:border-rose-400 p-4 rounded-xl shadow text-rose-800 dark:text-rose-900 mb-6">

            <div className="flex items-start gap-3">
                <ExclamationTriangleIcon className="w-6 h-6 mt-0.5 flex-shrink-0" />
                <div className=" leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ImportantBlock;