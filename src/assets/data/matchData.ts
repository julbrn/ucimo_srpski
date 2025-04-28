import { MatchExerciseItem } from "../../components/MatchExercise";

export const MatchExerciseData: Record<string, MatchExerciseItem> = {
  exercise02a_4: {
    leftOptions: [
      { id: "rusija", text: "Русија" },
      { id: "srbija", text: "Србија" },
      { id: "francuska", text: "Француска" },
      { id: "nemacka", text: "Немачка" },
      { id: "engleska", text: "Енглеска" },
      { id: "amerika", text: "Америка" },
      { id: "spanija", text: "Шпанија" },
      { id: "poljska", text: "Пољска" },
      { id: "bugarska", text: "Бугарска" },
      { id: "italija", text: "Италија" },
      { id: "kina", text: "Кина" },
    ],
    rightOptions: [
      { id: "francuz", text: "Француз / Францускиња" },
      { id: "englez", text: "Енглез / Енглескиња" },
      { id: "srbin", text: "Србин / Српкиња" },
      { id: "kinez", text: "Кинез / Кинескиња" },
      { id: "rus", text: "Рус / Рускиња" },
      { id: "poljak", text: "Пољак / Пољакиња" },
      { id: "amerikanac", text: "Американац / Американка" },
      { id: "italijan", text: "Италијан / Италијанка" },
      { id: "nemac", text: "Немац / Немица" },
      { id: "spanac", text: "Шпанац / Шпањолка" },
      { id: "bugarin", text: "Бугарин / Бугарка" },
    ],
    correctMatches: {
      rusija: "rus",
      srbija: "srbin",
      francuska: "francuz",
      nemacka: "nemac",
      engleska: "englez",
      amerika: "amerikanac",
      spanija: "spanac",
      poljska: "poljak",
      bugarska: "bugarin",
      italija: "italijan",
      kina: "kinez",
    },
  },
  exercise02a_7: {
    leftOptions: [
      { id: "rusija", text: "Русија" },
      { id: "srbija", text: "Србија" },
      { id: "francuska", text: "Француска" },
      { id: "engleska", text: "Енглеска" },
      { id: "amerika", text: "Америка (САД)" },
      { id: "spanija", text: "Шпанија" },
      { id: "poljska", text: "Пољска" },
      { id: "bugarska", text: "Бугарска" },
      { id: "italija", text: "Италија" },
      { id: "kina", text: "Кина" },
    ],
    rightOptions: [
      { id: "beograd", text: "Београд" },
      { id: "sofiја", text: "Софија" },
      { id: "vašington", text: "Вашингтон" },
      { id: "pariz", text: "Париз" },
      { id: "moskva", text: "Москва" },
      { id: "peking", text: "Пекинг" },
      { id: "rim", text: "Рим" },
      { id: "madrid", text: "Мадрид" },
      { id: "london", text: "Лондон" },
      { id: "varšava", text: "Варшава" },
    ],
    correctMatches: {
      rusija: "moskva",
      srbija: "beograd",
      francuska: "pariz",
      engleska: "london",
      amerika: "vašington",
      spanija: "madrid",
      poljska: "varšava",
      bugarska: "sofiја",
      italija: "rim",
      kina: "peking",
    },
  },
  exercise02a_9: {
    leftOptions: [
      { id: "ucitelj", text: "учитељ / учитељица" },
      { id: "programer", text: "програмер / програмерка" },
      { id: "menadzer", text: "менаџер / менаџерка" },
      { id: "biznismen", text: "бизнисмен / бизнисменка" },
      { id: "gradjevinac", text: "грађевинац" },
      { id: "frizer", text: "фризер / фризерка" },
      { id: "pravnik", text: "правник / правница" },
      { id: "lekar", text: "лекар / лекарка" },
      { id: "cistac", text: "чистач / чистачица" },
      { id: "zubar", text: "зубар / зубарка" },
    ],
    rightOptions: [
      { id: "pravnik1", text: "јурист" }, // юрист
      { id: "biznismen1", text: "бизнисмен" }, // бизнесмен
      { id: "menadzer1", text: "менаџер" }, // менеджер
      { id: "gradjevinac1", text: "строитељ" }, // строитель
      { id: "cistac1", text: "уборщик (дворник) / уборщица" }, // уборщик
      { id: "frizer1", text: "парикмахер" }, // парикмахер
      { id: "lekar1", text: "врач" }, // врач
      { id: "ucitelj1", text: "учитељ / учитељица" }, // учитель
      { id: "programer1", text: "программист" }, // программист
      { id: "zubar1", text: "зубной врач" }, // зубной врач
    ],
    correctMatches: {
      ucitelj: "ucitelj1",
      programer: "programer1",
      menadzer: "menadzer1",
      biznismen: "biznismen1",
      gradjevinac: "gradjevinac1",
      frizer: "frizer1",
      pravnik: "pravnik1",
      lekar: "lekar1",
      cistac: "cistac1",
      zubar: "zubar1",
    },
  },
};
