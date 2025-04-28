import React, { useState } from 'react';
import Xarrow from 'react-xarrows';

export interface MatchExerciseOption {
    id: string;
    text: string;
}

export interface MatchExerciseItem {
    leftOptions: MatchExerciseOption[];
    rightOptions: MatchExerciseOption[];
    correctMatches: Record<string, string>;
}

interface MatchExerciseProps {
    data: MatchExerciseItem;
}

export default function MatchExercise({ data }: MatchExerciseProps) {
    const { leftOptions, rightOptions, correctMatches } = data;

    const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
    const [matches, setMatches] = useState<Record<string, string>>({});
    const [correctlyMatched, setCorrectlyMatched] = useState<Set<string>>(new Set());
    const [incorrectlyMatched, setIncorrectlyMatched] = useState<Set<string>>(new Set());

    const handleLeftClick = (id: string) => {
        setSelectedLeft(id);
    };

    const handleRightClick = (id: string) => {
        if (selectedLeft) {
            setMatches(prev => {
                const newMatches = { ...prev, [selectedLeft]: id };

                setIncorrectlyMatched(prevIncorrect => {
                    const updatedIncorrect = new Set(prevIncorrect);
                    updatedIncorrect.delete(selectedLeft);
                    return updatedIncorrect;
                });

                return newMatches;
            });
            setSelectedLeft(null);
        }
    };

    const checkAnswers = () => {
        const newCorrect = new Set(correctlyMatched);
        const newIncorrect = new Set(incorrectlyMatched);

        for (const [leftId, rightId] of Object.entries(matches)) {
            if (correctMatches[leftId] === rightId) {
                newCorrect.add(leftId);
                newIncorrect.delete(leftId);
            } else {
                if (!newCorrect.has(leftId)) {
                    newIncorrect.add(leftId);
                }
            }
        }
        setCorrectlyMatched(newCorrect);
        setIncorrectlyMatched(newIncorrect);
    };

    const resetAll = () => {
        setMatches({});
        setCorrectlyMatched(new Set());
        setIncorrectlyMatched(new Set());
        setSelectedLeft(null);
    };

    const getArrowColor = (leftId: string) => {
        if (correctlyMatched.has(leftId)) return 'limegreen';
        if (incorrectlyMatched.has(leftId)) return 'tomato';
        return 'var(--accent)';
    };

    return (
        <div className="flex flex-col items-center p-6 min-h-screen text-[var(--text-light)] dark:text-[var(--text-dark)]">
            <h1 className="text-lg mb-6 text-center">Соотнесите пары</h1>

            <div className="flex relative w-full max-w-5xl justify-between">
                {/* Левая колонка */}
                <div className="flex flex-col gap-8">
                    {leftOptions.map(item => (
                        <div
                            key={item.id}
                            id={item.id}
                            className={`p-4 w-48 border rounded-xl cursor-pointer text-center transition 
                ${selectedLeft === item.id
                                    ? 'border-[var(--accent)] bg-[var(--field-light-hover)] dark:bg-[var(--field-dark-hover)]'
                                    : 'border-[var(--field-light)] dark:border-[var(--field-dark)] bg-[var(--field-light)] dark:bg-[var(--field-dark)]'
                                }`}
                            onClick={() => handleLeftClick(item.id)}
                        >
                            {item.text}
                        </div>
                    ))}
                </div>

                {/* Правая колонка */}
                <div className="flex flex-col gap-8">
                    {rightOptions.map(item => (
                        <div
                            key={item.id}
                            id={item.id}
                            className="p-4 w-64 border rounded-xl cursor-pointer text-center transition
                border-[var(--field-light)] dark:border-[var(--field-dark)] bg-[var(--field-light)] dark:bg-[var(--field-dark)] 
                hover:bg-[var(--field-light-hover)] dark:hover:bg-[var(--field-dark-hover)]"
                            onClick={() => handleRightClick(item.id)}
                        >
                            {item.text}
                        </div>
                    ))}
                </div>

                {/* Стрелки */}
                {Object.entries(matches).map(([leftId, rightId]) => (
                    <Xarrow
                        key={leftId}
                        start={leftId}
                        end={rightId}
                        color={getArrowColor(leftId)}
                        strokeWidth={3}
                        path="smooth"
                        showHead
                        headSize={6}
                    />
                ))}
            </div>

            {/* Кнопки действий */}
            <div className="flex gap-4 mt-10">
                <button
                    onClick={checkAnswers}
                    className="px-6 py-2 rounded-xl font-semibold transition
            bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white cursor-pointer"
                >
                    Проверить
                </button>
                <button
                    onClick={resetAll}
                    className="px-6 py-2 rounded-xl font-semibold transition
    bg-rose-500 hover:bg-rose-600 text-white cursor-pointer"
                >
                    Сбросить
                </button>
            </div>

            {/* Результат проверки */}
            {(correctlyMatched.size + incorrectlyMatched.size === leftOptions.length) && (
                <div className="mt-6 text-xl">
                    {incorrectlyMatched.size === 0
                        ? 'Все верно! 🎉'
                        : 'Есть ошибки. Попробуйте ещё раз.'}
                </div>
            )}
        </div>
    );
}
