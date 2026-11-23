# Weryfikacja portfolio - 23 listopada 2026

## Wykonane kontrole

- `node --check app.js`, `node --check config.js`, `node --check scripts/build.mjs`: poprawna składnia JavaScript.
- `node scripts/test.cjs`: 47 kontroli zakończonych powodzeniem. Zakres: adres e-mail, konfiguracja GitHuba, odrzucanie niebezpiecznych URL i ścieżek obrazów, poprawność odnośników do sekcji i zasobów, unikalne ID, pojedynczy H1, metadane języka / viewport, brak formularza bez zaplecza, kontakt w HTML bez JavaScript, brak publicznych linków localhost, atrybucja projektu i statyczne reguły dostępności CSS.
- `node scripts/build.mjs`: przygotowano statyczny folder `dist`, bez PHP, bazy i zależności instalacyjnych.
- Przeczytano rzeczywisty kod projektu Zalewamy.pl: katalog, koszyk, zapis zamówienia, walidację i SQL. Opis funkcjonalności oparto na tym kodzie, nie na założeniach.
- Porównano hashe plików istniejącego `strona1` przed i po pracy (z pominięciem zmiennych logów `.local-run`): brak zmian.

## Ograniczenia

- Nie wykonano testów wizualnych, klawiaturowych ani interakcji w przeglądarce. Próba HTTP do lokalnego projektu została zablokowana przez uprawnienia sieciowe. Próba otwarcia portfolio przez `file:` w przeglądarce narzędziowej została odrzucona przez politykę bezpieczeństwa. Nie obchodzono blokady.
- Kontrole statyczne nie dowodzą braku przepełnienia przy każdej szerokości ani prawidłowego zachowania menu / dialogu w każdej przeglądarce.
- Nie wykonano screenshotów Zalewamy.pl. Użyto oryginalnej grafiki projektu z prawidłowym opisem. Konfiguracja pozwala dodać rzeczywisty zrzut później.
- Nie wysłano wiadomości e-mail, nie zmieniano GitHuba i nie opublikowano strony na zewnętrznym hostingu. `mailto:` wymaga aplikacji pocztowej, a schowek zależy od uprawnień przeglądarki; interfejs zawiera ręczny wariant kopiowania.
- Nie potwierdzono praw do publikacji oryginalnej grafiki.

## Krótka lista przed publikacją

1. Otwórz `dist/index.html` na komputerze i telefonie; sprawdź szerokości 360, 390, 768, 1024 i 1440 px, powiększenie 200% i brak przewijania całej strony w poziomie.
2. Sprawdź mobilne Menu, linki do sekcji, przyciski usług, okno projektu, jego zamknięcie kliknięciem i Escape oraz powrót fokusu.
3. Przejdź stronę klawiaturą. Sprawdź tryb ograniczonego ruchu i wyłączony JavaScript.
4. Sprawdź przycisk e-mail, temat wiadomości po wyborze usługi, kopiowanie i link GitHub. Nie wysyłaj wiadomości, jeżeli tylko testujesz.
5. Po wybraniu domeny ustaw `siteUrl`, ponownie wykonaj build i opublikuj zawartość `dist`. Sprawdź HTTPS i zasoby pod docelowym URL.

Nie deklaruje się przeprowadzenia powyższych testów ręcznych.

## Aktualizacja: screenshoty i oznaczenie kuti

Dodano trzy oryginalne PNG dostarczone przez użytkownika, bez edycji ich treści. Odczytano rzeczywiste wymiary PNG i zapisano je w HTML. Opisy odpowiadają rzeczywistym widokom, w tym pustemu koszykowi. Galeria ma linki do pełnych plików i powiększenie w dialogu. Oznaczenie osobiste i favicon zmieniono na kuti; imię i nazwisko zachowano. Usunięto wskazany przez użytkownika znak z plików tekstowych portfolio. Wcześniejszy brak screenshotów został rozwiązany materiałami użytkownika, nie wykonano nowych zrzutów narzędziowo.

Po zmianie uruchomiono sprawdzenie składni JavaScript, rozszerzone kontrole statyczne oraz build. Interakcji galerii w przeglądarce nie zweryfikowano ze względu na wcześniej opisaną blokadę podglądu.
Na prosbe uzytkownika kadry w portfolio (miniatury, karta i powiekszenie) ograniczono do gornych 1920 x 1080 pikseli, aby ukryc dolny bialy pas. Przyciecie jest realizowane przez CSS; oryginalne PNG sa zachowane bez zmian.
