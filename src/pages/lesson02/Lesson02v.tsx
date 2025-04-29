import AudioPlayer from "../../components/AudioPlayer";
import ArrowBack from "../../components/ArrowBack";
import Glossary from "../../components/Glossary";
import { glossaryData } from "../../assets/data/GlossaryData";
import React from "react";
import { useState, useCallback } from "react";
import NextLessonButton from "../../components/NextLessonButton";
import GrammarBlock from "../../components/GrammarBlock";
import ExerciseBlock from "../../components/ExerciseBlock";
import ImportantBlock from "../../components/ImportantBlock";
import FreeInput from "../../components/FreeInput";
import InputCheck from "../../components/InputCheck";

function Lesson02v() {
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
            <h3 className="font-semibold text-lg">2в. Да ли је све у реду?</h3>

            <p>Пока Павла расспрашивали на паспортном контроле, он размышлял.</p>
            <AudioPlayer src={`${import.meta.env.BASE_URL}assets/audio/008.-Urok-02_2v.mp3`} index={0} onPlay={handleAudioPlay} />
            <p>
                Врло сам интересантан пасошкој контроли. Ја нисам позната личност. Чудно је. Да ли је све у реду? Да ли сам им сумњив?
            </p>

            <Glossary
                phrases={glossaryData.find((g) => g.id === 3)?.phrases || []}
            />

            <GrammarBlock>
                <h3 className="font-semibold text-lg">Построение вопросов (с частицей да ли)</h3>
                <p>
                    Чтобы спросить «Вы программист?», «Вы русский?», «Вы из России?», нужно в начале вопроса поставить частицу <em>да ли</em>:<br />
                    <em>Да ли сте програмер? Да ли сте Рус? Да ли сте из Русије?</em>
                </p>
                <ImportantBlock>
                    <p>
                        Краткая форма глагола <strong>бити</strong> всегда стоит после первого слова в предложении, соответственно в вопросах с частицей <em>да ли</em> она всегда стоит после <em>да ли</em>.
                    </p>
                </ImportantBlock>
            </GrammarBlock>

            <ExerciseBlock title="Упражнение 1. Вставьте глагол бити.">
                <div className="space-y-6">
                    <p>1. Да ли <InputCheck correct="си" mode="inline" /> ти програмер?</p>
                    <p>2. Да ли <InputCheck correct="сте" mode="inline" /> ви из Пољске?</p>
                    <p>3. Да ли <InputCheck correct="смо" mode="inline" /> ми у Паризу?</p>
                    <p>4. Да ли <InputCheck correct="су" mode="inline" /> они Бугари?</p>
                    <p>5. Да ли <InputCheck correct="је" mode="inline" /> Марија Шпањолка?</p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 2. Вставьте глагол бити в утвердительной или отрицательной форме, в зависимости от смысла.">
                <div className="space-y-6">
                    <p><strong>а)</strong></p>
                    <p>— Добар дан! Да ли <InputCheck correct="сте" mode="inline" /> Ви из Београда?</p>
                    <p>— Добар дан! Не, ја <InputCheck correct="нисам" mode="inline" /> из Београда, али ја <InputCheck correct="сам" mode="inline" /> Србин.</p>
                    <p>— Супер! Да ли <InputCheck correct="сте" mode="inline" /> из Ваљева?</p>
                    <p>— Не, <InputCheck correct="нисам" mode="inline" /> из Ваљева.</p>

                    <p><strong>б)</strong></p>
                    <p>— Здраво! Да ли <InputCheck correct="си" mode="inline" /> ти Срђан?</p>
                    <p>— Здраво, да, ја <InputCheck correct="сам" mode="inline" /> Срђан.</p>
                    <p>— Да ли <InputCheck correct="си" mode="inline" /> из Америке? Да ли <InputCheck correct="си" mode="inline" /> Американац?</p>
                    <p>— Не, ја <InputCheck correct="нисам" mode="inline" /> Американац. Ја сам Србин. Да ли <InputCheck correct="си" mode="inline" /> ти из Енглеске?</p>
                    <p>— Не, и ја <InputCheck correct="сам" mode="inline" /> Србин.</p>

                    <p><strong>в)</strong></p>
                    <p>— Здраво! Да ли <InputCheck correct="си" mode="inline" /> ти Дарја?</p>
                    <p>— Добар дан! Да, ја <InputCheck correct="сам" mode="inline" /> Дарја.</p>
                    <p>— Одлично! Да ли <InputCheck correct="си" mode="inline" /> из Француске? Да ли <InputCheck correct="си" mode="inline" /> Францускиња?</p>
                    <p>— Не, ја <InputCheck correct="нисам" mode="inline" /> Францускиња, ја <InputCheck correct="сам" mode="inline" /> Рускиња.</p>
                    <p>— Добро. Да ли <InputCheck correct="си" mode="inline" /> ти из Москве?</p>
                    <p>— Не, ја <InputCheck correct="нисам" mode="inline" /> из Москве, ја <InputCheck correct="сам" mode="inline" /> из Петербурга.</p>
                </div>
            </ExerciseBlock>
            <GrammarBlock>
                <h3 className="font-semibold text-lg">Построение вопросов (с частицей ли). Полные формы глагола бити</h3>
                <p>
                    Второй способ задать вопрос — использовать частицу <em>ли</em>. Ср. русск. «Едешь ли ты в отпуск?». В начало вопроса мы должны поставить глагол, потом частицу <em>ли</em>, потом все остальное.
                </p>
                <p>
                    Глагол <strong>бити</strong> ставим не в той форме, которая нам уже известна (краткой), а в полной:
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
                            <td className="px-2 py-2 text-center">ја <strong>јесам</strong></td>
                            <td className="px-2 py-2 text-center">ми <strong>јесмо</strong></td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2 text-center">2</td>
                            <td className="px-2 py-2 text-center">ти <strong>јеси</strong></td>
                            <td className="px-2 py-2 text-center">ви <strong>јесте</strong></td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2 text-center">3</td>
                            <td className="px-2 py-2 text-center">он, она, оно <strong>јесте</strong></td>
                            <td className="px-2 py-2 text-center">они, оне, она <strong>јесу</strong></td>
                        </tr>
                    </tbody>
                </table>
                <p className="mt-4">
                    Пример: «Ты программист?» — <em>Јеси ли ти програмер?</em><br />
                    Полная форма употребляется только в вопросительных предложениях и в кратких ответах: <em>Јеси ли ти програмер? — Јесам</em> (ср. в английском языке: Are you a doctor? — Yes, I am).<br />
                    Если ответ отрицательный, то в кратком ответе мы можем употребить отрицательную форму глагола <strong>бити</strong>: <em>Не, нисам</em> или <em>Нисам</em>.
                </p>
                <p className="mt-2">
                    В третьем лице единственного числа (то есть когда подлежащее — он, она, оно) в вопросе с частицей <em>ли</em> употребляется не полная, а краткая форма глагола <strong>бити</strong>, то есть <strong>је</strong>.<br />
                    Пример: «Твой брат — врач?» — <em>Је ли твој брат лекар?</em> Ответ: <em>Јесте</em>.
                </p>
            </GrammarBlock>
            <ExerciseBlock title="Упражнение 3. Напишите вопросы, подобные представленным
