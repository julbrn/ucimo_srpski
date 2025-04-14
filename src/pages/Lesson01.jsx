import AudioPlayer from "../components/AudioPlayer";
import InputCheck from "../components/InputCheck";
import FreeInput from "../components/FreeInput";
import RememberBlock from "../components/RememberBlock";
import { rememberData } from "../assets/audio/data/rememberData";
import { Link } from "react-router";
import ArrowBack from "../components/ArrowBack";
import { useState } from "react";

function Lesson01() {
  const [currentAudio, setCurrentAudio] = useState(null);
  // Обработчик для воспроизведения
  const handleAudioPlay = (audioIndex) => {
    if (currentAudio !== null && currentAudio !== audioIndex) {
      // Останавливаем проигрывание предыдущего аудио
      const prevAudio = document.getElementById(`audio-${currentAudio}`);
      prevAudio.pause();
    }
    setCurrentAudio(audioIndex);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 relative">
      <ArrowBack />
      <h2 className="text-2xl font-bold mb-4">
        УРОК 1. Алфавит и правила письма. Основные фонетические особенности
        сербского языка
      </h2>

      <p className="mb-4">
        Сербский язык использует два равноправных алфавита: кириллицу и
        латиницу.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Таблица алфавита</h3>
      <table className="table-auto border mb-6 text-sm w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Кириллица</th>
            <th className="border px-4 py-2 text-left">Латиница</th>
            <th className="border px-4 py-2 text-left">Произношение</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["А а", "A a", "а"],
            ["Б б", "B b", "б"],
            ["В в", "V v", "в"],
            ["Г г", "G g", "г"],
            ["Д д", "D d", "д"],
            ["Ђ ђ", "Đ, đ (Dj, dj)", "д’ж’"],
            ["Е е", "E e", "е"],
            ["Ж ж", "Ž ž", "ж"],
            ["З з", "Z z", "з"],
            ["И и", "I i", "и"],
            ["Ј ј", "J j", "й"],
            ["К к", "K k", "к"],
            ["Л л", "L l", "л"],
            ["Љ љ", "Lj lj", "мягкий л"],
            ["М м", "M m", "м"],
            ["Н н", "N n", "н"],
            ["Њ њ", "Nj nj", "мягкий н"],
            ["О о", "O o", "о"],
            ["П п", "P p", "п"],
            ["Р р", "R r", "р"],
            ["С с", "S s", "с"],
            ["Т т", "T t", "т"],
            ["Ћ ћ", "Ć ć", "мягкий ч"],
            ["У у", "U u", "у"],
            ["Ф ф", "F f", "ф"],
            ["Х х", "H h", "х"],
            ["Ц ц", "C c", "ц"],
            ["Ч ч", "Č č", "твердый ч"],
            ["Џ џ", "Dž dž", "дж"],
            ["Ш ш", "Š š", "ш"],
          ].map(([cyr, lat, pron], idx) => (
            <tr key={idx} className="even:bg-gray-50">
              <td className="border px-4 py-3">{cyr}</td>
              <td className="border px-4 py-3">{lat}</td>
              <td className="border px-4 py-3">{pron}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="font-semibold text-lg mt-6 mb-2">
        Упражнение 1. Перепишите латиницей следующие слова:
      </h3>
      <AudioPlayer
        src="/src/assets/audio/001.-Urok-01_Uprazhnenie_1.mp3"
        index={0}
        onPlay={handleAudioPlay}
      />

      <p className="mb-2">а) обратите внимание на мягкие љ и њ:</p>
      <div className="space-y-2 mb-4">
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            учење <span className="text-gray-600">(«учение»)</span>
          </p>
          <InputCheck correct="učenje" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            љубав <span className="text-gray-600">(«любовь»)</span>
          </p>
          <InputCheck correct="ljubav" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            лењ <span className="text-gray-600">(«ленивый»)</span>
          </p>
          <InputCheck correct="lenj" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            љутња <span className="text-gray-600">(«злость»)</span>
          </p>
          <InputCheck correct="ljutnja" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            пањ <span className="text-gray-600">(«пень»)</span>
          </p>
          <InputCheck correct="panj" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            коњ <span className="text-gray-600">(«конь»)</span>
          </p>
          <InputCheck correct="konj" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            људи <span className="text-gray-600">(«люди»)</span>
          </p>
          <InputCheck correct="ljudi" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            биљка <span className="text-gray-600">(«растение»)</span>
          </p>
          <InputCheck correct="biljka" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            мишљење <span className="text-gray-600">(«мнение»)</span>
          </p>
          <InputCheck correct="mišljenje" />
        </div>
      </div>

      <p className="mb-2">б) обратите внимание на џ и ђ:</p>
      <div className="space-y-2 mb-4">
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            Џон <span className="text-gray-600">(«Джон»)</span>
          </p>
          <InputCheck correct="Džon" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            ђон <span className="text-gray-600">(«подошва»)</span>
          </p>
          <InputCheck correct="đon" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            џак <span className="text-gray-600">(«мешок»)</span>
          </p>
          <InputCheck correct="džak" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            ђак <span className="text-gray-600">(«ученик»)</span>
          </p>
          <InputCheck correct="đak" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            уџбеник <span className="text-gray-600">(«учебник»)</span>
          </p>
          <InputCheck correct="udžbenik" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            између <span className="text-gray-600">(«между»)</span>
          </p>
          <InputCheck correct="između" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            лађа <span className="text-gray-600">(«корабль»)</span>
          </p>
          <InputCheck correct="lađa" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            гађање <span className="text-gray-600">(«стрельба»)</span>
          </p>
          <InputCheck correct="gađanje" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            Карађорђе <span className="text-gray-600">(«Карагеоргий»)</span>
          </p>
          <InputCheck correct="Karađorđe" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            џумбус <span className="text-gray-600">(«дичь»)</span>
          </p>
          <InputCheck correct="džumbus" />
        </div>
      </div>
      <p className="mb-2">в) обратите внимание на ч и ћ:</p>
      <div className="space-y-2 mb-4">
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            меч <span className="text-gray-600">(«матч»)</span>
          </p>
          <InputCheck correct="meč" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            мач <span className="text-gray-600">(«меч»)</span>
          </p>
          <InputCheck correct="mač" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            ноћ <span className="text-gray-600">(«ночь»)</span>
          </p>
          <InputCheck correct="noć" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            мачка <span className="text-gray-600">(«кошка»)</span>
          </p>
          <InputCheck correct="mačka" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            моћи{" "}
            <span className="text-gray-600">(«мочь, иметь возможность»)</span>
          </p>
          <InputCheck correct="moći" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            рећи <span className="text-gray-600">(«сказать»)</span>
          </p>
          <InputCheck correct="reći" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            чак <span className="text-gray-600">(«даже»)</span>
          </p>
          <InputCheck correct="čak" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            Чачак <span className="text-gray-600">(«город в Сербии»)</span>
          </p>
          <InputCheck correct="Čačak" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            ћурка <span className="text-gray-600">(«индюшка»)</span>
          </p>
          <InputCheck correct="ćurka" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            човек <span className="text-gray-600">(«человек»)</span>
          </p>
          <InputCheck correct="čovek" />
        </div>
      </div>

      <p className="mb-2">г) обратите внимание на ш и ж:</p>
      <div className="space-y-2 mb-4">
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            кошарка <span className="text-gray-600">(«баскетбол»)</span>
          </p>
          <InputCheck correct="košarka" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            живот <span className="text-gray-600">(«жизнь»)</span>
          </p>
          <InputCheck correct="život" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            шума <span className="text-gray-600">(«лес»)</span>
          </p>
          <InputCheck correct="šuma" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            шишарка{" "}
            <span className="text-gray-600">(«еловая, сосновая шишка»)</span>
          </p>
          <InputCheck correct="šišarka" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            жаба <span className="text-gray-600">(«лягушка»)</span>
          </p>
          <InputCheck correct="žaba" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            нож <span className="text-gray-600">(«нож»)</span>
          </p>
          <InputCheck correct="nož" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            кожа <span className="text-gray-600">(«кожа»)</span>
          </p>
          <InputCheck correct="koža" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            уши <span className="text-gray-600">(«уши»)</span>
          </p>
          <InputCheck correct="uši" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            животиња <span className="text-gray-600">(«животное, зверь»)</span>
          </p>
          <InputCheck correct="životinja" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            шушканје <span className="text-gray-600">(«шуршание»)</span>
          </p>
          <InputCheck correct="šuškanje" />
        </div>
      </div>

      <p className="mb-2">д) обратите внимание на все изученные буквы:</p>
      <div className="space-y-2 mb-4">
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            сумња <span className="text-gray-600">(«сомнение»)</span>
          </p>
          <InputCheck correct="sumnja" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            ђубре <span className="text-gray-600">(«мусор»)</span>
          </p>
          <InputCheck correct="đubre" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            ћерка <span className="text-gray-600">(«дочка»)</span>
          </p>
          <InputCheck correct="ćerka" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            чајник <span className="text-gray-600">(«чайник»)</span>
          </p>
          <InputCheck correct="čajnik" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            џеп <span className="text-gray-600">(«карман»)</span>
          </p>
          <InputCheck correct="džep" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            жеља <span className="text-gray-600">(«желание»)</span>
          </p>
          <InputCheck correct="želja" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            желудац <span className="text-gray-600">(«желудок»)</span>
          </p>
          <InputCheck correct="želudac" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            шав <span className="text-gray-600">(«шов»)</span>
          </p>
          <InputCheck correct="šav" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            шапат <span className="text-gray-600">(«шепот»)</span>
          </p>
          <InputCheck correct="šapat" />
        </div>
      </div>
      <h3 className="font-semibold text-lg mt-6 mb-2">Упражнение 2</h3>
      <p className="text-lg font-medium mb-3">
        Перепишите кириллицей следующие слова:
      </p>
      <AudioPlayer
        src="/src/assets/audio/002.-Urok-01_Uprazhnenie_2.mp3"
        index={1}
        onPlay={handleAudioPlay}
      />
      <p className="font-medium mb-2">а) обратите внимание на lj и nj:</p>
      <div className="space-y-2 mb-4">
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            љуљати <span className="text-gray-600">(«качать, убаюкивать»)</span>
          </p>
          <InputCheck correct="љуљати" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            љубимац <span className="text-gray-600">(«любимец»)</span>
          </p>
          <InputCheck correct="љубимац" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            Љиљана <span className="text-gray-600">(«Лиляна»)</span>
          </p>
          <InputCheck correct="Љиљана" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            љубазан <span className="text-gray-600">(«любезный»)</span>
          </p>
          <InputCheck correct="љубазан" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            љубитељ <span className="text-gray-600">(«любитель»)</span>
          </p>
          <InputCheck correct="љубитељ" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            њушити <span className="text-gray-600">(«нюхать»)</span>
          </p>
          <InputCheck correct="њуšити" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            његов{" "}
            <span className="text-gray-600">
              («его», притяжательное местоимение)
            </span>
          </p>
          <InputCheck correct="његов" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            певање <span className="text-gray-600">(«пение»)</span>
          </p>
          <InputCheck correct="певање" />
        </div>
      </div>

      <p className="mb-2 font-medium text-lg">
        б) обратите внимание на dž и đ:
      </p>
      <div className="space-y-2 mb-4">
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            џамија <span className="text-gray-600">(«мечеть»)</span>
          </p>
          <InputCheck correct="џамија" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            ђурђевак <span className="text-gray-600">(«ландыш»)</span>
          </p>
          <InputCheck correct="ђурђевак" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            Ђурђевдан <span className="text-gray-600">(«Юрьев день»)</span>
          </p>
          <InputCheck correct="Ђурђевдан" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            џунгла <span className="text-gray-600">(«джунгли»)</span>
          </p>
          <InputCheck correct="џунгла" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            буђ <span className="text-gray-600">(«плесень»)</span>
          </p>
          <InputCheck correct="буђ" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            буђење <span className="text-gray-600">(«пробуждение»)</span>
          </p>
          <InputCheck correct="буђење" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            Џон <span className="text-gray-600">(«Джон»)</span>
          </p>
          <InputCheck correct="Џон" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            Џесика <span className="text-gray-600">(«Джесика»)</span>
          </p>
          <InputCheck correct="Џесика" />
        </div>
      </div>

      <p className="mb-2 font-medium text-lg">в) обратите внимание на č и ć:</p>
      <div className="space-y-2 mb-4">
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            пчела <span className="text-gray-600">(«пчела»)</span>
          </p>
          <InputCheck correct="пчела" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            чвор <span className="text-gray-600">(«узел»)</span>
          </p>
          <InputCheck correct="чвор" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            чврст <span className="text-gray-600">(«твердый»)</span>
          </p>
          <InputCheck correct="чврст" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            ићи <span className="text-gray-600">(«идти»)</span>
          </p>
          <InputCheck correct="ићи" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            моћи <span className="text-gray-600">(«мочь»)</span>
          </p>
          <InputCheck correct="моћи" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            чистити <span className="text-gray-600">(«чистить, очищать»)</span>
          </p>
          <InputCheck correct="чистити" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            већ <span className="text-gray-600">(«уже»)</span>
          </p>
          <InputCheck correct="вече" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            врућ <span className="text-gray-600">(«горячий»)</span>
          </p>
          <InputCheck correct="врућ" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            чупав{" "}
            <span className="text-gray-600">(«лохматый, взъерошенный»)</span>
          </p>
          <InputCheck correct="чупав" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            рећи <span className="text-gray-600">(«сказать»)</span>
          </p>
          <InputCheck correct="рећи" />
        </div>
      </div>

      <p className="mb-2 font-medium text-lg">г) обратите внимание на ш и ж:</p>
      <div className="space-y-2 mb-4">
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            шамар <span className="text-gray-600">(«пощечина»)</span>
          </p>
          <InputCheck correct="шамар" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            шатор <span className="text-gray-600">(«шатер»)</span>
          </p>
          <InputCheck correct="шатор" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            шах <span className="text-gray-600">(«шахматы»)</span>
          </p>
          <InputCheck correct="шах" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            широк <span className="text-gray-600">(«широкий»)</span>
          </p>
          <InputCheck correct="широк" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            шишати <span className="text-gray-600">(«стричь»)</span>
          </p>
          <InputCheck correct="шишати" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            жир <span className="text-gray-600">(«желудь»)</span>
          </p>
          <InputCheck correct="жир" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            може <span className="text-gray-600">(«может»)</span>
          </p>
          <InputCheck correct="може" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            мождани <span className="text-gray-600">(«мозговой»)</span>
          </p>
          <InputCheck correct="мождани" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            жути <span className="text-gray-600">(«желтый»)</span>
          </p>
          <InputCheck correct="жути" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            муж <span className="text-gray-600">(«муж»)</span>
          </p>
          <InputCheck correct="муж" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            жбун <span className="text-gray-600">(«куст»)</span>
          </p>
          <InputCheck correct="жбун" />
        </div>
      </div>

      <p className="mb-2 font-medium text-lg">
        д) обратите внимание на все изученные буквы:
      </p>
      <div className="space-y-2 mb-4">
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            шљива <span className="text-gray-600">(«слива»)</span>
          </p>
          <InputCheck correct="шљива" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            жудња <span className="text-gray-600">(«жажда»)</span>
          </p>
          <InputCheck correct="жудња" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            жулити <span className="text-gray-600">(«натирать мозоль»)</span>
          </p>
          <InputCheck correct="жуљити" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            чаробњак <span className="text-gray-600">(«волшебник»)</span>
          </p>
          <InputCheck correct="чаробњак" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            миш <span className="text-gray-600">(«мышь»)</span>
          </p>
          <InputCheck correct="миш" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            киша <span className="text-gray-600">(«дождь»)</span>
          </p>
          <InputCheck correct="киша" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            кућа <span className="text-gray-600">(«дом»)</span>
          </p>
          <InputCheck correct="кућа" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            комшија <span className="text-gray-600">(«сосед»)</span>
          </p>
          <InputCheck correct="комшија" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            шала <span className="text-gray-600">(«шутка»)</span>
          </p>
          <InputCheck correct="шала" />
        </div>
        <div className="gap-4">
          <p className="min-w-[124px] mb-2">
            спуштање <span className="text-gray-600">(«спуск»)</span>
          </p>
          <InputCheck correct="спуштање" />
        </div>
      </div>

      <h3 className="font-semibold text-lg mt-6 mb-2">Упражнение 3</h3>
      <p className="text-lg font-medium mb-3">
        Запишите свое имя и фамилию сербскими буквами, кириллицей и латиницей.
      </p>
      <p className="mb-4">
        Обратите внимание, что русские буквы я, е, ё, ю в начале слова и после
        гласных по-сербски передаются как ja, je, jo, ju.
      </p>
      <FreeInput placeholder="Введите имя и фамилию на кириллице и латинице" />

      <h3 className="font-semibold text-2xl mt-6 mb-4 text-gray-800">
        Упражнение 4. Прочитайте следующие слова:
      </h3>

      <AudioPlayer
        src="/src/assets/audio/003.-Urok-01_Uprazhnenie_4.mp3"
        index={2}
        onPlay={handleAudioPlay}
      />

      <div className="space-y-6">
        {/* Пункт а */}
        <div>
          <p className="text-lg font-medium mb-3">
            а) обратите внимание на то, что безударные гласные произносятся, как
            под ударением, и нет смягчения твердых согласных перед{" "}
            <em className="font-semibold">е</em> и{" "}
            <em className="font-semibold">и</em>:
          </p>
          <p className="mb-3">
            <em className="font-semibold">небо</em> «небо»,{" "}
            <em className="font-semibold">добро</em> «хорошо»,{" "}
            <em className="font-semibold">породица</em> «семья»,{" "}
            <em className="font-semibold">родитељи</em> «родители»,{" "}
            <em className="font-semibold">разговарати</em> «разговаривать»,{" "}
            <em className="font-semibold">боловати</em> «болеть»,{" "}
            <em className="font-semibold">посао</em> «работа»,{" "}
            <em className="font-semibold">мисао</em> «мысль»,{" "}
            <em className="font-semibold">обилазити</em> «обходить»,{" "}
            <em className="font-semibold">река</em> «река»,{" "}
            <em className="font-semibold">время</em> «время»,{" "}
            <em className="font-semibold">отац</em> «отец»
          </p>
        </div>

        {/* Пункт б */}
        <div>
          <p className="text-lg font-medium mb-3">
            б) обратите внимание на произношение{" "}
            <em className="font-semibold">ч</em> (твердого «ч»):
          </p>
          <p className="mb-3">
            <em className="font-semibold">читати</em> «читать»,{" "}
            <em className="font-semibold">јуче</em> «вчера»,{" "}
            <em className="font-semibold">учитељ</em> «учитель»,{" "}
            <em className="font-semibold">учити</em> «учить»,{" "}
            <em className="font-semibold">често</em> «часто»,{" "}
            <em className="font-semibold">човек</em> «человек»,{" "}
            <em className="font-semibold">чај</em> «чай»
          </p>
        </div>

        {/* Пункт в */}
        <div>
          <p className="text-lg font-medium mb-3">
            в) обратите внимание на то, как читается буква{" "}
            <em className="font-semibold">ћ</em> (мягкий «ч»):
          </p>
          <p className="mb-3">
            <em className="font-semibold">ноћ</em> «ночь»,{" "}
            <em className="font-semibold">ћерка</em> «дочка»,{" "}
            <em className="font-semibold">враћати</em> «возвращать»,{" "}
            <em className="font-semibold">кућа</em> «дом»
          </p>
        </div>

        {/* Пункт г */}
        <div>
          <p className="text-lg font-medium mb-3">
            г) обратите внимание на произношение{" "}
            <em className="font-semibold">ђ</em> (мягкого «д’ж’»):
          </p>
          <p className="mb-3">
            <em className="font-semibold">рођендан</em> «день рождения»,{" "}
            <em className="font-semibold">туђи</em> «чужой»,{" "}
            <em className="font-semibold">ђурђевак</em> «ландыш»
          </p>
        </div>

        {/* Пункт д */}
        <div>
          <p className="text-lg font-medium mb-3">
            д) обратите внимание на то, как читается буква{" "}
            <em className="font-semibold">џ</em> (твердое «дж»):
          </p>
          <p className="mb-3">
            <em className="font-semibold">џин</em> «джин (напиток)»,{" "}
            <em className="font-semibold">џезва</em> «турка (посуда для варки
            кофе)»
          </p>
        </div>

        {/* Пункт е */}
        <div>
          <p className="text-lg font-medium mb-3">
            е) обратите внимание на чтение буквы{" "}
            <em className="font-semibold">њ</em>:
          </p>
          <p className="mb-3">
            <em className="font-semibold">његов</em> «его»,{" "}
            <em className="font-semibold">књига</em> «книга»
          </p>
        </div>

        {/* Пункт ж */}
        <div>
          <p className="text-lg font-medium mb-3">
            ж) обратите внимание на то, как читается буква{" "}
            <em className="font-semibold">љ</em>:
          </p>
          <p className="mb-3">
            <em className="font-semibold">људи</em> «люди»,{" "}
            <em className="font-semibold">љубав</em> «любовь»,{" "}
            <em className="font-semibold">пријатељ</em> «приятель, друг»
          </p>
        </div>

        {/* Пункт з */}
        <div>
          <p className="text-lg font-medium mb-3">
            з) прочитайте слово, в котором три «необычных» буквы (звука):
          </p>
          <p className="mb-6">
            <em className="font-semibold">зачуђујуће</em> «удивительно»
          </p>
        </div>
      </div>

      <RememberBlock
        title={rememberData[0].lessonTitle}
        phrases={rememberData[0].phrases}
        lessonNumber={rememberData[0].lessonNumber}
      />
    </div>
  );
}

export default Lesson01;
