# Umpqua United Soccer Club — Site Spec (Existing Live Site)

**Base URL:** https://www.umpquaunited.org/  
**Identity:** Umpqua United Soccer Club (UUSC) — non-profit, founded 1974. Roseburg, Oregon.  
**Platform:** Stack Sports (Default.aspx, tabid-based URLs).

**Mission:** To develop outstanding individuals through quality programs and to foster a life-long passion for soccer.  
**Vision:** To create a united, all-inclusive soccer club and to establish a safe and fun environment to empower each player to their full potential.

---

## Site map

URL pattern: `https://www.umpquaunited.org/Default.aspx?tabid=<id>`

### Main nav

| Label | tabid | Notes |
|-------|--------|--------|
| **Home** | 1903231 | Homepage |
| **Recreational** | 2695950 | Rec program |
| **League Rules** | 2750345 | Rec league rules |
| **Game Schedule** | 2723647 | Schedule |
| **About Us** | 1903233 | About / Our Staff |
| **Code of Conduct** | 2773652 | Code of conduct (main) |
| **Resources** | 2069836 | Resources |
| **Player Development** | 2695951 | Player development |
| **Field Map** | 2723646 | Fields / Season Field Map |
| **Registration Info** | 1903238 | Registration |
| **Code of Conduct** | 2753276 | (Registration-related code) |
| **FORMS** | 2735015 | Forms |
| **Competitive** | 2695952 | Competitive program |
| **HS Winter League Tryouts** | 2741812 | Tryouts |
| **Volunteers** | 1992382 | Volunteer opportunities |
| **Capelli Store** | 2745520 | Team store |
| **Login** | 1903242 | Member login (isLogin=True) |
| **Register** | 1903242 | Registration entry |

### Other

- **Locations** — tabid 1903237
- **Our Staff** — under About Us (1903233)
- **Available Programs** — tabid 1903239
- **Volunteer Opportunities** — tabid 1903240
- **Events/Calendar** — tabid 1913286 (View More from home)

### Footer / legal

- Privacy Statement → stacksports.com
- Terms Of Use → stacksports.com
- License Agreement → stacksports.com
- Children's Privacy Policy (COPPA) → stacksports.com

---

## Per-page information sections

### Home (`Default.aspx?tabid=1903231`)

| Section | Description |
|--------|-------------|
| **Header** | “UMPQUA UNITED SOCCER CLUB”; nav: Recreational (Game Schedule, League Rules), About Us (Field Map, Player Development, Resources, Code of Conduct), Registration Info (FORMS, Code of Conduct), Competitive (HS Winter League Tryouts); Capelli Store; Login / Register. “Website Manager” with Login \| Register. |
| **Season Field Map** | “Season Field Map” — e.g. “2026 Spring Field Map” with “Read More” → Field Map. |
| **Rec registration** | “2026 Spring Recreational Soccer…” — status (e.g. registration CLOSED, Fall 2026 in May). |
| **Grab a Blue Bag** | BottleDrop Give: 1) Grab blue bag at club 2) Fill with cans/bottles 3) Drop off; “Read More.” |
| **Coaches needed** | “Coaches are needed for the Spring Recreational Season” + contact (office email). |
| **Capelli Store** | Link to team store. |
| **News / feature articles** | “Goal Lines Magazine” (OYSA); “Support UUSC” (Support Our Club); “Understanding our logo!” (identity, core values); each with “Read More” (newsdetail). |
| **Events** | “Events” — next games (date, time, match, venue e.g. Lane CC 7v7 Grass); “View More” → calendar (tabid 1913286). |
| **Helpful links** | Oregon Youth Soccer Assoc.; Available Programs; Volunteer Opportunities; OYSA COVID-19 Resource Page. |
| **About our club** | Short blurb: non-profit since 1974; rec ages 5–14, competitive 9–14; mission and vision; “Read More” → viewaboutclub. |
| **Site links** | Locations; Our Staff. |
| **Contact** | “Contact Us” / “UMPQUA UNITED SOCCER CLUB” — 576 W Stewart Park Dr, Roseburg, OR 97471; Phone 541-672-5089; email. |
| **Footer** | © 2026 Umpqua United Soccer Club; Privacy, Terms, License, COPPA, Log In. |

---

## Notes

- **Stack Sports** powers registration, login, and likely scheduling/teams; legal links point to stacksports.com.
- **Capelli** is used for team store.
- **BottleDrop Give** is a recurring support/fundraising CTA.
- Two **Code of Conduct** entries in nav (general + registration flow).
- This repo contains a **Jekyll** site (index, about, programs, fields, contact) that can be used as the basis for a redesigned site; content and nav there may differ from the live spec above.
