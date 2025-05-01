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
import MatchExercise from "../../components/MatchExercise";
import { MatchExerciseData } from "../../assets/data/matchData";
import TextBlock from "../../components/TextBlock";
import GrammarBlock from "../../components/GrammarBlock";
import ExerciseBlock from "../../components/ExerciseBlock";

function Lesson03a() {
    const [currentAudio, setCurrentAudio] = useState<number | null>(null);
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
            <h2 className="text-3xl font-bold text-center">
                УРОК 3. Говоримо о себи
            </h2>

            <TextBlock>
                <h3 className="text-2xl font-bold">
                    3а. На пасошкој контроли на београдском аеродрому (продолжение)
                </h3>
                <p>
                    Разговор на паспортном контроле с Павлом
                    продолжил другой сотрудник.
                </p>

                <AudioPlayer src={`${import.meta.env.BASE_URL}/assets/audio/013.-Urok-03_3a.mp3`} index={0} onPlay={handleAudioPlay} />
                <p className="leading-8 pt-4">
                    — Из које земље долазите?<br />
                    — Долазим из Русије.<br />
                    — Где живите у Русији?<br />
                    — Живим у Москви.<br />
                    — Јесте ли Ви програмер?<br />
                    — Да, ја сам програмер.<br />
                    — Где радите?<br />
                    — Радим у фирми. Радим у фирми као програмер.<br />
                    — Да ли волите свој посао?<br />
                    — Да, много волим.<br />
                    — Чиме се бавите у слободно време?<br />
                    — Учим српски језик.<br />
                    — Да ли говорите српски?<br />
                    — Мало.<br />
                    — Да ли први пут долазите у Србију?<br />
                    — Да, први пут долазим у Србију.<br />
                    — Ви веома личите на једног хакера, којег тражимо на нашем аеродрому.<br />
                    — Нисам ја хакер, ја сам програмер.<br />
                    — Добро, добро. Видим да нисте хакер. Зато вас желим замолити за помоћ. Объясню вам по-русски: я вас отпущу, а вы нам поможете раскрыть план хакеров. Мой помощник Горан вам все объяснит.
                </p>
            </TextBlock>
            <Glossary
                phrases={glossaryData.find((g) => g.id === 6)?.phrases || []}
            />
            <RememberBlock
                title={rememberData[4].lessonTitle}
                phrases={rememberData[4].phrases}
            />

            <GrammarBlock>
                <h3 className="font-semibold text-lg">Глаголы и спряжения</h3>
                <p>
                    Чтобы сказать «я живу в Москве», «я учу сербский язык», «я работаю врачом в больнице»,
                    «я занимаюсь спортом», «я люблю литературу», нужно употребить сербские глаголы живети
                    «жить», учити «учить» и «учиться», радити «работать», бавити се «заниматься» и волети
                    «любить» в настоящем времени. Это глаголы и-спряжения.
                </p>

                <h4 className="font-semibold text-md mt-4">Спряжение глагола живети «жить»</h4>
                <table className="w-full text-sm overflow-hidden rounded-xl border-2 border-solid bg-[var(--field-light)] dark:bg-[var(--field-dark)]">
                    <thead className="text-xs sm:text-sm border-2 border-solid border-[var(--field-dark)]">
                        <tr>
                            <th className="px-2 py-1 sm:px-4 sm:py-2 text-center">Лицо</th>
                            <th className="px-2 py-1 sm:px-4 sm:py-2 text-center">Единственное число</th>
                            <th className="px-2 py-1 sm:px-4 sm:py-2 text-center">Множественное число</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="even:bg-[var(--field-light-hover)] dark:even:bg-[var(--field-dark-hover)]">
                            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">1</td>
                            <td className="px-2 py-1 sm:px-4 sm:py-2">
                                <em>ја живим</em> «я живу»
                            </td>
                            <td className="px-2 py-1 sm:px-4 sm:py-2">
                                <em>ми живимо</em> «мы живем»
                            </td>
                        </tr>
                        <tr className="even:bg-[var(--field-light-hover)] dark:even:bg-[var(--field-dark-hover)]">
                            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">2</td>
                            <td className="px-2 py-1 sm:px-4 sm:py-2">
                                <em>ти живиш</em> «ты живешь»
                            </td>
                            <td className="px-2 py-1 sm:px-4 sm:py-2">
                                <em>ви живите</em> «вы живете»
                            </td>
                        </tr>
                        <tr className="even:bg-[var(--field-light-hover)] dark:even:bg-[var(--field-dark-hover)]">
                            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">3</td>
                            <td className="px-2 py-1 sm:px-4 sm:py-2">
                                <em>он, она, оно живи</em> «он, она, оно живет»
                            </td>
                            <td className="px-2 py-1 sm:px-4 sm:py-2">
                                <em>они, оне, она живе</em> «они живут»
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h4 className="font-semibold text-md mt-6">Спряжение глагола радити «работать»</h4>
                <table className="w-full text-sm overflow-hidden rounded-xl border-2 border-solid bg-[var(--field-light)] dark:bg-[var(--field-dark)]">
                    <thead className="text-xs sm:text-sm border-2 border-solid border-[var(--field-dark)]">
                        <tr>
                            <th className="px-2 py-1 sm:px-4 sm:py-2 text-center">Лицо</th>
                            <th className="px-2 py-1 sm:px-4 sm:py-2 text-center">Единственное число</th>
                            <th className="px-2 py-1 sm:px-4 sm:py-2 text-center">Множественное число</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="even:bg-[var(--field-light-hover)] dark:even:bg-[var(--field-dark-hover)]">
                            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">1</td>
                            <td className="px-2 py-1 sm:px-4 sm:py-2">
                                <em>ја радим</em> «я работаю»
                            </td>
                            <td className="px-2 py-1 sm:px-4 sm:py-2">
                                <em>ми радимо</em> «мы работаем»
                            </td>
                        </tr>
                        <tr className="even:bg-[var(--field-light-hover)] dark:even:bg-[var(--field-dark-hover)]">
                            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">2</td>
                            <td className="px-2 py-1 sm:px-4 sm:py-2">
                                <em>ти радиш</em> «ты работаешь»
                            </td>
                            <td className="px-2 py-1 sm:px-4 sm:py-2">
                                <em>ви радите</em> «вы работаете»
                            </td>
                        </tr>
                        <tr className="even:bg-[var(--field-light-hover)] dark:even:bg-[var(--field-dark-hover)]">
                            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">3</td>
                            <td className="px-2 py-1 sm:px-4 sm:py-2">
                                <em>он, она, оно ради</em> «он, она, оно работает»
                            </td>
                            <td className="px-2 py-1 sm:px-4 sm:py-2">
                                <em>они, оне, она раде</em> «они работают»
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p className="mt-4">
                    Данный тип сербского спряжения, при котором в форме 1-го лица единственного числа настоящего времени
                    глагол оканчивается на им, называется и-спряжение. К нему относится подавляющее большинство глаголов,
                    которые в неопределенной форме (инфинитиве) оканчиваются на -ити, -ети, а также небольшое число глаголов
                    на -ати. Например: учити, бавити се, волети, држати («держать»).
                </p>

                <p className="mt-2">
                    В тексте встречаются и другие глаголы на -им: долазити «приходить, приезжать», личити «быть похожим»,
                    тражити «искать», замолити «попросить», желети «хотеть».
                </p>

                <p className="mt-4">
                    Чтобы задать вопрос с этими глаголами, нужно использовать те же частицы, которые используются в
                    вопросах с глаголом бити:
                </p>

                <ol className="list-decimal list-inside mt-2">
                    <li>С помощью частицы да ли: Да ли ти радиш? «Ты работаешь?»</li>
                    <li>С помощью частицы ли: Радиш ли ти?</li>
                </ol>

                <p className="mt-2">
                    Отрицательная форма образуется с помощью частицы не: не радим.
                </p>

                <ImportantBlock>
                    <p>
                        Личные местоимения в сербском языке обычно опускаются, если из контекста понятно, о ком идет речь:
                        живим у Београду «я живу в Белграде», радиш као програмер «ты работаешь программистом»,
                        долазимо из Русије «мы из России».
                    </p>
                </ImportantBlock>

                <p className="mt-4">
                    Далее в словариках к тексту мы будем следующим образом указывать, к какому типу спряжения относится глагол:
                    волети, -им (это значит, у глагола в 1-м лице ед. ч. настоящего времени будет окончание -им, то есть он
                    относится к и спряжению).
                </p>
            </GrammarBlock>
            <ExerciseBlock title="Упражнение 1. Подберите русский перевод для каждого сербского глагола. В упражнении эквиваленты перепутаны.">
                <MatchExercise data={MatchExerciseData.exercise03a_1} />
            </ExerciseBlock>
            <ExerciseBlock title="Упражнение 2. Вставьте глагол видети в нужной форме.">
                <div className="space-y-6">
                    <p>1. Ти <InputCheck correct="видиш" mode="inline" /> Србију.</p>
                    <p>2. Ми <InputCheck correct="видимо" mode="inline" /> Москву.</p>
                    <p>3. Огњен <InputCheck correct="види" mode="inline" /> возача.</p>
                    <p>4. Они <InputCheck correct="виде" mode="inline" /> све.</p>
                    <p>5. Ви <InputCheck correct="видите" mode="inline" /> Београд.</p>
                    <p>6. Ја <InputCheck correct="видим" mode="inline" /> професора.</p>
                    <p>7. Професор <InputCheck correct="види" mode="inline" /> студента.</p>
                    <p>8. Студенти <InputCheck correct="виде" mode="inline" /> универзитет.</p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 3. Вставьте глагол живети в нужной форме с отрицанием или без, в зависимости от смысла.">
                <div className="space-y-6">
                    <p>1. Ми <InputCheck correct="не живимо" mode="inline" /> у Лондону, ми смо Американци.</p>
                    <p>2. Ви <InputCheck correct="не живите" mode="inline" /> у Паризу, ви сте Бразилци.</p>
                    <p>3. Ветеринари <InputCheck correct="живе" mode="inline" /> на селу.</p>
                    <p>4. Овај конобар <InputCheck correct="живи" mode="inline" /> у Београду.</p>
                    <p>5. Ја <InputCheck correct="живим" mode="inline" /> у граду.</p>
                    <p>6. Ти <InputCheck correct="не живиш" mode="inline" /> у Француској.</p>
                    <p>7. Мој адвокат <InputCheck correct="не живи" mode="inline" /> у Русији.</p>
                    <p>8. Тај грађевинар <InputCheck correct="живи" mode="inline" /> у Италији.</p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 4. Вставьте глагол радити в нужной форме. Обратите внимание на конструкцию радити као «работать кем-то».">
                <div className="space-y-6">
                    <p>1. Да ли ви <InputCheck correct="радите" mode="inline" /> као аутомеханичари?</p>
                    <p>2. Да ли оне <InputCheck correct="раде" mode="inline" /> као рачуновође?</p>
                    <p>3. Да ли ми <InputCheck correct="радимо" mode="inline" /> као полицајци?</p>
                    <p>4. Да ли Марко <InputCheck correct="ради" mode="inline" /> као адвокат?</p>
                    <p>5. Да ли ја <InputCheck correct="радим" mode="inline" /> као водоинсталатер?</p>
                    <p>6. Да ли ти <InputCheck correct="радиш" mode="inline" /> као конобар?</p>
                    <p>7. Да ли ви <InputCheck correct="радите" mode="inline" /> као електричари?</p>
                    <p>8. Да ли ја <InputCheck correct="радим" mode="inline" /> као службеник?</p>
                    <p>9. Да ли ти <InputCheck correct="радиш" mode="inline" /> као ветеринар?</p>
                    <p>10. Да ли Урош и Милица <InputCheck correct="раде" mode="inline" /> као возачи?</p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 5. Выберите подходящий по смыслу глагол из текста. Поставьте его в нужную форму настоящего времени, следите за лицом и числом.">
                <div className="space-y-6">
                    <p>1. Ја сам из Русије, али <InputCheck correct="живим" mode="inline" /> у Србији.</p>
                    <p>2. Павле добро <InputCheck correct="говори" mode="inline" /> српски.</p>
                    <p>3. Овај лекар <InputCheck correct="личи" mode="inline" /> на мог брата.</p>
                    <p>4. Да ли ви <InputCheck correct="живите" mode="inline" /> у Србији?</p>
                    <p>5. Да ли ти <InputCheck correct="волиш" mode="inline" /> посао?</p>
                    <p>6. Jа <InputCheck correct="волим" mode="inline" /> своју земљу.</p>
                    <p>7. Да ли <InputCheck correct="видиш" mode="inline" /> тог човека? То је наш шеф.</p>
                    <p>8. Они <InputCheck correct="раде" mode="inline" /> као фризери.</p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 6. Поставьте глагол в нужную форму.">
                <div className="space-y-6">
                    <p>1. Ти <InputCheck correct="живиш" mode="inline" /> у Русији, а ја <InputCheck correct="живим" mode="inline" /> у Србији (живети).</p>
                    <p>2. Конобар <InputCheck correct="ради" mode="inline" /> у ресторану (радити).</p>
                    <p>3. Ви <InputCheck correct="волите" mode="inline" /> радити (волети).</p>
                    <p>4. Ми добро <InputCheck correct="говоримо" mode="inline" /> српски (говорити).</p>
                    <p>5. Они <InputCheck correct="желе" mode="inline" /> радити као програмери (желети).</p>
                    <p>6. Ти <InputCheck correct="личиш" mode="inline" /> на професора (личити).</p>
                    <p>7. Ја <InputCheck correct="тражим" mode="inline" /> посао (тражити).</p>
                    <p>8. Милош <InputCheck correct="ради" mode="inline" /> као рачуновођа (радити).</p>
                    <p>9. Ти <InputCheck correct="живиш" mode="inline" /> у Москви, ти си Рус! (живети).</p>
                    <p>10. Ја <InputCheck correct="желим" mode="inline" /> одлично говорити српски (желети).</p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 7. Выполните задания каждого пункта.">
                <div>
                    <p className="font-semibold">а) Поставьте глагол в нужную форму.</p>
                    <div className="space-y-3 mt-2">
                        <p className="leading-12">
                            Ми <InputCheck correct="смо" mode="inline" /> студенти (бити). Сада <InputCheck correct="живимо" mode="inline" /> (живети)
                            у Београду. Ја <InputCheck correct="говорим" mode="inline" /> (говорити) три језика. Мајкл <InputCheck correct="је" mode="inline" />
                            из Америке (бити), али <InputCheck correct="говори" mode="inline" /> (говорити) руски. Павле и
                            Марија <InputCheck correct="живе" mode="inline" /> (живети) у Србији. Ми <InputCheck correct="учимо" mode="inline" /> (учити) италијански.
                        </p>
                    </div>

                    <p className="font-semibold mt-6">б) Задайте вопрос с глаголом говорити и напишите ответ по образцу, опираясь на текст в пункте а).</p>
                    <em className="py-2 block">Образец: Говорите ли Ви српски? Да, ја говорим српски.</em>
                    <div className="space-y-6 mt-2">
                        <p>1. <InputCheck correct="Говориш" mode="inline" /> ли ти шпански? Не, <InputCheck correct="не говорим" mode="inline" /></p>
                        <p>2. <InputCheck correct="Говори" mode="inline" /> ли Мајкл руски? Да, <InputCheck correct="говори" mode="inline" /></p>
                        <p>3. <InputCheck correct="Говоре" mode="inline" /> ли Павле и Марија енглески? Не, <InputCheck correct="не говоре" mode="inline" /></p>
                        <p>4. <InputCheck correct="Говоримо" mode="inline" /> ли ми италијански? Да, <InputCheck correct="говоримо" mode="inline" /></p>
                        <p>5. <InputCheck correct="Говориш" mode="inline" /> ли ти немачки? Не, ја <InputCheck correct="не говорим" mode="inline" /></p>
                    </div>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 8. Вставьте пропущенные окончания.">
                <div className="space-y-6">
                    <p>— Добар дан! Шта ви жел<InputCheck correct="ите" mode="inline" />?</p>
                    <p>— Добар дан! Жел<InputCheck correct="им" mode="inline" /> радити у вашој фирми.</p>
                    <p>— Добро. Говор<InputCheck correct="ите" mode="inline" /> ли енглески?</p>
                    <p>— Да, ја говор<InputCheck correct="им" mode="inline" /> енглески и још француски.</p>
                    <p>— Одлично. Да ли вол<InputCheck correct="ите" mode="inline" /> радити?</p>
                    <p>— Ја веома вол<InputCheck correct="им" mode="inline" /> радити.</p>
                    <p>— Одлично, одговарате нам.</p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 9. Расставьте слова в предложении в правильном порядке.">
                <div className="space-y-6">
                    <p>1. српски мало говоримо.</p>
                    <InputCheck correct="Мало говоримо српски." mode="inline" />

                    <p>2. радити волиш као да возач ли?</p>
                    <InputCheck correct="Да ли волиш радити као возач?" mode="inline" />

                    <p>3. адвоката за мојег аутомеханичара тражим.</p>
                    <InputCheck correct="Тражим аутомеханичара за мојег адвоката." mode="inline" />

                    <p>4. да ли Милош у Москви живи?</p>
                    <InputCheck correct="Да ли Милош живи у Москви?" mode="inline" />

                    <p>5. желиш лекар као ли радити да?</p>
                    <InputCheck correct="Да ли желиш радити као лекар?" mode="inline" />
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 10. Ответьте на вопросы.">
                <AudioPlayer src={`${import.meta.env.BASE_URL}/assets/audio/018.-Urok-03_Uprazhnenie_10.mp3`} index={1} onPlay={handleAudioPlay} />
                <div className="space-y-4">
                    <FreeInput placeholder="1. Како се зовете?" />
                    <FreeInput placeholder="2. Како је ваше презиме?" />
                    <FreeInput placeholder="3. Одакле долазите?" />
                    <FreeInput placeholder="4. Где живите? У којем граду? У којој земљи?" />
                    <FreeInput placeholder="5. Који језик говорите?" />
                    <FreeInput placeholder="6. Шта сте по професији?" />
                    <FreeInput placeholder="7. Чиме се бавите?" />
                    <FreeInput placeholder="8. Да ли радите?" />
                    <FreeInput placeholder="9. Где радите?" />
                    <FreeInput placeholder="10. Да ли волите свој посао?" />
                    <FreeInput placeholder="11. Да ли учите неки страни језик?" />
                    <FreeInput placeholder="12. Да волите учити стране језике?" />
                    <FreeInput placeholder="13. Да ли говорите српски?" />
                    <FreeInput placeholder="14. Да ли волите Србију?" />
                    <FreeInput placeholder="15. Које још земље волите?" />
                    <FreeInput placeholder="16. Да ли одавно учите српски?" />
                    <FreeInput placeholder="17. Чиме се бавите у слободно време? Спортом? Музиком?
Сликањем?" />
                    <FreeInput placeholder="18. Шта волите? Спорт? Музику? Сликарство?" />
                    <FreeInput placeholder="19. Желите ли посетити Србију?" />
                </div>
            </ExerciseBlock>
            <ExerciseBlock title="Упражнение 11. Напишите рассказ о себе по образцу. Если захотите
расширить рассказ, в качестве подсказки используйте
вопросы из предыдущего упражнения.">
                <TextBlock><p>Ја сам Милан. Ја сам Србин, али живим у Француској.
                    Волим Француску. Радим као ветеринар. Говорим три језика:
                    српски, француски и енглески, а још учим немачки. Волим
                    животиње. Сада тражим посао. У слободно време се бавим
                    спортом.</p></TextBlock>
                <FreeInput placeholder="Напишите рассказ о себе " />
            </ExerciseBlock>
            <ExerciseBlock title="Упражнение 12. Задайте вопросы другу, коллеге, вашему преподавателю
наподобие тех, на которые вы сами отвечали в
упражнении 10.">
                <FreeInput placeholder="Задайте вопросы" />
            </ExerciseBlock>
            <NextLessonButton nextId="lesson03b" />
        </div>)
}

export default Lesson03a;