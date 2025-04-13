import AudioPlayer from "../components/AudioPlayer";
import InputCheck from "../components/InputCheck";
import FreeInput from "../components/FreeInput";
import ArrowBack from "../components/ArrowBack";

function Lesson02() {
  return (
    <div className="max-w-3xl mx-auto p-4 relative">
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

      <div className="bg-zinc-100 p-4 rounded mb-6">
        <p>
          — Добар дан. Пасош, молим вас.
          <br />
          — Добар дан, изволите.
          <br />
          — Како се зовете?
          <br />
          — Ја сам Павле Ровински.
          <br />
          — Одакле сте Ви?
          <br />
          — Ја сам из Русије.
          <br />
          — Шта сте Ви?
          <br />
          — Ја сам Рус.
          <br />
          — Шта сте по професији?
          <br />— Ја сам програмер.
        </p>
      </div>

      <h3 className="font-semibold text-lg mt-6 mb-2">СЛОВАРЬ</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>пасош</strong> — паспорт
        </li>
        <li>
          <strong>како се зовете</strong> — как вас зовут
        </li>
        <li>
          <strong>одакле</strong> — откуда
        </li>
        <li>
          <strong>Русија</strong> — Россия
        </li>
        <li>
          <strong>Рус</strong> — русский
        </li>
        <li>
          <strong>шта</strong> — что
        </li>
        <li>
          <strong>професија</strong> — профессия
        </li>
        <li>
          <strong>програмер</strong> — программист
        </li>
      </ul>

      <h3 className="font-semibold text-lg mt-6 mb-2">
        Личные местоимения и глагол бити (краткие формы)
      </h3>

      <p className="mb-4">
        Чтобы построить самое простое сербское предложение, в том числе
        представиться и сказать о себе или о ком-то другом пару слов, нужно
        использовать глагол бити «быть» и личные местоимения.
      </p>
      <p className="mb-4">
        Личные местоимения почти совпадают с русскими. Только не забудьте
        перенести ударение в словах она, оно, они, оне, она на первый слог, не
        смягчать согласные перед и, но и не произносить после них «ы».
      </p>

      <table className="table-auto border mb-6 text-sm">
        <thead>
          <tr>
            <th className="border px-2 py-1">Лице</th>
            <th className="border px-2 py-1">Единственное число</th>
            <th className="border px-2 py-1">Множественное число</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2">1</td>
            <td className="border px-2">
              <em>ја</em> <strong>сам</strong>
            </td>
            <td className="border px-2">
              <em>ми</em> <strong>смо</strong>
            </td>
          </tr>
          <tr>
            <td className="border px-2">2</td>
            <td className="border px-2">
              <em>ти</em> <strong>си</strong>
            </td>
            <td className="border px-2">
              <em>ви</em> <strong>сте</strong>
            </td>
          </tr>
          <tr>
            <td className="border px-2">3</td>
            <td className="border px-2\">
              <em>он, она, оно</em> <strong>је</strong>
            </td>
            <td className="border px-2\">
              <em>они, оне, она</em> <strong>су</strong>
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="font-semibold text-lg mt-6 mb-2">Глагол бити</h3>
      <p className="mb-4">
        Сербский глагол бити, как и в английском, немецком, французском и многих
        других языках, обязательно употреб- ляется как глагол-связка в
        предложениях типа: «Я Павел, я русский, я программист».
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
        <em>Он је Павле, он је Рус, он је програмер;</em> «Она — Мария, она
        русская, она студентка» —{" "}
        <em>Она је Марија, она је Рускиња, она је студенткиња.</em>
      </p>
      <p className="mb-4">
        <strong>ВАЖНО.</strong> С краткой формы глагола бити предложение начи-
        нать нельзя, она обязательно должна стоять в предложении на втором
        месте, после первого слова или словосочетания.
      </p>
      <p className="mb-4">
        <strong>Местоимения</strong>
        <br />В русском языке для обозначения мужчин и женщин во множественном
        числе используется единая форма <em>они</em>, а в сербском языке{" "}
        <em>они</em> — это форма мужского рода, <em>оне</em> — жен- ского, а{" "}
        <em>она</em> — среднего. Про мужчин сербы скажут <em>они</em>, про
        женщин — <em>оне</em>, а про моря и поля (<em>мора</em> и <em>поља</em>)
        — <em>она</em>.
      </p>
      <h3 className="font-semibold text-lg mt-6 mb-2">
        ЗАПОМНИТЕ. Вопросы при знакомстве
      </h3>
      <ul className="list-disc list-inside mb-6">
        <li>Како се зовете? — Как вас зовут?</li>
        <li>Како се зовеш? — Как тебя зовут?</li>
        <li>Одакле сте Ви? — Откуда вы?</li>
        <li>Одакле си ти? — Откуда ты?</li>
        <li>Шта сте Ви (по националности)? — Кто вы по национальности?</li>
        <li>Шта си ти (по националности)? — Кто ты по национальности?</li>
        <li>Шта сте Ви (по професији)? — Кто вы по профессии?</li>
        <li>Шта си ти (по професији)? — Кто ты по профессии?</li>
      </ul>

      <h3 className="font-semibold text-lg mt-6 mb-2">Диалог при знакомстве</h3>
      <p className="mb-4">
        — Како се зовеш? Или Како се зовете? <br />
        — Ја сам Марко. Како се ти зовеш? Или Како се Ви зовете? <br />
        — Ја сам Марија. <br />
        — Драго ми је. Одакле си? Или Одакле сте? <br />
        — Ја сам из Београда. <br />
        — Шта си ти по занимању? Или Шта сте Ви по занимању? <br />— Ја сам
        студент.
      </p>

      <AudioPlayer src="/src/assets/audio/lesson02_01.mp3" />
      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 1. Вставьте пропущенные слова.
      </h3>
      <p className="mb-4">
        —{" "}
        <span className="inline-block">
          <InputCheck word="____________________" correct="Како" />
        </span>{" "}
        се зовете? <br />— Ја{" "}
        <span className="inline-block">
          <InputCheck word="__________________" correct="сам" />
        </span>{" "}
        Павле. <br />— Одакле сте{" "}
        <span className="inline-block">
          <InputCheck word="_____" correct="Ви" />
        </span>
        ? <br />— Ја{" "}
        <span className="inline-block">
          <InputCheck word="__________________" correct="сам" />
        </span>{" "}
        из Русије. <br />— Шта{" "}
        <span className="inline-block">
          <InputCheck word="_________________" correct="сте" />
        </span>{" "}
        Ви? <br />— Ја{" "}
        <span className="inline-block">
          <InputCheck word="___________________" correct="сам" />
        </span>{" "}
        Рус. <br />— Шта{" "}
        <span className="inline-block">
          <InputCheck word="_________________" correct="сте" />
        </span>{" "}
        по профессии? <br />— Ја сам{" "}
        <span className="inline-block">
          <InputCheck word="_________________" correct="програмер" />
        </span>
        .
      </p>

      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 2. Ответьте на вопросы.
      </h3>
      <div className="space-y-4 mb-6">
        <FreeInput placeholder="Како се зовете?" />
        <FreeInput placeholder="Одакле сте Ви?" />
        <FreeInput placeholder="Шта сте Ви по занимању?" />
      </div>
      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 3. Спросите коллегу или преподавателя, с которым вы
        общаетесь: как его зовут, откуда он и кто он по профессии.
      </h3>
      <p className="mb-4">
        Подразумевается практика диалога, вопросы, которые вы можете задать,
        такие как:
      </p>
      <ul className="list-disc list-inside">
        <li>Како се зовеш?</li>
        <li>Одакле си?</li>
        <li>Шта си по професији?</li>
      </ul>
    </div>
  );
}

export default Lesson02;
