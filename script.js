const $ = (s) => document.querySelector(s);
      const ART = [
        {
          c: "Інтернет",
          t: "Я з Інтернетом на «ти» чи на «Ви»?",
          s: "Як користуватися мережею розумно й безпечно.",
          b: "Інтернет дає знання, друзів і розваги. Щоб не потрапити в халепу, не діліться паролями, перевіряйте джерела новин і думайте перед тим, як публікувати фото.",
        },
        {
          c: "Мова",
          t: "Мова — наш суперскіл",
          s: "Слова, що об’єднують і роблять нас особливими.",
          b: "Українська має понад 200 тисяч слів і дуже багато пестливих форм. Кожне нове влучне слово робить нашу думку точнішою.",
        },
        {
          c: "Наука",
          t: "Математика у природі",
          s: "Де сховалися числа Фібоначчі?",
          b: "Спіралі соняшника, шишки й мушлі часто підкоряються послідовності Фібоначчі: 1, 1, 2, 3, 5, 8, 13…",
        },
        {
          c: "Здоров’я",
          t: "Сон — це кнопка перезавантаження",
          s: "Чому підліткам потрібно спати 8–10 годин.",
          b: "Під час сну мозок закріплює вивчене. Вимкніть екрани за годину до сну, і ви швидше засинатимете.",
        },
        {
          c: "Інтернет",
          t: "Як відрізнити фейк від правди",
          s: "Три швидкі перевірки перед репостом.",
          b: "1) Хто автор? 2) Чи є це на інших надійних сайтах? 3) Чи не тисне новина на емоції? Якщо відповіді сумнівні, не поширюйте.",
        },
        {
          c: "Література",
          t: "Вірш, який хочеться відчути",
          s: "Як читати поезію без нудьги.",
          b: "Читайте вголос, повільно, уявляйте картинку. Поезія — це не тест, а настрій, який можна відчути.",
        },
      ];
      const FACTS = [
        [
          "Мед не псується",
          "В єгипетських гробницях знаходили їстівний мед віком у тисячі років.",
        ],
        ["Восьминіг має 3 серця", "Два качають кров до зябер, одне — до тіла."],
        [
          "Блискавка гарячіша за Сонце",
          "Її канал нагрівається приблизно до 30 000 °C.",
        ],
        [
          "Банани трохи радіоактивні",
          "Через калій-40, але це абсолютно безпечно.",
        ],
        ["Нуль не мав римської цифри", "Римляни записували числа без нуля."],
        [
          "Світло від Сонця летить 8 хвилин",
          "Ми бачимо Сонце таким, яким воно було 8 хвилин тому.",
        ],
         [
           "Океан дає нам більшість кисню",
           "Фітопланктон у морях виробляє приблизно половину кисню на планеті.",
         ],
         [
           "Стигла полуниця росте на зовні",
           "Тільки в суниці дрібні насінини розміщені на поверхні плоду.",
         ],
         [
           "Кальмари мають три серця",
           "Два серця перекачують кров до зябер, а третє — до решти тіла.",
         ],
         [
           "Венера обертається в протилежний бік",
           "На Венері Сонце сходить на заході.",
         ],
         [
           "Один день на Венері довший за її рік",
           "Венера повільніше обертається навколо своєї осі, ніж навколо Сонця.",
         ],
         [
           "Уздовж екватора Земля ширша",
           "Через обертання планета має форму злегка сплюснутого еліпсоїда.",
         ],
         [
           "Моркву спочатку вирощували фіолетовою",
           "Помаранчевий сорт стали поширювати в Нідерландах.",
         ],
         [
           "Серце кита — велетенське",
           "У синього кита серце може важити приблизно 180–200 кілограмів.",
         ],
         [
           "Людські зуби міцні",
           "Емаль є найтвердішою тканиною людського організму.",
         ],
         [
           "Дельфіни можуть впізнати себе",
           "Багато дельфінів розпізнають своє відображення в дзеркалі.",
         ],
         [
           "Австралійські мімози рухають листя",
           "При торканні листочки складються, а листкова пластина опускається.",
         ],
         [
           "Бамбук росте дуже швидко",
           "Деякі види можуть вирости на десятки сантиметрів за добу.",
         ],
         [
           "Шоколад походить з Америки",
           "Какао вперше культивували в тропічних районах Центральної та Південної Америки.",
         ],
         [
           "Один кілограм снігу буває зірковим",
           "Сніжинки можуть мати шість променів завдяки кристалічній будові льоду.",
         ],
         [
           "Пінгвіни мають колінний суглоб",
           "Суглоб прихований під пір’ям і добре видно в рентгенівському знімку.",
         ],
         [
           "Найстаріше дерево живе тисячоліттями",
           "Майже 5000 років живе сосна Мафусаїл у Каліфорнії.",
         ],
         [
           "Папороті зацвітають не квітками",
           "Вони розмножуються спорами та не утворюють квітів.",
         ],
         [
           "Соти мають шестикутну форму",
           "Шестикутники допомагають максимально використати простір і віск.",
         ],
         [
           "Кішки ламають сон короткими періодами",
           "Домашні коти часто сплять багато разів протягом доби.",
         ],
         [
           "Акустична зона тихого космосу",
           "У космосі немає повітря, тому звуки не поширюються, як на Землі.",
         ],
         [
           "Бджоли розпізнають геометричні візерунки",
           "Вони вміють запам’ятовувати форми та навчатися за зразком.",
         ],
         [
           "Ємність мозку не дорівнює пам’яті комп’ютера",
           "Частина нейронних зв’язків постійно змінюється під час навчання.",
         ],
         [
           "Планета Юпітер захищає внутрішню Сонячну систему",
           "Масивний Юпітер може змінювати траєкторії деяких комет і астероїдів.",
         ],
         [
           "Китайська стіна не видно з космосу неозброєним оком",
           "Це популярний міф: окремі довгі споруди важко відрізнити з орбіти.",
         ],
      ];
      const QZ = [
        [
          "Що робити з незнайомим посиланням у повідомленні?",
          ["Одразу відкрити", "Перевірити відправника", "Переслати друзям"],
          1,
        ],
        [
          "Який пароль найнадійніший?",
          [
            "12345678",
            "Ім’я і рік народження",
            "Довга фраза з цифрами та символами",
          ],
          2,
        ],
        [
          "Що таке фейк?",
          [
            "Неправдива інформація, подана як правда",
            "Новий месенджер",
            "Антивірус",
          ],
          0,
        ],
        [
          "Чи можна публікувати чужі фото без дозволу?",
          ["Так, якщо гарне", "Ні, потрібна згода", "Лише вночі"],
          1,
        ],
      ];
      const HEAD = [
        "Онлайн із розумом: як захистити себе",
        "Інтернет: ну, таке…",
        "Терміново! Усе пропало!",
      ];
      const TEAM = [
        ["Теміргалієв Іван", "Головний редактор", "var(--yel)"],
        ["Дмитров Лев", "Дизайн і розробка", "var(--sky)"],
        ["Бранцира Назарій", "Автор матеріалів", "var(--pink)"],
      ];
      let sparks = 0;
      const sparkStatus = $("#sparkStatus");
      function updateSparks(value) {
        const next = Number(value);
        if (!Number.isSafeInteger(next) || next < 0) {
          throw new Error("The server returned an invalid spark count.");
        }
        sparks = Math.max(sparks, next);
        $("#cnt").textContent = sparks;
      }
      async function loadSparks() {
        try {
          const response = await fetch("/api/sparks");
          if (!response.ok) throw new Error(`Request failed: ${response.status}`);
          const data = await response.json();
          updateSparks(data.count);
          sparkStatus.textContent = "";
        } catch (error) {
          console.error("Could not load the shared spark count:", error);
          sparkStatus.textContent = "Не вдалося підключитися до спільного лічильника.";
        }
      }
      const pages = ["home", "news", "contests", "facts", "team", "teacher"];
      function go(p) {
        if (!pages.includes(p)) p = "home";
        document
          .querySelectorAll(".page")
          .forEach((e) => e.classList.toggle("on", e.id === p));
        document
          .querySelectorAll(".tab[data-p]")
          .forEach(
            (t) =>
              t.toggleAttribute("aria-current", t.dataset.p === p) ||
              t.removeAttribute("aria-current"),
          );
        document.querySelectorAll(".tab[data-p]").forEach((t) => {
          if (t.dataset.p === p) t.setAttribute("aria-current", "page");
        });
        scrollTo(0, 0);
      }
      document
        .querySelectorAll("[data-p]")
        .forEach((b) => (b.onclick = () => (location.hash = b.dataset.p)));
      document
        .querySelectorAll("[data-go]")
        .forEach((b) => (b.onclick = () => (location.hash = b.dataset.go)));
      addEventListener("hashchange", () => go(location.hash.slice(1)));
      // home
      $("#cnt").textContent = sparks;
      $("#sparkBtn").onclick = async () => {
        const button = $("#sparkBtn");
        button.disabled = true;
        try {
          const response = await fetch("/api/sparks", { method: "POST" });
          if (!response.ok) throw new Error(`Request failed: ${response.status}`);
          const data = await response.json();
          updateSparks(data.count);
          sparkStatus.textContent = "";
        } catch (error) {
          console.error("Could not add a spark:", error);
          sparkStatus.textContent = "Не вдалося надіслати іскру. Спробуй ще раз.";
        } finally {
          button.disabled = false;
        }
      };
      loadSparks();
      const sparkEvents = new EventSource("/api/sparks/events");
      sparkEvents.onmessage = (event) => {
        try {
          updateSparks(JSON.parse(event.data).count);
          sparkStatus.textContent = "";
        } catch (error) {
          console.error("Could not read a spark update:", error);
          sparkStatus.textContent = "Не вдалося оновити спільний лічильник.";
        }
      };
      sparkEvents.onerror = () => {
        sparkStatus.textContent = "З'єднання для оновлення лічильника відновлюється…";
      };
      let fi = new Date().getDate() % FACTS.length;
      const showFact = () => {
        $("#daily").textContent = FACTS[fi][0] + ". " + FACTS[fi][1];
      };
      showFact();
      $("#newFact").onclick = () => {
        fi = (fi + 1) % FACTS.length;
        showFact();
      };
      $("#homeCards").innerHTML = [
        ["📰", "Матеріали", "Статті про інтернет, мову й науку", "news"],
        ["🏆", "Конкурси", "Квіз, голосування й челендж", "contests"],
        ["🧠", "Цікавинки", "Картки з дивовижними фактами", "facts"],
      ]
        .map(
          (c) =>
            `<button class="card" data-go="${c[3]}"><div style="font-size:2rem">${c[0]}</div><h3>${c[1]}</h3><p>${c[2]}</p></button>`,
        )
        .join("");
      document
        .querySelectorAll("#homeCards [data-go]")
        .forEach((b) => (b.onclick = () => (location.hash = b.dataset.go)));
      // articles
      let cat = "Усі";
      const cats = ["Усі", ...new Set(ART.map((a) => a.c))];
      function drawArt() {
        $("#filters").innerHTML = cats
          .map((c) => `<button class="${c === cat ? "on" : ""}">${c}</button>`)
          .join("");
        $("#filters")
          .querySelectorAll("button")
          .forEach(
            (b) =>
              (b.onclick = () => {
                cat = b.textContent;
                drawArt();
              }),
          );
        $("#articles").innerHTML = "";
        ART.filter((a) => cat === "Усі" || a.c === cat).forEach((a) => {
          const e = document.createElement("button");
          e.className = "card";
          e.innerHTML = `<span class="chip">${a.c}</span><h3>${a.t}</h3><p>${a.s}</p>`;
          e.onclick = () => {
            $("#dt").textContent = a.c;
            $("#dh").textContent = a.t;
            $("#db").textContent = a.b;
            $("#dlg").showModal();
          };
          $("#articles").append(e);
        });
      }
      drawArt();
      // quiz
      let qi = 0,
        sc = 0;
      function drawQ() {
        const q = $("#quiz");
        if (qi >= QZ.length) {
          q.innerHTML = `<p><b>Твій результат: ${sc} з ${QZ.length}.</b> ${sc >= 3 ? "Ти профі онлайн-безпеки!" : "Прочитай статтю про інтернет і спробуй ще."}</p><button class="btn" id="again">Пройти знову</button>`;
          $("#again").onclick = () => {
            qi = 0;
            sc = 0;
            drawQ();
          };
          return;
        }
        const [t, o, r] = QZ[qi];
        q.innerHTML =
          `<p class="sub">Питання ${qi + 1} з ${QZ.length}</p><p><b>${t}</b></p>` +
          o
            .map((x, i) => `<button class="opt" data-i="${i}">${x}</button>`)
            .join("");
        q.querySelectorAll(".opt").forEach(
          (b) =>
            (b.onclick = () => {
              const ok = +b.dataset.i === r;
              if (ok) sc++;
              q.querySelectorAll(".opt").forEach((x) => {
                x.disabled = true;
                if (+x.dataset.i === r) x.classList.add("ok");
              });
              if (!ok) b.classList.add("no");
              setTimeout(() => {
                qi++;
                drawQ();
              }, 1100);
            }),
        );
      }
      drawQ();
      // votes
      const V = [0, 0, 0];
      function drawV() {
        const sum = V.reduce((a, b) => a + b, 0) || 1;
        $("#votes").innerHTML = HEAD.map(
          (h, i) =>
            `<div class="vote"><div><span>${h}</span><button class="btn ghost" data-i="${i}">Голос</button></div><div class="bar"><i style="width:${(V[i] / sum) * 100}%"></i></div></div>`,
        ).join("");
        $("#votes")
          .querySelectorAll("button")
          .forEach(
            (b) =>
              (b.onclick = () => {
                V[b.dataset.i]++;
                drawV();
              }),
          );
      }
      drawV();
      // entries
      $("#send").onclick = () => {
        const n = $("#nm").value.trim(),
          t = $("#tx").value.trim();
        if (!n || !t) {
          $("#nm").focus();
          return;
        }
        const d = document.createElement("div");
        d.className = "entry";
        d.innerHTML = "<b></b><div></div>";
        d.firstChild.textContent = n;
        d.lastChild.textContent = t;
        $("#entries").prepend(d);
        $("#nm").value = "";
        $("#tx").value = "";
      };
      // facts
      $("#flips").innerHTML = FACTS.map(
        (f) =>
          `<button class="flip"><span class="f">${f[0]}</span><span class="b">${f[1]}</span></button>`,
      ).join("");
      document
        .querySelectorAll(".flip")
        .forEach((b) => (b.onclick = () => b.classList.toggle("open")));
      // team
      $("#authors").innerHTML = TEAM.map(
        (t) =>
          `<div class="card"><div class="ava" style="background:${t[2]}">${t[0][0]}</div><h3>${t[0]}</h3><p>${t[1]}</p></div>`,
      ).join("");
      // theme
      $("#theme").onclick = () => {
        const d = document.documentElement,
          dark = d.dataset.theme
            ? d.dataset.theme === "dark"
            : matchMedia("(prefers-color-scheme:dark)").matches;
        d.dataset.theme = dark ? "light" : "dark";
      };
      go(location.hash.slice(1));
    