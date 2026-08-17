# Planning

Bouwfasen, kooplijst en printlijst. Verhuisd uit `overzicht.html` (12-08) — dat is nu alleen een tekeningenblad. Details en beslissingen per onderdeel: zie de subproject-md's.

## Bouwfasen

### Fase 0 — Voorbereiding
- Onderwand leeghalen; oude werkbank demonteren.
- Wand check: stroom, vocht, bevestigingspunten.
- Definitieve maatcontrole.

### Fase 1 — Onderstel
- Bouwhout kopen, acclimatiseren, schulpen en op maat (zie [onderstel](subprojecten/onderstel.md)).
- Kopframes maken (verlijmde zwaluwstaarten); lengteregels + onderplank (verbindingskeuze n.t.b.).
- Kastmodules bouwen en monteren: open MBox-kast links, ladekast rechts.
- Stellen, aan de wand verankeren.

### Fase 2 — Blad + schort
- Blad afkorten (200) en rippen (60).
- Sponning frezen in de onderkant van de bladvoorrand (~18×12, op paneeldikte); schort (18 mm paneel) erin verlijmen, dán oliën (alle zijden).
- Boormal printen en kalibreren; raster frezen (zie [bankhaakgaten](subprojecten/bankhaakgaten.md)).
- Montage: voorkant vast (registratie over de voorpoten), achterkant sleufgaten; bankschroef monteren.

### Fase 3 — Systemen
- Fence (keuze n.t.b., zie [aanslaglineaal](subprojecten/aanslaglineaal.md)).
- Dogs printen; metalen dogs en klemmen kopen.
- Vaste kerflijnen bepalen; hardboardplaat op maat (verf).
- Afzuiging + ESP32-BLE-schakelaar (zie [afzuiging](subprojecten/afzuiging-makita-aws.md)).
- Verlichting monteren.

### Fase 4 — Wand + opslag
- Gereedschapswand: houders per machine printen/maken en direct in de wand schroeven.
- Hoek naast raam inrichten voor lang materiaal en platen.

Zaaglijsten en maatdetails staan per subproject — zie bv. de zaaglijst onderstel in [`subprojecten/onderstel.md`](subprojecten/onderstel.md).

## Werkwijze: recht, haaks en op maat met de invalzaag (geen schaafbank)

Principes: **(1)** de rail is de rei — een verse zaagkant is rechter dan elk fabrieksvlak, vertrouw fabrieksvlakken nooit als referentie; **(2)** haaksheid komt uit het zaagblad (90° op de zool kalibreren, klapproef), niet uit het hout; **(3)** eerst afkorten — kort hout is recht hout; **(4)** elke bewerking refereert aan een eerder gemaakte zaagkant.

- **Stap 0, kalibratie**: blad 90° (proefsnede, helften tegen elkaar klappen = fout verdubbelt), rail square idem, parallelgeleiders op werkelijke maat incl. zaagsnede.
- **Poten**: afkorten ~1 m → langskant recht → strip 1 op maat (geleiders), strip 2 via de verse zaagkant (eigen parallelgeleiders of kraspen op twee punten — precisie komt van de flip-rip na het lijmen) → lijmen met de zaagkanten als buitenvlak aan dezelfde zijde, fabrieksvlakken op elkaar (fouten klein over 1 m, klemmen dwingen), kroming tegen elkaar in, op vlakke ondergrond → **eindmaat ná het lijmen van de zaag**: 70-richting in één pass, 88-richting flip-rip van twee kanten (zaagdiepte max 56); handschaaf alleen voor de ontmoetingsrichel en vellingkanten.
- **Regels (SLS)**: fabrieksmaat volstaat; alleen haaks afkorten (rail square) en verbindingen inzagen.
- **Kepen/pennen**: dieptestop + reeks sneden + uitbreken, bodem met beitel/schaaf.
- Controle: winkelhaak, rail als rei, diagonalen; klasse-I rolmaat en kraspen (zie bankhaakgaten).

## Kooplijst-skelet (prijzen indicatief)

| Item | Toelichting |
|---|---|
| Blad: massief beuken aanrechtblad | 240 × 63,5 × 2,7 cm — ± €112; restanten → bekken, zaagklos, vulblokken |
| Schort: beuken meubelpaneel | 18 × 200 × 2000 mm — ± €30 |
| Olie blad | hardwaxolie of lijnolie, alle zijden — ± €25 |
| Onderstel: balken + plaat | constructiehout voor het frame + underlayment/multiplex voor de kastmodules, 2–3 platen (± €35–45 p/plaat) |
| Bankschroef | Record 52½ — tweedehands ± €80–150 |
| Fence | keuze heropend — profiel/opbouw n.t.b. |
| Ganwei-snelklemmen Ø20 (2×) | ± €26 — penlengte ≥ ~60 mm |
| Schroefklemmen Ø20 (2×) | ± €15–30 |
| Metalen dogs (set) | ± €20–40 |
| Ø20 frees (toplager) + toebehoren | ± €20–35; snijlengte checken (27 mm + maldikte) |
| Zelfklevend meetlint | links- en rechtslezend — ± €10 |
| Hardboard (verf-offerlaag) | ± €10 — XPS vervallen (12-08, vaste kerflijnen) |
| Bevestiging, schroeven, lijm | ± €40 |

## Printlijst (3D, Bambu Lab P1S)

- Boormal Ø20-raster (steek 100 — zelf ontwerpen) + kalibratieprint
- Dogs (PETG, staand geprint met veel wanden), diverse hoogtes
- Gatstopjes (conisch, vallen in de vellingkant)
- Flip stop, dog-adapters, meetlinthouder (afhankelijk van fence-keuze)
- Machinehouders voor de gereedschapswand
- Parallelgeleiders — eigen ontwerp à la Makita: latten die onder de rail registreren, profiel n.t.b. (zie aanslaglineaal)
- Rail square (haakse afkort-aanslag voor de rail) — printen of kopen, kalibreren met de klapproef
- Dieptestop-klosjes (zaagdiepte = werkstuk + 3–5 mm)
- Afstandsblokken herhaalbaar rippen (optioneel, bij gebleken behoefte)
- Stofafzuig-adapters
- Lade- en MBox-organizers
