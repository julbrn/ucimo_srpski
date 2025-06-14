import React, { useState } from "react";
import AudioPlayer from "./AudioPlayer";

interface ExerciseItemProps {
    number: string;
    text?: string;
    audio?: string;
    index: number;
    currentAudio: number | null;
    onPlay: (index: number) => void;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ number, text, audio, index, currentAudio, onPlay }) => {
    const [revealed, setRevealed] = useState(false);

    return (
        <li className="rounded-lg p-3 pl-0">
            <p className="text-base font-semibold mb-2">№ {number}</p>

            {audio && (
                <AudioPlayer
                    src={audio}
                    index={index}
                    onPlay={onPlay}
                />
            )}

            {text && (
                <div>
                    <button
                        onClick={() => setRevealed(!revealed)}
                        className="text-xs text-gray-500 mb-1 hover:underline"
                    >
                        {revealed ? "Скрыть ответ" : "Показать ответ"}
                    </button>
                    <div
                        className={`text-base leading-8 transition-all duration-500 whitespace-pre-line relative overflow-hidden p-2 pl-0 rounded  ${revealed ? "" : "before:absolute before:inset-0 before:opacity-100 before:backdrop-blur-xs"
                            }`}
                        onClick={() => setRevealed(true)}
                    >
                        {text}
                    </div>
                </div>
            )}
        </li>
    );
};

export default ExerciseItem;
