import React, { useState, useCallback } from "react";
import ExerciseItem from "./ExerciseItem";
import { pageContentByPage } from "../assets/data/pageContentByPage";

const Sidebar = ({ currentPage }: { currentPage: number }) => {
    const entry = pageContentByPage.find((p) => p.page === currentPage);

    const [currentAudio, setCurrentAudio] = useState<number | null>(null);

    const handleAudioPlay = useCallback(
        (audioIndex: number) => {
            if (currentAudio !== null && currentAudio !== audioIndex) {
                const prevAudio = document.getElementById(`audio-${currentAudio}`) as HTMLAudioElement | null;
                if (prevAudio) prevAudio.pause();
            }
            setCurrentAudio(audioIndex);
        },
        [currentAudio]
    );

    return (
        <div className="p-2 text-sm">
            <h3 className="font-bold mb-4 text-lg">Ответы и аудио</h3>
            {entry ? (
                <ul className="space-y-2">
                    {entry.items.map((item, idx) => (
                        <ExerciseItem
                            key={item.number}
                            index={idx}
                            {...item}
                            currentAudio={currentAudio}
                            onPlay={handleAudioPlay}
                        />
                    ))}
                </ul>
            ) : (
                <p className="italic text-gray-500">Нет контента для этой страницы</p>
            )}
        </div>
    );
};

export default Sidebar;
