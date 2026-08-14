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

- **2026-08-12** — Elektrische uitvoering in twee dozen: op werkhoogte een doos met machine-stopcontact (CT-meting erachter) + handschakelaar — daar ook ESP en relais; bij de stofzuiger een doos met alleen het geschakelde stopcontact. De stofzuigerplék is open: onder de werkbank of onder de stellingkast.

## Open vragen

- Stofzuigerplek: onder de bank (welk vak — MBox-vak?) of onder de stellingkast; past de te kiezen afzuiger daar — de afzuigerkeuze is mede een maatvraag.
- Uitblaaslucht en slangroute: vak niet dichtbouwen (warmte/uitblaas), doorvoer of route omhoog voor de slang.

- **ESP-detectie:** hoe merkt de ESP32 dat de zaag draait? Adverteert de SP001G (of een AWS-zender erin) iets bruikbaars over BLE? De zaag is binnen (14-08) — sniffen maar.
- **Veilig schakelen:** relais-/contactorkeuze en behuizing (installatiekast, trekontlasting, aarding); inschakelpiek zaag + stofzuiger op één groep.
- **Drempel en naloop:** meetdrempel (standby vs. draaien) en nalooptijd afregelen in de praktijk.
- Welke afzuiger: nu de aansturing zelfbouw is, hoeft het geen AWS-model te zijn — merk/type vrij te kiezen.
- Slangroute op de bank; adapterlijst per machine.

## Beslissingen

- **2026-08-14** — Invalzaag **geleverd en in huis** — BLE/AWS-sniffen kan beginnen.
- **2026-08-12** — Invalzaag: **Makita SP001GM102 (XGT) besteld**, onderweg. *Waarom: verhoogd motorhuis (geen conflict met bankhaken/klemmen), elektronische remstop, accu — zie de evaluatie van 09-08 onder Ideeën & opties.*
- **2026-08-12** — Aansturing afzuiger: **zelfbouw ESP32 met BLE** die een stopcontact schakelt zodra de zaag actief is. *Waarom: leuker en flexibeler dan een AWS-stofzuiger kopen; de afzuigerkeuze wordt er merkonafhankelijk door.* Shelly-route geparkeerd — lijkt nu onnodig complex, zien we later eventueel.
- **2026-08-12** — Concept aangescherpt: **schakeldoos met drie triggers (OR)** voor het stofzuiger-stopcontact — (1) **vermogensmeting** op een machine-stopcontact (dekt elke "domme" snoermachine; drempel boven standby, bv. ~50 W), (2) **handknop**, (3) **AWS/BLE** (dekt accumachines — de SP001G trekt geen meetbare netstroom). Met nalooptijd (5–10 s). Bouwrichting (12-08, herzien): **één offline kast, geen wifi/zigbee** — twee stopcontacten op een installatiekast; meten met een CT-klem om de fasedraad van het machine-contact (galvanisch gescheiden, ADC van de ESP32); schakelen met één relais/contactor op het stofzuiger-contact; ESP32 doet BLE/AWS, knop, drempel en naloop in firmware. *Waarom: alle logica op één chip in één kast → niets te netwerken of te pairen.*

## Relaties

- [Aanslaglineaal](aanslaglineaal.md) — de zaag is het hart van de rail-workflow op het blad.
- [Ladeblok](ladeblok.md) — stof die je afzuigt, hoeft het stofpaneel niet te vangen.
