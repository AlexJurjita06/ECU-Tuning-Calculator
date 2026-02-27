# ECU Tuning & Remapping Estimator 🚗⚡

⚠️ **Status Proiect:** *În dezvoltare activă (Work in Progress). Acest site primește actualizări constante, obiectivul principal fiind transformarea lui dintr-un simplu calculator într-o platformă web completă, gata de a fi utilizată de o firmă reală de chiptuning.*

## Descriere Proiect
Acest proiect este o aplicație web interactivă, dezvoltată din dorința de a oferi o unealtă utilă și transparentă pasionaților auto. Aplicația permite utilizatorilor să afle instantaneu potențialul de creștere a puterii (Cai Putere / CP) și a cuplului (Newton Metru / NM) pentru mașina lor, în urma unei resoftări de tip Stage 1.

A fost construit folosind tehnologii web fundamentale (Vanilla JavaScript, HTML5, CSS3) și funcționează pe baza unei structuri de date locale (array de obiecte în `cars.js`).

## De ce este important acest proiect? (Potențial de Business)
La prima vedere, este un calculator tehnic, însă la nivel de afacere, acest proiect reprezintă un instrument digital puternic de **Lead Generation** (atragere de clienți) pentru un atelier de ECU Tuning. 

O firmă reală care se ocupă de chiptuning poate folosi acest site pentru a:
* **Automatiza estimările:** Clienții nu mai trebuie să sune sau să trimită mesaje doar pentru a întreba "Cât scoate mașina mea?". Ei găsesc răspunsul instant, direct pe site.
* **Oferi transparență și încredere:** Prin secțiunea de avertismente, atelierul demonstrează profesionalism și grijă față de starea tehnică a mașinii clientului (ex. indicarea uzurii ambreiajului sau recomandarea de uleiuri specifice).
* **Crește rata de conversie:** După afișarea rezultatelor, clientului i se prezintă imediat opțiunea de a se programa.

## Dezvoltări Viitoare (Roadmap & Updates)
Deoarece site-ul este în continuă evoluție, următoarele etape de dezvoltare se concentrează pe transformarea acestuia într-un website de prezentare complet pentru un atelier auto:

* 🎨 **Îmbunătățiri de Design (UI/UX):** Rafinarea interfeței vizuale, adăugarea de elemente grafice premium și tranziții fluide care să inspire profesionalismul unui atelier de top.
* 📋 **Meniu de Navigare (Navbar):** Implementarea unui meniu principal pentru a facilita accesul rapid la diversele secțiuni ale site-ului.
* 🛠️ **Secțiune de Servicii Software Specializate:** Extinderea site-ului cu pagini dedicate pentru alte servicii esențiale oferite de ateliere, folosind terminologia tehnică adecvată:
  * *Soluții software pentru managementul sistemelor antipoluare.*
  * *Dezactivare / Remediere software DPF (Filtru de Particule).*
  * *Anulare electronică EGR (Recircularea Gazelor de Eșapament).*
  * *Optimizare și anulare sistem SCR / AdBlue (destinate utilizării în regim off-road/motorsport).*
* 📅 **Sistem de programări integrat:** Un formular funcțional prin care clienții să poată rezerva direct ziua și ora pentru intervenție.
* 📈 **Extinderea Bazei de Date:** Trecerea de la un fișier local `.js` la o bază de date reală (Backend) pe măsură ce volumul de mașini va crește.

## Funcționalități Curente
* 🔍 **Căutare Dinamică:** Câmp de input cu funcție de autocompletare, bazat pe o listă generată dinamic.
* 📊 **Comparație Vizuală:** Interfața afișează clar diferența dintre valorile de fabrică (Stock) și cele obținute după resoftare.
* ⚠️ **Recomandări Tehnice (Warnings):** Sfaturi specifice post-tuning pentru fiecare model în parte.
* 📱 **Design Responsiv:** Interfața se adaptează perfect pe monitoare, tablete și telefoane mobile.

## Tehnologii Folosite
* **HTML5:** Pentru structurarea semantică a paginii.
* **CSS3:** Pentru stilizare, folosind Flexbox, Grid și animații CSS (keyframes).
* **JavaScript (Vanilla):** Pentru manipularea DOM-ului (afișarea/ascunderea secțiunilor fără a reîncărca pagina) și procesarea datelor.

---
*Proiect dezvoltat de Alexandru Jurjița.*
