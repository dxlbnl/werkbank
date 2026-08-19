# Aanslaglineaal (fence)

**Status:** 📐 ontwerpen

## Doel

Een aanslag (fence / aanslaglineaal) op bankhaken, met klapaanslag (flip stop) en meetlint, voor herhaalbare haakse en schuine sneden met de invalzaag op het gatenraster.

## Eisen & wensen

- [x] Registreert op het 100 mm-raster via bankhaken — haaksheid komt uit het raster, niet uit aftekenen.
- [ ] Traploos verstelbare klapaanslag — daar zit de vrije maatvoering (bij een T-sleufprofiel: schuivend in de sleuf).
- [ ] Zelfklevend meetlint (links- én rechtslezend), gekalibreerd op de werkelijke zaagsnede (kerf / zaagsnede).

## Ideeën & opties

- ~~Profiel (keuze open, zie 12-08)~~ *(beslist 19-08: Vevor 2040)*: 20×40 mm T-sleuf plat gelegd (eerder besluit, nu optie), 30×60/40×80 T-sleuf (advies fence-sessie 06-08), of iets anders dan een aluminiumprofiel.
- Vaste zaagsnede voor afkorten: geleiderail op raildogs in één vaste gatenrij → één permanente kerf.
- Hoeken: (1) rastermeetkunde — 45° via 1:1 diagonaal, 26,57° via 1:2; (2) geprinte hoekmallen op twee bankhaken (Printables); (3) draaibare fence: één dog als scharnier, klem aan het andere eind.
- Korte werkstukken: afzagen van een langere plank, of bankhaken direct als aanslag.
- Rip-station op de bank (verkend 17-08): vaste ripkerf + verstelbare stops op een lage liniaal die zelf op bankhaken registreert — zou het besluit "rips op offerlatten" (werkblad) deels heropenen; verder verkennen ná de bouw.

## Open vragen

- Verdeling van de 5 Vevor-profielen (à 1500 mm) over aanslag en parallelgeleiders — inkorten kan; fence-opbouw plat of staand.
- Klapaanslag: ontwerpen of downloaden en printen; meetlinthouder — nu op sleuf 6 / M5.
- Kalibratie-workflow meetlint na wissel van zaagblad.
- Aanslag/stop-ontwerp parallelgeleiders: werkt in beide modi (werkstuk onder de rail bij dun werk, lat onder de rail bij dik werk); overgangszone rond ~20 mm werkstukdikte checken bij het ontwerp.

## Beslissingen

- **2026-08-19** — **Profiel: Vevor 2040 (T-sleuf, Europese standaard, sleuf 6 mm) — 5 × 1500 mm besteld**, voor zowel de **aanslag** (fence op achterrij-dogs) als de **parallelgeleiders**. Daarmee is de op 12-08 heropende profielkeuze beslist: één sleuf-6-systeem voor alle geleiders, stijf en goedkoop. Bijbehorende hardware (kooplijst): M5 drop-in T-moeren mét veer (invalmoeren, zak ~50 — ná montage overal plaatsbaar, veertje houdt ze op hun plek), ~10–20 hamerkopmoeren/-bouten voor vaste verbindingen, M5-inbusbouten 8–16 mm; sterknoppen/camhendels printen op de P1S. *Werkwijze in twee modi (correctie Dexter 19-08 op de eerdere "alleen dik werk"-kanttekening): bij werk dikker dan het profiel ligt de rail óp het werkstuk en lopen de latten er vrij onder (de 17-08-maateis geldt dan); bij dun werk ligt de rail óp de twee latten — vlak op 20 mm — en schuift het werkstuk erónder tegen de aanslag onder de rail. Dun werk kan dus prima. Alleen rond de profielhoogte (~18–22 mm) draagt de rail op werkstuk én lat tegelijk — daar even opletten.*
- **2026-08-17** — **Parallelgeleiders: eigen ontwerp**, à la de Makita-variant — latten die ónder de rail door het werkstuk registreren. ~~Profielkeuze open~~ *(beslist 19-08: 2040, zie boven)*: 2040 (stijf, goedkoop, maar 20 hoog — onder de rail alleen met onderlegplaat) of MakerBeam 10×10 (zijsleuven, blijft onder elke werkstukdikte ≥ ~13 mm). Harde maat-eis: alles tussen bankblad en rail ≤ werkstukdikte − marge. Stops 3D-geprint: nutsteen in de sleuf, platte of zijdelingse klemming (niets omhoog), stelschroef-neus voor de fijnafstelling.
- **2026-08-12** — **Fence-keuze heropend**: het profielbesluit van 08-08 vervalt; er zijn mogelijk andere opties. Het 20×40-profiel blijft kandidaat (zie Ideeën & opties). Status terug naar verkennen.
- **2026-08-08** — ~~Profiel: 20×40 mm aluminium T-sleufprofiel, plat gelegd, óp het blad~~ — vervallen, keuze heropend (zie 12-08).
- **2026-08-08** — Hoogteregel: fence **lager** dan werkstuk → rail mag eroverheen (rail rust vol op het hout); fence **hoger** dan werkstuk (bv. dunne plaat) → fence eindigt minimaal een railbreedte (~15 cm) vóór de zaaglijn.
- **2026-08-06** — Opbouw: profiel op bankhaken + klapaanslag + zelfklevend meetlint, kalibreren op de werkelijke zaagsnede.

## Relaties

- [Bankhaakgaten](bankhaakgaten.md) — raster levert de haaksheid.
- [Werkblad](werkblad.md) — fence ligt op het blad; kerf in massief beuken is permanent (geen vervangbare toplaag meer) → strategie: vaste kerflijnen, doorgaande sneden altijd op dezelfde plek (XPS-offerplaat vervallen 12-08, zie werkblad).
