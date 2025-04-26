import AudioPlayer from "../../components/AudioPlayer";
import InputCheck from "../../components/InputCheck";
import FreeInput from "../../components/FreeInput";
import ArrowBack from "../../components/ArrowBack";
import Glossary from "../../components/Glossary";
import { glossaryData } from "../../assets/data/GlossaryData";
import ImportantBlock from "../../components/ImportantBlock";
import RememberBlock from "../../components/RememberBlock";
import { rememberData } from "../../assets/data/rememberData";
import React from "react";
import { useState, useCallback } from "react";
import NextLessonButton from "../../components/NextLessonButton";

function Lesson02b() {
    const [currentAudio, setCurrentAudio] = useState<number | null>(null);
    // Обработчик для воспроизведения
    const handleAudioPlay = useCallback((audioIndex: number) => {
        if (currentAudio !== null && currentAudio !== audioIndex) {
            const prevAudio = document.getElementById(`audio-${currentAudio}`) as HTMLAudioElement | null;
            if (prevAudio) prevAudio.pause();
        }
        setCurrentAudio(audioIndex);
    }, [currentAudio]);
    return (
        <div className="min-h-screen p-6 max-w-3xl mx-auto relative text-[var(--text-light)] dark:text-[var(--text-dark)]">
            <ArrowBack />
            <h3 id="lesson02b" className="font-semibold text-lg mt-6 mb-2">
                2б. Павле прича о себи и о Србији (Павел рассказывает о себе и о Сербии)
            </h3>

            <div className="bg-[var(--field-light)] dark:bg-[var(--field-dark)] p-4 rounded-xl shadow mb-6">
                <p className="mb-2">Ја сам Павле. Моје презиме је Ровински. Ја нисам Србин. Ја сам Рус. Ја сам из Москве, из Русије. Ја сам програмер, нисам инжењер.</p>
                <p className="mb-2">Први пут сам у Београду. Кажу да Србија није велика, али је врло лепа земља, а Београд је велик и леп град. Није као Москва, али није ни мали.</p>
            </div>

            <Glossary
                phrases={glossaryData.find((g) => g.id === 2)?.phrases || []}
            />
            <NextLessonButton nextId="lesson02c" />


        </div>
    );
}

export default Lesson02b;