в образце, каждый раз заменяя содержащиеся в образце названия
на другие.">
                <div className="space-y-6">
                    <p><strong>а) Образец: Јесам ли у Риму?</strong></p>
                    <FreeInput placeholder="1." />
                    <FreeInput placeholder="2." />
                    <FreeInput placeholder="3." />
                    <FreeInput placeholder="4." />
                    <FreeInput placeholder="5." />

                    <p><strong>б) Образец: Јеси ли ти Францускиња?</strong></p>
                    <FreeInput placeholder="1." />
                    <FreeInput placeholder="2." />
                    <FreeInput placeholder="3." />
                    <FreeInput placeholder="4." />
                    <FreeInput placeholder="5." />

                    <p><strong>в) Образец: Је ли Марко из Србије?</strong></p>
                    <FreeInput placeholder="1." />
                    <FreeInput placeholder="2." />
                    <FreeInput placeholder="3." />
                    <FreeInput placeholder="4." />
                    <FreeInput placeholder="5." />

                    <p><strong>г) Образец: Јесмо ли ми Пољаци?</strong></p>
                    <FreeInput placeholder="1." />
                    <FreeInput placeholder="2." />
                    <FreeInput placeholder="3." />
                    <FreeInput placeholder="4." />
                    <FreeInput placeholder="5." />

                    <p><strong>д) Образец: Јесте ли ви програмери?</strong></p>
                    <FreeInput placeholder="1." />
                    <FreeInput placeholder="2." />
                    <FreeInput placeholder="3." />
                    <FreeInput placeholder="4." />
                    <FreeInput placeholder="5." />

                    <p><strong>е) Образец: Јесу ли они чистачи?</strong></p>
                    <FreeInput placeholder="1." />
                    <FreeInput placeholder="2." />
                    <FreeInput placeholder="3." />
                    <FreeInput placeholder="4." />
                    <FreeInput placeholder="5." />
                </div>
            </ExerciseBlock>
            <ExerciseBlock title="Упражнение 4. Ответьте на вопросы утвердительно и отрицательно, используя полную и отрицательную форму глагола бити.">
                <div className="space-y-6">
                    <p>1. Јесте ли из Енглеске? <InputCheck correct="јесам" mode="inline" /> / <InputCheck correct="нисам" mode="inline" /></p>
                    <p>2. Јеси ли Американац? <InputCheck correct="јесам" mode="inline" /> / <InputCheck correct="нисам" mode="inline" /></p>
                    <p>3. Јесмо ли у Пекингу? <InputCheck correct="јесмо" mode="inline" /> / <InputCheck correct="нисмо" mode="inline" /></p>
                    <p>4. Јесу ли они Кинези? <InputCheck correct="јесу" mode="inline" /> / <InputCheck correct="нису" mode="inline" /></p>
                    <p>5. Јесте ли лекар? <InputCheck correct="јесам" mode="inline" /> / <InputCheck correct="нисам" mode="inline" /></p>
                </div>
            </ExerciseBlock>
            <ExerciseBlock title="Упражнение 5. Заполните пропуски.">
                <div className="space-y-6">
                    <p>— Добар дан! <InputCheck correct="јесмо" mode="inline" /> ли у Београду?</p>
                    <p>— <InputCheck correct="нисмо" mode="inline" />. <InputCheck correct="јесте" mode="inline" /> ли Шпанац?</p>
                    <p>— Не, <InputCheck correct="нисам" mode="inline" /> Шпанац. <InputCheck correct="јесте" mode="inline" /> ли Ви Шпанац?</p>
                    <p>— Да, ја <InputCheck correct="сам" mode="inline" /> Шпанац.</p>
                    <p>— <InputCheck correct="јесу" mode="inline" /> ли и они Шпанци?</p>
                    <p>— <InputCheck correct="јесу" mode="inline" />.</p>
                    <p>— Добро.</p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 6. Вставьте глагол бити в отрицательной форме, дополните диалог.">
                <div className="space-y-6">
                    <p>— Здраво!</p>
                    <p>— Здраво!</p>
                    <p>— Шта си по занимању? Ти си грађевинар?</p>
                    <p>— Не, ја <InputCheck correct="нисам" mode="inline" /> грађевинар.</p>
                    <p>— Ти си правник?</p>
                    <p>— Не, ја <InputCheck correct="нисам" mode="inline" /> правник.</p>
                    <FreeInput placeholder="Допишите вопрос и ответ 1" />
                    <FreeInput placeholder="Допишите вопрос и ответ 2" />
                    <FreeInput placeholder="Допишите вопрос и ответ 3" />
                    <p>— Па шта си ти?</p>
                    <p>— Ја нисам запослен.</p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 7. Вставьте глагол бити в отрицательной форме, дополните диалог.">
                <div className="space-y-6">
                    <p>— Добар дан!</p>
                    <p>— Добар дан!</p>
                    <p>— Одакле сте Ви? Ви сте из Француске?</p>
                    <p>— Не, ја <InputCheck correct="нисам" mode="inline" /> из Француске, ја <InputCheck correct="нисам" mode="inline" /> Француз.</p>
                    <p>— Ви сте из Енглеске?</p>
                    <p>— Не, ја <InputCheck correct="нисам" mode="inline" /> из Енглеске, ја <InputCheck correct="нисам" mode="inline" /> Енглез.</p>
                    <FreeInput placeholder="Допишите вопрос и ответ 1" />
                    <FreeInput placeholder="Допишите вопрос и ответ 2" />
                    <FreeInput placeholder="Допишите вопрос и ответ 3" />
                    <p>— Онда, одакле сте ви?</p>
                    <p>— Ја сам Србин, Ја сам из Србије.</p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 8. Ответьте на вопросы сначала утвердительно, потом отрицательно.">
                <div className="space-y-6">
                    <p>1. Да ли си из Америке? <InputCheck correct="јесам" mode="inline" /> / <InputCheck correct="нисам" mode="inline" /></p>
                    <p>2. Да ли је Ана из Кине? <InputCheck correct="јесте" mode="inline" /> / <InputCheck correct="није" mode="inline" /></p>
                    <p>3. Да ли је он из Енглеске? <InputCheck correct="јесте" mode="inline" /> / <InputCheck correct="није" mode="inline" /></p>
                    <p>4. Да ли сте из Италије? <InputCheck correct="јесмо" mode="inline" /> / <InputCheck correct="нисмо" mode="inline" /></p>
                    <p>5. Да ли су они из Пољске? <InputCheck correct="јесу" mode="inline" /> / <InputCheck correct="нису" mode="inline" /></p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 9. Вопросы из предыдущего упражнения замените
