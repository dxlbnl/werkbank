# Bankhaakgaten (raster Ø20 / 100 mm)

**Status:** 📐 ontwerpen

## Doel

Een nauwkeurig 20 mm bankhaakgatenraster (dog hole grid) op steek 100 mm frezen, zonder cumulatieve fouten, met 3D-geprinte hulpmiddelen op de Bambu Lab P1S en de Bosch POF 1400.

## De methode (definitief, 2026-08-11)

1. Alle gatposities aftekenen vanaf **één nulpunt** (single datum) met **doorlopende maatvoering** (continuous dimensioning — géén kettingmaatvoering), geleiderail als liniaal.
2. 6 mm **pilotgaten** boren met een 3D-geprint boorblokje (drill guide block).
3. Frezen met een 3D-geprinte **mal** (template, 8–10 mm dik, 20 mm gaten) die op de pilotgaten registreert via twee **6 mm stalen pennen** — geen PLA-pennen.
4. **Kopieerfrees met toplager** (top-bearing flush trim bit): malgat = 20 mm, geen offsetberekening, geen kopieerhuls-centreeronzekerheid op de POF 1400.
5. **Startgat** voorboren vóór het invallen.
6. Na het boren een paar hartafstanden nameten vóór het frezen — een fout vind je liever in een 6 mm gaatje dan in een 20 mm gat.

## Eisen & wensen

- [x] Vlak blad: gatstopjes (hole stops) conisch geprint, vallen in de vellingkant (chamfer) en liggen vlak — geen kraag, geen magneten (metaalkrullen!). Uitnemen via centergaatje + haakje aan de gereedschapswand.
- [ ] Vellingkant op elk gat: splintervrij en makkelijk dogs insteken.

## Ideeën & opties

- Aluminium platstrip (30–40 × 5 mm) als voorgeboorde masterstrip voor de pilotgaten — beter dan 2040-profiel (holle wanden laten de boor verlopen).
- Meten: klasse I rolmaat; 100 mm-offsettechniek elimineert haakfouten; kraspen (scribing knife) i.p.v. potlood (±0,4 mm lijnbreedte weg).
- Dogs: PETG printen (staand, veel wanden), plus 2–4 metalen voor zwaar klemwerk; gatmaat kalibreren met een proefprint.
- Snelklemmen Ø20 (Ganwei-type): 20 mm-variant kiezen (niet 19); penlengte ruim voorbij de bladdikte van 27 mm (≥ ~60 mm).

## Open vragen

- **Freeslengte-check:** de methode is ontworpen op 2 × 18 mm gelaagd blad ("toplaag als mal voor onderlaag"). Met massief beuken 27 mm vervalt die stap; de toplagerfrees moet 27 mm + maldikte aankunnen, in 2–3 dieptestappen. Snijlengte van het bit controleren vóór aankoop.
- Mal- en boorblokje-ontwerp voor de P1S (256×256 bed): maat, pengatposities, wanddiktes.
- Gatafstand tot bladranden en positie van het nulpunt op 200×60.
- Rail-adapter voor de frees: officiële geleiderail-adapter voor de POF 1400 (koop-item).
- Lange dogs en klempennen: checken dat ze onder het blad niet bodemen op regels of kastmodules.

## Beslissingen

- **2026-08-11** — Methode definitief zoals hierboven (pilotgaten → stalen registratiepennen → toplagerfrees). *Waarom: één registratieprincipe, fouten worden nergens doorgegeven.*
- **2026-08-10** — Forstnerbit in de frees verboden. *Waarom: drie onafhankelijke redenen — toerental 7–20× te hoog zelfs op minimum, geen balancering voor freestoerental, asymmetrische snijgeometrie → klapper (kickback). Veilig alternatief: 20 mm bodemsnijdende invalfrees (plunge-cutting bit), alleen zinvol i.c.m. de masterstrip.*
- **2026-08-10** — Meetnauwkeurigheid: klasse I rolmaat, 100 mm-offset, kraspen.
- **2026-08-12** — Steek naar **100 mm**: zie [werkblad](werkblad.md). Kant-en-klare meer-gats mallen van Printables (op 96 mm ontworpen) passen daardoor niet ongewijzigd — de mal en het boorblokje worden toch zelf ontworpen, dus de methode verandert niet.
- **2026-08-05** — ~~Raster Ø20 / 96 mm ("niet onderhandelbaar")~~ — vervallen, steek is nu 100 mm (zie 12-08 en [werkblad](werkblad.md)).

## Relaties

- [Werkblad](werkblad.md) — het raster zit in het beuken blad; 27 mm dikte beïnvloedt de freeskeuze.
- [Bankschroef](bankschroef.md) — bekgaten volgen dezelfde methode, ná montage.
- [Aanslaglineaal](aanslaglineaal.md) — fence en raildogs registreren op dit raster.
