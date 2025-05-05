import AudioPlayer from "../../components/AudioPlayer";
import ArrowBack from "../../components/ArrowBack";
import Glossary from "../../components/Glossary";
import { glossaryData } from "../../assets/data/GlossaryData";
import React from "react";
import { useState, useCallback } from "react";
import NextLessonButton from "../../components/NextLessonButton";
import GrammarBlock from "../../components/GrammarBlock";
import ExerciseBlock from "../../components/ExerciseBlock";
import FreeInput from "../../components/FreeInput";
import InputCheck from "../../components/InputCheck";
import ImportantBlock from "../../components/ImportantBlock";
import { rememberData } from "../../assets/data/rememberData";
import RememberBlock from "../../components/RememberBlock";
import TextBlock from "../../components/TextBlock";

function Lesson02g() {
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
            <h3 className="font-semibold text-lg">2г. Шта је то?</h3>

            <p>Павел продолжал размышлять.</p>
            <AudioPlayer src={`${import.meta.env.BASE_URL}/assets/audio/009.-Urok-02_2g.mp3`} index={0} onPlay={handleAudioPlay} />
            <TextBlock>
                Шта је то? Зашто сам интересантан и сумњив пасошкој контроли? Који је разлог? Каква је то контрола? Зар сам ја позната личност?
            </TextBlock>

            <Glossary
                phrases={glossaryData.find((g) => g.id === 4)?.phrases || []}
            />

            <GrammarBlock>
                <h3 className="font-semibold text-xl text-center">Вопросы с вопросительными словами</h3>
                <p>
                    Чтобы спросить, «кто это?», «что это?», «где это?» и т. д., <em>да ли</em> использовать не нужно. В начало предложения ставим вопросительное слово.
                </p>

            </GrammarBlock>
            <RememberBlock
                title={rememberData[2].lessonTitle}
                phrases={rememberData[2].phrases}
            />
            <ImportantBlock><p>С помощью слова <strong>какав?</strong> мы спрашиваем о том,
                каков предмет по качеству, а с помощью слова <strong>који?</strong> — какой
                по порядку, какой из имеющихся в наличии и т. д. Вопрос
                <strong>Какав је данас дан?</strong> «Какой сегодня день?» требует ответа:
                <strong>леп, топао, хладан</strong> (хороший, теплый, холодный) и т. д. Вопрос <strong>Који је данас дан?</strong> «Какой сегодня день?» требует ответа: <strong>среда, субота, недеља</strong> и т. д.</p></ImportantBlock>

            <ExerciseBlock title="Упражнение 1. Ответьте на вопросы.">
                <AudioPlayer src={`${import.meta.env.BASE_URL}assets/audio/010.-Urok-02_2g_Uprazhnenie_1.mp3`} index={1} onPlay={handleAudioPlay} />
                <div className="space-y-6">
                    <p className="mb-2">1. Ко је интересантан службенику на пасошкој контроли?</p>
                    <InputCheck correct="Павле је интересантан службенику на пасошкој контроли." />

                    <p className="mb-2">2. Шта је Павле по националности/по струци?</p>
                    <InputCheck correct="Павле је Рус, Павле је програмер." />

                    <p className="mb-2">3. Одакле је Павле?</p>
                    <InputCheck correct="Павле је из Русије." />

                    <p className="mb-2">4. Где је Павле?</p>
                    <InputCheck correct="Павле је у Београду." />

                    <p className="mb-2">5. Како је Павле?</p>
                    <InputCheck correct="Павле је добро." />

                    <p className="mb-2">6. Какав је град Београд?</p>
                    <InputCheck correct="Београд је велик и леп град." />

                    <p className="mb-2">7. Каква је Србија?</p>
                    <InputCheck correct="Србија није велика, али је лепа." />

                    <p className="mb-2">8. Каква је Москва?</p>
                    <InputCheck correct="Москва је велика и лепа." />

                    <p className="mb-2">9. Каква је Русија?</p>
                    <InputCheck correct="Русија је велика земља." />

                    <p className="mb-2">10. Зар је Павле Србин?</p>
                    <InputCheck correct="Није." />
                </div>
            </ExerciseBlock>
            <GrammarBlock>
                <h3 className="font-semibold text-xl text-center">Окончания существительных и прилагательных</h3>
                <p>
                    В сербском языке три рода, так же, как в русском. Существительные мужского рода в им. п. ед. ч. обычно имеют нулевое окончание: <strong>човек</strong>, <strong>Рус</strong>, <strong>лекар</strong>. Как и в русском языке, иногда у слов мужского рода бывает окончание -а: <strong>Никола</strong>.
                </p>
                <p>
                    Существительные женского рода в им. п. ед. ч. обычно заканчиваются на -а: <strong>кућа</strong> «дом», <strong>професорка</strong>, <strong>Русија</strong>. Как и в русском языке, иногда у слов женского рода бывает нулевое окончание: <strong>ноћ</strong>, <strong>радост</strong>, <strong>ствар</strong> «вещь».
                </p>
                <p>
                    Существительные среднего рода в им. п. ед. ч. обычно заканчиваются на -о или -е: <strong>море</strong>, <strong>језеро</strong> «озеро», <strong>дете</strong> «ребенок».
                </p>
                <p>
                    Чтобы сказать «мы — программисты», «они — студентки», нам нужно добавить окончания к словам <strong>програмер</strong> и <strong>студенткиња</strong>. Вспоминаем местоимения <strong>они</strong>, <strong>оне</strong>, <strong>она</strong>. Эти же окончания добавляем к существительным, таким образом получается:
                </p>
                <p>
                    <strong>програмер — програмери</strong> «программист» — «программисты»,<br />
                    <strong>студенткиња — студенткиње</strong> «студентка» — «студентки»,<br />
                    <strong>море — мора</strong> «море» — «моря».
                </p>
                <p>
                    Предложения с местоимениями выглядят так:<br />
                    <strong>Ми смо програмери</strong>. <strong>Ви сте програмери</strong>. <strong>Они су програмери</strong>.<br />
                    <strong>Ми смо студенткиње</strong>. <strong>Ви сте студенткиње</strong>. <strong>Оне су студенткиње</strong>.
                </p>
                <p>
                    Если слово мужского рода односложное, то к нему, как правило, во мн. ч. добавляется -ови: <strong>син — синови</strong>, <strong>град — градови</strong>.
                </p>
                <p className="pt-4">
                    <strong>Окончания прилагательных</strong>
                </p>
                <table className="w-full text-sm  overflow-hidden rounded-xl border-2 border-solid bg-[var(--field-light)] dark:bg-[var(--field-dark)]">
                    <thead className="text-xs sm:text-sm border-2 border-solid border-[var(--field-dark)]">
                        <tr>
                            <th className="px-2 py-1 sm:px-4 sm:py-2 text-center">Единственное число</th>
                            <th className="px-2 py-1 sm:px-4 sm:py-2 text-center">Множественное число</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="even:bg-[var(--field-light-hover)] dark:even:bg-[var(--field-dark-hover)]">
                            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">м. р. <strong>леп/лепи аутомобил</strong></td>
                            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">лепи аутомобили</td>
                        </tr>
                        <tr className="even:bg-[var(--field-light-hover)] dark:even:bg-[var(--field-dark-hover)]">
                            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">ж. р. <strong>лепа земља</strong></td>
                            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">лепе земље</td>
                        </tr>
                        <tr className="even:bg-[var(--field-light-hover)] dark:even:bg-[var(--field-dark-hover)]">
                            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">ср. р. <strong>лепо село, летње јутро</strong></td>
                            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">лепа села</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    В мужском роде в им. п. ед. ч. у прилагательных различаются полные и краткие формы. В краткой форме окончание нулевое (<strong>леп</strong>) и иногда появляется беглое «а» (<strong>добар</strong>), а в полной форме окончание -и и никогда нет беглого «а»: <strong>лепи</strong>, <strong>добри</strong>. Краткую форму обязательно использовать в сказуемом: <strong>аутомобил је леп (добар)</strong>. В остальных случаях можно использовать любую форму.
                </p>
            </GrammarBlock>
            <ImportantBlock><p>В сербском языке <strong>л</strong> в конце слова, а иногда и в
                конце слога перешло в <strong>о</strong>, поэтому сербы Белград называют
                <strong> Београд</strong>. Таким образом, прилагательные в мужском роде в
                краткой форме, у которой нулевое окончание, могут оканчиваться на -о (<strong>бео</strong> «белый», <strong>топао </strong>«теплый»), но во всех
                других формах перед окончанием вместо о будет звучать <strong>л</strong>:
                <strong> бели, бела, бело; топли, топла, топло</strong>.</p>
            </ImportantBlock>

            <ExerciseBlock title="Упражнение 2. Вставьте прилагательное в нужной форме.">
                <div className="space-y-6 leading-12">
                    <p>1. Аутомобил је <InputCheck correct="нов" mode="inline" /> (<em>нов</em>). Аутомобили су <InputCheck correct="нови" mode="inline" /> (<em>нови</em>).</p>
                    <p>2. Телефон је <InputCheck correct="леп" mode="inline" /> (<em>леп</em>). Телефони су <InputCheck correct="лепи" mode="inline" /> (<em>лепи</em>).</p>
                    <p>3. Улица је <InputCheck correct="широка" mode="inline" /> (<em>широка</em>). Улице су <InputCheck correct="широке" mode="inline" /> (<em>широке</em>).</p>
                    <p>4. Кућа је <InputCheck correct="стара" mode="inline" /> (<em>стара</em>). Куће су <InputCheck correct="старе" mode="inline" /> (<em>старе</em>).</p>
                    <p>5. Село није <InputCheck correct="велико" mode="inline" /> (<em>велико</em>). Села нису <InputCheck correct="велика" mode="inline" /> (<em>велика</em>).</p>
                    <p>6. Поље је <InputCheck correct="зелено" mode="inline" /> (<em>зелено</em>). Поља су <InputCheck correct="зелена" mode="inline" /> (<em>зелена</em>).</p>
                    <p>7. Књига је <InputCheck correct="нова" mode="inline" /> (<em>нова</em>). Књиге су <InputCheck correct="нове" mode="inline" /> (<em>нове</em>).</p>
                    <p>8. Земља је <InputCheck correct="лепа" mode="inline" /> (<em>лепа</em>). Земље су <InputCheck correct="лепе" mode="inline" /> (<em>лепе</em>).</p>
                    <p>9. Човек је <InputCheck correct="млад" mode="inline" /> (<em>млад</em>). Људи су <InputCheck correct="млади" mode="inline" /> (<em>млади</em>).</p>
                    <p>10. Компјутер је <InputCheck correct="нов" mode="inline" /> (<em>нов</em>). Компјутери су <InputCheck correct="нови" mode="inline" /> (<em>нови</em>).</p>
                    <p>11. Језеро је <InputCheck correct="мало" mode="inline" /> (<em>мало</em>). Језера су <InputCheck correct="мала" mode="inline" /> (<em>мала</em>).</p>
                    <p>12. Море је <InputCheck correct="чисто" mode="inline" /> (<em>чисто</em>). Мора су <InputCheck correct="чиста" mode="inline" /> (<em>чиста</em>).</p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 3. Вставьте прилагательное в нужной форме. Обратите внимание на беглое «а».">
                <div className="space-y-6">
                    <p>1. Дан је <InputCheck correct="хладан" mode="inline" /> (<em>хладан</em>).</p>
                    <p>2. Да ли је ово место <InputCheck correct="слободно" mode="inline" /> (<em>слободно</em>)?</p>
                    <p>3. Пацијент је <InputCheck correct="храбар" mode="inline" /> (<em>храбар</em>).</p>
                    <p>4. Она је <InputCheck correct="добра" mode="inline" /> (<em>добра</em>) лекарка.</p>
                    <p>5. Писмо је <InputCheck correct="кратко" mode="inline" /> (<em>кратко</em>).</p>
                    <p>6. Супа је <InputCheck correct="одлична" mode="inline" /> (<em>одлична</em>).</p>
                    <p>7. Сир <InputCheck correct="добар" mode="inline" /> (<em>добар</em>).</p>
                    <p>8. Чоколада је <InputCheck correct="добра" mode="inline" /> (<em>добра</em>).</p>
                    <p>9. Преговори су <InputCheck correct="успешни" mode="inline" /> (<em>успешни</em>).</p>
                    <p>10. Девојке су <InputCheck correct="симпатичне" mode="inline" /> (<em>симпатичне</em>).</p>
                    <p>11. Славко и Милица су <InputCheck correct="гладни" mode="inline" /> (<em>гладни</em>).</p>
                    <p>12. Панталоне су <InputCheck correct="кратке" mode="inline" /> (<em>кратке</em>).</p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 4. Вставьте прилагательное с чередованием л > о.">
                <div className="space-y-6 leading-12">
                    <p>1. Милан је <InputCheck correct="весео" mode="inline" /> (<em>весео</em>). Драгана је <InputCheck correct="весела" mode="inline" /> (<em>весела</em>).</p>
                    <p>2. Крушка није <InputCheck correct="зрела" mode="inline" /> (<em>зрела</em>). Оне су <InputCheck correct="зреле" mode="inline" /> (<em>зреле</em>).</p>
                    <p>3. Војник је <InputCheck correct="смео" mode="inline" /> (<em>смео</em>). Дете је <InputCheck correct="смело" mode="inline" /> (<em>смело</em>).</p>
                    <p>4. Јабука је <InputCheck correct="кисела" mode="inline" /> (<em>кисела</em>). Јабуке су <InputCheck correct="киселе" mode="inline" /> (<em>киселе</em>).</p>
                    <p>5. Пас је <InputCheck correct="дебео" mode="inline" /> (<em>дебео</em>). Мачка је <InputCheck correct="дебела" mode="inline" /> (<em>дебела</em>).</p>
                </div>
            </ExerciseBlock>
            <ExerciseBlock title="Упражнение 5. Вставьте прилагательное с чередованием л > о и с беглым «а».">
                <div className="space-y-6 leading-12">
                    <p>1. Стан je <InputCheck correct="топао" mode="inline" /> (<em>топао</em>). Кућа је <InputCheck correct="топла" mode="inline" /> (<em>топла</em>).</p>
                    <p>2. Човек није <InputCheck correct="зао" mode="inline" /> (<em>зао</em>). Људи нису <InputCheck correct="зли" mode="inline" /> (<em>зли</em>).</p>
                    <p>3. Језеро је <InputCheck correct="округло" mode="inline" /> (<em>округло</em>). Земља је <InputCheck correct="округла" mode="inline" /> (<em>округла</em>).</p>
                </div>
            </ExerciseBlock>
            <GrammarBlock>
                <h3 className="font-semibold text-xl text-center">Указательные местоимения</h3>
                <p>
                    <strong>«Это»</strong> по-сербски будет <strong>ово</strong> или <strong>то</strong>: <strong>ово је Марко</strong>, <strong>то је Марко</strong> — «это Марко».
                    <strong>Ово</strong> используется при указании на близкие предметы. <strong>То</strong> — для близких и несколько удаленных предметов.
                    Если предмет, на который указывает говорящий, находится далеко, то про него говорят <strong>оно</strong> — «вон то».
                    <strong> Оно је наш авион</strong> — «Вон то — наш самолет».
                </p>
            </GrammarBlock>

            <ExerciseBlock title="Упражнение 6. Преобразуйте предложения, чтобы подлежащее и сказуемое были во множественном числе. Обращайте внимание на род существительных.">
                <div className="space-y-6">
                    <p>1. Ово је наша кућа. <br />
                        <InputCheck correct="Ово су наше куће." /></p>
                    <p>2. То је језеро. <br />
                        <InputCheck correct="То су језера." /></p>
                    <p>3. Ово је писмо. <br />
                        <InputCheck correct="Ово су писма." /></p>
                    <p>4. Мој пријатељ је Кинез. <br />
                        <InputCheck correct="Моји пријатељи су Кинези." /></p>
                    <p>5. Ово је моја сестра. <br />
                        <InputCheck correct="Ово су моје сестре." /></p>
                    <p>6. Оно је поље. <br />
                        <InputCheck correct="Оно су поља." /></p>
                    <p>7. То је компјутер. <br />
                        <InputCheck correct="То су компјутери." /></p>
                    <p>8. Ово је књига. <br />
                        <InputCheck correct="Ово су књиге." /></p>
                    <p>9. Ово је учитељ. <br />
                        <InputCheck correct="Ово су учитељи." /></p>
                    <p>10. Ово је лампа. <br />
                        <InputCheck correct="Ово су лампе." /></p>
                </div>
            </ExerciseBlock>

            <ExerciseBlock title="Упражнение 7. Преобразуйте предложения, чтобы подлежащее и сказуемое были во множественном числе. Обращайте внимание на род существительных.">
                <div className="space-y-6">
                    <p>1. Ово је лекар. <br />
                        <InputCheck correct="Ово су лекари." /></p>
                    <p>2. Ово је продавница. <br />
                        <InputCheck correct="Ово су продавнице." /></p>
                    <p>3. Ово је мој син. <br />
                        <InputCheck correct="Ово су моји синови." /></p>
                    <p>4. Ово је наш директор. <br />
                        <InputCheck correct="Ово су наши директори." /></p>
                    <p>5. То је вино. <br />
                        <InputCheck correct="То су вина." /></p>
                    <p>6. То је хотел. <br />
                        <InputCheck correct="То су хотели." /></p>
                    <p>7. Оно је језеро. <br />
                        <InputCheck correct="Оно су језера." /></p>
                    <p>8. Оно је река. <br />
                        <InputCheck correct="Оно су реке." /></p>
                    <p>9. Оно је село. <br />
                        <InputCheck correct="Оно су села." /></p>
                </div>
            </ExerciseBlock>
            <RememberBlock
                title={rememberData[3].lessonTitle}
                phrases={rememberData[3].phrases}
            />
            <h2 className="font-semibold text-xl text-center mb-2">Српска култура</h2>
            <p>Прочитайте и переведите текст, используя приложенный
                к тексту словарь.</p>
            <h3 className="font-semibold text-lg text-center mb-2">Упознавање</h3>
            <AudioPlayer src={`${import.meta.env.BASE_URL}assets/audio/011.-Urok-02_Srpska-kultura.-Upoznava_e.mp3`} index={2} onPlay={handleAudioPlay} />
            <TextBlock>
                <p>Када се упознају, Срби се обавезно рукују.
                    Руку прво може пружити мушкарац или жена.
                    Када се представљају, често говоре само име,
                    без конструкције „Ја сам“ или „Ја се зовем“. На
                    пример: „Младен. Драго ми је“. Уобичајено је
                    да саговорнику са којим се упознајемо упутимо
                    и осмех као знак љубазности.</p>
                <p>Персирање (обраћање са „Ви“) карактеристично је за
                    старије људе или саговорнике међу којима постоји разлика
                    у узрасту. Типична питања која се постављају приликом
                    упознавања су: „Одакле си/Одакле сте?“, „Чиме се бавиш/
                    бавите?“. Ова питања вам могу поставити чак и без претходног
                    упознавања, на пример у таксију или у градском превозу. Срби
                    важе за веома гостољубив народ и уколико чују да сте странац,
                    потрудиће се да вам помогну да што боље упознате место у
                    коме се налазите и да се осећате што пријатније. Нарочито
                    гостољубиво се односе према Русима и при сусрету ће вам
                    обавезно рећи да смо братски народ.</p>
                <p>На растанку, обично се користи фраза: „Драго ми је што
                    смо се упознали“.</p>
            </TextBlock>

            <Glossary
                phrases={glossaryData.find((g) => g.id === 5)?.phrases || []}
            />
            <h3 className="font-semibold text-lg text-center mb-2">Како се Срби упознају</h3>
            <AudioPlayer src={`${import.meta.env.BASE_URL}assets/audio/012.-Urok-02_Kako-se-Srbi-upoznaju.mp3`} index={3} onPlay={handleAudioPlay} />
            <TextBlock>
                <p>— Зоран. Драго ми је.</p>
                <p>— Младен. Такође. Ово је је мој колега Дејан.</p>
                <p>— Одакле си?</p>
                <p>— Из Бање Луке.</p>
                <p>— А ти?</p>
                <p>— Из Ниша.</p>
                <p>— Чиме се бавиш?</p>
                <p>— Ја сам возач.</p>
                <p>— А ти?</p>
                <p>— Конобар.</p>
                <p>— Лепо.</p>
                <p>— Драго ми је што смо се упознали.</p>
            </TextBlock>


            <NextLessonButton nextId="lesson03a" />


        </div>
    );
}

export default Lesson02g;
