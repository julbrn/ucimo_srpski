export interface ExerciseItem {
  number: string;
  text?: string;
  audio?: string;
}

export interface PageContent {
  page: number;
  items: ExerciseItem[];
}

export const pageContentByPage: PageContent[] = [
  {
    page: 12,
    items: [
      {
        number: "1",
        audio: `${
          import.meta.env.BASE_URL
        }audio/002---1-LEKCIJE--Lekcija-1--Dobar-dan--Cetiri-razgovora-pozdravljanje.mp3`,
      },
    ],
  },
  {
    page: 13,
    items: [
      {
        number: "2",
        audio: `${
          import.meta.env.BASE_URL
        }audio/003---2-Slusajte-i-proverite.mp3`,
      },
    ],
  },
  {
    page: 14,
    items: [
      {
        number: "3",
        audio: `${
          import.meta.env.BASE_URL
        }audio/004---3-Slusajte-i-pisite-prirodan-odgovor.mp3`,
      },
      {
        number: "4",
        audio: `${import.meta.env.BASE_URL}audio/005---4-Proverite.mp3`,
      },
      {
        number: "5",
        audio: `${import.meta.env.BASE_URL}audio/006---5-Proverite.mp3`,
      },
      {
        number: "6",
        audio: `${import.meta.env.BASE_URL}audio/006---5-Proverite.mp3`,
      },
    ],
  },
  {
    page: 15,
    items: [
      {
        number: "12",
        text: `1) Da li je ovo torba? - Ne, nije.
2) Da li je ovo novčanik? - Ne, nije.
3) Da li je ovo kompjuter? - Da, jeste.
4) Da li je ovo moblini? - Ne, nije.
5) Da li je ovo stolica? - Ne, nije.
6) Da li je ovo torba? - Da, jeste.
7) Da li je ovo novčanik? - Da, jeste.
8) Da li je ovo pasoš? - Da, jeste.`,
      },
    ],
  },
  {
    page: 16,
    items: [
      {
        number: "7",
        audio: `${import.meta.env.BASE_URL}audio/008---7-Sta-cujete.mp3`,
      },
      {
        number: "15",
        text: `a) Vi ste Ana.
b) Mi smo student i profesor.
c) Ovo je knjiga.
č) Ovo su knjiga i torba.
ć) Ja sam žena.
d) Ti si Petar.`,
      },
    ],
  },
  {
    page: 17,
    items: [
      {
        number: "16",
        text: `A: Dobar dan.
B: Zdravo. Kako si?
A: Hvala, dobro sam. A Vi?
B: Nije loše. Da li je ovo Milica?
A: Ne, ovo niie Milica. Ovo je Dragana.
B: Hvala. Vidimo se.
A: Doviđenja. Prijatno.`,
      },
      {
        number: "17",
        text: `muški rod: muškarac, student, dan, novčanik, kompjuter, ključ, pasoš, profesor, mobilni telefon;
ženski rod: žena, knjiga, stolica, torba;
srednji rod: veče, jutro.`,
      },
      {
        number: "18",
        text: `formalno: Doviđenja. Da li ste vi Boris? Dobro jutro. Kako ste? A Vi? Dobro veče.
neformalno: Kako si? Ćao. Vidimo se. Da li si ti Ana? Zdravo. A ti?`,
      },
    ],
  },
  {
    page: 19,
    items: [
      {
        number: "8",
        audio: `${
          import.meta.env.BASE_URL
        }audio/009---Lekcija-2-MOJA-ZEMLJA-8-Proverite.mp3`,
      },
      {
        number: "4",
        text: `1) Milica i Miloš su Srpkinja i Srbin. 2) Đani i ja smo Italijan i Francuz. 3) Elizabet i Deniz su Amerikanka i Francuskinja.
4) Andrej i ti ste Rus i Španac. 5) Rosa i Natalija su Italijanka i Ruskinja. 6) Anita i ja smo Mađarica i Srpkinja. 7) Pavel
i Katja su Poljak i Poljakinja. 7) Eržika i ja smo Mađarica i Špankinja. 8) Mikloš i ti ste Mađar i Kinez. 9) Jin i Štefan su
Kineskinja i Nemac. 10) Sara i ia smo Nemica i Francuskinja.`,
      },
      {
        number: "5",
        text: `1b); 2a); За); 4b); 5b); 6a); 7b); 8b).`,
      },
    ],
  },
  {
    page: 20,
    items: [
      {
        number: "9",
        audio: `${
          import.meta.env.BASE_URL
        }audio/010---9-Citajte-i-slusajte.mp3`,
      },
    ],
  },
  {
    page: 21,
    items: [
      {
        number: "8",
        text: `2) Ti si Rus. 3) Vi ste Nemac i Italijanka. 4) Mi smo Kinez i Rus. 5) Ona je Francuskinja. 6) One su Italijanka i Nemica.`,
      },
      {
        number: "10",
        audio: `${
          import.meta.env.BASE_URL
        }audio/011---10-Slusajte-i-ponovite.mp3`,
      },
      {
        number: "11",
        audio: `${
          import.meta.env.BASE_URL
        }audio/012---11-Slusajte-i-dopunite.mp3`,
      },
      {
        number: "12",
        audio: `${import.meta.env.BASE_URL}audio/013---12-Diktat.mp3`,
      },
    ],
  },
  {
    page: 22,
    items: [
      {
        number: "13",
        audio: `${
          import.meta.env.BASE_URL
        }audio/014---13-Slusajte-i-citajte-upoznavanje.mp3`,
      },
      {
        number: "15",
        text: `1a); 2b); 3b); 4a); 5b).`,
      },
    ],
  },
  {
    page: 24,
    items: [
      {
        number: "18",
        text: `1a); 2b); За); 4a); 5b); 6b); 7a); 8a); 9b); 1Ob).`,
      },
      {
        number: "19",
        text: `1) Milica nije Francuskinja. 2) Oni nisu Pablo i Đani. 3) Ja nisam stranac. 4) Moje ime nije Elizabet. 5) Ja se ne zovem
Čarli. 6) Ne, nismo. 7) Ti nisi moja drugarica. 8) Nismo loše. 9) Ne, niste. 10) Nisam dobro.`,
      },
      {
        number: "20",
        text: `1) Ne, nije. 2) Da, jesmo. 3) Ne, nisam. 4) Da, jesam. 5) Da, jeste. 6) Ne, nisu.`,
      },
    ],
  },
  {
    page: 25,
    items: [
      {
        number: "14a",
        audio: `${
          import.meta.env.BASE_URL
        }audio/015---14a-Slusajte-i-odgovorite-prirodno..mp3`,
      },
      {
        number: "14b",
        audio: `${
          import.meta.env.BASE_URL
        }audio/016---14b-Slusajte-i-proverite.mp3`,
      },
      {
        number: "21",
        text: `drugarica, drug; strankinja, stranac; Srpkinja, Srbin; studentkinja, student; Ruskinja, Rus; Amerikanka, Amerikanac;
Italijanka, Italijan; Kineskinja, Kinez.`,
      },
      {
        number: "23",
        text: `slika 1: Izvolite. - Hvala. slika 2: Zdravo. - Dobar dan. slika 3: Ćao. Ja sam Milan. - Drago mi je. Ja sam Sara. slika
4. Ćao. - Vidimo se.`,
      },
    ],
  },
  {
    page: 27,
    items: [
      {
        number: "15",
        audio: `${
          import.meta.env.BASE_URL
        }audio/017---15-Citajte-i-slusajte-razgovori.mp3`,
      },
      {
        number: "5",
        text: `1b); 2a); За); 4b).`,
      },
      {
        number: "16",
        audio: `${import.meta.env.BASE_URL}audio/018---16-Proverite.mp3`,
      },
      {
        number: "8",
        text: `Ja nisam Nemac i ne govorim nemački odlično. Ne govorim ni engleski jezik dobro. Ali, srpski jezik ne govorim loše. Sada
ne učim srpski zato što ne živim i ne radim ovde. Ne razumem sve.`,
      },
    ],
  },
  {
    page: 28,
    items: [
      {
        number: "9",
        text: `1) Učimo srpski jezik. 2) Ne razumem srpski dobro. 3) Nisam studentkinja. 4) Vi živite ovde? 5) Boris je Nemac i radi ovde. 6)
Živi ovde zato što radi ovde. 7) Uče srpski zato što žive ovde. 8) Ti govoriš nemački jezik? 9) Ne živim ovde. 10) Zove se Jelena.`,
      },
      {
        number: "10",
        text: `b);2a); Зс); 4a); 5c).`,
      },
    ],
  },
  {
    page: 29,
    items: [
      {
        number: "17",
        audio: `${
          import.meta.env.BASE_URL
        }audio/019---17-Slusajte-i-upisite-tacno-ili-netacno.mp3`,
      },
      {
        number: "18",
        audio: `${import.meta.env.BASE_URL}audio/020---18-Sta-cujete.mp3`,
      },
      {
        number: "19",
        audio: `${
          import.meta.env.BASE_URL
        }audio/021---19-Marija-i-Viktor-razgovaraju.mp3`,
      },
    ],
  },
  {
    page: 31,
    items: [
      {
        number: "18",
        text: `1b); 2b); За; 4b); 5a; 6a); 7a).`,
      },
    ],
  },
  {
    page: 32,
    items: [
      {
        number: "20",
        audio: `${
          import.meta.env.BASE_URL
        }audio/022---20-Srbija-je-i-moja-zemlja.mp3`,
      },
      {
        number: "21",
        text: `Da li ste Vi Italijanka?; Kako se zove Vaš muž?; Da li je on Italijan?; Da li vi živite ovde?; Da li Dario dobro govori srpski?;
A Vi?; Da li je Dario profesor?; Da li ste i Vi ekonomistkinja?; Da li radite u Srbiji?; Da li volite džez?`,
      },
      {
        number: "22",
        text: `A: Zdravo. Ja se zovem Rosa. A ti? B: Ćao. Moje ime je Štefan. Da li učiš srpski jezik? A: Trenutno ne učim. Da li ti govoriš
srpski jezik dobro? B: Govorim loše, ali razumem dobro. Da li živiš ovde? A: Da, ja živim ovde, ali ne radim ovde. A ti? B: I
ja živim ovde. Ja sam student. Da li si ti studentkinja? A: Ne, nisam. Ja sam pevačica.`,
      },
      {
        number: "23",
        text: `1 ,3 , 6, 2, 5, 4.`,
      },
    ],
  },
  {
    page: 33,
    items: [
      {
        number: "24",
        text: `1) moj; 2) govorim; 3) u Srbiji; 4) zato što; 5) volimo; 6) nije; 7) dobar;`,
      },
      {
        number: "25",
        text: `1) govori, govore; 2) živim, žive; 3) voli, vole; 4) učiš, učite; 5) smo, ste; 6) razmem, raumeš; 7) radi, rade; 8) živiš, živim,
radim; 9) si, nisam, sam; 10) uče, žive.`,
      },
    ],
  },
  {
    page: 34,
    items: [
      {
        number: "21",
        audio: `${
          import.meta.env.BASE_URL
        }audio/023---Lekcija-4-MOJA-PORODICA--21-Slusajte-i-dopunite.mp3`,
      },
    ],
  },
  {
    page: 35,
    items: [
      {
        number: "22",
        audio: `${
          import.meta.env.BASE_URL
        }audio/024---22-Citajte-i-slusajte-prica-1.mp3`,
      },
      {
        number: "5",
        text: `1T; 2N; ЗТ; 4T; 5N; 6N.`,
      },
      {
        number: "7",
        text: `1) Da li oni žive u Srbiji? 2) Da li Julija radi kao profesorica? 3) Da li su za vikend zauzeti? 4) Kako se Julija i njena
porodica vide svaki dan?; 5) Šta im se sviđa u Srbiji?`,
      },
    ],
  },
  {
    page: 36,
    items: [
      {
        number: "23",
        audio: `${
          import.meta.env.BASE_URL
        }audio/025---23-Citajte-i-slusajte-prica-2.mp3`,
      },
      {
        number: "9",
        text: `1N; 2N; 3N; 4N; 5T; 6T.`,
      },
      {
        number: "11",
        text: `1) Da li Ernst i Lena žive u Srbiji? 2) Da li njegova porodica živi u Srbiji? 3) Da li je njihov posao težak? 4) Da li su često
zauzeti? 5) Šta rade kada su slobodni? 6) Šta im se sviđa u Srbiji?`,
      },
    ],
  },
  {
    page: 37,
    items: [
      {
        number: "12",
        text: `Nieno ime je Julija. Nien muž i niihova deca žive u S rbiji. Niena porodica živi daleko i oni se vide retko. Nien muž je Srbin
i niegova porodca živi u Srbiji. Oni su niihovi gosti često.`,
      },
      {
        number: "13",
        text: `Nieeovo ime je Ernst. On je Austrijanac, a nieeova žena je Srpkinja. Žive u Srbiji, zato što i Ernst i Lena rade ovde.
Niihove porodice nisu u Srbiji. Nieeova porodica živi u Austriji, a nieni roditelji, sestra i brat žive u Bosni.`,
      },
      {
        number: "14",
        text: `1a); 2b); Зс); 4b); 5a); бс).`,
      },
    ],
  },
  {
    page: 38,
    items: [
      {
        number: "16",
        text: `1) Retko smo slobodni. 2)Retko sam zauzeta. 3) Volim život ovde. 4) Ne vidimo se retko.`,
      },
      {
        number: "17",
        text: `1) kuvamo, radimo; 2) živi, radi; 3) koristi; 4) se vide; 5) slušaš; 6) se zove; 7) gledam, čitam; 8) se šetaju; 9) ručate; 10) voli.`,
      },
      {
        number: "18",
        text: `1) čitati novine; 2) korisitit internet; 3) slušati radio; 4) spavati dugo; 5) učiti srpski jezik; 6) gledati TV; 7) trenirati
pilates; 8) kuvati ručak.`,
      },
      {
        number: "24",
        audio: `${
          import.meta.env.BASE_URL
        }audio/026---24-Slusajte-i-proverite-Zovem-se-Metju.mp3`,
      },
    ],
  },
  {
    page: 39,
    items: [
      {
        number: "22",
        text: `1) ne voli da spava; 2) ne vole da čitaju; 3) volite da se šetate; 4) ne voli da gleda; 5) ne volim da kuvam; 6) voli da se
druži; 7) voliš da radiš?; 8) ne vole da ručaju; 9) ne vole da se vide; 10) volimo da slušamo.`,
      },
    ],
  },
  {
    page: 40,
    items: [
      {
        number: "25",
        audio: `${
          import.meta.env.BASE_URL
        }audio/027---25-Slusajte-i-odgovorite-prirodno-I-ja-Ja-ne.mp3`,
      },
      {
        number: "24",
        text: `Ja sam Ruskinja, a moj muž je Srbin. Naša ćerka i naš sin govore srpski i ruski odlično. Moj muž i moja deca žive u Srbiji.
Мојј roditeljj ne žive ovde. Ali, njegovi roditelji su naši gosti ponekad. Moj muž i ja smo zauzetj svaki dan, ali naša deca
nisu zauzeta.`,
      },
      {
        number: "25",
        text: `1) slobodan, zauzet; 2) velik, mali; 3) mnogo, malo; 4) često, retko; 5) daleko, blizu; 6) lak, težak; 7) uveče, ujutro.`,
      },
      {
        number: "27",
        text: `1a); 2a); 3b); 4b); 5a); ба); 7a); 8a).`,
      },
    ],
  },
  {
    page: 41,
    items: [
      {
        number: "28",
        text: `1 a/b; 2a; Зс; 4b; 5a; 6c; 7a/c.`,
      },
      {
        number: "29",
        text: `1) a; 2) ali; 3) ili; 4) i; 5) ali; б) ili; 7) a; 8) i.`,
      },
    ],
  },
  {
    page: 42,
    items: [
      {
        number: "26",
        audio: `${
          import.meta.env.BASE_URL
        }audio/028---Lekcija-5-MOJ-SVET--26-Beograd.mp3`,
      },
    ],
  },
  {
    page: 43,
    items: [
      {
        number: "3",
        text: `1N; 2T; 3N; 4N; 5T; 6T; 7N; 8T.`,
      },
      {
        number: "4",
        text: `1) Saobraćaj је haotičan. 2) Parkovi su veliki. 3) Trgovi su stari. 4) Restorani su odlični. 5) Bulevari su široki. 6) Muzeji
su zanimljivi. 7) Život je brz. 8) Ulice su duge. 9) Reke su velike. 10) Hrana je dobra. 11) Gužva je velika. 12) Ljudi su
otvoreni. 13) Zgrade su visoke.`,
      },
    ],
  },
  {
    page: 44,
    items: [
      {
        number: "27",
        audio: `${import.meta.env.BASE_URL}audio/029---27-Tri-razgovora.mp3`,
      },
    ],
  },
  {
    page: 45,
    items: [
      {
        number: "8",
        text: `1) Uvek je mir i tišina.  
2) Saobraćaj nikad nije haotičan.  
3) Život u Beogradu je lep.  
4) Malo mesto je dobro za život.  
5) Velik grad je opasan.  
6) Park je zdravo mesto.  
7) Ovde restorani nisu odlični.  
8) Ponekad je gužva.  
9) Bulevari su široki.  
10) Ulice su lepe i duge.  
11) Galerije su uvek interesantne.  
12) Reke su duge i široke.  
13) Malo mesto nikad nije opasno za život.  
14) Selo je sigurno za život.`,
      },
      {
        number: "28",
        audio: `${
          import.meta.env.BASE_URL
        }audio/030---28-Citajte-i-ponovite.mp3`,
      },
    ],
  },
  {
    page: 47,
    items: [
      {
        number: "29",
        audio: `${import.meta.env.BASE_URL}audio/031---29-Orijentacija.mp3`,
      },
    ],
  },
  {
    page: 49,
    items: [
      {
        number: "16",
        text: `1) Nikolina; 2) Markov; 3) Miloševa; 4) Jelenina; 5) Jovanovi; 6) Miličini; 7) Sarin; 8) Sinišine; 9) Đorđeva; 10) Aleksandrova.`,
      },
      {
        number: "17",
        text: `1) Beogradska; 2) srpski; 3) praška; 4) niška; 5) Nemački; б) Dunavska; 7) Subotičko; 8) Američki.`,
      },
      {
        number: "18",
        text: `1) restoran; 2) park; 3) bioskop; 4) knjižara; 5) pozorište; 6) trg; 7) biblioteka; 8) banka, 9) sportski centar; 10) pijaca.`,
      },
      {
        number: "19",
        text: `pozitivne: zdrav, interesantan, lep, mir, tišina, divan; negativne: opasan, dosadan, gužva, haotičan.`,
      },
    ],
  },
  {
    page: 50,
    items: [
      {
        number: "30",
        audio: `${
          import.meta.env.BASE_URL
        }audio/032---Lekcija-6-STA-RADIS--30-Razgovor-Jesi-li-slobodna.mp3`,
      },
      {
        number: "3",
        text: `2) za šetnju; 4) za čaj; 6) za putovanje.`,
      },
      {
        number: "31",
        audio: `${
          import.meta.env.BASE_URL
        }audio/033---31-Slusajte-razgovore-i-odgovorite.mp3`,
      },
    ],
  },
  {
    page: 51,
    items: [
      {
        number: "7",
        text: `1) Mislim da je opasno biti ronilac zato što moraš da ideš duboko u vodu.  
2) Mislim da je naporno biti policajac zato što moraš da radiš noću.  
3) Mislim da je stresno biti lekar zato što moraš da lečiš bolesne ljude.  
4) Mislim da je dosadno biti domaćica zato što moraš da budeš kod kuće.  
5) Mislim da nije dosadno biti menadžer zato što moraš da imaš uvek nove ideje.  
6) Mislim da je naporno biti domaćica zato što moraš da spremaš kuću i decu.`,
      },
    ],
  },
  {
    page: 52,
    items: [
      {
        number: "32",
        audio: `${
          import.meta.env.BASE_URL
        }audio/034---32-Zanimanja-cetiri-price.mp3`,
      },
    ],
  },
  {
    page: 53,
    items: [
      {
        number: "13",
        text: `Marija Petrović je menadžerka. Ona ima dobar posao. Mora da koristi kompjuter često. Nema uniformu, ali treba da nosi elegantno odelo. Radi mnogo, ali za vikend je slobodna. Marija ima divnu porodicu. Nema vremena da sprema sina i ćerku za školu. To radi njen muž. Kada imaju vremena, svi zajedno gledaju film ili igraju karte. Marija voli da čita knjigu uveče, kada deca spavaju.`,
      },
    ],
  },
  {
    page: 54,
    items: [
      {
        number: "33",
        audio: `${import.meta.env.BASE_URL}audio/035---33-Kuba.mp3`,
      },
      {
        number: "34",
        audio: `${import.meta.env.BASE_URL}audio/036---34-Libija.mp3`,
      },
      {
        number: "35",
        audio: `${import.meta.env.BASE_URL}audio/037---35-Srbija.mp3`,
      },
    ],
  },
  {
    page: 55,
    items: [
      {
        number: "17",
        text: `1E; 2S; 3K; 4K; 5K; 6E; 7K; 8K; 9S.`,
      },
    ],
  },
  {
    page: 56,
    items: [
      {
        number: "19",
        text: `1N; 2N; 3T; 4T; 5T; 6T; 7N.`,
      },
    ],
  },
  {
    page: 58,
    items: [
      {
        number: "21",
        text: `1) teško; 2) dosadno; 3) opasno; 4) stresno; 5) naporan; 6) lako; 7) interesantan; 8) lepo.`,
      },
      {
        number: "36",
        audio: `${
          import.meta.env.BASE_URL
        }audio/038---36-Slusajte-i-dopunite.mp3`,
      },
      {
        number: "37",
        audio: `${import.meta.env.BASE_URL}audio/039---37-Kod-direktora.mp3`,
      },
    ],
  },
  {
    page: 59,
    items: [
      {
        number: "38",
        audio: `${
          import.meta.env.BASE_URL
        }audio/040---38-Slusajte-razgovor.mp3`,
      },
      {
        number: "24",
        text: `1) Šta rade Marko i Ana?  
2) Šta radi Ana?  
3) Šta radi Marko danas?  
4) Šta oni žele da rade?  
5) Kada oni žele da idu na kafu?`,
      },
      {
        number: "27",
        text: `1) Nažalost, nemam vremena.  
2) Na sreću, ne moram.  
3) Ja sam policajac.  
4) Baš super ideja.  
5) Uvek može bolje.  
6) Još ne.`,
      },
      {
        number: "39",
        audio: `${import.meta.env.BASE_URL}audio/041---39-Ana-i-Marko.mp3`,
      },
    ],
  },
  {
    page: 61,
    items: [
      {
        number: "40",
        audio: `${
          import.meta.env.BASE_URL
        }audio/042---Lekcija-7-SRECAN-PUT--40-Sta-ovi-ljudi-rade-prvo,-drugo-i-trece.mp3`,
      },
    ],
  },
  {
    page: 62,
    items: [
      {
        number: "7",
        text: `1) da li; 2) šta; 3) kako; 4) koliko; 5) da.`,
      },
    ],
  },
  {
    page: 63,
    items: [
      {
        number: "9",
        text: `11) za nju; 2) za nas; 3) za njih; 4) za nas; 5) za vas.`,
      },
    ],
  },
  {
    page: 64,
    items: [
      {
        number: "10",
        text: `1) u; 2) na; 3) na, u; 4) u, u; 5) u; б) na; 7) na; 8) na, u; 9) u; 10) u, na.`,
      },
    ],
  },
  {
    page: 66,
    items: [
      {
        number: "41",
        audio: `${
          import.meta.env.BASE_URL
        }audio/043---41-Sta-kaze-Branislav.mp3`,
      },
      {
        number: "42",
        audio: `${
          import.meta.env.BASE_URL
        }audio/044---42-Slusajte-i-dopunite.mp3`,
      },
    ],
  },
  {
    page: 68,
    items: [
      {
        number: "43",
        audio: `${
          import.meta.env.BASE_URL
        }audio/045---43-Po-cemu-je-poznata-Srbija.mp3`,
      },
      {
        number: "20",
        text: `1) večeri; 
        2) Engleskoj; 
        3) ulici; 
        4) Tajlandu; 
        5) moru; 
        6) skupim satovima; 
        7) modernim zgradama; 
        8) njegovim
fotografijama 
9) muzičkim festivalima; 
10) poznatim mestima.`,
      },
    ],
  },
  {
    page: 69,
    items: [
      {
        number: "44",
        audio: `${
          import.meta.env.BASE_URL
        }audio/046---44-Pismo-iz-Norveske.mp3`,
      },
    ],
  },
  {
    page: 70,
    items: [
      {
        number: "45",
        audio: `${import.meta.env.BASE_URL}audio/047---45-Kuda-na-odmor.mp3`,
      },
    ],
  },
  {
    page: 72,
    items: [
      {
        number: "1",
        text: `a)3; b)1; c) 6; Č)7; Ć)2; d)4; dž)5.`,
      },
    ],
  },
  {
    page: 73,
    items: [
      {
        number: "46",
        audio: `${
          import.meta.env.BASE_URL
        }audio/048---Lekcija-8-STIL-ZIVOTA--46-Komentarisite-prirodno-Tako-je-i-kod-nas-Kod-nas-nije-tako.mp3`,
      },
    ],
  },
  {
    page: 75,
    items: [
      {
        number: "7",
        text: `kućni red; 
        porodični trenutak;
         nedeljni ručak;
          radni dan;
           popodnevni odmor.`,
      },
      {
        number: "8",
        text: `1b); 2a); 3b); 4a): 5b); 6b).`,
      },
      {
        number: "9",
        text: `1) pre supe; 2) Bez slatkiša; 3) Posle glavnog jela; 4) bez dobrog pića; 5) od jabuka; 6) od sira.`,
      },
    ],
  },
  {
    page: 76,
    items: [
      {
        number: "47",
        audio: `${import.meta.env.BASE_URL}audio/049---47-Kakva-je-kafa.mp3`,
      },
    ],
  },
  {
    page: 78,
    items: [
      {
        number: "48",
        audio: `${import.meta.env.BASE_URL}audio/050---48-U-koliko-sati.mp3`,
      },
      {
        number: "49",
        audio: `${
          import.meta.env.BASE_URL
        }audio/051---49-Rezervacija-mesta-u-restoranu.mp3`,
      },
    ],
  },
  {
    page: 79,
    items: [
      {
        number: "50",
        audio: `${
          import.meta.env.BASE_URL
        }audio/052---50-Narucivanje-u-restoranu.mp3`,
      },
    ],
  },
  {
    page: 80,
    items: [
      {
        number: "50",
        text: `Za rođendan. -» Srećan rođendan. 
        Za slavu. -> Srećna slava. 
        Za Novu godinu. -> Srećna Nova godina. 
        Za Božić. -» Srećan Božić. 
        Za Uskrs. -» Srećan Uskrs. 
        Pre puta. -»Srećan put. 
        Pre važnog posla. -» Srećno. 
        Pre jela. -» Prijatno.
        Pre pića. -» Živeli. 
        Posle venčanja. -» Čestitamo.`,
      },
    ],
  },
  {
    page: 81,
    items: [
      {
        number: "51",
        audio: `${import.meta.env.BASE_URL}audio/053---51-Nasa-slava.mp3`,
      },
      {
        number: "24",
        text: `1T; 2N; 3N; 4T; 5N; 6N; 7T.`,
      },
    ],
  },
  {
    page: 82,
    items: [
      {
        number: "25",
        text: `1) Slavi se trideset prvog decembra. 2) Slavi se sedmog januara. 3) Slavi se dvadeset sedmog janura. 4) Slavi se prvog
aprila. 5) Slavi se prvog maja. 6) Slavi se osmog marta.`,
      },
      {
        number: "26",
        text: `) kod; 2) od, do; 3) po; 4) na, u; 5) zbog; 6) na; 7) bez; 8) u; 9) za; 10) od; 11) u; 12) U; 1 3) pre; 14) posle.`,
      },
      {
        number: "27",
        text: `Ernst i Lena svake godine idu na slavu u Bosnu. Lenini roditelji slave Svetog Đorđa. Ova slava je u maiu tačnije šestog
maja. Slava Sveti Đorđe nije posna slava, ali se na slavskoi trpezi može naći riba. Lenina majka sprema posni kolač i
žito. Njen tata ide u crkvu pre ručka. Sve je spremno za goste, koji dolaze u dva sata.
Ove godine Lena i Ernst ne mogu da dođu jedan dan ranije, zbog Ernstovog posla. Dolaze па dan slave. Pre puta moraju
da kupe poklone - cveće za domaćicu i vino za domaćina. Treba da kupe i slatkiše zato što dolazi i mnogo dece.`,
      },
    ],
  },
  {
    page: 83,
    items: [
      {
        number: "28",
        text: `1) svoju; 2) svoj; 3) svoju, svog; 4) svoje; 5) svoje; 6) svoju; 7) svoj; 8) svoje; 9) svoje; 10) svoje, svoje.`,
      },
      {
        number: "52",
        audio: `${import.meta.env.BASE_URL}audio/054---52-Razgovor-o-slavi.mp3`,
      },
    ],
  },
  {
    page: 85,
    items: [
      {
        number: "5",
        text: `A: 1) nama; 2) njoj; 3) njemu; 4) meni; 5) njima; B: 1) ih; 2) ga; 3) je; 4) nas; 5) vas.`,
      },
    ],
  },
  {
    page: 86,
    items: [
      {
        number: "6",
        text: `velik, veći, najveći; dobar, bolji, najbolji; miran, mirniji, najmirniji; mali, manji, najmanji; važan, važniji, najvažniji, loš, gori,
najgori; lep, lepši, najlepši.`,
      },
      {
        number: "7",
        text: `lb ); 2a); За); 4b); 5c).`,
      },
      {
        number: "8",
        text: `1) raskošan; 2) bogat; 3) uspešan; 4) nepoznat; 5) nesrećan; 6) nekvalitetan.`,
      },
      {
        number: "9",
        text: `1) skromna, raskošna; 2) siromašna, bogata; 3) neuspešna, uspešna; 4) poznata, nepoznata; 5) nesrećan; 6) kvalitetna,
nekvalitetna.`,
      },
    ],
  },
  {
    page: 87,
    items: [
      {
        number: "10",
        text: `mnogo, više, najviše; malo, manje, najmanje; dobro, bolje, najbolje; loše, gore, najgore; lepo, lepše, najlepše; mirno,
mirnije, najmirnije; skromno, skromnije, najskromnije; uspešno, uspešnije, najuspešnije; srećno, srećnije, najsrećnije;
zdravo, zdravije, najzdravije; važno, važnije, najvažnije; kvalitetno, kvalitetnije, najkvalitetnije.`,
      },
      {
        number: "11",
        text: `1) najvažnije; 2) Bolje; 3) najgore; 4) Najlepše; 5) lakše; 6) najzdravije; 7) srećnije; 8) najmanje; 9) najviše; 10)
najkvalitetnije.`,
      },
    ],
  },
  {
    page: 88,
    items: [
      {
        number: "14",
        text: `zaraditi + novac, bogatstvo; promeniti + novac, stil života, avion, bicikl, (kuću za siromašne); dati + novavac,
bogatstvo, avion, kuću za siromašne, bicikl; snimiti + film; voziti + avion, bicikl; otvoriti + kuću za siromašne; kupiti +
avion, kuću za siromašne, bicikl`,
      },
    ],
  },
  {
    page: 89,
    items: [
      {
        number: "16",
        text: `Poznato je da su uspešni filmski reditelji i glumci bogati. Ni Tom Šadijak, holivudski reditelj, nije bio drugačiji. Radio je
veoma uspešno па filmu i postao bogat i poznat. On do sada nije živeo skromno ali je sada uradio nešto neobično -
promenio je stil života. Tom ne živi više raskošno. već deli svoje bogatstvo drugima. Živi neobično i srećan je.`,
      },
    ],
  },
  {
    page: 90,
    items: [
      {
        number: "53",
        audio: `${
          import.meta.env.BASE_URL
        }audio/055---Lekcija-9-UPOMOC--53-Prva-prica-Intervju-za-posao.mp3`,
      },
    ],
  },
  {
    page: 91,
    items: [
      {
        number: "54",
        audio: `${
          import.meta.env.BASE_URL
        }audio/056---54-Druga-prica-Putovanje.mp3`,
      },
      {
        number: "55",
        audio: `${
          import.meta.env.BASE_URL
        }audio/057---55-Komentarisite-prirodno.Tako-je-Nije-tako.mp3`,
      },
    ],
  },
  {
    page: 92,
    items: [
      {
        number: "26",
        text: `A: 1) Čekajmo. 2) Pazite kada putujete. 3) Slušaj mamu. 4) Zaboravite sve. 5) Požurimo. 6) Dođi u pet.
B: 1) Nemoj gledati ovaj film. 2) Nemojte kasniti. 3) Nemojmo paničiti. 4) Nemojte čekati dugo. 5) Nemojte doći sad.
6) Nemoj doći kasno. 7) Nemojmo zaboraviti`,
      },
    ],
  },
  {
    page: 93,
    items: [
      {
        number: "27",
        text: `1ć; 2c; 3Č; 4đ; 5a; 6d; 7f; 8dž; 9) b; 10) f.`,
      },
      {
        number: "28",
        text: `1) zatvoriti; 2) zapamtiti; 3) otključati; 4) izlaziti; 5) upaliti; 6) krasti.`,
      },
    ],
  },
  {
    page: 95,
    items: [
      {
        number: "56",
        audio: `${import.meta.env.BASE_URL}audio/058---56-Sta-cujete.mp3`,
      },
      {
        number: "31",
        text: `1) otvorim; 2) zaključajte; 3) zatvoriti; 4) otvorim; 5) uključim.`,
      },
      {
        number: "35",
        text: `1) nikog; 2) neko; 3) nešto; 4) ništa; 5) nekog; 6) nikog; 7) ništa; 8) nekog; 9) ništa, nešto; 10) Neko.`,
      },
    ],
  },
  {
    page: 96,
    items: [
      {
        number: "57",
        audio: `${
          import.meta.env.BASE_URL
        }audio/059---57-Lopov-u-penziji-daje-savete.mp3`,
      },
      {
        number: "37",
        text: `1T; 2T; 3N; 4T; 5N; 6T; 7N; 8Т.`,
      },
    ],
  },
  {
    page: 97,
    items: [
      {
        number: "58",
        audio: `${
          import.meta.env.BASE_URL
        }audio/060---58-Razgovor-Lose-vesti.mp3`,
      },
    ],
  },
  {
    page: 98,
    items: [
      {
        number: "2",
        text: `а) 0 °С; b) -1 5 °С; с) 25 °С; č) 40 °С; ć) 1 5 °С; d) 5 °С`,
      },
      {
        number: "3",
        text: `1) Pada kiša i sija sunce. 2) Pada kiša i pada sneg. 3) Sunce sija, kiša pada. 4) Duva vetar, sunce sija. Duva vetar i pada sneg.`,
      },
    ],
  },
  {
    page: 99,
    items: [
      {
        number: "8",
        text: `1 a/b; 2b/c; За/с; 4a/b; 5b/c; 6a/c.`,
      },
    ],
  },
  {
    page: 100,
    items: [
      {
        number: "59",
        audio: `${
          import.meta.env.BASE_URL
        }audio/061---Lekcija-10-KAKO-JE-KOD-VAS--59-Boris.mp3`,
      },
      {
        number: "60",
        audio: `${import.meta.env.BASE_URL}audio/062---60-Ana.mp3`,
      },
      {
        number: "61",
        audio: `${import.meta.env.BASE_URL}audio/063---61-Jovana-i-Marko.mp3`,
      },
      {
        number: "10",
        text: `1)J/M; 2) A; 3 )B; 4)A; 5) J/M; 6)B; 7)A; 8)J/M; 9)A`,
      },
    ],
  },
  {
    page: 102,
    items: [
      {
        number: "62",
        audio: `${
          import.meta.env.BASE_URL
        }audio/064---62-Omiljeno-godisnje-doba.mp3`,
      },
      {
        number: "16",
        text: `1) toplija; 2) kraći; 3) kišovitiji; 4) hladniji, 5) lepše; 6) duži.`,
      },
    ],
  },
  {
    page: 103,
    items: [
      {
        number: "63",
        audio: `${import.meta.env.BASE_URL}audio/065---63-Nevreme.mp3`,
      },
      {
        number: "18",
        text: `1 T ; 2 N ; 3 N ; 4 N ; 5 T ; 6 T ; 7 N ; 8 N .`,
      },
    ],
  },
  {
    page: 104,
    items: [
      {
        number: "19",
        text: `dobro, bolje, najbolje; loše, gore, najgore; toplo, toplije, najtoplije; hladno, hladnije, najhladnije; opasno, opasnije,
najopasnije; sigurno, sigurnije, najsigurnije.`,
      },
      {
        number: "64",
        audio: `${
          import.meta.env.BASE_URL
        }audio/066---64-Kakvo-ce-vreme-biti-u-Srbiji.mp3`,
      },
      {
        number: "65",
        audio: `${
          import.meta.env.BASE_URL
        }audio/067---65-Vremenska-prognoza.mp3`,
      },
    ],
  },
  {
    page: 107,
    items: [
      {
        number: "26",
        text: `1) Ostaće kod kuće. 2) Ješćemo lakšu hranu. 3) Pomoći će mu. 4) Neće biti па poslu sutra. 5) Daće mu lekove sutra. 6)
Javiću ti. 7) Nećete proći dugo. 8) Mirovaćete dve nedelje.`,
      },
      {
        number: "27",
        text: `1 a/c; 2a/b; За/b; 4a; 5c; 6a/b; 7b/c; 8a; 9a.`,
      },
    ],
  },
  {
    page: 108,
    items: [
      {
        number: "29",
        text: `1) Boli je desna ruka. 2) Ne boli me više glava. 3) Boli je glava jako. 4) Boli ga zub jako. 5) Boli ih stomak.`,
      },
      {
        number: "30",
        text: `1) je; 2) me, mi; 3) vam; 4) ga; 5) me; 6) ti; 7) im; 8) nas.`,
      },
    ],
  },
  {
    page: 109,
    items: [
      {
        number: "66",
        audio: `${import.meta.env.BASE_URL}audio/068---66-Pet-razgovora.mp3`,
      },
    ],
  },
  {
    page: 110,
    items: [
      {
        number: "1",
        text: `visoka, niska, stara, mlada, široka, uska, tamna, svetla, velika, mala, mršava, debela, duga, kratka, krupna, sitna, bela, crna.`,
      },
    ],
  },
  {
    page: 113,
    items: [
      {
        number: "9",
        text: `1) Zene nose haljine. 2) Žene ne nose naočare. 3) Žene nemaju šešire. 4) Muškarci ne nose kape. 5) Muškarci nose
pantalone. 6) Muškarci drže cveće i cigaru.`,
      },
      {
        number: "10",
        text: `a)N; b)T; v)T; g) N; d) T; đ) T; e) T; ž) N; z) N.`,
      },
    ],
  },
  {
    page: 114,
    items: [
      {
        number: "67",
        audio: `${
          import.meta.env.BASE_URL
        }audio/069---Lekcija-11-ODELO-(NE)-CINI-COVEKA--67-Moda-nekada.mp3`,
      },
    ],
  },
  {
    page: 115,
    items: [
      {
        number: "68",
        audio: `${import.meta.env.BASE_URL}audio/070---68-Moda-sada.mp3`,
      },
    ],
  },
  {
    page: 116,
    items: [
      {
        number: "69",
        audio: `${
          import.meta.env.BASE_URL
        }audio/071---69-Kako-izgledaju-ovi-ljudi.mp3`,
      },
      {
        number: "70",
        audio: `${
          import.meta.env.BASE_URL
        }audio/072---70-Koji-opis-ide-uz-koju-sliku.mp3`,
      },
    ],
  },
  {
    page: 117,
    items: [
      {
        number: "71",
        audio: `${
          import.meta.env.BASE_URL
        }audio/073---71-Razgovor-Na-snizenju.mp3`,
      },
    ],
  },
  {
    page: 118,
    items: [
      {
        number: "23",
        text: `3) Žena sa šeširom. 4) Muškarac sa naočarima; 5) Muškarac u belim patikama. 6) Ljudi sa kišobranima. 7) Muškarac sa
šalom i kapom. 8) Ljudi u dugačkim kaputima. 9) Žena u belim pantalonama. 10) Žena sa podignutom kosom.`,
      },
      {
        number: "24",
        text: `nizak, visok, debeo, mršav, star, mlad, širok, uzak, kratak, dug, taman, svetao, velik, mali.`,
      },
    ],
  },
  {
    page: 119,
    items: [
      {
        number: "25",
        text: `1) niži; 2) kraću; 3) veći; 4) mršavija; 5) starija; 6) tamniju; 7) krupnije; 8) šire.`,
      },
      {
        number: "72",
        audio: `${
          import.meta.env.BASE_URL
        }audio/074---72-Odgovorite-prirodno.mp3`,
      },
      {
        number: "73",
        audio: `${import.meta.env.BASE_URL}audio/075---73-Kako-mi-stoji.mp3`,
      },
    ],
  },
  {
    page: 121,
    items: [
      {
        number: "74",
        audio: `${
          import.meta.env.BASE_URL
        }audio/076---Lekcija-12-HOTEL-S-PET-ZVEZDICA--74-Slusajte-opise-osoba.mp3`,
      },
    ],
  },
  {
    page: 122,
    items: [
      {
        number: "75",
        audio: `${
          import.meta.env.BASE_URL
        }audio/077---75-Tradicionalna-srpska-kuca.mp3`,
      },
      {
        number: "7",
        text: `1N; 2T; 3N; 4T; 5T; 6N; 7T; 8Т; 9N; 10Т.`,
      },
    ],
  },
  {
    page: 123,
    items: [
      {
        number: "8",
        text: `1) na, u; 2) do; 3) na, iza; 4) od; 5) na; 6) na, od; 7) od, od.`,
      },
      {
        number: "76",
        audio: `${import.meta.env.BASE_URL}audio/078---76-Exit-festival.mp3`,
      },
    ],
  },
  {
    page: 124,
    items: [
      {
        number: "13",
        text: `Izvolite.; Koliko biste ostali?; Koliko košta noćenje?; Ne, ne, u redu je.; Imate li internet?; I još nešto.; Da, doplaćuje se.`,
      },
    ],
  },
  {
    page: 125,
    items: [
      {
        number: "15",
        text: `švedski sto; pun pansion; soba sa pogledom; kontinentalni doručak; cena po osobi; bežični internet; kablovska televizija;
parking mesto.`,
      },
    ],
  },
  {
    page: 126,
    items: [
      {
        number: "18",
        text: `1N; 2N; 3T; 4T; 5T; 6N; 7N; 8N.`,
      },
    ],
  },
  {
    page: 128,
    items: [
      {
        number: "23",
        text: `1a) ; 2b); Зс); 4b); 5a).`,
      },
    ],
  },
  {
    page: 129,
    items: [
      {
        number: "24",
        text: `1) se selila, se preselila; 2) promenim, menjao/-la; 3) su sagradili, gradim; 4) nudi, su ponudili; 5) platim, plaćaš; 6) biram,
izabrao/-la bih; 7) ste proveli, provodimo; 8) sednete, sedim.`,
      },
      {
        number: "25",
        text: `1) tebe, mene; 2) nas; 3) njega; 4) nje; 5) njih; 6) vas.`,
      },
      {
        number: "26",
        text: `1) kojem/kom; 2) kojom; 3) koju; 4) kojeg/kog; 5) kojima; б) kojoj; 7) koje; 8) koje; 9) koji; 10) kojoj.`,
      },
    ],
  },
  {
    page: 130,
    items: [
      {
        number: "1",
        text: `jutro, Dobro jutro. / dan, Dobar dan. / veče, Dobro veče; Laku noć.`,
      },
      {
        number: "2",
        text: `1) sam; 2) ste; 3) si; 4) su; 5) je; 6) smo; 7) je; 8) su.`,
      },
      {
        number: "3",
        text: `1) nije; 2) nije; 3) nisam; 4) nisu; 5) nisu; 6) niste; 7) nismo; 8) nisi.`,
      },
      {
        number: "4",
        text: `1) Da li ste vi Miloš i Sara? 2)Da li je ona Milica? 3) Da li su one Milica i Sara? 4) Da li je on Miloš? 5) Da li si ti Boris? 6)
Da li su oni Miloš i Boris? 7) Da li si ti Ana? 8) Da li ste vi Sara i Ana?`,
      },
    ],
  },
  {
    page: 131,
    items: [
      {
        number: "1",
        audio: `${
          import.meta.env.BASE_URL
        }audio/079---VEZBANKA--Lekcija-1-DOBAR-DAN--1-Slusajte-i-odgovorite-prirodno.mp3`,
      },
      {
        number: "6",
        text: `B: novčanik; C: stolica; Č: mobilni telefon; Ć: ključ; D: knjiga; DŽ: torba; Đ: kompjuter; E: pasoš.`,
      },
      {
        number: "7",
        text: `1) Šta je ovo? Ovo su ključ i novčanik. 2) Šta je ovo? Ovo je mobilni telefon. 3) Šta je ovo? Ovo je kompjuter. 4) Šta je
ovo? Ovo su novac i pasoš. 5) Šta je ovo? Ovo je torba. 6) Šta je ovo? Ovo su novčanik i novac.`,
      },
    ],
  },
  {
    page: 132,
    items: [
      {
        number: "8",
        text: `1) Ovo nije torba. 2) Ja sam Marija. 3) Oni su Miloš i Marija. 4) Da li ste Vi profesor? 5) Mi smo dobro. 6) Ovo su knjiga i
kompjuter. 7) Kako ste vi? 8) Ona je odlično.`,
      },
      {
        number: "2",
        audio: `${import.meta.env.BASE_URL}audio/080---2-Proverite.mp3`,
      },
    ],
  },
  {
    page: 133,
    items: [
      {
        number: "3",
        audio: `${
          import.meta.env.BASE_URL
        }audio/081---Lekcija-2-DOBRODOSLI--3-Slusajte-i-proverite.mp3`,
      },
      {
        number: "4",
        audio: `${
          import.meta.env.BASE_URL
        }audio/082---4-Patrik-i-Marko-razgovaraju.mp3`,
      },
      {
        number: "5",
        text: `1 T; 2 T; 3 N; 4 T; 5 N; 6 T.`,
      },
      {
        number: "5",
        audio: `${import.meta.env.BASE_URL}audio/083---5-Diktat.mp3`,
      },
    ],
  },
  {
    page: 134,
    items: [
      {
        number: "8",
        text: `1) Da li ste Vi Aleks? - Jesam. 2) Da li ste Vi strankinja? - Jesam. 3) Da li ste vi Nemica? - Nisam.`,
      },
      {
        number: "9",
        text: `1) Da li si ti Mišel? - Nisam. 2) Da li si ti stranac? - Jesam. 3) Da li si ti Englez? - Nisam.`,
      },
      {
        number: "10",
        text: `1) Nemica; 2) Francuz, Italijan; 3) Francuskinja; 4) Ruskinja; 5) Amerikanka; 6) Engleskinja; 7) Srpkinja; 8) Srbin;
9) Mađarica; 10) Japanka; 11) Kinez; 12) Špankinja,`,
      },
      {
        number: "11",
        text: `a) smo, je, je, sam; b) je, nije, je, je; c) je, sam, je, nije, je.`,
      },
    ],
  },
  {
    page: 135,
    items: [
      {
        number: "1",
        text: `raditi: radim, radiš, radi, radimo, radite, rade;
         živeti: živim živiš, živi, živimo, živite, žive;
          učiti: učim, učiš, uči, učimo, učite, uče;
          voleti: volim, voliš, voli, volimo, volite, vole.`,
      },
      {
        number: "2",
        text: `1) Kako se zoveš? 2) Da li razume srpski? 3) Loše sam. 4) Dobro smo. 5) Razumeš srpski. 6) Da li govorite engleski?
7) Nisam Srbin. 8) Ne govoriš francuski. 9) Da li živite ovde? 10) Šta radiš?`,
      },
      {
        number: "3",
        text: `muško: lekar, diplomata, inženjer; žensko: novinarka, studentkinja, kuvarica, pevačica, profesorica, ekonomistkinja.`,
      },
    ],
  },
  {
    page: 136,
    items: [
      {
        number: "6",
        audio: `${
          import.meta.env.BASE_URL
        }audio/084---Lekcija-3-RAZUMES-LI--6-Slusajte-i-odgovorite-prirodno.mp3`,
      },
      {
        number: "5",
        text: `1) ja se zovem Ana. 2) Da li ti govoriš nemački? 3) Razumete li? 4) Ja učim srpski zato što radim ovde. 5) On je moj student.
6) Da li je ona novinarka? 7) Kuvarica sam. 8) Nisam novinar. 9) Zovem se Miloš. 10) Ja ne govorim srpski dobro.`,
      },
      {
        number: "7",
        text: `1) Vi radite kao inženjeri. 2) One rade kao lekarke. 3) Mi smo policajci. 4) Oni su ekonomisti. 5) Mi smo profesorice.
6) One rade kao diplomatkinje. 7) Vi ste kuvarice. 8) Oni rade kao novinari.`,
      },
    ],
  },
  {
    page: 137,
    items: [
      {
        number: "7",
        audio: `${
          import.meta.env.BASE_URL
        }audio/085---7-Slusajte-i-proverite.mp3`,
      },
      {
        number: "8",
        audio: `${
          import.meta.env.BASE_URL
        }audio/086---8-Ko-ovo-kaze,-Ana-ili-Luka.mp3`,
      },
      {
        number: "10",
        text: `1)A; 2)L; 3)L; 4)L, 5)A; 6)L; 7)A.`,
      },
      {
        number: "12",
        text: `1) radimo; 2) govori; 3) vole; 4) žive, rade; 5) razumem; б) učite; 7) radiš; 8) žive; 9) govorim; 10) razumete.`,
      },
    ],
  },
  {
    page: 138,
    items: [
      {
        number: "1",
        text: `gledati: gledam, gledaš, gleda, gledamo, gledate, gledaju;
         čitati: čitam, čitaš, čita, čitamo, čitate, čitaju; 
         slušati: slušam, slušaš, sluša, slušamo, slušate, slušaju; 
         šetati se: ja se šetam, ti se šetaš, on se šeta, mi se šetamo, vi se šetate, on se šetaju.`,
      },
      {
        number: "2",
        text: `Nieno ime je Karen. Niena porodica živi u Srbiji zato što nien tata radi ovde. Niena mama ne radi, a nien brat studira.
Nieni prijatelji žive ovde.`,
      },
      {
        number: "3",
        text: `1) njegova; 2) njegova; 3) njegov; 4) njegovi.`,
      },
      {
        number: "9",
        audio: `${
          import.meta.env.BASE_URL
        }audio/087---Lekcija-4-MOJA-PORODICA--9-Moja-porodica.mp3`,
      },
    ],
  },
  {
    page: 139,
    items: [
      {
        number: "5",
        text: `slušati radio; gledati TV/film; trenirati karate/pilates; učiti srpski jezik; čitati novine; ručati u restoranu/kod kuće; kuvati
ručak.`,
      },
      {
        number: "6",
        text: `1) čita; 2) kuvaju; 3) studiramo; 4) slušate; 5) ne spava; 6) se šetaju; 7) igra; 8) gledaš; 9) gledamo; 10) čitam.`,
      },
      {
        number: "7",
        text: `1) voli da se šeta; 2) vole da žive; 3) vole da gledaju; 4) ne volimo da spavamo; 5) voliš da kuvaš; 6) vole da uče; 7) volite
da trenirate; 8) voli da ruča; 9) ne volim da koristim; 10) vole da slušaju.`,
      },
      {
        number: "10",
        audio: `${import.meta.env.BASE_URL}audio/088---10-Boris-prica.mp3`,
      },
    ],
  },
  {
    page: 140,
    items: [
      {
        number: "10",
        text: `1) zauzet; 2) daleko; 3) mala, velika; 4) težak; 5) slobodni; 6) ujutro; 7) lak; 8) uveče.`,
      },
      {
        number: "11",
        text: `1) kod kuće; 2) zajedno; 3) Tada; 4) daleko; 5) ovde; 6) u restoranu; 7) dugo.`,
      },
      {
        number: "12",
        text: `1) ili; 2) a; 3) I; 4) a; 5) i; 6) ili; 7) a; 8) ali; 9) I; 10) a.`,
      },
    ],
  },
  {
    page: 141,
    items: [
      {
        number: "13",
        text: `1) a/b; 2) c; 3) a; 4) b; 5) a; 6) b; 7) a/c; 8) a.`,
      },
    ],
  },
  {
    page: 142,
    items: [
      {
        number: "11",
        audio: `${
          import.meta.env.BASE_URL
        }audio/089---Lekcija-5-MOJ-GRAD--11-Proverite.-a.Novi-Sad-b.Nis.mp3`,
      },
    ],
  },
  {
    page: 144,
    items: [
      {
        number: "12",
        audio: `${import.meta.env.BASE_URL}audio/090---12-Razgovori.mp3`,
      },
    ],
  },
  {
    page: 145,
    items: [
      {
        number: "13",
        audio: `${import.meta.env.BASE_URL}audio/091---13-Price-1,-2-i-3.mp3`,
      },
    ],
  },
  {
    page: 148,
    items: [
      {
        number: "14",
        audio: `${
          import.meta.env.BASE_URL
        }audio/092---Lekcija-6-STA-RADIS--14-Sta-je-tacno-za-Vas.mp3`,
      },
    ],
  },
  {
    page: 153,
    items: [
      {
        number: "15",
        audio: `${
          import.meta.env.BASE_URL
        }audio/093---Lekcija-7-SRECAN-PUT--15-Pismo-iz-Kanade.mp3`,
      },
    ],
  },
  {
    page: 157,
    items: [
      {
        number: "16",
        audio: `${
          import.meta.env.BASE_URL
        }audio/094---Lekcija-8-STIL-ZIVOTA--16-Moja-radna-nedelja.mp3`,
      },
    ],
  },
  {
    page: 158,
    items: [
      {
        number: "17",
        audio: `${
          import.meta.env.BASE_URL
        }audio/095---17-Razgovor-u-restoranu.mp3`,
      },
      {
        number: "18",
        audio: `${import.meta.env.BASE_URL}audio/096---18-Gosti-na-veceri.mp3`,
      },
    ],
  },
  {
    page: 161,
    items: [
      {
        number: "19",
        audio: `${
          import.meta.env.BASE_URL
        }audio/097---19-Odgovorite-prirodno.mp3`,
      },
    ],
  },
  {
    page: 168,
    items: [
      {
        number: "20",
        audio: `${
          import.meta.env.BASE_URL
        }audio/098---Lekcija-9-UPOMOC--20-Vasilije-Andrija-Milica.mp3`,
      },
    ],
  },
  {
    page: 169,
    items: [
      {
        number: "21",
        audio: `${
          import.meta.env.BASE_URL
        }audio/099---21-Postavite-pitanja.mp3`,
      },
    ],
  },
  {
    page: 170,
    items: [
      {
        number: "22",
        audio: `${
          import.meta.env.BASE_URL
        }audio/100---Lekcija-10-KAKO-JE-KOD-VAS--22-Zivot-u-Njujorku.mp3`,
      },
    ],
  },
  {
    page: 171,
    items: [
      {
        number: "23",
        audio: `${import.meta.env.BASE_URL}audio/101---23-Kod-doktora.mp3`,
      },
    ],
  },
  {
    page: 173,
    items: [
      {
        number: "24",
        audio: `${
          import.meta.env.BASE_URL
        }audio/102---24-Kakvo-ce-vreme-biti-sutr-u-Srbiji.mp3`,
      },
    ],
  },
  {
    page: 175,
    items: [
      {
        number: "25",
        audio: `${
          import.meta.env.BASE_URL
        }audio/103---Lekcija-11-ODELO-(NE)-CINI-COVEKA--25-Kako-izgledaju-ovi-ljudi.mp3`,
      },
    ],
  },
  {
    page: 178,
    items: [
      {
        number: "26",
        audio: `${
          import.meta.env.BASE_URL
        }audio/104---26-Kao-filmska-zvezda.mp3`,
      },
    ],
  },
  {
    page: 184,
    items: [
      {
        number: "27",
        audio: `${
          import.meta.env.BASE_URL
        }audio/105---Lekcija-12-HOTEL-S-PET-ZVEZDICA--27-Trazim-stan.mp3`,
      },
    ],
  },
  {
    page: 184,
    items: [
      {
        number: "28",
        audio: `${import.meta.env.BASE_URL}audio/106---28-Prica-1.mp3`,
      },
      {
        number: "29",
        audio: `${import.meta.env.BASE_URL}audio/107---29-Prica-2.mp3`,
      },
      {
        number: "30",
        audio: `${import.meta.env.BASE_URL}audio/108---30-Prica-3.mp3`,
      },
    ],
  },
  {
    page: 187,
    items: [
      {
        number: "31",
        audio: `${
          import.meta.env.BASE_URL
        }audio/109---31-Glasovi-i-pisma-srpskog-jezika.mp3`,
      },
      {
        number: "32",
        audio: `${
          import.meta.env.BASE_URL
        }audio/110---32-Slusajte-i-ponovite.mp3`,
      },
    ],
  },
  {
    page: 188,
    items: [
      {
        number: "33",
        audio: `${import.meta.env.BASE_URL}audio/111---33-Cirilica.mp3`,
      },
      {
        number: "34",
        audio: `${import.meta.env.BASE_URL}audio/112---34-Prica-o-cirilici.mp3`,
      },
    ],
  },
  {
    page: 189,
    items: [
      {
        number: "35",
        audio: `${
          import.meta.env.BASE_URL
        }audio/113---35-Vokali-A,-E,-I,-O,-U.mp3`,
      },
      {
        number: "36",
        audio: `${
          import.meta.env.BASE_URL
        }audio/114---36-Glasovi-koji-se-izgovaraju-uz-osmeh-C,-DJ,-S,-Z,-C,-LJ,-NJ.mp3`,
      },
      {
        number: "37",
        audio: `${
          import.meta.env.BASE_URL
        }audio/115---37-Glasovi-koji-se-izgovaraju-bez-osmeha-C,-DZ,-S,-Z.mp3`,
      },
      {
        number: "38",
        audio: `${
          import.meta.env.BASE_URL
        }audio/116---38-Glasovi-R,-L,-D,-T,-S,-Z,-S,-C.mp3`,
      },
    ],
  },
  {
    page: 190,
    items: [
      {
        number: "39",
        audio: `${import.meta.env.BASE_URL}audio/117---39-Dopunite-H,-J,-G.mp3`,
      },
      {
        number: "40",
        audio: `${import.meta.env.BASE_URL}audio/118---40-Dopunite-C-ili-C.mp3`,
      },
      {
        number: "41",
        audio: `${import.meta.env.BASE_URL}audio/119---41-DJ-ili-DZ.mp3`,
      },
      {
        number: "42",
        audio: `${import.meta.env.BASE_URL}audio/120---42-S-ili-S.mp3`,
      },
      {
        number: "43",
        audio: `${import.meta.env.BASE_URL}audio/121---43-C-ili-S.mp3`,
      },
      {
        number: "44",
        audio: `${import.meta.env.BASE_URL}audio/122---44-Z-ili-S.mp3`,
      },
      {
        number: "45",
        audio: `${import.meta.env.BASE_URL}audio/123---45-Z-ili-Z.mp3`,
      },
      {
        number: "46",
        audio: `${import.meta.env.BASE_URL}audio/124---46-L-ili-LJ.mp3`,
      },
      {
        number: "47",
        audio: `${import.meta.env.BASE_URL}audio/125---47-N-ili-NJ.mp3`,
      },
    ],
  },
  {
    page: 191,
    items: [
      {
        number: "48",
        audio: `${
          import.meta.env.BASE_URL
        }audio/126---48-Napisite-cirilicom.mp3`,
      },
      {
        number: "49",
        audio: `${
          import.meta.env.BASE_URL
        }audio/127---49-Konsonanti-C,-C,-DZ,-C,-DJ.mp3`,
      },
      {
        number: "50",
        audio: `${
          import.meta.env.BASE_URL
        }audio/128---50-Konsonanti-S,-Z,-S,-Z,-F,-H.mp3`,
      },
    ],
  },
  {
    page: 192,
    items: [
      {
        number: "51",
        audio: `${
          import.meta.env.BASE_URL
        }audio/129---51-Konsonanti-L,-LJ,-R,-M,-N,-NJ,-J,-V.mp3`,
      },
      {
        number: "52",
        audio: `${
          import.meta.env.BASE_URL
        }audio/130---52-Konsonanti-B,-P,-D,-T,-G,-K.mp3`,
      },
      {
        number: "53",
        audio: `${
          import.meta.env.BASE_URL
        }audio/131---53-Sta-cujete,-zaokruzite.mp3`,
      },
    ],
  },
];
