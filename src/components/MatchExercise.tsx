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

    const [selected, setSelected] = useState<{ id: string, side: 'left' | 'right' } | null>(null);
    const [matches, setMatches] = useState<Record<string, string>>({});
    const [correctlyMatched, setCorrectlyMatched] = useState<Set<string>>(new Set());
    const [incorrectlyMatched, setIncorrectlyMatched] = useState<Set<string>>(new Set());

    const handleClick = (id: string, side: 'left' | 'right') => {
        if (!selected) {
            setSelected({ id, side });
        } else {
            if (selected.side === side) {
                setSelected({ id, side }); // замена текущего выбора
            } else {
                const leftId = side === 'left' ? id : selected.id;
                const rightId = side === 'right' ? id : selected.id;

                setMatches(prev => {
                    const newMatches = { ...prev, [leftId]: rightId };
                    setIncorrectlyMatched(prevIncorrect => {
                        const updated = new Set(prevIncorrect);
                        updated.delete(leftId);
                        return updated;
                    });
                    return newMatches;
                });

                setSelected(null);
            }
        }
    };

    const checkAnswers = () => {
        const newCorrect = new Set<string>();
        const newIncorrect = new Set<string>();

        for (const [leftId, rightId] of Object.entries(matches)) {
            if (correctMatches[leftId] === rightId) {
                newCorrect.add(leftId);
            } else {
                newIncorrect.add(leftId);
            }
        }

        setCorrectlyMatched(newCorrect);
        setIncorrectlyMatched(newIncorrect);
    };

    const resetAll = () => {
        setMatches({});
        setCorrectlyMatched(new Set());
        setIncorrectlyMatched(new Set());
        setSelected(null);
    };

    const getArrowColor = (leftId: string) => {
        if (correctlyMatched.has(leftId)) return 'limegreen';
        if (incorrectlyMatched.has(leftId)) return 'tomato';
        return 'var(--accent)';
    };

    return (
        <div className="flex flex-col items-center min-h-screen text-[var(--text-light)] dark:text-[var(--text-dark)]">
            <h1 className="mb-2 sm:mb-6 text-center font-bold">Соотнесите пары</h1>

            <div className="flex relative w-full max-w-5xl justify-between">
                {/* Левая колонка */}
                <div className="flex flex-col gap-2 sm:gap-4">
                    {leftOptions.map(item => (
                        <div
                            key={item.id}
                            id={item.id}
                            className={`p-2 sm:p-4 w-30 sm:w-48 border rounded-xl cursor-pointer text-center text-sm sm:text-base transition
                                ${selected?.id === item.id && selected.side === 'left'
                                    ? 'border-[var(--accent)] bg-[var(--field-light-hover)] dark:bg-[var(--field-dark-hover)]'
                                    : 'border-[var(--field-light)] dark:border-[var(--field-dark)] bg-[var(--field-light)] dark:bg-[var(--field-dark)]'
                                }`}
                            onClick={() => handleClick(item.id, 'left')}
                        >
                            {item.text}
                        </div>
                    ))}
                </div>

                {/* Правая колонка */}
                <div className="flex flex-col gap-2 sm:gap-4">
                    {rightOptions.map(item => (
                        <div
                            key={item.id}
                            id={item.id}
                            className={`p-2 sm:p-4 w-30 sm:w-64 border rounded-xl cursor-pointer text-center text-sm sm:text-base transition
                                ${selected?.id === item.id && selected.side === 'right'
                                    ? 'border-[var(--accent)] bg-[var(--field-light-hover)] dark:bg-[var(--field-dark-hover)]'
                                    : 'border-[var(--field-light)] dark:border-[var(--field-dark)] bg-[var(--field-light)] dark:bg-[var(--field-dark)]'
                                }`}
                            onClick={() => handleClick(item.id, 'right')}
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
                        startAnchor="right"
                        endAnchor="left"
                        color={getArrowColor(leftId)}
                        strokeWidth={3}
                        path="smooth"
                        curveness={0.4}
                        showHead
                        headSize={6}
                    />
                ))}
            </div>

            {/* Кнопки */}
            <div className="flex gap-4 mt-5 sm:mt-10">
                <button
                    onClick={checkAnswers}
                    className="px-4 py-2 sm:px-6 rounded-xl font-semibold transition
                    bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white cursor-pointer text-sm sm:text-base"
                >
                    Проверить
                </button>
                <button
                    onClick={resetAll}
                    className="px-4 py-2 sm:px-6 rounded-xl font-semibold transition
                    bg-rose-500 hover:bg-rose-600 text-white cursor-pointer text-sm sm:text-base"
                >
                    Сбросить
                </button>
            </div>

            {/* Результат */}
            {(correctlyMatched.size + incorrectlyMatched.size === leftOptions.length) && (
                <div className="mt-6 text-lg sm:text-xl">
                    {incorrectlyMatched.size === 0
                        ? 'Все верно! 🎉'
                        : 'Есть ошибки. Попробуйте ещё раз.'}
                </div>
            )}
        </div>
    );
}
