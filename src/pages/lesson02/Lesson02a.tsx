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

function Lesson02a() {
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
      <h2 className="text-2xl font-bold mb-4">
        УРОК 2. Упознавање (знакомство)
      </h2>

      <h3 className="font-semibold text-lg mt-6 mb-2">
        2а. На пасошкој контроли на београдском аеродрому
      </h3>
      <p className="mb-4">
        Наш герой — программист Павел, который приехал в Сербию в командировку.
        Приключения начались, как только он вышел из самолета и встал в очередь
        на паспортный контроль, где его неожиданно стали подробно расспрашивать.
      </p>

      <AudioPlayer src="/src/assets/audio/005.-Urok-02_2a.mp3" index={0}
        onPlay={handleAudioPlay} />

      <div className="bg-[var(--field-light)] dark:bg-[var(--field-dark)] p-4 rounded-xl shadow mb-6">
        <p>
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
      </div>

      <Glossary
        phrases={glossaryData.find((g) => g.id === 1)?.phrases || []}
      />

      <h3 className="font-semibold text-lg mt-6 mb-2">
        Личные местоимения и глагол <em>бити</em> (краткие формы)
      </h3>

      <p className="mb-4">
        Чтобы построить самое простое сербское предложение, в том числе
        представиться и сказать о себе или о ком-то другом пару слов, нужно
        использовать глагол <em>бити</em> «быть» и личные местоимения. Личные
        местоимения почти совпадают с русскими. Только не забудьте перенести
        ударение в словах <em>она, оно, они, оне, она</em> на первый слог, не
        смягчать согласные перед и, но и не произносить после них «ы».
      </p>

      <table className="w-full max-w-[650px] text-sm mb-6 overflow-hidden rounded-xl border-2 border-solid  bg-[var(--field-light)] dark:bg-[var(--field-dark)]">
        <thead className="border-2 border-solid border-[var(--field-dark)]">
          <tr>
            <th className="px-4 py-2 text-center">Лице</th>
            <th className="px-4 py-2 text-center">Единственное число</th>
            <th className="px-4 py-2 text-center">Множественное число</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-[var(--field-light-hover)] dark:even:bg-[var(--field-dark-hover)]">
            <td className="px-4 py-2 text-center">1</td>
            <td className="px-4 py-2">
              <em>ја</em> <strong>сам</strong> «я есть»
            </td>
            <td className="px-4 py-2 ">
              <em>ми</em> <strong>смо</strong> «мы есть»
            </td>
          </tr>
          <tr className="even:bg-[var(--field-light-hover)] dark:even:bg-[var(--field-dark-hover)]">
            <td className="px-4 py-2 text-center">2</td>
            <td className="px-4 py-2 ">
              <em>ти</em> <strong>си</strong> «ты есть»
            </td>
            <td className="px-4 py-2 ">
              <em>ви</em> <strong>сте</strong> «вы есть»
            </td>
          </tr>
          <tr className="even:bg-[var(--field-light-hover)] dark:even:bg-[var(--field-dark-hover)]">
            <td className="px-4 py-2 text-center">3</td>
            <td className="px-4 py-2">
              <em>он, она, оно</em> <strong>је</strong> «он, она, оно есть»
            </td>
            <td className="px-4 py-2">
              <em>они, оне, она</em> <strong>су</strong> «они есть»
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="font-semibold text-lg mt-6 mb-2">Глагол бити</h3>
      <p className="mb-4">
        Сербский глагол <strong>бити</strong>, как и в английском, немецком,
        французском и многих других языках, обязательно употребляется как
        глагол-связка в предложениях типа: «Я Павел, я русский, я программист».
      </p>
      <p className="mb-4">
        Чтобы представиться, нужно сказать:{" "}
        <em>Ја сам Павле. Ја сам Марија.</em>
      </p>
      <p className="mb-4">
        Таким же образом мы скажем про свою профессию:{" "}
        <em>Ја сам програмер. Ја сам студент</em> и про национальность:{" "}
        <em>Ја сам Рус. Ја сам Рускиња.</em>
      </p>
      <p className="mb-4">
        И про то, из какой мы страны и из какого города:{" "}
        <em>Ја сам из Русије. Ја сам из Москве. Ја сам из Санкт-Петербурга.</em>
      </p>
      <p className="mb-4">
        Соответственно, «Ты Павел, ты русский, ты программист» по-сербски
        звучит: <em>Ти си Павле, ти си Рус, ти си програмер;</em>
        «Он — Павел, он русский, он программист» —{" "}
        <em>Он је Павле, он је Рус, он је програмер;</em>
        «Она — Мария, она русская, она студентка» —{" "}
        <em>Она је Марија, она је Рускиња, она је студенткиња.</em>
      </p>
      <ImportantBlock>
        <p className="mb-4">
          С краткой формы глагола <strong>бити</strong> предложение начинать
          нельзя — она обязательно должна стоять на втором месте, после первого
          слова или словосочетания.
        </p>
      </ImportantBlock>
      <h3 className="font-semibold text-lg mt-6 mb-2">Местоимения</h3>
      <p className="mb-4">
        В русском языке для обозначения мужчин и женщин во множественном числе
        используется единая форма <em>они</em>, а в сербском языке:
        <em>они</em> — это форма мужского рода, <em>оне</em> — женского, а{" "}
        <em>она</em> — среднего. Про мужчин сербы скажут <em>они</em>, про
        женщин — <em>оне</em>, а про моря и поля (<em>мора</em> и <em>поља</em>)
        — <em>она</em>.
      </p>
      <RememberBlock
        title={rememberData[1].lessonTitle}
        phrases={rememberData[1].phrases}
      />
      <h3 className="font-semibold text-lg mt-6 mb-2">Диалог при знакомстве</h3>
      <AudioPlayer src="/src/assets/audio/006.-Urok-02_2a_Dialog-pri-znakomstve.mp3" index={1}
        onPlay={handleAudioPlay} />
      <div className="bg-[var(--field-light)] dark:bg-[var(--field-dark)] p-4 rounded-xl shadow mb-6">
        <p>
          — Како се зовеш? Или Како се зовете?
          <br />— Ја сам Марко. Како се ти зовеш? Или Како се Ви зовете?
          <br />— Ја сам Марија.
          <br />— Драго ми је. Одакле си? Или Одакле сте?
          <br />— Ја сам из Београда.
          <br />— Шта си ти по занимању? Или Шта сте Ви по занимању?
          <br />— Ја сам студент.
        </p>
      </div>
      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 1. Вставьте пропущенные слова
      </h3>
      <div className="space-y-4 mb-6">
        <p className="mb-2">
          — <InputCheck correct="Како" mode="inline" /> зовете?
        </p>
        <p className="mb-2">
          — Ја <InputCheck correct="сам" mode="inline" /> Павле.
        </p>
        <p className="mb-2">
          — Одакле сте <InputCheck correct="Ви" mode="inline" />?
        </p>
        <p className="mb-2">
          — Ја <InputCheck correct="сам" mode="inline" /> из Русије.
        </p>
        <p className="mb-2">
          — Шта <InputCheck correct="сте" mode="inline" /> Ви?
        </p>
        <p className="mb-2">
          — <InputCheck correct="ја" mode="inline" /> сам Рус.
        </p>
        <p className="mb-2">
          — Шта <InputCheck correct="сте" mode="inline" /> по професији?
        </p>
        <p className="mb-2">
          — Ја сам <InputCheck correct="програмер" mode="inline" />.
        </p>
      </div>

      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 2. Ответьте на вопросы
      </h3>
      <div className="space-y-4 mb-6">
        <FreeInput placeholder="Како се зовете?" />
        <FreeInput placeholder="Одакле сте Ви?" />
        <FreeInput placeholder="Шта сте Ви по занимању?" />
      </div>

      <h3 className="font-semibold text-lg mt-6 mb-2">Упражнение 3</h3>
      <p className="mb-4">
        Спросите коллегу или преподавателя, с которым вы общаетесь: как его
        зовут, откуда он и кто он по профессии.
      </p>
      <h3 className="font-semibold text-lg mt-6 mb-2">
        Названия стран и национальностей
      </h3>
      <p className="mb-2">
        Упражнение 4. Подберите к названию страны название национальности.
        Обратите внимание, что в упражнении названия перепутаны.
      </p>
      <MatchExercise data={MatchExerciseData.exercise02a_4} />
      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 5. Заполните пропуски
      </h3>
      <p className="mb-4">
        Обращайте внимание на окончания существительных, обозначающих страны.
        В конструкции «из какой-то страны» у названия страны должно быть окончание -е.
        Также обратите внимание на то, что слово, обозначающее национальность, в сербском языке пишется с заглавной буквы!
      </p>
      <p className="mb-4 font-semibold">
        Образец: Ја сам из Русије, ја сам Рус (Рускиња).
      </p>

      <div className="space-y-4 mb-6">
        <p className="mb-2">
          1. Ја сам из Пољске, ја сам <InputCheck correct="Пољак" mode="inline" />.
        </p>
        <p className="mb-2">
          2. Ја сам из <InputCheck correct="Србије" mode="inline" />, ја сам Српкиња.
        </p>
        <p className="mb-2">
          3. Ја сам из Бугарске, ја сам <InputCheck correct="Бугарин" mode="inline" />.
        </p>
        <p className="mb-2">
          4. Ја сам из <InputCheck correct="Шпаније" mode="inline" />, ја сам Шпањолка.
        </p>
        <p className="mb-2">
          5. Ја сам из Италије, ја сам <InputCheck correct="Италијан" mode="inline" />.
        </p>
        <p className="mb-2">
          6. Ја сам из <InputCheck correct="Кине" mode="inline" />, ја сам Кинез.
        </p>
        <p className="mb-2">
          7. Ја сам из Француске, ја сам <InputCheck correct="Француз" mode="inline" />.
        </p>
        <p className="mb-2">
          8. Ја сам из <InputCheck correct="Енглеске" mode="inline" />, ја сам Енглескиња.
        </p>
        <p className="mb-2">
          9. Ја сам из Америке, ја сам <InputCheck correct="Американац" mode="inline" />.
        </p>
      </div>

      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 6. Заполните пропуски
      </h3>
      <p className="mb-4">
        Вставьте названия стран и национальностей, как в предыдущем упражнении.
        Обращайте внимание на окончания названий стран.
        Слово ово («это») помогает представить нашего знакомого.
      </p>
      <p className="mb-4 font-semibold">
        <em>Образец: Ово је Марфа, она је из Русије, она је Рускиња.</em>
      </p>

      <div className="space-y-4 mb-6">
        <p className="mb-2">
          1. Ово је Пшемислав, он је из <InputCheck correct="Пољске" mode="inline" />, он је <InputCheck correct="Пољак" mode="inline" />.
        </p>
        <p className="mb-2">
          2. Ово је Мишељ, она је из <InputCheck correct="Француске" mode="inline" />, она је <InputCheck correct="Францускиња" mode="inline" />.
        </p>
        <p className="mb-2">
          3. Ово је Џон, он је из <InputCheck correct="Енглеске" mode="inline" />, он је <InputCheck correct="Енглез" mode="inline" />.
        </p>
        <p className="mb-2">
          4. Ово је Зоран, он је из <InputCheck correct="Србије" mode="inline" />, он је <InputCheck correct="Србин" mode="inline" />.
        </p>
        <p className="mb-2">
          5. Ово је Лучија, она је из <InputCheck correct="Италије" mode="inline" />, она је <InputCheck correct="Италијанка" mode="inline" />.
        </p>
        <p className="mb-2">
          6. Ово је Марта, она је из <InputCheck correct="Бугарске" mode="inline" />, она је <InputCheck correct="Бугарка" mode="inline" />.
        </p>
        <p className="mb-2">
          7. Ово је Фернандо, он је из <InputCheck correct="Шпаније" mode="inline" />, он је <InputCheck correct="Шпанац" mode="inline" />.
        </p>
        <p className="mb-2">
          8. Ово је Боб, он је из <InputCheck correct="Америке" mode="inline" />, он је <InputCheck correct="Американац" mode="inline" />.
        </p>
        <p className="mb-2">
          9. Ово је Јуј, она је из <InputCheck correct="Кине" mode="inline" />, она је <InputCheck correct="Кинескиња" mode="inline" />.
        </p>
      </div>
      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 7. Подберите к названию страны название столицы.
        Обратите внимание, что в упражнении названия перепутаны.
      </h3>
      <MatchExercise data={MatchExerciseData.exercise02a_7} />
      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 8. Заполните пропуски
      </h3>
      <p className="mb-4">
        Обращайте внимание на окончания существительных, обозначающих страны.
        Напоминаем, что слова женского рода в конструкции «из какой-то страны / из какого-то города» имеют окончание -е (из Русије).
      </p>
      <p className="mb-4 font-semibold">
        <em>Образец: Ти си из Лондона, ти си из Енглеске.</em>
      </p>

      <div className="space-y-4 mb-6">
        <p className="mb-2">
          1. Ти си из Варшаве, ти си из <InputCheck correct="Пољске" mode="inline" />.
        </p>
        <p className="mb-2">
          2. Ти си из Београда, ти си из <InputCheck correct="Србије" mode="inline" />.
        </p>
        <p className="mb-2">
          3. Ти си из Софије, ти си из <InputCheck correct="Бугарске" mode="inline" />.
        </p>
        <p className="mb-2">
          4. Ти си из Мадрида, ти си из <InputCheck correct="Шпаније" mode="inline" />.
        </p>
        <p className="mb-2">
          5. Ти си из Вашингтона, ти си из <InputCheck correct="Америке" mode="inline" />.
        </p>
        <p className="mb-2">
          6. Ти си из Пекинга, ти си из <InputCheck correct="Кине" mode="inline" />.
        </p>
        <p className="mb-2">
          7. Ти си из Москве, ти си из <InputCheck correct="Русије" mode="inline" />.
        </p>
        <p className="mb-2">
          8. Ти си из Рима, ти си из <InputCheck correct="Италије" mode="inline" />.
        </p>
        <p className="mb-2">
          9. Ти си из Париза, ти си из <InputCheck correct="Француске" mode="inline" />.
        </p>
      </div>
      <h3 className="font-semibold text-lg mt-6 mb-2">
        Названия профессий
      </h3>
      <p className="mb-2">
        Упражнение 9. Подберите русские эквиваленты к сербским названиям
        профессий. В упражнении эквиваленты перепутаны.
      </p>
      <p className="mb-4">Обратите внимание, что в сербском языке чаще,
        чем в русском, есть особые названия профессий
        для женщин.</p>
      <MatchExercise data={MatchExerciseData.exercise02a_9} />
      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 10. Прочитайте текст
      </h3>
      <p className="mb-4">
        Задайте вопросы типа «Как его (ее) зовут?», «Откуда он (она)?», «Кто он (она) по профессии?», «Кто он (она) по национальности?».
      </p>
      <p className="block mb-4">
        Ово је Светлана, она је из Русије, она је преводилац. Мајкл је из Америке, он је Американац, он је лекар. Марија је из Бугарске, она је фризерка. Луи је из Француске, он је програмер.
      </p>

      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 11. Заполните пропуски в диалогах
      </h3>

      <div className="space-y-4 mb-6">
        <p className="font-semibold">а)</p>
        <p className="mb-4">
          — Шта си по занимању?
        </p>
        <p className="mb-2">
          — Ја сам <InputCheck correct="зубар" mode="inline" />. Лечим зубе. А <InputCheck correct="ти" mode="inline" />?
        </p>
        <p className="mb-2">
          — Ја сам <InputCheck correct="грађевинар" mode="inline" />. Градим зграде.
        </p>

        <p className="font-semibold mt-6">б)</p>
        <p className="mb-2">
          — Добар дан! Ја сам Јулија. <InputCheck correct="професорица" mode="inline" /> француског језика.
        </p>
        <p className="mb-2">
          — Добар дан! А <InputCheck correct="ја" mode="inline" /> сам Петар.
        </p>
      </div>

      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 12. Составьте диалог по образцу
      </h3>
      <em className="block mb-4">
        — Добар дан! Ја сам Наташа.<br />
        — Добар дан! Драго ми је. Ја сам Петар.<br />
        — Драго ми је. Шта си по занимању?<br />
        — Ја сам лекар. А ти?<br />
        — Ја сам програмер.
      </em>
      <p className="mb-4">
        Используйте другие имена и названия других профессий.
      </p>
      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 13. Вспомните, как мы знакомимся
      </h3>
      <p className="mb-4">
        Заполните пропущенные строки диалога.
      </p>

      <div className="space-y-2 mb-6">
        <p className="mb-4">— Добар дан!</p>
        <p className="mb-2">— <InputCheck correct="Добар дан" mode="inline" />!</p>
        <p className="mb-2">— <InputCheck correct="Како се зовеш" mode="inline" />?</p>
        <p className="mb-6">— Ја сам Милица. А ти?</p>
        <p className="mb-2">— Ја сам Маја. Ја сам из Ниша. <InputCheck correct="Одакле си ти" mode="inline" />?</p>
        <p className="mb-6">— Ја сам из Суботице.</p>
        <p className="mb-6">— Драго ми је.</p>
        <p className="mb-2">— <InputCheck correct="Драго ми је" mode="inline" />.</p>
      </div>

      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнения на закрепление пройденного материала
      </h3>
      <p className="mb-4">
        Обратите внимание на глагол <strong>бити</strong>, названия стран и национальностей, названия профессий.
      </p>

      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 14. Вставьте глагол <em>бити</em> в нужной форме
      </h3>

      <div className="space-y-2 mb-6">
        <p className="mb-2">1. Ти <InputCheck correct="си" mode="inline" /> из Италије. Ти <InputCheck correct="си" mode="inline" /> Италијанка.</p>
        <p className="mb-2">2. Он <InputCheck correct="је" mode="inline" /> из Кине. Он <InputCheck correct="је" mode="inline" /> Кинез.</p>
        <p className="mb-2">3. Она <InputCheck correct="је" mode="inline" /> из Бугарске. Она <InputCheck correct="је" mode="inline" /> Бугарка.</p>
        <p className="mb-2">4. Ми <InputCheck correct="смо" mode="inline" /> из Енглеске. Ми <InputCheck correct="смо" mode="inline" /> Енглези.</p>
        <p className="mb-2">5. Ви <InputCheck correct="сте" mode="inline" /> из Америке. Ви <InputCheck correct="сте" mode="inline" /> Американци.</p>
        <p className="mb-2">6. Стефан и Марија <InputCheck correct="су" mode="inline" /> из Србије. Они <InputCheck correct="су" mode="inline" /> Срби.</p>
        <p className="mb-2">7. Зое и Натали <InputCheck correct="су" mode="inline" /> из Француске. Оне <InputCheck correct="су" mode="inline" /> Францускиње.</p>
        <p className="mb-2">8. Марк <InputCheck correct="је" mode="inline" /> Србин, ја <InputCheck correct="сам" mode="inline" /> Рускиња.</p>
        <p className="mb-2">9. Ти <InputCheck correct="си" mode="inline" /> Шпанац, Милица и Татјана <InputCheck correct="су" mode="inline" /> Српкиње.</p>
      </div>
      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 15. Вставьте глагол <em>бити</em> в нужной форме
      </h3>
      <p className="mb-4">
        Проверьте себя, запомнили ли вы названия профессий.
      </p>

      <div className="space-y-2 mb-6">
        <p className="mb-2">1. Ја <InputCheck correct="сам" mode="inline" /> лекарка.</p>
        <p className="mb-2">2. Ти <InputCheck correct="си" mode="inline" /> учитељица.</p>
        <p className="mb-2">3. Он <InputCheck correct="је" mode="inline" /> бизнисмен.</p>
        <p className="mb-2">4. Она <InputCheck correct="је" mode="inline" /> програмер.</p>
        <p className="mb-2">5. Ми <InputCheck correct="смо" mode="inline" /> менаџери.</p>
        <p className="mb-2">6. Ви <InputCheck correct="сте" mode="inline" /> чистачи.</p>
        <p className="mb-2">7. Они <InputCheck correct="су" mode="inline" /> зубари.</p>
        <p className="mb-2">8. Оне <InputCheck correct="су" mode="inline" /> фризерке.</p>
        <p className="mb-2">9. Драган <InputCheck correct="је" mode="inline" /> грађевинар, Јелена <InputCheck correct="је" mode="inline" /> правник.</p>
        <p className="mb-2">10. Џон <InputCheck correct="је" mode="inline" /> лекар.</p>
      </div>

      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 16. Вставьте глагол <em>бити</em> и национальность
      </h3>

      <p className="mb-4">
        <em>Образец: Оне су из Софије, оне су Бугарке.</em>
      </p>

      <div className="space-y-2 mb-6">
        <p className="mb-2">1. Ја <InputCheck correct="сам" mode="inline" /> из Лондона, ја <InputCheck correct="сам Енглез" mode="inline" />.</p>
        <p className="mb-2">2. Мари <InputCheck correct="је" mode="inline" /> из Париза, она <InputCheck correct="је Францускиња" mode="inline" />.</p>
        <p className="mb-2">3. Марко <InputCheck correct="је" mode="inline" /> из Београда, он <InputCheck correct="је Србин" mode="inline" />.</p>
        <p className="mb-2">4. Мајкл <InputCheck correct="је" mode="inline" /> из Вашингтона, он <InputCheck correct="је Американац" mode="inline" />.</p>
        <p className="mb-2">5. Ми <InputCheck correct="смо" mode="inline" /> из Пекинга, ми <InputCheck correct="смо Кинези" mode="inline" />.</p>
        <p className="mb-2">6. Ви <InputCheck correct="сте" mode="inline" /> из Берлина, ви <InputCheck correct="сте Немац" mode="inline" />.</p>
        <p className="mb-2">7. Они <InputCheck correct="су" mode="inline" /> из Мадрида, они <InputCheck correct="су Шпанци" mode="inline" />.</p>
        <p className="mb-2">8. Дмитриј и Јелена <InputCheck correct="су" mode="inline" /> из Москве, они <InputCheck correct="су Руси" mode="inline" />.</p>
      </div>

      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 17. Заполните пропуски в диалогах глаголом <em>бити</em>
      </h3>
      <p className="mb-4">
        Напишите похожие диалоги, изменив имена, названия стран и городов.
      </p>

      <div className="space-y-4 mb-6">
        <p className="font-semibold">а)</p>
        <p className="mb-2">— Ћао, ја <InputCheck correct="сам" mode="inline" /> Стефан!</p>
        <p className="mb-2">— Ћао, ја <InputCheck correct="сам" mode="inline" /> Мајкл!</p>
        <p className="mb-2">— Одакле <InputCheck correct="си" mode="inline" /> ти?</p>
        <p className="mb-2">— Ја <InputCheck correct="сам" mode="inline" /> из Београда.</p>
        <p className="mb-2">— Значи, ти <InputCheck correct="си" mode="inline" /> Србин! Ја <InputCheck correct="сам" mode="inline" /> из Америке, ја <InputCheck correct="сам" mode="inline" /> Американац.</p>
        <p className="mb-6">— Тако је. Ја сам из Србије. Драго ми је.</p>
        <p className="mb-2">— Драго ми је.</p>

        <p className="font-semibold mt-6">б)</p>
        <p className="mb-2">— Добар дан! Ви <InputCheck correct="сте" mode="inline" /> из Рима?</p>
        <p className="mb-2">— Добар дан! Не, ја <InputCheck correct="сам" mode="inline" /> из Мадрида.</p>
        <p className="mb-2">— Ви <InputCheck correct="сте" mode="inline" /> Италијан?</p>
        <p className="mb-2">— Не, ја <InputCheck correct="сам" mode="inline" /> Шпанац, Мадрид <InputCheck correct="је" mode="inline" /> у Шпанији.</p>
        <p className="mb-2">— Извињавам се, довиђења!</p>

        <p className="font-semibold mt-6">в)</p>
        <p className="mb-2">— Добар дан! Ви <InputCheck correct="сте" mode="inline" /> зубар?</p>
        <p className="mb-2">— Добар дан! Да, ја <InputCheck correct="сам" mode="inline" /> зубар.</p>
        <p className="mb-2">— Ја <InputCheck correct="сам" mode="inline" /> Милош Ивановић.</p>
      </div>

      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 18. Прочитайте диалог и впишите пропущенные слова
      </h3>
      <div className="space-y-2 mb-6">
        <p className="mb-2">— Добар дан! Ја <InputCheck correct="сам" mode="inline" /> Павле.</p>
        <p className="mb-2">— Добар дан! Пасош, <InputCheck correct="молим" mode="inline" /> вас.</p>
        <p className="mb-6">— Изволите.</p>
        <p className="mb-2">— Ви <InputCheck correct="сте" mode="inline" /> Бугарин?</p>
        <p className="mb-2">— Не, ја <InputCheck correct="сам" mode="inline" /> програмер.</p>
        <p className="mb-2">— Добро. Али Ви <InputCheck correct="сте" mode="inline" /> из <InputCheck correct="Бугарске" mode="inline" />?</p>
        <p className="mb-2">— Не, ја <InputCheck correct="сам" mode="inline" /> из Русије.</p>
        <p className="mb-2">— Значи, Ви <InputCheck correct="сте" mode="inline" /> Рус?</p>
        <p className="mb-2">— Да, ја <InputCheck correct="сам" mode="inline" /> Рус, ја <InputCheck correct="сам" mode="inline" /> из Москве.</p>
        <p className="mb-6">— Добро, изволите. Довиђења!</p>
        <p className="mb-2">— <InputCheck correct="Пријатно" mode="inline" />!</p>
      </div>
      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 19. Заполните пропуски в диалогах глаголом <em>бити</em> в нужной форме
      </h3>

      <div className="space-y-4 mb-6">
        <p className="font-semibold">а)</p>
        <p className="mb-2">— Здраво! Ви <InputCheck correct="сте" mode="inline" /> програмер?</p>
        <p className="mb-2">— Здраво! Не, ја <InputCheck correct="сам" mode="inline" /> менаџер. Програмер <InputCheck correct="је" mode="inline" /> у следећем кабинету.</p>
        <p className="mb-2">— Хвала пуно! Ја <InputCheck correct="сам" mode="inline" /> Мила, ваш нови правник.</p>
        <p className="mb-2">— Драго ми <InputCheck correct="је" mode="inline" />. Ја <InputCheck correct="сам" mode="inline" /> Стефан.</p>
        <p className="mb-2">— Драго ми <InputCheck correct="је" mode="inline" />. Довиђења!</p>
        <p className="mb-2">— Довиђења!</p>

        <p className="font-semibold mt-6">б)</p>
        <p className="mb-6">— Добар дан!</p>
        <p className="mb-6">— Добар дан!</p>
        <p className="mb-2">— Ја <InputCheck correct="сам" mode="inline" /> ваша нова учитељица Ана.</p>
        <p className="mb-2">— Ја <InputCheck correct="сам" mode="inline" /> Милан.</p>
        <p className="mb-2">— Ја <InputCheck correct="сам" mode="inline" /> Љубица.</p>
        <p className="mb-2">— Драго ми <InputCheck correct="је" mode="inline" />. Ви <InputCheck correct="сте" mode="inline" /> из Београда?</p>
        <p className="mb-2">— Да, ми <InputCheck correct="смо" mode="inline" /> из Београда. А наши родитељи <InputCheck correct="су" mode="inline" /> из Русије, они <InputCheck correct="су" mode="inline" /> из Москве.</p>
      </div>
      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 20. Напишите рассказ о себе
      </h3>

      <p className="mb-4">
        В качестве образца можно использовать следующий текст. Если вы решили писать по-сербски кириллицей, то этот рассказ можно написать латиницей, и наоборот. Пользоваться можно одним алфавитом, а знать нужно оба.
      </p>

      <em className="block mb-4">
        Ја сам Светлана. Ја сам студенткиња. Ја сам филолог. Ја сам из Русије. Ја сам Рускиња. Ја сам из Москве.
      </em>

      <FreeInput placeholder="Напишите рассказ о себе на сербском языке" />
      <NextLessonButton nextId="lesson02b" />
    </div>
  );
}

export default Lesson02a;
