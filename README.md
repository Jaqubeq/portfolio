# Portfolio - Jakub Król

Statyczne portfolio Web Developera skierowane do klientów zamawiających strony dla firm. HTML, CSS i JavaScript; bez frameworka, PHP, bazy danych, instalacji pakietów, zewnętrznych fontów, analityki i formularza udającego wysyłkę.

## Otwórz teraz

Kliknij dwukrotnie `index.html` w folderze `portfolio/moja-strona`. XAMPP nie jest potrzebny. Możesz też otworzyć `dist/index.html` - to przygotowana kopia publikacyjna. Kopiowanie e-maila wymaga obsługi schowka i odpowiedniego kontekstu przeglądarki; w razie odmowy podawana jest instrukcja ręcznego skopiowania. Kontakt przez przycisk e-mail otwiera program pocztowy użytkownika.

Opcjonalny serwer lokalny, jeśli chcesz podgląd HTTP (z katalogu `moja-strona`):

```powershell
C:\xampp\php\php.exe -S 127.0.0.1:8090 -t dist
```

Następnie otwórz `http://127.0.0.1:8090`. To tylko sposób serwowania statycznych plików; portfolio nie zawiera PHP. Działający projekt Zalewamy.pl pozostaje osobno, bez zmian w `strona1`.

## Kontakt i konfiguracja

`config.js` zawiera publiczne dane kontaktowe, GitHuba i opcjonalne ścieżki:

| Pole | Znaczenie |
| --- | --- |
| `email` | `jakubkrol721@gmail.com` |
| `github` | `https://github.com/Jaqubeq`; puste pole ukrywa link po przebudowaniu |
| `siteUrl` | Docelowy publiczny URL HTTPS, gdy wybierzesz domenę |
| `profilePhoto` | Np. `assets/jakub.jpg`; zostaw puste, aby wyświetlać monogram |
| `projectScreenshot` | Opcjonalny prawdziwy zrzut strony, np. `assets/zalewamy-screen.webp` |
| `projectDemoUrl` | Publiczny URL HTTPS projektu Zalewamy.pl; nie ustawiaj localhost |

Po zmianach uruchom `node scripts/build.mjs` i opublikuj ponownie zawartość `dist`. Skrypt synchronizuje e-mail w HTML wynikowym, dzięki czemu kontakt działa bez JavaScript. Jeżeli edytujesz pliki ręcznie bez przebudowywania, aktualizuj e-mail i GitHuba również w `index.html`.

## Co jest na stronie

- Hero z podanym nagłówkiem, ceną od 499 zł i dwoma przyciskami.
- Trzy usługi z zakresem, ceną i kontaktem. Domena oraz hosting są wyraźnie opisane jako osobny koszt.
- Rzeczywisty opis demonstracyjnego projektu Zalewamy.pl i okno z opisem jego logiki.
- Autentyczny opis edukacji, INF.03 / INF.04 i poziomu technologii; brak deklaracji komercyjnego stażu.
- Monogram zamiast wymyślonego portretu. Możliwość dodania własnego zdjęcia.
- Technologie bez procentowych wskaźników, przebieg współpracy i bezpośredni kontakt.
- Mobilne menu, widoczne stany klawiatury, link pomijający nawigację, natywny dialog z obsługą Escape i ograniczenie ruchu przy `prefers-reduced-motion`.
- Metadane SEO / Open Graph i favicon. Po ustawieniu `siteUrl` build dodaje canonical, og:url, sitemap i odwołanie w robots.txt.

## Projekt Zalewamy.pl i materiały wizualne

Opis powstał po odczytaniu rzeczywistego kodu katalogu, koszyka, kontrolera zamówień, walidacji i schematu bazy w `../strona1`. Nie przedstawia projektu jako zlecenia dla klienta. Zachowano informację o współautorach oryginału: Wiktor Wójcik, Jakub Król, Kacper Krzemiński.

W karcie i galerii znajdują się trzy rzeczywiste screenshoty przekazane przez Jakuba: strona główna, katalog mieszanek oraz pusty koszyk. Pliki są kopiowane bez modyfikowania ich treści do `assets/zalewamy-home.png`, `assets/zalewamy-catalog.png` i `assets/zalewamy-cart.png`. Kliknięcie powiększa obraz w natywnym oknie dialogowym; Escape i przycisk Zamknij zamykają podgląd. Bez JavaScript link prowadzi do oryginalnego obrazu.

Osobisty znak w miejscu monogramu oraz favicon mają napis `kuti`. Imię i nazwisko Jakub Król nadal występuje w nagłówku, kontakcie i opisie. W tekstach portfolio nie używa się długiego myślnika wskazanego przez użytkownika. Nie zmieniano `strona1` ani treści screenshotów.

## Dodanie kolejnego projektu

W `index.html` sekcja `#realizacje` zawiera niezależny `article.project`. Skopiuj go, zmień tytuł, opis, technologie, obraz i atrybut `aria-labelledby` wraz z ID nagłówka. Usuń przycisk `data-open-case` z nowej karty, jeżeli nie tworzysz dla niej dodatkowego opisu. To zwykły HTML, bez ukrytej zależności od CMS. Dla większej liczby projektów można później wydzielić dane; obecny zakres tego nie wymaga.

## Kontrola i przygotowanie publikacji

Wymagany tylko Node.js, bez `npm install`:

```powershell
node --check app.js
node --check config.js
node scripts/test.cjs
node scripts/build.mjs
```

Skrypt budowania kopiuje stronę do własnego folderu `dist/`. Usuwa wyłącznie poprzedni `dist` w tym projekcie; nie dotyka `strona1`. Nie umieszczaj tam ręcznie materiałów źródłowych. Wysyłaj na hosting **zawartość `dist`**, z `index.html` w katalogu głównym, zachowując `assets/`. Możesz użyć dowolnego hostingu statycznego lub zwykłego hostingu WWW. Nie potrzebujesz obsługi PHP ani MySQL.

Po uzyskaniu domeny ustaw `siteUrl` na pełny adres HTTPS (dla podkatalogu z ukośnikiem na końcu), przebuduj i wgraj pliki. Sprawdź kontakt, menu, okno projektu i wygląd na telefonie. Nie dodano fikcyjnej domeny, linku do lokalnego demo ani nie opublikowano strony bez wybranej lokalizacji.

Wyniki i ograniczenia weryfikacji znajdują się w `TEST_REPORT.md`.
Kadry screenshotow maja proporcje 16:9, aby bialy pas na dole dostarczonych plikow nie byl widoczny w galerii ani powiekszeniu. Jest to kadrowanie wyswietlania przez CSS, bez zmieniania tresci oryginalnych obrazow.
