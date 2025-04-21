import AudioPlayer from "../components/AudioPlayer";
import InputCheck from "../components/InputCheck";
import FreeInput from "../components/FreeInput";
import ArrowBack from "../components/ArrowBack";
import Glossary from "../components/Glossary";
import { glossaryData } from "../assets/data/GlossaryData";
import ImportantBlock from "../components/ImportantBlock";
import RememberBlock from "../components/RememberBlock";
import { rememberData } from "../assets/data/rememberData";

function Lesson02() {
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

      <AudioPlayer src="/src/assets/audio/005.-Urok-02_2a.mp3" />

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
        title={glossaryData[0].lessonTitle}
        phrases={glossaryData[0].phrases}
        lessonNumber={glossaryData[0].lessonNumber}
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
      <AudioPlayer src="/src/assets/audio/006.-Urok-02_2a_Dialog-pri-znakomstve.mp3" />
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
          — <InputCheck correct="Како" /> зовете?
        </p>
        <p className="mb-2">
          — Ја <InputCheck correct="сам" /> Павле.
        </p>
        <p className="mb-2">
          — Одакле сте <InputCheck correct="Ви" />?
        </p>
        <p className="mb-2">
          — Ја <InputCheck correct="сам" /> из Русије.
        </p>
        <p className="mb-2">
          — Шта <InputCheck correct="сте" /> Ви?
        </p>
        <p className="mb-2">
          — <InputCheck correct="ја" /> сам Рус.
        </p>
        <p className="mb-2">
          — Шта <InputCheck correct="сте" /> по професији?
        </p>
        <p className="mb-2">
          — Ја сам <InputCheck correct="програмер" />.
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
      <div className="bg-[var(--field-light)] dark:bg-[var(--field-dark)] p-4 rounded-xl shadow mb-6 text-sm">
        <p>Русија — Француз / Францускиња</p>
        <p>Србија — Енглез / Енглескиња</p>
        <p>Француска — Србин / Српкиња</p>
        <p>Немачка — Кинез / Кинескиња</p>
        <p>Енглеска — Рус / Рускиња</p>
        <p>Америка (САД) — Пољак / Пољакиња</p>
        <p>Шпанија — Американац / Американка</p>
        <p>Пољска — Италијан / Италијанка</p>
        <p>Бугарска — Немац / Немица</p>
        <p>Италија — Шпанац / Шпањолка</p>
        <p>Кина — Бугарин / Бугарка</p>
      </div>
    </div>
  );
}

export default Lesson02;