на вопросы с частицей ли.">
                <div className="space-y-6">
                    <p>1. <InputCheck correct="Јеси ли из Америке?" /></p>
                    <p>2. <InputCheck correct="Је ли Ана из Кине?" /></p>
                    <p>3. <InputCheck correct="Је ли он из Енглеске?" /></p>
                    <p>4. <InputCheck correct="Јесте ли из Италије?" /></p>
                    <p>5. <InputCheck correct="Јесу ли они из Пољске?" /></p>
                </div>
            </ExerciseBlock>
            <ExerciseBlock title="Упражнение 10. Составьте опросник из 5–7 пунктов на сербском для прибывающего в страну. Обязательно включите перечисленные ниже вопросы. Затем заполните эту анкету.">
                <div className="space-y-6">
                    <p>1. Как вас зовут?</p>
                    <InputCheck correct="Како се зовете?" />
                    <p>2. Откуда вы?</p>
                    <InputCheck correct="Одакле сте?" />
                    <p>3. Кто вы по национальности?</p>
                    <InputCheck correct="Шта сте Ви?" />
                    <p>4. Кто вы по профессии?</p>
                    <InputCheck correct="Шта сте Ви по професији?" />
                </div>
            </ExerciseBlock>


            <NextLessonButton nextId="lesson02g" />


        </div>
    );
}

export default Lesson02v;
