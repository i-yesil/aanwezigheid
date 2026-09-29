# Aanwezigheidsethos · Modulair PHP-pakket
**Handreiking Hogeschool Rotterdam**

Dit pakket is speciaal ingericht volgens de serverrichtlijnen van de systeembeheerder (MAMP / Debian Linux / Apache / PHP).

---

## 📁 Waar staat wat? (Handig voor latere aanpassingen)

In plaats van één reusachtig bestand, is alles netjes opgeknipt in logische deelbestanden. Je hoeft dus nooit meer dan een paar regels tegelijk te bewerken!

| Bestand | Wat kun je hier aanpassen? |
|---|---|
| `includes/intro-hero.php` | De welkomsttekst, 'Voer het gesprek' en het wicked problem kader. |
| `includes/masthead.php` | De bovenste balk met de doelgroep ('Voor adviseurs...') en actieknoppen. |
| `includes/wheel.php` | Het interactieve wiel (SVG, teksten, centrale cirkel). |
| `includes/step1.php` | **Stap 1: Feitelijke dimensie** (de 8 domeinen verdeeld over student & team). |
| `includes/step2.php` | **Stap 2: Normatieve dimensie** (sociaal, psychologisch, onderwijskundig). |
| `includes/step3.php` | **Stap 3: Handelingsperspectieven** (Spoor 1, 2, 3 en het HR-juridisch kader). |
| `includes/step4.php` | **Stap 4: Evaluatie** (De vier G's: Gedragen, Geloofwaardig, Gerechtvaardigd, Gedeeld). |
| `includes/conclusion.php` | Het afsluitende blok onderaan de pagina. |
| `data/dimensions.json` | Alle diepere teksten, citaten, bronverwijzingen en dialoogvragen. |
| `data/sources.json` | De complete lijst met wetenschappelijke publicaties en jurisprudentie. |
| `assets/css/style.css` | De vormgeving, kleuren (HR-rood, petrol, blauw, goud) en typografie. |
| `assets/js/script.js` | De interactie (wiel, uitschuifpaneel, bronnenfilter en zoekfunctie). |

---

## 🚀 Hoe plaats je dit op de HR-server?

1. Verbind met de HR VPN (`vpn-mobielewerkplek.hro.nl`).
2. Open je FTP/SFTP-programma (of Visual Studio Code).
3. Ga naar de map `httpdocs` op de server (`postulate.hro.nl`).
4. Maak een projectmap aan, bijvoorbeeld: `httpdocs/aanwezigheidsethos/`.
5. Upload de inhoud van deze map rechtstreeks naar die map.
6. Je handreiking is nu direct bereikbaar via de webbrowser!
