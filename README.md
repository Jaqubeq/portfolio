# Portfolio - Jakub Król

Cześć! Jestem Jakub i zajmuję się tworzeniem stron internetowych.

To moje portfolio, w którym przedstawiam swoje umiejętności, projekty oraz usługi, jakie oferuję. Stworzyłem je przede wszystkim z myślą o osobach i firmach, które szukają kogoś do wykonania strony internetowej lub wprowadzenia poprawek w już istniejącej witrynie.

Portfolio jest w pełni responsywne, więc można je wygodnie przeglądać zarówno na komputerze, jak i telefonie.

## Technologie

Do stworzenia strony wykorzystałem:

- HTML5
- CSS3
- JavaScript

Postawiłem na zwykły HTML, CSS i JavaScript, ponieważ w przypadku takiej strony nie widziałem potrzeby korzystania z dodatkowych frameworków.

Portfolio nie wymaga bazy danych ani backendu.

## Co znajduje się na stronie?

- **O mnie** - kilka informacji o mnie, moim wykształceniu i umiejętnościach.
- **Usługi** - oferta tworzenia stron internetowych, landing page'ów oraz poprawiania istniejących witryn.
- **Realizacje** - projekty, nad którymi pracowałem.
- **Technologie** - narzędzia i języki, z których korzystam.
- **Kontakt** - możliwość skontaktowania się ze mną w sprawie współpracy.

Zadbałem również o responsywność, podstawową optymalizację SEO, dostępność oraz drobne animacje poprawiające wygląd strony.

## Moje projekty

### Zalewamy.pl

Jednym z projektów, które prezentuję w portfolio, jest strona fikcyjnej firmy zajmującej się sprzedażą betonu.

Projekt powstał we współpracy z Wiktorem Wójcikiem i Kacprem Krzemińskim.

Wykorzystaliśmy w nim HTML, CSS, JavaScript, PHP i MySQL.

Strona zawiera między innymi:

- Katalog produktów z cenami.
- Koszyk z możliwością dodawania produktów.
- Obliczanie wartości zamówienia.
- Formularz składania zamówień.
- Zapisywanie zamówień w bazie danych MySQL.
- Walidację danych po stronie serwera.

Jest to projekt demonstracyjny, a nie realizacja dla prawdziwej firmy.

W portfolio umieściłem również zrzuty ekranu, dzięki którym można zobaczyć wygląd strony bez konieczności uruchamiania aplikacji PHP/MySQL.

## Jak uruchomić portfolio?

Portfolio jest stroną statyczną, dlatego nie wymaga instalowania dodatkowych bibliotek ani uruchamiania XAMPP.

Wystarczy pobrać repozytorium i otworzyć plik `index.html` w przeglądarce.

Można również uruchomić lokalny serwer HTTP, np. korzystając z PHP dołączonego do XAMPP:

```powershell
C:\xampp\php\php.exe -S 127.0.0.1:8090 -t dist
```

Następnie otworzyć w przeglądarce:

`http://127.0.0.1:8090`

## Konfiguracja

Podstawowe ustawienia strony znajdują się w pliku `config.js`.

Można tam zmienić między innymi:

- `email` - adres kontaktowy.
- `github` - link do profilu GitHub.
- `siteUrl` - publiczny adres portfolio.
- `profilePhoto` - ścieżkę do zdjęcia profilowego.
- `projectScreenshot` - opcjonalny zrzut ekranu projektu.
- `projectDemoUrl` - adres działającej wersji projektu.

Po zmianie konfiguracji można przebudować stronę poleceniem:

```powershell
node scripts/build.mjs
```

Gotowe pliki do publikacji znajdują się w folderze `dist`.

Jeżeli zmieniasz dane kontaktowe bez przebudowywania projektu, pamiętaj o ich aktualizacji również w `index.html`.

## Testowanie

W projekcie znajdują się również proste skrypty pozwalające sprawdzić poprawność kodu i przygotować wersję do publikacji.

```powershell
node --check app.js
node --check config.js
node scripts/test.cjs
node scripts/build.mjs
```

Dodatkowe informacje dotyczące przeprowadzonych testów znajdują się w pliku `TEST_REPORT.md`.

## Publikacja

Portfolio przygotowałem z myślą o hostowaniu na Cloudflare Pages.

Strona nie wymaga PHP ani MySQL, dlatego może działać na darmowym hostingu statycznym.

Do publikacji wykorzystywany jest folder `dist`, który zawiera gotową wersję strony.

Po podłączeniu repozytorium do Cloudflare Pages można automatycznie publikować kolejne zmiany przesyłane na GitHuba.

## Kontakt

Jeżeli chcesz się ze mną skontaktować w sprawie strony internetowej, poprawek lub współpracy, możesz napisać na:

**E-mail:** jakubkrol721@gmail.com

**GitHub:** [Jaqubeq](https://github.com/Jaqubeq)

---

Jakub Król