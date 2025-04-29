import AudioPlayer from "../../components/AudioPlayer";
import InputCheck from "../../components/InputCheck";
import ArrowBack from "../../components/ArrowBack";
import Glossary from "../../components/Glossary";
import { glossaryData } from "../../assets/data/GlossaryData";
import React from "react";
import { useState, useCallback } from "react";
import NextLessonButton from "../../components/NextLessonButton";
import GrammarBlock from "../../components/GrammarBlock";
import ExerciseBlock from "../../components/ExerciseBlock";

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
        <div className="min-h-screen max-w-3xl mx-auto p-4 sm:p-6 space-y-10 sm:space-y-12 text-[var(--text-light)] dark:text-[var(--text-dark)]">
            <ArrowBack />
            <h3 id="lesson02b" className="font-semibold text-lg">
                2б. Павле прича о себи и о Србији (Павел рассказывает о себе и о Сербии)
            </h3>
            <AudioPlayer src="/src/assets/audio/007.-Urok-02_2b.mp3" index={0} onPlay={handleAudioPlay} />

            <div className="bg-[var(--field-light)] dark:bg-[var(--field-dark)] p-4 rounded-xl shadow">
                <p className="mb-2">Ја сам Павле. Моје презиме је Ровински. Ја нисам Србин. Ја сам Рус. Ја сам из Москве, из Русије. Ја сам програмер, нисам инжењер.</p>
                <p className="mb-2">Први пут сам у Београду. Кажу да Србија није велика, али је врло лепа земља, а Београд је велик и леп град. Није као Москва, али није ни мали.</p>
            </div>

            <Glossary
                phrases={glossaryData.find((g) => g.id === 2)?.phrases || []}
            />
            <GrammarBlock>
                <h3 className="font-semibold text-lg">Отрицательная форма глагола бити</h3>
                <p>
                    Чтобы сказать «я не программист», «я не серб», «я не из Сербии», нужно употребить отрицательную форму глагола <strong>бити</strong>: <em>нисам програмер, нисам Србин, нисам из Србије</em>.
                </p>
                <table className="w-full text-sm mt-4 overflow-hidden rounded-xl border-2 border-solid bg-[var(--field-light)] dark:bg-[var(--field-dark)]">
                    <thead>
                        <tr>
                            <th className="px-2 py-2 text-center">Лицо</th>
                            <th className="px-2 py-2 text-center">Единственное число</th>
                            <th className="px-2 py-2 text-center">Множественное число</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-2 py-2 text-center">1</td>
                            <td className="px-2 py-2 text-center">ја <strong>нисам</strong></td>
                            <td className="px-2 py-2 text-center">ми <strong>нисмо</strong></td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2 text-center">2</td>
                            <td className="px-2 py-2 text-center">ти <strong>ниси</strong></td>
                            <td className="px-2 py-2 text-center">ви <strong>нисте</strong></td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2 text-center">3</td>
                            <td className="px-2 py-2 text-center">он, она, оно <strong>није</strong></td>
                            <td className="px-2 py-2 text-center">они, оне, она <strong>нису</strong></td>
                        </tr>
                    </tbody>
                </table>
            </GrammarBlock>

            <ExerciseBlock title="Упражнение 1. Вставьте глагол бити в отрицательной форме.">
                <div className="space-y-6">
                    <p>1. Ја <InputCheck correct="нисам" mode="inline" /> програмер.</p>
                    <p>2. Ти <InputCheck correct="ниси" mode="inline" /> лекар.</p>
                    <p>3. Милош <InputCheck correct="није" mode="inline" /> менаџер.</p>
                    <p>4. Марија <InputCheck correct="није" mode="inline" /> учитељ.</p>
                    <p>5. Ми <InputCheck correct="нисмо" mode="inline" /> бизнисмени.</p>
                    <p>6. Ви <InputCheck correct="нисте" mode="inline" /> зубари.</p>
                    <p>7. Урош и Милан <InputCheck correct="нису" mode="inline" /> чистачи.</p>
                    <p>8. Зоран и Ивана <InputCheck correct="нису" mode="inline" /> правници.</p>
                    <p>9. Љиљана и Јагода <InputCheck correct="нису" mode="inline" /> фризерке.</p>
                    <p>10. Ми <InputCheck correct="нисмо" mode="inline" /> грађевинари.</p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 2. Вставьте глагол бити в отрицательной форме и повторите названия столиц и национальностей.">
                <div className="space-y-6">
                    <p>1. Ја <InputCheck correct="нисам" mode="inline" /> из Москве, ја <InputCheck correct="нисам" mode="inline" /> Рус.</p>
                    <p>2. Ти <InputCheck correct="ниси" mode="inline" /> из Софије, ти <InputCheck correct="ниси" mode="inline" /> Бугарка.</p>
                    <p>3. Мајкл <InputCheck correct="није" mode="inline" /> из Мадрида, он <InputCheck correct="није" mode="inline" /> Шпанац.</p>
                    <p>4. Милица <InputCheck correct="није" mode="inline" /> из Париза, она <InputCheck correct="није" mode="inline" /> Францускиња.</p>
                    <p>5. Ми <InputCheck correct="нисмо" mode="inline" /> из Лондона, ми <InputCheck correct="нисмо" mode="inline" /> Енглези.</p>
                    <p>6. Ви <InputCheck correct="нисте" mode="inline" /> из Пекинга, ви <InputCheck correct="нисте" mode="inline" /> Кинези.</p>
                    <p>7. Шејла и Николај <InputCheck correct="нису" mode="inline" /> из Рима, они <InputCheck correct="нису" mode="inline" /> Италијани.</p>
                    <p>8. Јелена и Светлана <InputCheck correct="нису" mode="inline" /> из Вашингтона, оне <InputCheck correct="нису" mode="inline" /> Американке.</p>
                    <p>9. Ми <InputCheck correct="нисмо" mode="inline" /> из Варшаве, ми <InputCheck correct="нисмо" mode="inline" /> Пољаци.</p>
                    <p>10. Ви <InputCheck correct="нисте" mode="inline" /> из Београда, ви <InputCheck correct="нисте" mode="inline" /> Срби.</p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 3. Вставьте глагол бити в отрицательной форме.">
                <div className="space-y-6">
                    <p>— Добар дан! Да Ви <InputCheck correct="сте" mode="inline" /> случајно Јелена?</p>
                    <p>— Добар дан! Да, ја сам Јелена.</p>
                    <p>— Ви сте из Мадрида?</p>
                    <p>— Не, ја <InputCheck correct="нисам" mode="inline" /> из Мадрида.</p>
                    <p>— Ви сте из Шпаније?</p>
                    <p>— Не, ја <InputCheck correct="нисам" mode="inline" /> из Шпаније, ја <InputCheck correct="нисам" mode="inline" /> Шпањолка.</p>
                    <p>— <em>Аха</em>? Извините.</p>
                    <p>— Нема везе. Ја сам из Москве, ја сам Рускиња.</p>
                    <p>— Добро, добро. Извињавам се, довиђења.</p>
                    <p>— Пријатно.</p>
                </div>
            </ExerciseBlock>
            <NextLessonButton nextId="lesson02v" />


        </div>
    );
}

export default Lesson02b;
