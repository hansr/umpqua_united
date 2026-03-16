# Umpqua United Soccer Club — Site Spec (Target for umpquaunited.org)

**Document purpose:** Definitive spec for the desired Umpqua United website at **www.umpquaunited.org**. This is the target to build toward (e.g. via the Jekyll site in this repo), not the current Stack Sports live site.

---

## Identity (Umpqua United)

- **Name:** Umpqua United Soccer Club (UUSC)
- **Tagline (choose one or lock):** e.g. “Building champions on and off the field” (from `_config.yml`) or “Roseburg’s community soccer club since 1974.”
- **Founded:** 1974
- **Location:** Roseburg, Oregon
- **Structure:** Non-profit (incorporate 501(c)(3) + EIN in copy if/when applicable)
- **Mission:** To develop outstanding individuals through quality programs and to foster a life-long passion for soccer.
- **Vision:** To create a united, all-inclusive soccer club and to establish a safe and fun environment to empower each player to their full potential.
- **Affiliations:** Oregon Youth Soccer Association (OYSA); link to OYSA and OYSA COVID-19 resource where relevant.
- **Contact (canonical):**
  - **Address:** 576 W Stewart Park Dr, Roseburg, OR 97471
  - **Phone:** 541-672-5089
  - **Email:** info@umpquaunited.org
- **Social:** Facebook (umpquaunited), Instagram (umpquaunited) — from `_config.yml`.

---

## Site map (target for umpquaunited.org)

Clean URLs; no `tabid` or `Default.aspx`. One level of dropdown where needed.

| Nav label | URL | Contents |
|-----------|-----|----------|
| **Home** | `/` | Homepage (sections below). |
| **About** | `/about` | Who we are, story, mission, vision, values; link to Staff. |
| → Our Staff | `/about/#staff` or `/about/staff` | Staff/board list; optional Locations. |
| → Code of Conduct | `/about/code-of-conduct` or `/resources/code-of-conduct` | Single code of conduct; linked from registration flow as needed. |
| → Contact | `/contact` | Address, phone, email, map link; same content as footer. |
| **Programs** | `/programs` | Overview + tiles to Rec and Competitive. |
| → Recreational | `/programs/recreational` | Ages 5–14; Fall/Spring seasons; registration status; link to Game Schedule, League Rules, registration (Stack Sports). |
| → Competitive | `/programs/competitive` | Ages 9–14; tryouts (e.g. HS Winter League); link to tryouts page and registration. |
| **Tryouts** | `/tryouts` | HS Winter League Tryouts (and any other tryout); dates, process, “Register” → Stack Sports. |
| **Resources** | `/resources` | Hub or single page. |
| → Field Map | `/fields` or `/resources/field-map` | Season field map (e.g. “2026 Spring Field Map”), venues, directions. Align with existing Jekyll `fields` if kept. |
| → Game Schedule | Link out to Stack Sports or embed if available | Or “Schedule” under Recreational. |
| → League Rules | `/programs/recreational#rules` or `/resources/league-rules` | Rec league rules. |
| → Player Development | `/resources/player-development` | Player development info. |
| → Forms | `/resources/forms` | Registration, medical, waivers — list with links to Stack Sports or PDFs. |
| **News** | `/news` | List of articles/updates. |
| → Article | `/news/:slug` | e.g. Goal Lines Magazine, Support UUSC, Understanding our logo. |
| **Get Involved** | `/get-involved` or under **Community** | |
| → Support UUSC / Donate | `/get-involved/support` or `/support` | “Support our club”; BottleDrop Give (“Grab a Blue Bag”); any donate link. |
| → Volunteers | `/get-involved/volunteers` | Coaches needed, volunteer opportunities; contact office@ or link to Stack Sports. |
| **Club Store** | Link out | Capelli team store (external). |
| **Member Login** | Link out | Stack Sports login (header/footer utility). |
| **Register** | Link out | Stack Sports registration (header/footer or CTA). |
| **Footer** | — | Privacy, Terms (link to Stack Sports legal or own); copyright “© [year] Umpqua United Soccer Club”; repeat Contact, key nav. |

**Minimal nav (if simplifying):** Home | About | Programs | Fields | Contact — then Programs expands to Recreational, Competitive; About expands to Staff, Code of Conduct; footer adds Support, Volunteers, Store, Login, Register.

---

## Home page — sections (Umpqua United)

