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

## Zaaglijst onderstel (besluit 12-08, maten netto ~2 mm schaafmarge)

| Aantal | Onderdeel | Kopmaat | Zaaglengte | Verbinding einden / maatopbouw |
|---|---|---|---|---|
| 8 | pootlamellen | 44×70 | 97 cm | per 2 verlijmd → 4 poten ~88×70 × 94; kamers in de pootkop vóór het verlijmen uitsparen |
| 4 | kopframe-regels | 44×70 | 55 cm | beide einden verlijmde zwaluwstaart, ingelaten in het pootvlak: binnenmaat ~42 + 2× ~5 inlaat + marge |
| 2 | bovenregels | 38×89 | 200 cm | beide einden drop-in in de pootkop (staart óf keep + slotbout — open); 200 = buitenmaat frame, einden vlak met de poot |
| 2 | onderregels | 38×89 | 200 cm | ⚠️ verbinding nog open: keep/staart/slotbout → 200 volstaat; wordt het doorgaande pen met spie, dan ~210 nodig (2× door de poot + uitsteek) |
| 6 | dwarsregels (3 boven, 3 onder) | 38×89 | 62 cm | beide einden vork (bridle, verlijmd) óver de lange regels: buitenmaat over beide regels (~56–58, volgt uit schortdetail) + marge; vorken 38 diep |

Inkoop: **2× vuren 44×144 × 300 cm** (per balk: 3× afkorten op 100 → rippen → 6 lamellen; 2 balken = 12 lamellen = 8 poot + 4 kopregel — precies passend, dus bij veel kwasten een 3e balk als uitval) + **6× SLS 38×89 × 210 cm** (4× voor de lange regels, 2× voor 3 dwarsregels elk) *of* 4× 300 + 1× 240.

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
- Stofafzuig-adapters
- Lade- en MBox-organizers
