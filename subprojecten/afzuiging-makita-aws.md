# Afzuiging / Makita AWS

**Status:** 📐 ontwerpen

## Doel

Stofafzuiging voor de invalzaag (en later andere machines) in een kleine, gesloten werkruimte — automatisch aangestuurd via een zelfbouw ESP32-BLE-schakelaar (Makita AWS was de aanleiding, maar wordt niet als systeem gekocht).

## Eisen & wensen

- [ ] Afzuiger start automatisch met de machine (via de ESP-BLE-schakelaar, zie beslissingen).
- [ ] Past qua formaat in of naast de bank (of onder het MBox-vak?).
- [ ] 3D-geprinte adapters voor machines zonder passende aansluiting (printlijst).

## Ideeën & opties

- **Invalzaag-evaluatie (2026-08-09):** Makita SP001GM102 (XGT 40V, accu) vs. SP6000J1X (snoer).
  - SP001G: verhoogd motorhuis — hele body boven de voetplaat, geen motoroverhang-conflict met bankhaken en klemmen (bevestigd via reviewvideo; maten: 221 br × 271 h vs. 225 × 252). Elektronische remstop en AWS-koppeling zijn reële voordelen in een kleine ruimte.
  - Kanttekening: XGT bestaat pas sinds ~2021 — langetermijn-degradatiedata van de accu's ontbreekt; levensduurschattingen zijn onbevestigd.
  - Ecosysteem: Makita 18V LXT al aanwezig (boor + slagschroevendraaier); de meeste hobbymachines bestaan ook in LXT — XGT loont vooral voor zwaar spul.
- Terugvalopties voor de aansturing: kant-en-klare automatische schakelstekkerdoos, of een Shelly (geparkeerd, zie 12-08).

## Open vragen

- **ESP-detectie:** hoe merkt de ESP32 dat de zaag draait? Adverteert de SP001G (of een AWS-zender erin) iets bruikbaars over BLE, of is stroom-/geluidsdetectie nodig als fallback? Uitzoeken zodra de zaag er is.
- **Veilig schakelen:** 230V-relais/SSR, behuizing, zekering — hoe bouwen we dit netjes en veilig?
- **Nalooptijd:** afzuiger een paar seconden laten doordraaien na het stoppen van de zaag.
- Welke afzuiger: nu de aansturing zelfbouw is, hoeft het geen AWS-model te zijn — merk/type vrij te kiezen.
- Slangroute op de bank; adapterlijst per machine.

## Beslissingen

- **2026-08-12** — Invalzaag: **Makita SP001GM102 (XGT) besteld**, onderweg. *Waarom: verhoogd motorhuis (geen conflict met bankhaken/klemmen), elektronische remstop, accu — zie de evaluatie van 09-08 onder Ideeën & opties.*
- **2026-08-12** — Aansturing afzuiger: **zelfbouw ESP32 met BLE** die een stopcontact schakelt zodra de zaag actief is. *Waarom: leuker en flexibeler dan een AWS-stofzuiger kopen; de afzuigerkeuze wordt er merkonafhankelijk door.* Shelly-route geparkeerd — lijkt nu onnodig complex, zien we later eventueel.

## Relaties

- [Aanslaglineaal](aanslaglineaal.md) — de zaag is het hart van de rail-workflow op het blad.
- [Ladeblok](ladeblok.md) — stof die je afzuigt, hoeft het stofpaneel niet te vangen.
