# AJ Performance | ECU Tuning & Remapping

Site web pentru **AJ Performance** — atelier specializat in remaparea ECU si optimizarea performantelor auto, situat in Ineu, judetul Arad, Romania.

---

## Despre proiect

Aceasta este o aplicatie web single-page construita pentru o firma reala de tuning auto. Site-ul permite clientilor sa estimeze castigurile de putere (CP) si cuplu (Nm) obtinute printr-o remapare Stage 1, direct din browser, fara cont si fara instalare.

### Ce ofera site-ul

- **Estimator Stage 1** — cautare cu autocomplete dintr-o baza de date cu 20+ masini (BMW, VW, Audi, Renault, Dacia, Mercedes, Porsche, Alfa Romeo, Seat, Ford si altele)
- **Rezultate detaliate** — comparatie vizuala stock vs. tuned, imagine masina, recomandari vitale post-tuning
- **Design premium dark-theme** — hero full-screen, statistici animate, carduri educative, efect glassmorphism, gradient-uri si animatii CSS
- **Meniu hamburger + sidebar** — navigare cu sectiuni accordion: informatii tehnice despre remapare, tarife, program de lucru, locatie
- **Sistem de review-uri** — recenzii cu stele (1-5) si comentarii, salvate local in browser
- **Harta Google Maps** — localizare integrata cu link direct catre Google Maps
- **Responsive** — optimizat pentru desktop, tableta si mobil

---

## Cum s-a lucrat la acest site

Site-ul a fost construit **pas cu pas, iterativ**, folosind **GitHub Copilot** ca asistent AI de programare in editorul **Visual Studio Code**. Procesul a fost colaborativ: eu am definit cerintele si viziunea, iar Copilot a scris codul.

**Etapele dezvoltarii:**

1. **Baza** — am pornit de la o pagina HTML simpla cu un formular de cautare si o baza de date cu masini (`cars.js`)
2. **Navigare** — am adaugat meniu hamburger cu sidebar care gliseaza din dreapta, continand programul de lucru si informatii despre firma
3. **Accordion** — am transformat sectiunile din sidebar in acordeoane colapsabile, cu sub-acordeoane individuale pentru fiecare subiect (ECU, remapare, fiabilitate, mentenanta)
4. **Branding** — am ales numele "AJ Performance" si am adaugat sectiunea "Despre Noi" cu tarife, program de lucru si adresa
5. **Redesign profesional** — am rescris integral pagina principala cu design modern: hero full-screen cu gradient overlay, bara de statistici cu counter animat, grid de carduri educative, sectiune CTA
6. **Google Maps** — am integrat harta cu locatia exacta a firmei si buton de redirectionare
7. **Sistem de review-uri** — am adaugat recenzii cu stele si comentarii, cu persistenta in localStorage

Toate cele 3 fisiere (`index.html`, `script.js`, `cars.js`) au fost scrise si imbunatatite exclusiv prin acest flux de lucru.

---

## Structura proiectului

```
Proiect_Tuning/
├── index.html    # Pagina principala (HTML + CSS)
├── script.js     # Logica aplicatiei (meniu, cautare, review-uri, animatii)
├── cars.js       # Baza de date cu masini
└── README.md     # Documentatia proiectului
```

## Tehnologii

- HTML5, CSS3 (dark theme, animatii, responsive)
- JavaScript vanilla (fara framework-uri)
- Google Fonts (Inter + Montserrat)
- Font Awesome 6.4
- Google Maps Embed
- localStorage

---

## Creez site-uri web pentru firme

Ai o afacere si ai nevoie de un site profesional? **Pot crea site-uri web personalizate** pentru orice tip de firma — tuning auto, service, atelier, magazin, salon, cabinet sau orice alt domeniu.

**Ce ofer:**
- Design modern, curat si responsive
- Functionalitati personalizate (formulare, estimatoare, harti, review-uri)
- Optimizat pentru mobil si desktop
- Livrare rapida, pret accesibil

**Contact:** alexandru.jurjita2006@gmail.com | Instagram: [@alexandru.j1](https://www.instagram.com/alexandru.j1/)

---

## Rulare

Deschide `index.html` in orice browser modern. Nu necesita server sau instalare.

---

*Construit cu pasiune pentru performanta.* 🏎️
