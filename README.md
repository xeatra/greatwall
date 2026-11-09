# Sales Partner GWM — Dealer website POC

An interactive HTML proof-of-concept for an authorised **GWM** dealer with **one location** (București).

- **Structure:** same as the Leapmotor / XPENG POCs: home, models, model page (with powertrain switch), offers, stock, vehicle, service, 3-step booking, location, legal.
- **Look and feel:** gwm-eu.com.
  - Black on white, with heavy sentence-case headings and a short red accent bar.
  - 3 px-radius buttons with a red ↗.
  - White cards with a thin grey border.
  - White header: GWM logo on the left, menu "Modele ▾" · Oferte · Stoc · Service · Contact.
  - The "Modele" panel has the tabs **Toate modelele / GWM ORA / GWM WEY**, with an underline and white bordered cards (as on gwm-eu.com).
  - The home hero is a full-screen slider with the text on the left.
- **Font:** Libre Franklin (Google Fonts), a free stand-in for the proprietary GWMSans.

## Models and prices (TVA incl., indicative)

| Model | Version | List (UVP) | Promo | Source |
|---|---|---|---|---|
| ORA 5 | Premium 1.5 Turbo (160 CP) | 26.990 | 24.990 | gwm-motor.de, GO-WITH-MORE until 31.12.2026 |
| ORA 5 | Premium Hybrid DHT (223 CP) | 28.990 | 26.990 | gwm-motor.de |
| ORA 5 | Electric 58 kWh (204 CP) | — | În curând | gwm-motor.de |
| ORA 03 | 300 / 300 Pro / 400 Pro / 400 Pro+ / GT | 38.990 / 40.990 / 44.490 / 47.490 / 49.490 | 300: 26.990 | GWM price list Jan 2024 + Sorin |
| ORA 07 | Pure / Pro / GT | 41.990 / 44.490 / 53.490 | list price | ORA 07 launch prices 2024 |
| WEY 03 | Premium FWD / Luxury FWD / Luxury AWD | 47.900 / 51.900 / 55.900 | −5.500 € | gwm-motor.de/angebote |
| WEY 05 | Premium AWD / Luxury AWD | 59.900 / 63.900 | −5.500 € | gwm-motor.de/angebote |

- **WEY 03 / WEY 05:** run-out models in Germany, shown with the badge "Ultimele unități" (last units).
- **Warranty:** 7 years / 150.000 km on the vehicle and 8 years / 160.000 km on the battery.

## Images

Hot-linked from **gwm-eu.com** (ORA 5 key visuals, technology images, logo) and **gwm-motor.de** (ORA 03 / ORA 07 / WEY images and the per-colour cut-outs for ORA 5, ORA 03, ORA 07 and WEY).

## Run it

- **Locally:** open `index.html`. Internet is needed for the images and the font.
- **Vercel:** Root Directory `gwm`. `vercel.json` sends `noindex`, and `robots.txt` blocks crawlers.
