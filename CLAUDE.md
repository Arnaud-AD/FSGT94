# FSGT94 Volleyball Elite Championship Dashboard

## Project Overview
Single-page web app tracking the FSGT94 Volleyball Elite Championship. Displays standings, match results, power rankings, and player statistics for "Jen et ses Saints" team.

## Architecture
- **index.html** - Main HTML structure with tabs (Classement, Matchs, Power Ranking, Statistiques)
- **data.js** - All data constants (teams, standings, matches, stats, etc.)
- **app.js** - Rendering logic and UI interactions
- **styles.css** - Styling

## Data Structure (data.js)
- `TEAMS` - Team definitions with name, short code, logo class, color
- `STANDINGS` - Current standings table (rank, wins, losses, sets, points, form)
- `MATCHES_PLAYED` - Completed matches (date, home/away teams, set scores, winner)
- `MATCHES_UPCOMING` - Scheduled/postponed matches
- `PR_TEAMS` / `PR_PLAYERS` - Power ranking data
- `MATCH_STATS` - Detailed per-set player statistics for "Jen et ses Saints" matches
- `ANNUAL_STATS` - Season totals for "Jen et ses Saints" players
- `PLAYER_CHARTS` - Chart data per player
- `EVOLUTION_DATA` - Points evolution over matchdays for the chart

## Team Keys
jen, kiki, rhsp, resc, marv, rsc, manu, bier, rhin, star

## Scoring Rules
- Win = 2 pts, Loss = 1 pt (no draws)
- Matches are BO5 but can end early if time runs out
- If no team wins 3 sets, winner is team with more sets; if equal sets, winner is team with more total points

## Standings Sort Order
1. Fewest defeats
2. Best DS (set difference)
3. Best Coef Set (set+/set-)
4. Best Coef Pts (pts+/pts-)
5. Most Pts+
6. Fewest Pts-

## Form (10 derniers)
Left = oldest match, Right = most recent match. Sorted by actual match date, not by journée order.

## Data Source
Match results from: https://volley-fsgt94.fr/championnat/1
Home team is always on the left, away team on the right.
N/C score = match not yet played.
