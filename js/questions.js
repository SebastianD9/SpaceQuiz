const myQuestions = [
    {
      question: "Jak nazywa się urządzenie wytwarzające spójną wiązkę promieniowania w zakresie mikrofal?",
      answers: {
        a: "Blaster",
        b: "Maser",
        c: "Laser",
        d: "Mauser"
      },
      correctAnswer: "b"
    },
    {
      question: "Ile jest planet w Układzie Słonecznym?",
      answers: {
        a: "8",
        b: "9",
        c: "4",
        d: "7"
      },
      correctAnswer: "a"
    },
    {
      question: "Ile księżyców ma Mars?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4"
      },
      correctAnswer: "b"
    },
    {
      question: "Która planeta jest nazywana Czerwoną Planetą?",
      answers: {
        a: "Mars",
        b: "Jowisz",
        c: "Ziemia",
        d: "Wenus"
      },
      correctAnswer: "a"
    },
    {
      question: "Jak nazywa się pierwszy statek kosmiczny, który opuścił Układ Słoneczny?",
      answers: {
        a: "Apollo 11",
        b: "New Horizons",
        c: "Voyager 1",
        d: "Wostok 1"
      },
      correctAnswer: "c"
    },
    {
      question: "Kto jest autorem równań określających prawdopodobieństwo istnienia inteligentnego życia na innych planetach?",
      answers: {
        a: "George Maxwell",
        b: "Marvin Minsky",
        c: "Frank Drake",
        d: "Roger Penrose"
      },
      correctAnswer: "c"
    },
    {
      question: "Kto był pierwszym człowiekiem w przestrzeni kosmicznej?",
      answers: {
        a: "Jurij Gagarin",
        b: "Mirosław Hermaszewski",
        c: "Neil Armstrong",
        d: "Buzz Aldrin"
      },
      correctAnswer: "a"
    },
    {
      question: "Za co Albert Einstein otrzymał nagrodę Nobla?",
      answers: {
        a: "Efekt fotoelektryczny zewnętrzny",
        b: "Efekt fotoelektryczny wewnętrzny",
        c: "Szczególna Teoria Względności",
        d: "Ogólna Teoria Względności"
      },
      correctAnswer: "a"
    },
    {
      question: "Jaki samochód znajduje się w przestrzeni kosmicznej? (stan na 2025 rok)",
      answers: {
        a: "Tesla Cybertruck",
        b: "Tesla Model S",
        c: "Tesla Model X",
        d: "Tesla Roadster"
      },
      correctAnswer: "d"
    },
    {
      question: "Kto jest obecnie CEO OpenAI?",
      answers: {
        a: "Elon Musk",
        b: "Sam Altman",
        c: "Ilya Sutskever",
        d: "Greg Brockman"
      },
      correctAnswer: "b"
    },
    {
      question: "Które z planet Układu Słonecznego wirują w kierunku przeciwnym do pozostałych?",
      answers: {
        a: "Ziemia i Mars",
        b: "Mars i Merkury",
        c: "Uran i Wenus",
        d: "Jowisz i Saturn"
      },
      correctAnswer: "c"
    },
    {
      question: "Która planeta Układu Słonecznego obraca się najszybciej wokół własnej osi?",
      answers: {
        a: "Neptun",
        b: "Saturn",
        c: "Jowisz",
        d: "Wenus"
      },
      correctAnswer: "c"
    },
    {
      question: "Która planeta Układu Słonecznego obraca się najwolniej wokół własnej osi?",
      answers: {
        a: "Wenus",
        b: "Ziemia",
        c: "Mars",
        d: "Merkury"
      },
      correctAnswer: "a"
    },
    {
      question: "Wskaż prędkość, która może być większa od prędkości światła:",
      answers: {
        a: "Prędkość grupowa",
        b: "Prędkość fazowa",
        c: "Prędkość dźwięku",
        d: "Prędkość ucieczki"
      },
      correctAnswer: "b"
    },
    {
      question: "Jaki wzór określa przyrost prędkości rakiety w wyniku działania napędu rakietowego w próżni?",
      answers: {
        a: "Równanie Obertha",
        b: "Równanie Hohmanna",
        c: "Równanie Tsiolkowskiego z oporem powietrza",
        d: "Wzór Ciołkowskiego"
      },
      correctAnswer: "d"
    },
    {
      question: "Jak nazywała się międzyplanetarna misja mająca na celu wykazanie przydatności jonowego silnika NSTAR typu GIT?",
      answers: {
        a: "Deep Space 1",
        b: "Juno",
        c: "Artemis I",
        d: "Starliner OFT-2"
      },
      correctAnswer: "a"
    },
    {
      question: "Kto pierwszy stanął na powierzchni Księżyca?",
      answers: {
        a: "Neil Armstrong",
        b: "Buzz Aldrin",
        c: "Michael Collins",
        d: "Charles Conrad"
      },
      correctAnswer: "a"
    },
    {
      question: "Czym jest termistor?",
      answers: {
        a: "Kilka termopar połączonych szeregowo",
        b: "Czujnik światła (detektor fotonowy)",
        c: "Bolometr ze spieku tlenków metali m.in niklu, kobaltu i manganu",
        d: "Detektor termiczny, którego zasadą działania jest efekt Seebecka"
      },
      correctAnswer: "c"
    },
    {
      question: "Jaki jest zakres długości fal promieniowania MWIR (podczerwień)?",
      answers: {
        a: "0,4 - 0,7 µm",
        b: "1 - 3 µm",
        c: "3 - 5 µm",
        d: "8 - 14 µm"
      },
    correctAnswer: "c"
    },
    {
      question: "Jaki jest zakres długości fal promieniowania widzialnego?",
      answers: {
        a: "380 - 750 nm",
        b: "120 - 380 nm",
        c: "750 - 1400 nm",
        d: "3000 - 5000 nm"
      },
    correctAnswer: "a"
    },
    {
      question: "Zmianę pędu na jednostkę masy paliwa definiuje się jako:",
      answers: {
        a: "Impuls właściwy",
        b: "Ciąg właściwy",
        c: "Wydajność układu napędowego",
        d: "Prędkość wylotowa gazów"
      },
    correctAnswer: "a"
    },
    {
      question: "Ile wymiarów przestrzennych (łącznie z czasem) zakłada teoria strun typu IIA/IIB?",
      answers: {
        a: "4",
        b: "10",
        c: "11",
        d: "26"
      },
  correctAnswer: "b"
  },
  {
      question: "Jaką zaletę mają matryce CMOS w stosunku do matryc CCD?",
      answers: {
        a: "Mniejsze zużycie energii",
        b: "Lepsza odporność na wysokie napięcia",
        c: "Zawsze większa czułość na podczerwień",
        d: "Brak potrzeby stosowania obiektywu"
      },
      correctAnswer: "a"
  },
  {
      question: "Jaka jest główna rola warstwy I (intrinsic) w fotodiodzie PIN?",
      answers: {
        a: "Stabilizuje napięcie zasilania",
        b: "Działa jako filtr optyczny",
        c: "Zwiększa szerokość obszaru zubożenia i poprawia zbieranie fotonów",
        d: "Zwiększa efekt fotoemisji katody"
      },
      correctAnswer: "c" 
  },
  {
      question: "Jakie paliwo stosują silniki Raptor w rakiecie Starship?",
      answers: {
        a: "Kerosene (RP-1) i ciekły tlen",
        b: "Ciekły metan i ciekły tlen",
        c: "Wodór i ciekły tlen",
        d: "Hipergolowe paliwa MMH/N2O4"
      },
      correctAnswer: "b"
  }


    
  ];