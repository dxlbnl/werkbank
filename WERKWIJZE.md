# Werkwijze

Dit document legt vast hoe we in deze repo werken. Het is zelf óók levende documentatie: als de werkwijze verandert, wordt dit bestand bijgewerkt.

## Doel van de repo

De ideeën voor de werkbank een vaste plek geven, en over meerdere sessies heen — samen met Claude — toewerken naar een mooie, functionele werkbank. De repo is het geheugen van het project: een nieuwe sessie moet hier alles kunnen vinden wat nodig is om verder te werken.

## Structuur

```
README.md                  — startpunt + index van subprojecten
WERKWIJZE.md               — dit bestand
CLAUDE.md                  — instructies die Claude bij elke sessie leest
overzicht.html             — tekeningenblad (alléén schematische tekeningen)
tekening.js                — componentbibliotheek voor de tekeningen (mm-gebaseerd)
ideeen.md                  — backlog van losse ideeën
planning.md                — bouwfasen, kooplijst, 3D-printlijst
logboek.md                 — chronologisch projectlog
vaktermen.md               — vaktermenlijst EN ↔ NL
subprojecten/<naam>.md     — één bestand per subproject
_config.yml                — Jekyll-config voor de GitHub Pages-site
```

De repo wordt via GitHub Pages ook als website geserveerd op [dxlbnl.github.io/werkbank](https://dxlbnl.github.io/werkbank/): Jekyll rendert de md's als pagina's (README = voorpagina, onderlinge md-links worden automatisch herschreven), `overzicht.html` wordt onaangeroerd meegeleverd.

## Afspraken

1. **Eén md per subproject.** Elk onderdeel van de werkbank (onderstel, werkblad, …) heeft een eigen bestand in `subprojecten/` met een vaste opbouw: status, doel, eisen & wensen, ideeën & opties, open vragen, beslissingen, relaties.
2. **Neem niets aan.** Wat eerder besproken of opgeschreven is, is geen vaststaand feit. Plannen veranderen door voortschrijdend inzicht. Alleen wat onder *Beslissingen* staat geldt als besloten — en zelfs dat mag heroverwogen worden (log dan een nieuwe beslissing die de oude vervangt).
3. **Beslissingen loggen met datum en motivatie.** Formaat: `- **JJJJ-MM-DD** — beslissing. *Waarom: …*`. Zo blijft zichtbaar wáárom iets zo is, en is terugdraaien een bewuste keuze.
4. **Open vragen expliciet maken.** Wat nog onduidelijk is hoort in de sectie *Open vragen*, niet impliciet tussen de regels. Een goede sessie beantwoordt vragen of voegt betere toe.
5. **De html is een tekeningenblad, de md's zijn de bron.** `overzicht.html` bevat alléén schematische tekeningen (sinds 12-08). Inhoudelijke details, afwegingen, beslissingen, planning en termen horen in de md's. Bij tegenspraak wint de md.
6. **Status bijhouden.** Elk subproject heeft een status (🌱 verkennen / 📐 ontwerpen / 🔨 bouwen / ✅ klaar), zowel in het bestand zelf als in de tabel in `README.md`. Houd die synchroon.
7. **Nieuwe onderdelen.** Een los idee begint in `ideeen.md`. Zodra het serieus wordt, krijgt het een eigen md in `subprojecten/` (kopieer de opbouw van een bestaand bestand) en een regel in de README-tabel en in `overzicht.html`.
8. **Ontwerpbeslissingen neemt Dexter.** Claude signaleert problemen en legt oplossingsopties met afwegingen voor, maar besluit nooit zelf een ontwerpkeuze en voert die niet eigenmachtig door (afspraak 14-08, na een eigenmachtig doorgevoerde kopregel-verlaging).
9. **Overdenken in de chat, vastleggen bij landing.** Tussenstanden van een lopende discussie horen niet in de repo. Pas committen als iets landt: een besluit, een gecorrigeerd feit, of op expliciet verzoek — en dan gebatcht in één betekenisvolle commit, niet per gedachte. Uitgebreide afwegingen in een md worden bij het besluit gecondenseerd tot één gedateerde beslissing met motivatie.

## Herkomst van deze afspraken

Deze werkwijze komt voort uit de opdracht bij het opzetten van de repo (2026-08-12):

> Het doel van de repo is de ideeën een plek te geven, en samen met Claude te werken aan een mooie functionele werkbank. Neem niks aan van wat er al is gezegd, plannen kunnen veranderen door voortschrijdend inzicht. Per subproject een aparte markdown met beschrijving. Behoud de html als mooi overzicht, maar een deel van de inhoud kan beter in de specifieke md-files. Dit is levende documentatie, die over sessies goed moet functioneren — documenteer ook deze instructies (welke dus ook zouden kunnen veranderen).

Ook deze instructies kunnen dus veranderen; werk dit bestand dan bij.