| Section | Content (definitive) |
|--------|----------------------|
| **Hero** | “Umpqua United Soccer Club” + tagline; one primary CTA: “Register” or “View Programs” or season-specific “Spring Rec – Register now” / “Tryouts – Register.” Optional: hero image (e.g. Stewart Park or team). |
| **Announcements** | 1–3 short banners: e.g. “Spring Rec registration closed – Fall 2026 opens in May”; “HS Winter League Tryouts – [dates]”; “Coaches needed for Spring Rec – contact us.” Each links to the right page or email. |
| **Who we are** | 1–2 sentences: non-profit since 1974; rec 5–14, competitive 9–14; mission (or mission + vision in one line). CTA: “Learn more” → `/about`. |
| **Programs grid** | Two main tiles: **Recreational** (ages 5–14, Fall/Spring) → `/programs/recreational`; **Competitive** (ages 9–14, tryouts) → `/programs/competitive`. Optional third: “Tryouts” → `/tryouts`. |
| **Featured CTA** | One highlighted funnel: e.g. “2026 Spring Rec – Registration closed; Fall opens May” or “HS Winter League Tryouts – Register here” with button to Stack Sports or `/tryouts`. |
| **Season Field Map** | “Season Field Map” / “2026 Spring Field Map” with “Read more” or “View map” → `/fields` (or `/resources/field-map`). |
| **Support UUSC** | “Support our club”; **Grab a Blue Bag** (BottleDrop Give): 1) Grab blue bag at club 2) Fill with cans/bottles 3) Drop off; optional “Read more” if you have a short support page. |
| **News / updates** | 2–4 items: e.g. “Goal Lines Magazine” (OYSA), “Support UUSC,” “Understanding our logo!” (identity, core values). Title + “Read more” → `/news` or `/news/:slug`. |
| **Events** | “Upcoming events” or “Next games”: 3–5 items (date, time, match, venue e.g. Lane CC 7v7 Grass). “View full calendar” → Stack Sports or external calendar. |
| **Helpful links** | OYSA, Available Programs (link to `/programs` or Stack Sports), Volunteer Opportunities (`/get-involved/volunteers`), OYSA COVID-19 resource. |
| **Contact** | Umpqua United Soccer Club — 576 W Stewart Park Dr, Roseburg, OR 97471; 541-672-5089; info@umpquaunited.org. Optional: “Field map” link. |
| **Footer** | Same contact; nav (About, Programs, Fields, Contact, Support, Volunteers); Store; Login | Register (Stack Sports); © 2026 Umpqua United Soccer Club; Privacy / Terms (Stack Sports or own). |

---

## About page — sections (Umpqua United)

| Section | Content |
|--------|--------|
| **Headline** | “About Umpqua United” or “Who We Are.” |
| **Our story** | Founded 1974; non-profit; rec ages 5–14, competitive 9–14; Roseburg / Douglas County community. One line on OYSA affiliation. |
| **Mission** | To develop outstanding individuals through quality programs and to foster a life-long passion for soccer. |
| **Vision** | To create a united, all-inclusive soccer club and to establish a safe and fun environment to empower each player to their full potential. |
| **Values / culture** | Optional: short bullets or “Understanding our logo” (identity, core values) — can reuse content from current site. |
| **Our Staff** | Names and roles (or “Meet our staff” with list); link to Locations if used. |
| **Contact** | 576 W Stewart Park Dr, Roseburg, OR 97471; 541-672-5089; info@umpquaunited.org. |
| **Footer** | Standard footer. |

---

## Programs pages (Umpqua United)

- **Programs overview (`/programs`):** Short intro; two tiles/cards: Recreational (5–14, Fall/Spring) and Competitive (9–14); link to Tryouts.
- **Recreational (`/programs/recreational`):** Ages 5–14; Fall and Spring seasons; registration open/closed and link to Stack Sports; links to Game Schedule, League Rules; optional “Player development” link.
- **Competitive (`/programs/competitive`):** Ages 9–14; HS Winter League and any other competitive offerings; tryouts dates and “Register for tryouts” → `/tryouts` or Stack Sports.

---

## Tryouts page (`/tryouts`)

| Section | Content |
|--------|--------|
| **Headline** | “Tryouts” or “HS Winter League Tryouts.” |
| **Dates & process** | Season/year; dates; age bands; “Register” → Stack Sports. |
| **CTA** | Primary button: “Register for tryouts” (Stack Sports). |
| **Optional** | Parent info, “Why Umpqua United,” link to Code of Conduct. |

---

## Resources (Umpqua United)

- **Field map:** `/fields` or `/resources/field-map` — “Season Field Map,” “2026 Spring Field Map”; list venues (e.g. Stewart Park, Lane CC) with address/directions; optional PDF or embedded map.
- **Game Schedule:** Link to Stack Sports (or embed) from Rec page or Resources.
- **League Rules:** One page or PDF; linked from Recreational and optionally Resources.
- **Player Development:** One page under `/resources/player-development`.
- **Code of Conduct:** One page; linked from About and/or registration flow.
- **Forms:** List (registration, medical, waivers) with links to Stack Sports or PDFs.

---

## News (Umpqua United)

- **List (`/news`):** Title, date, excerpt; “Read more” → detail.
- **Detail (`/news/:slug`):** Title, date, body. Migrate existing items (Goal Lines Magazine, Support UUSC, Understanding our logo) as needed.

---

## Get Involved (Umpqua United)

- **Support / Donate:** “Support UUSC”; BottleDrop “Grab a Blue Bag” steps; any donate link or future campaign.
- **Volunteers:** “Coaches needed,” general volunteer opportunities; contact info (office / info@umpquaunited.org) or link to Stack Sports.

---

## External by design

- **Registration and login** — Stack Sports; site links only (Register, Login).
- **Team store** — Capelli; single link in header/footer.
- **Schedules and standings** — Stack Sports or league; link or embed, do not rebuild.
- **Legal** — Privacy, Terms, COPPA: link to Stack Sports legal pages unless the club hosts its own.

---

## Summary (Umpqua United)

**Site:** www.umpquaunited.org — a single, clear site with **About** (story, mission, vision, staff, code of conduct, contact), **Programs** (Recreational 5–14, Competitive 9–14), **Tryouts** (HS Winter League + register), **Resources** (field map, schedule, league rules, player development, forms), **News**, and **Get Involved** (Support/BottleDrop, Volunteers). **Store** and **Login/Register** are links to Capelli and Stack Sports. Home leads with hero CTA, announcements, who we are, programs grid, field map, support, news, events, helpful links, and contact — all specific to Umpqua United and Roseburg.
