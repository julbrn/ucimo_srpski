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

function Lesson02a() {
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
      <h2 className="text-3xl font-bold  text-center">
        УРОК 2. Упознавање (знакомство)
      </h2>

      <TextBlock>
        <h3 className="text-2xl font-bold ">
          2а. На пасошкој контроли на београдском аеродрому
        </h3>
        <p >
          Наш герой — программист Павел, который приехал в Сербию в командировку.
          Приключения начались, как только он вышел из самолета и встал в очередь
          на паспортный контроль, где его неожиданно стали подробно расспрашивать.
        </p>

        <AudioPlayer src={`${import.meta.env.BASE_URL}assets/audio/005.-Urok-02_2a.mp3`} index={0} onPlay={handleAudioPlay} />
        <p className="leading-8 pt-4">
          — Добар дан. Пасош, молим вас.
          <br />— Добар дан, изволите.
          <br />— Како се зовете?
          <br />— Ја сам Павле Ровински.
          <br />— Одакле сте Ви?
          <br />— Ја сам из Русије.
          <br />— Шта сте Ви?
          <br />— Ја сам Рус.
          <br />— Шта сте по професији?
          <br />— Ја сам програмер.
        </p>
      </TextBlock>
      <Glossary
        phrases={glossaryData.find((g) => g.id === 1)?.phrases || []}
      />
      <GrammarBlock>
        <h3 className="font-semibold text-lg">
          Личные местоимения и глагол <em>бити</em> (краткие формы)
        </h3>

        <p >
          Чтобы построить самое простое сербское предложение, в том числе
          представиться и сказать о себе или о ком-то другом пару слов, нужно
          использовать глагол <em>бити</em> «быть» и личные местоимения. Личные
          местоимения почти совпадают с русскими. Только не забудьте перенести
          ударение в словах <em>она, оно, они, оне, она</em> на первый слог, не
          смягчать согласные перед и, но и не произносить после них «ы».
        </p>

        <table className="w-full text-sm  overflow-hidden rounded-xl border-2 border-solid bg-[var(--field-light)] dark:bg-[var(--field-dark)]">
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
                <em>ја</em> <strong>сам</strong> «я есть»
              </td>
              <td className="px-2 py-1 sm:px-4 sm:py-2">
                <em>ми</em> <strong>смо</strong> «мы есть»
              </td>
            </tr>
            <tr className="even:bg-[var(--field-light-hover)] dark:even:bg-[var(--field-dark-hover)]">
              <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">2</td>
              <td className="px-2 py-1 sm:px-4 sm:py-2">
                <em>ти</em> <strong>си</strong> «ты есть»
              </td>
              <td className="px-2 py-1 sm:px-4 sm:py-2">
                <em>ви</em> <strong>сте</strong> «вы есть»
              </td>
            </tr>
            <tr className="even:bg-[var(--field-light-hover)] dark:even:bg-[var(--field-dark-hover)]">
              <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">3</td>
              <td className="px-2 py-1 sm:px-4 sm:py-2">
                <em>он, она, оно</em> <strong>је</strong> «он, она, оно есть»
              </td>
              <td className="px-2 py-1 sm:px-4 sm:py-2">
                <em>они, оне, она</em> <strong>су</strong> «они есть»
              </td>
            </tr>
          </tbody>
        </table>


        <h3 className="font-semibold text-lg  ">Глагол бити</h3>
        <p >
          Сербский глагол <strong>бити</strong>, как и в английском, немецком,
          французском и многих других языках, обязательно употребляется как
          глагол-связка в предложениях типа: «Я Павел, я русский, я программист».
        </p>
        <p >
          Чтобы представиться, нужно сказать:{" "}
          <em>Ја сам Павле. Ја сам Марија.</em>
        </p>
        <p >
          Таким же образом мы скажем про свою профессию:{" "}
          <em>Ја сам програмер. Ја сам студент</em> и про национальность:{" "}
          <em>Ја сам Рус. Ја сам Рускиња.</em>
        </p>
        <p >
          И про то, из какой мы страны и из какого города:{" "}
          <em>Ја сам из Русије. Ја сам из Москве. Ја сам из Санкт-Петербурга.</em>
        </p>
        <p >
          Соответственно, «Ты Павел, ты русский, ты программист» по-сербски
          звучит: <em>Ти си Павле, ти си Рус, ти си програмер;</em>
          «Он — Павел, он русский, он программист» —{" "}
          <em>Он је Павле, он је Рус, он је програмер;</em>
          «Она — Мария, она русская, она студентка» —{" "}
          <em>Она је Марија, она је Рускиња, она је студенткиња.</em>
        </p>
        <ImportantBlock>
          <p >
            С краткой формы глагола <strong>бити</strong> предложение начинать
            нельзя — она обязательно должна стоять на втором месте, после первого
            слова или словосочетания.
          </p>
        </ImportantBlock>
        <h3 className="font-semibold text-lg  ">Местоимения</h3>
        <p >
          В русском языке для обозначения мужчин и женщин во множественном числе
          используется единая форма <em>они</em>, а в сербском языке:
          <em>они</em> — это форма мужского рода, <em>оне</em> — женского, а{" "}
          <em>она</em> — среднего. Про мужчин сербы скажут <em>они</em>, про
          женщин — <em>оне</em>, а про моря и поля (<em>мора</em> и <em>поља</em>)
          — <em>она</em>.
        </p>
      </GrammarBlock>
      <RememberBlock
        title={rememberData[1].lessonTitle}
        phrases={rememberData[1].phrases}
      />
      <TextBlock>
        <h3 className="font-semibold text-lg ">Диалог при знакомстве</h3>
        <AudioPlayer src={`${import.meta.env.BASE_URL}assets/audio/006.-Urok-02_2a_Dialog-pri-znakomstve.mp3`} index={1}
          onPlay={handleAudioPlay} />
        <p className="leading-8 pt-4">
          — Како се зовеш? Или Како се зовете?
          <br />— Ја сам Марко. Како се ти зовеш? Или Како се Ви зовете?
          <br />— Ја сам Марија.
          <br />— Драго ми је. Одакле си? Или Одакле сте?
          <br />— Ја сам из Београда.
          <br />— Шта си ти по занимању? Или Шта сте Ви по занимању?
          <br />— Ја сам студент.
        </p>
      </TextBlock>
      <ExerciseBlock title="Упражнение 1. Вставьте пропущенные слова">
        <div className="space-y-6">
          <p >
            — <InputCheck correct="Како се" mode="inline" /> зовете?
          </p>
          <p >
            — Ја <InputCheck correct="сам" mode="inline" /> Павле.
          </p>
          <p >
            — Одакле сте <InputCheck correct="Ви" mode="inline" />?
          </p>
          <p >
            — Ја <InputCheck correct="сам" mode="inline" /> из Русије.
          </p>
          <p >
            — Шта <InputCheck correct="сте" mode="inline" /> Ви?
          </p>
          <p >
            — <InputCheck correct="ја" mode="inline" /> сам Рус.
          </p>
          <p >
            — Шта <InputCheck correct="сте Ви" mode="inline" /> по професији?
          </p>
          <p >
            — Ја сам <InputCheck correct="програмер" mode="inline" />.
          </p>
        </div>
      </ExerciseBlock>
      <ExerciseBlock title="Упражнение 2. Ответьте на вопросы">
        <div className="space-y-4 ">
          <FreeInput placeholder="Како се зовете?" />
          <FreeInput placeholder="Одакле сте Ви?" />
          <FreeInput placeholder="Шта сте Ви по занимању?" />
        </div></ExerciseBlock>
      <ExerciseBlock title="Упражнение 3.  Спросите коллегу или преподавателя, с которым вы общаетесь: как его
          зовут, откуда он и кто он по профессии.">
        <FreeInput placeholder="Напишите об этом человеке." />
      </ExerciseBlock>
      <h2 className="font-semibold text-xl pt-8 text-center">
        Названия стран и национальностей
      </h2>
      <ExerciseBlock title="Упражнение 4. Подберите к названию страны название национальности.
        Обратите внимание, что в упражнении названия перепутаны.">
        <MatchExercise data={MatchExerciseData.exercise02a_4} /></ExerciseBlock>
      <ExerciseBlock title="Упражнение 5. Заполните пропуски">      <p >
        Обращайте внимание на окончания существительных, обозначающих страны.
        В конструкции «из какой-то страны» у названия страны должно быть окончание -е.
        Также обратите внимание на то, что слово, обозначающее национальность, в сербском языке пишется с заглавной буквы!
      </p>
        <em className="py-2 underline block">
          Образец: Ја сам из Русије, ја сам Рус (Рускиња).
        </em>
        <div className="space-y-6">
          <p >
            1. Ја сам из Пољске, ја сам <InputCheck correct="Пољак" mode="inline" />.
          </p>
          <p >
            2. Ја сам из <InputCheck correct="Србије" mode="inline" />, ја сам Српкиња.
          </p>
          <p >
            3. Ја сам из Бугарске, ја сам <InputCheck correct="Бугарин" mode="inline" />.
          </p>
          <p >
            4. Ја сам из <InputCheck correct="Шпаније" mode="inline" />, ја сам Шпањолка.
          </p>
          <p >
            5. Ја сам из Италије, ја сам <InputCheck correct="Италијан" mode="inline" />.
          </p>
          <p >
            6. Ја сам из <InputCheck correct="Кине" mode="inline" />, ја сам Кинез.
          </p>
          <p >
            7. Ја сам из Француске, ја сам <InputCheck correct="Француз" mode="inline" />.
          </p>
          <p >
            8. Ја сам из <InputCheck correct="Енглеске" mode="inline" />, ја сам Енглескиња.
          </p>
          <p >
            9. Ја сам из Америке, ја сам <InputCheck correct="Американац" mode="inline" />.
          </p>
        </div></ExerciseBlock>
      <ExerciseBlock title=" Упражнение 6. Заполните пропуски"> <p >
        Вставьте названия стран и национальностей, как в предыдущем упражнении.
        Обращайте внимание на окончания названий стран.
        Слово ово («это») помогает представить нашего знакомого.
      </p>
        <em className="py-2 underline block">
          Образец: Ово је Марфа, она је из Русије, она је Рускиња.
        </em>

        <div className="space-y-6 ">
          <p >
            1. Ово је Пшемислав, он је из <InputCheck correct="Пољске" mode="inline" />, он је <InputCheck correct="Пољак" mode="inline" />.
          </p>
          <p >
            2. Ово је Мишељ, она је из <InputCheck correct="Француске" mode="inline" />, она је <InputCheck correct="Францускиња" mode="inline" />.
          </p>
          <p >
            3. Ово је Џон, он је из <InputCheck correct="Енглеске" mode="inline" />, он је <InputCheck correct="Енглез" mode="inline" />.
          </p>
          <p >
            4. Ово је Зоран, он је из <InputCheck correct="Србије" mode="inline" />, он је <InputCheck correct="Србин" mode="inline" />.
          </p>
          <p >
            5. Ово је Лучија, она је из <InputCheck correct="Италије" mode="inline" />, она је <InputCheck correct="Италијанка" mode="inline" />.
          </p>
          <p >
            6. Ово је Марта, она је из <InputCheck correct="Бугарске" mode="inline" />, она је <InputCheck correct="Бугарка" mode="inline" />.
          </p>
          <p >
            7. Ово је Фернандо, он је из <InputCheck correct="Шпаније" mode="inline" />, он је <InputCheck correct="Шпанац" mode="inline" />.
          </p>
          <p >
            8. Ово је Боб, он је из <InputCheck correct="Америке" mode="inline" />, он је <InputCheck correct="Американац" mode="inline" />.
          </p>
          <p >
            9. Ово је Јуј, она је из <InputCheck correct="Кине" mode="inline" />, она је <InputCheck correct="Кинескиња" mode="inline" />.
          </p>
        </div></ExerciseBlock>
      <ExerciseBlock title=" Упражнение 7. Подберите к названию страны название столицы.
        Обратите внимание, что в упражнении названия перепутаны.">      <MatchExercise data={MatchExerciseData.exercise02a_7} /></ExerciseBlock>
      <ExerciseBlock title="Упражнение 8. Заполните пропуски">   <p >
        Обращайте внимание на окончания существительных, обозначающих страны.
        Напоминаем, что слова женского рода в конструкции «из какой-то страны / из какого-то города» имеют окончание -е (из Русије).
      </p>
        <em className="py-2  underline block">
          Образец: Ти си из Лондона, ти си из Енглеске.
        </em>

        <div className="space-y-6 ">
          <p >
            1. Ти си из Варшаве, ти си из <InputCheck correct="Пољске" mode="inline" />.
          </p>
          <p >
            2. Ти си из Београда, ти си из <InputCheck correct="Србије" mode="inline" />.
          </p>
          <p >
            3. Ти си из Софије, ти си из <InputCheck correct="Бугарске" mode="inline" />.
          </p>
          <p >
            4. Ти си из Мадрида, ти си из <InputCheck correct="Шпаније" mode="inline" />.
          </p>
          <p >
            5. Ти си из Вашингтона, ти си из <InputCheck correct="Америке" mode="inline" />.
          </p>
          <p >
            6. Ти си из Пекинга, ти си из <InputCheck correct="Кине" mode="inline" />.
          </p>
          <p >
            7. Ти си из Москве, ти си из <InputCheck correct="Русије" mode="inline" />.
          </p>
          <p >
            8. Ти си из Рима, ти си из <InputCheck correct="Италије" mode="inline" />.
          </p>
          <p >
            9. Ти си из Париза, ти си из <InputCheck correct="Француске" mode="inline" />.
          </p>
        </div></ExerciseBlock>
      <h2 className="font-semibold text-xl  text-center">
        Названия профессий
      </h2>
      <ExerciseBlock title="Упражнение 9. Подберите русские эквиваленты к сербским названиям
        профессий. В упражнении эквиваленты перепутаны.">      <p >Обратите внимание, что в сербском языке чаще,
          чем в русском, есть особые названия профессий
          для женщин.</p>
        <MatchExercise data={MatchExerciseData.exercise02a_9} /></ExerciseBlock>
      <ExerciseBlock title=" Упражнение 10. Прочитайте текст">      <p >
        Задайте вопросы типа «Как его (ее) зовут?», «Откуда он (она)?», «Кто он (она) по профессии?», «Кто он (она) по национальности?».
      </p>
        <TextBlock>
          Ово је Светлана, она је из Русије, она је преводилац. Мајкл је из Америке, он је Американац, он је лекар. Марија је из Бугарске, она је фризерка. Луи је из Француске, он је програмер.
        </TextBlock></ExerciseBlock>

      <ExerciseBlock title="  Упражнение 11. Заполните пропуски в диалогах">
        <div className="space-y-6 ">
          <p className="font-semibold">а)</p>
          <p >
            — Шта си по занимању?
          </p>
          <p >
            — Ја сам <InputCheck correct="зубар" mode="inline" />. Лечим зубе. А <InputCheck correct="ти" mode="inline" />?
          </p>
          <p >
            — Ја сам <InputCheck correct="грађевинар" mode="inline" />. Градим зграде.
          </p>

          <p className="font-semibold ">б)</p>
          <p >
            — Добар дан! Ја сам Јулија. <InputCheck correct="професорица" mode="inline" /> француског језика.
          </p>
          <p >
            — Добар дан! А <InputCheck correct="ја" mode="inline" /> сам Петар.
          </p>
        </div>
      </ExerciseBlock>

      <ExerciseBlock title="  Упражнение 12. Составьте диалог по образцу">      <TextBlock>
        — Добар дан! Ја сам Наташа.<br />
        — Добар дан! Драго ми је. Ја сам Петар.<br />
        — Драго ми је. Шта си по занимању?<br />
        — Ја сам лекар. А ти?<br />
        — Ја сам програмер.
      </TextBlock>
        <p >
          Используйте другие имена и названия других профессий.
        </p></ExerciseBlock>

      <ExerciseBlock title="     Упражнение 13. Вспомните, как мы знакомимся">
        <p >
          Заполните пропущенные строки диалога.
        </p>

        <TextBlock>
          <p >— Добар дан!</p>
          <p >— <InputCheck correct="Добар дан" mode="inline" />!</p>
          <p >— <InputCheck correct="Како се зовеш" mode="inline" />?</p>
          <p >— Ја сам Милица. А ти?</p>
          <p >— Ја сам Маја. Ја сам из Ниша. <InputCheck correct="Одакле си ти" mode="inline" />?</p>
          <p >— Ја сам из Суботице.</p>
          <p >— Драго ми је.</p>
          <p >— <InputCheck correct="Драго ми је" mode="inline" />.</p>
        </TextBlock>
      </ExerciseBlock>


      <h2 className="font-semibold text-xl text-center mb-2">
        Упражнения на закрепление пройденного материала
      </h2>
      <p>
        Обратите внимание на глагол <strong>бити</strong>, названия стран и национальностей, названия профессий.
      </p>
      <ExerciseBlock title="Упражнение 14. Вставьте глагол бити в нужной форме">
        <div className="space-y-6 ">
          <p >1. Ти <InputCheck correct="си" mode="inline" /> из Италије. Ти <InputCheck correct="си" mode="inline" /> Италијанка.</p>
          <p >2. Он <InputCheck correct="је" mode="inline" /> из Кине. Он <InputCheck correct="је" mode="inline" /> Кинез.</p>
          <p >3. Она <InputCheck correct="је" mode="inline" /> из Бугарске. Она <InputCheck correct="је" mode="inline" /> Бугарка.</p>
          <p >4. Ми <InputCheck correct="смо" mode="inline" /> из Енглеске. Ми <InputCheck correct="смо" mode="inline" /> Енглези.</p>
          <p >5. Ви <InputCheck correct="сте" mode="inline" /> из Америке. Ви <InputCheck correct="сте" mode="inline" /> Американци.</p>
          <p >6. Стефан и Марија <InputCheck correct="су" mode="inline" /> из Србије. Они <InputCheck correct="су" mode="inline" /> Срби.</p>
          <p >7. Зое и Натали <InputCheck correct="су" mode="inline" /> из Француске. Оне <InputCheck correct="су" mode="inline" /> Францускиње.</p>
          <p >8. Марк <InputCheck correct="је" mode="inline" /> Србин, ја <InputCheck correct="сам" mode="inline" /> Рускиња.</p>
          <p >9. Ти <InputCheck correct="си" mode="inline" /> Шпанац, Милица и Татјана <InputCheck correct="су" mode="inline" /> Српкиње.</p>
        </div>
      </ExerciseBlock>

      <ExerciseBlock title="Упражнение 15. Вставьте глагол бити в нужной форме">
        <p >
          Проверьте себя, запомнили ли вы названия профессий.
        </p>
        <div className="space-y-6 ">
          <p >1. Ја <InputCheck correct="сам" mode="inline" /> лекарка.</p>
          <p >2. Ти <InputCheck correct="си" mode="inline" /> учитељица.</p>
          <p >3. Он <InputCheck correct="је" mode="inline" /> бизнисмен.</p>
          <p >4. Она <InputCheck correct="је" mode="inline" /> програмер.</p>
          <p >5. Ми <InputCheck correct="смо" mode="inline" /> менаџери.</p>
          <p >6. Ви <InputCheck correct="сте" mode="inline" /> чистачи.</p>
          <p >7. Они <InputCheck correct="су" mode="inline" /> зубари.</p>
          <p >8. Оне <InputCheck correct="су" mode="inline" /> фризерке.</p>
          <p >9. Драган <InputCheck correct="је" mode="inline" /> грађевинар, Јелена <InputCheck correct="је" mode="inline" /> правник.</p>
          <p >10. Џон <InputCheck correct="је" mode="inline" /> лекар.</p>
        </div></ExerciseBlock>
      <ExerciseBlock title="Упражнение 16. Вставьте глагол бити и национальность">
        <em className="py-2 underline block">
          Образец: Оне су из Софије, оне су Бугарке.
        </em>
        <div className="space-y-6 ">
          <p >1. Ја <InputCheck correct="сам" mode="inline" /> из Лондона, ја <InputCheck correct="сам Енглез" mode="inline" />.</p>
          <p >2. Мари <InputCheck correct="је" mode="inline" /> из Париза, она <InputCheck correct="је Францускиња" mode="inline" />.</p>
          <p >3. Марко <InputCheck correct="је" mode="inline" /> из Београда, он <InputCheck correct="је Србин" mode="inline" />.</p>
          <p >4. Мајкл <InputCheck correct="је" mode="inline" /> из Вашингтона, он <InputCheck correct="је Американац" mode="inline" />.</p>
          <p >5. Ми <InputCheck correct="смо" mode="inline" /> из Пекинга, ми <InputCheck correct="смо Кинези" mode="inline" />.</p>
          <p >6. Ви <InputCheck correct="сте" mode="inline" /> из Берлина, ви <InputCheck correct="сте Немац" mode="inline" />.</p>
          <p >7. Они <InputCheck correct="су" mode="inline" /> из Мадрида, они <InputCheck correct="су Шпанци" mode="inline" />.</p>
          <p >8. Дмитриј и Јелена <InputCheck correct="су" mode="inline" /> из Москве, они <InputCheck correct="су Руси" mode="inline" />.</p>
        </div>
      </ExerciseBlock>
      <ExerciseBlock title="  Упражнение 17. Заполните пропуски в диалогах глаголом бити">  <p >
        Напишите похожие диалоги, изменив имена, названия стран и городов.
      </p>
        <div className="space-y-6 ">
          <p className="font-semibold">а)</p>
          <p >— Ћао, ја <InputCheck correct="сам" mode="inline" /> Стефан!</p>
          <p >— Ћао, ја <InputCheck correct="сам" mode="inline" /> Мајкл!</p>
          <p >— Одакле <InputCheck correct="си" mode="inline" /> ти?</p>
          <p >— Ја <InputCheck correct="сам" mode="inline" /> из Београда.</p>
          <p >— Значи, ти <InputCheck correct="си" mode="inline" /> Србин! Ја <InputCheck correct="сам" mode="inline" /> из Америке, ја <InputCheck correct="сам" mode="inline" /> Американац.</p>
          <p >— Тако је. Ја сам из Србије. Драго ми је.</p>
          <p >— Драго ми је.</p>

          <p className="font-semibold ">б)</p>
          <p >— Добар дан! Ви <InputCheck correct="сте" mode="inline" /> из Рима?</p>
          <p >— Добар дан! Не, ја <InputCheck correct="сам" mode="inline" /> из Мадрида.</p>
          <p >— Ви <InputCheck correct="сте" mode="inline" /> Италијан?</p>
          <p >— Не, ја <InputCheck correct="сам" mode="inline" /> Шпанац, Мадрид <InputCheck correct="је" mode="inline" /> у Шпанији.</p>
          <p >— Извињавам се, довиђења!</p>

          <p className="font-semibold ">в)</p>
          <p >— Добар дан! Ви <InputCheck correct="сте" mode="inline" /> зубар?</p>
          <p >— Добар дан! Да, ја <InputCheck correct="сам" mode="inline" /> зубар.</p>
          <p >— Ја <InputCheck correct="сам" mode="inline" /> Милош Ивановић.</p>
        </div></ExerciseBlock>

      <ExerciseBlock title=" Упражнение 18. Прочитайте диалог и впишите пропущенные слова">
        <div className="space-y-6">
          <p >— Добар дан! Ја <InputCheck correct="сам" mode="inline" /> Павле.</p>
          <p >— Добар дан! Пасош, <InputCheck correct="молим" mode="inline" /> вас.</p>
          <p >— Изволите.</p>
          <p >— Ви <InputCheck correct="сте" mode="inline" /> Бугарин?</p>
          <p >— Не, ја <InputCheck correct="сам" mode="inline" /> програмер.</p>
          <p >— Добро. Али Ви <InputCheck correct="сте" mode="inline" /> из <InputCheck correct="Бугарске" mode="inline" />?</p>
          <p >— Не, ја <InputCheck correct="сам" mode="inline" /> из Русије.</p>
          <p >— Значи, Ви <InputCheck correct="сте" mode="inline" /> Рус?</p>
          <p >— Да, ја <InputCheck correct="сам" mode="inline" /> Рус, ја <InputCheck correct="сам" mode="inline" /> из Москве.</p>
          <p >— Добро, изволите. Довиђења!</p>
          <p >— <InputCheck correct="Пријатно" mode="inline" />!</p>
        </div>
      </ExerciseBlock>
      <ExerciseBlock title="     Упражнение 19. Заполните пропуски в диалогах глаголом бити в нужной форме">
        <div className="space-y-6 ">
          <p className="font-semibold">а)</p>
          <p >— Здраво! Ви <InputCheck correct="сте" mode="inline" /> програмер?</p>
          <p >— Здраво! Не, ја <InputCheck correct="сам" mode="inline" /> менаџер. Програмер <InputCheck correct="је" mode="inline" /> у следећем кабинету.</p>
          <p >— Хвала пуно! Ја <InputCheck correct="сам" mode="inline" /> Мила, ваш нови правник.</p>
          <p >— Драго ми <InputCheck correct="је" mode="inline" />. Ја <InputCheck correct="сам" mode="inline" /> Стефан.</p>
          <p >— Драго ми <InputCheck correct="је" mode="inline" />. Довиђења!</p>
          <p >— Довиђења!</p>

          <p className="font-semibold ">б)</p>
          <p >— Добар дан!</p>
          <p >— Добар дан!</p>
          <p >— Ја <InputCheck correct="сам" mode="inline" /> ваша нова учитељица Ана.</p>
          <p >— Ја <InputCheck correct="сам" mode="inline" /> Милан.</p>
          <p >— Ја <InputCheck correct="сам" mode="inline" /> Љубица.</p>
          <p >— Драго ми <InputCheck correct="је" mode="inline" />. Ви <InputCheck correct="сте" mode="inline" /> из Београда?</p>
          <p className="leading-6 space-y-6 ">— Да, ми <InputCheck correct="смо" mode="inline" /> из Београда. А наши родитељи <InputCheck correct="су" mode="inline" /> из Русије, они <InputCheck correct="су" mode="inline" /> из Москве.</p>
        </div></ExerciseBlock>
      <ExerciseBlock title=" Упражнение 20. Напишите рассказ о себе">      <p >
        В качестве образца можно использовать следующий текст. Если вы решили писать по-сербски кириллицей, то этот рассказ можно написать латиницей, и наоборот. Пользоваться можно одним алфавитом, а знать нужно оба.
      </p>

        <em className="block ">
          Ја сам Светлана. Ја сам студенткиња. Ја сам филолог. Ја сам из Русије. Ја сам Рускиња. Ја сам из Москве.
        </em>

        <FreeInput placeholder="Напишите рассказ о себе на сербском языке" /></ExerciseBlock>



      <NextLessonButton nextId="lesson02b" />
    </div >
  );
}

export default Lesson02a;
