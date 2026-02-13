// ============================================================
// FSGT94 Volleyball Championship - Data File
// Extracted from index.html
// ============================================================

// 1. TEAMS
const TEAMS = {
  jen: { name: 'Jen et ses Saints', short: 'JS', logo: 'logo-jen', color: '#9b59b6' },
  kiki: { name: 'Kiki Team', short: 'KT', logo: 'logo-kiki', color: '#3498db' },
  rhsp: { name: 'Red Hot Sucy Pépère', short: 'RH', logo: 'logo-rhsp', color: '#e74c3c' },
  resc: { name: 'Les Rescapés', short: 'LR', logo: 'logo-resc', color: '#2ecc71' },
  marv: { name: 'Marvels 4', short: 'M4', logo: 'logo-marv', color: '#f39c12' },
  rsc: { name: 'RSC Champigny 1', short: 'RC', logo: 'logo-rsc', color: '#1abc9c' },
  manu: { name: 'Manu Andy-sport', short: 'MA', logo: 'logo-manu', color: '#e67e22' },
  bier: { name: 'Bières et le loup', short: 'BL', logo: 'logo-bier', color: '#f1c40f' },
  rhin: { name: 'Rhinos Féroces', short: 'RF', logo: 'logo-rhin', color: '#95a5a6' },
  star: { name: 'StarPAFF', short: 'SP', logo: 'logo-star', color: '#34495e' }
};

// 2. STANDINGS
const STANDINGS = [
  { rank: 1, team: 'jen', mj: 10, g: 10, p: 0, setPlus: 30, setMinus: 3, ds: 27, coefSet: '10.00', ptsPlus: 817, ptsMinus: 614, dp: '+203', coefPts: '1.33', pts: 20, form: ['W','W','W','W','W','W','W','W','W','W'] },
  { rank: 2, team: 'kiki', mj: 9, g: 7, p: 2, setPlus: 22, setMinus: 13, ds: 9, coefSet: '1.69', ptsPlus: 804, ptsMinus: 711, dp: '+93', coefPts: '1.13', pts: 16, form: ['W','W','L','W','W','W','W','L','W'] },
  { rank: 3, team: 'resc', mj: 8, g: 5, p: 3, setPlus: 20, setMinus: 13, ds: 7, coefSet: '1.54', ptsPlus: 743, ptsMinus: 706, dp: '+37', coefPts: '1.05', pts: 13, form: ['W','W','W','L','L','W','L','W'] },
  { rank: 4, team: 'rhsp', mj: 10, g: 6, p: 4, setPlus: 20, setMinus: 17, ds: 3, coefSet: '1.18', ptsPlus: 796, ptsMinus: 765, dp: '+31', coefPts: '1.04', pts: 16, form: ['L','W','W','W','W','W','L','W','L','L'] },
  { rank: 5, team: 'marv', mj: 10, g: 6, p: 4, setPlus: 22, setMinus: 20, ds: 2, coefSet: '1.10', ptsPlus: 904, ptsMinus: 902, dp: '+2', coefPts: '1.00', pts: 16, form: ['W','W','L','W','W','L','W','L','W','L'] },
  { rank: 6, team: 'bier', mj: 10, g: 5, p: 5, setPlus: 18, setMinus: 19, ds: -1, coefSet: '0.95', ptsPlus: 838, ptsMinus: 808, dp: '+30', coefPts: '1.04', pts: 15, form: ['W','L','L','L','W','L','L','W','W','W'] },
  { rank: 7, team: 'rsc', mj: 8, g: 3, p: 5, setPlus: 15, setMinus: 19, ds: -4, coefSet: '0.79', ptsPlus: 699, ptsMinus: 715, dp: '-16', coefPts: '0.98', pts: 11, form: ['L','W','L','L','W','L','L','W'] },
  { rank: 8, team: 'manu', mj: 8, g: 2, p: 6, setPlus: 10, setMinus: 18, ds: -8, coefSet: '0.56', ptsPlus: 595, ptsMinus: 645, dp: '-50', coefPts: '0.92', pts: 10, form: ['L','L','W','L','L','W','L','L'] },
  { rank: 9, team: 'rhin', mj: 9, g: 2, p: 7, setPlus: 14, setMinus: 21, ds: -7, coefSet: '0.67', ptsPlus: 744, ptsMinus: 793, dp: '-49', coefPts: '0.94', pts: 11, form: ['L','L','L','L','W','L','L','W','L'] },
  { rank: 10, team: 'star', mj: 10, g: 0, p: 10, setPlus: 2, setMinus: 30, ds: -28, coefSet: '0.07', ptsPlus: 513, ptsMinus: 794, dp: '-281', coefPts: '0.65', pts: 10, form: ['L','L','L','L','L','L','L','L','L','L'] }
];

// 3. MATCHES_PLAYED
const MATCHES_PLAYED = [
  { date: '12/02/2026', home: 'jen', away: 'rhsp', scoreHome: 3, scoreAway: 0, homeWin: true, status: 'Terminé' },
  { date: '11/02/2026', home: 'star', away: 'kiki', scoreHome: 0, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '11/02/2026', home: 'rsc', away: 'marv', scoreHome: 3, scoreAway: 2, homeWin: true, status: 'Terminé' },
  { date: '10/02/2026', home: 'bier', away: 'manu', scoreHome: 3, scoreAway: 0, homeWin: true, status: 'Terminé' },
  { date: '09/02/2026', home: 'resc', away: 'rhin', scoreHome: 3, scoreAway: 1, homeWin: true, status: 'Terminé' },
  { date: '29/01/2026', home: 'marv', away: 'rsc', scoreHome: 3, scoreAway: 2, homeWin: true, status: 'Terminé' },
  { date: '29/01/2026', home: 'jen', away: 'manu', scoreHome: 3, scoreAway: 1, homeWin: true, status: 'Terminé' },
  { date: '27/01/2026', home: 'bier', away: 'star', scoreHome: 3, scoreAway: 0, homeWin: true, status: 'Terminé' },
  { date: '26/01/2026', home: 'kiki', away: 'jen', scoreHome: 0, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '26/01/2026', home: 'rhin', away: 'rhsp', scoreHome: 3, scoreAway: 0, homeWin: true, status: 'Terminé' },
  { date: '22/01/2026', home: 'jen', away: 'resc', scoreHome: 3, scoreAway: 1, homeWin: true, status: 'Terminé' },
  { date: '21/01/2026', home: 'manu', away: 'rhin', scoreHome: 3, scoreAway: 2, homeWin: true, status: 'Terminé' },
  { date: '21/01/2026', home: 'rsc', away: 'bier', scoreHome: 2, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '19/01/2026', home: 'rhsp', away: 'star', scoreHome: 3, scoreAway: 0, homeWin: true, status: 'Terminé' },
  { date: '19/01/2026', home: 'kiki', away: 'marv', scoreHome: 3, scoreAway: 1, homeWin: true, status: 'Terminé' },
  { date: '15/01/2026', home: 'marv', away: 'manu', scoreHome: 3, scoreAway: 0, homeWin: true, status: 'Terminé' },
  { date: '14/01/2026', home: 'star', away: 'rsc', scoreHome: 0, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '13/01/2026', home: 'bier', away: 'resc', scoreHome: 1, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '12/01/2026', home: 'rhsp', away: 'kiki', scoreHome: 2, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '12/01/2026', home: 'rhin', away: 'jen', scoreHome: 0, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '08/01/2026', home: 'jen', away: 'marv', scoreHome: 3, scoreAway: 0, homeWin: true, status: 'Terminé' },
  { date: '11/12/2025', home: 'marv', away: 'bier', scoreHome: 3, scoreAway: 1, homeWin: true, status: 'Terminé' },
  { date: '11/12/2025', home: 'jen', away: 'rsc', scoreHome: 3, scoreAway: 0, homeWin: true, status: 'Terminé' },
  { date: '08/12/2025', home: 'kiki', away: 'manu', scoreHome: 2, scoreAway: 2, homeWin: true, status: 'Kiki pts' },
  { date: '08/12/2025', home: 'resc', away: 'rhsp', scoreHome: 2, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '08/12/2025', home: 'star', away: 'rhin', scoreHome: 0, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '03/12/2025', home: 'manu', away: 'star', scoreHome: 3, scoreAway: 0, homeWin: true, status: 'Terminé' },
  { date: '02/12/2025', home: 'marv', away: 'resc', scoreHome: 3, scoreAway: 2, homeWin: true, status: 'Terminé' },
  { date: '01/12/2025', home: 'rhsp', away: 'rsc', scoreHome: 3, scoreAway: 2, homeWin: true, status: 'Terminé' },
  { date: '01/12/2025', home: 'rhin', away: 'bier', scoreHome: 1, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '26/11/2025', home: 'star', away: 'jen', scoreHome: 0, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '25/11/2025', home: 'bier', away: 'kiki', scoreHome: 1, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '24/11/2025', home: 'rhsp', away: 'marv', scoreHome: 3, scoreAway: 1, homeWin: true, status: 'Terminé' },
  { date: '20/11/2025', home: 'jen', away: 'bier', scoreHome: 3, scoreAway: 1, homeWin: true, status: 'Terminé' },
  { date: '19/11/2025', home: 'rsc', away: 'kiki', scoreHome: 2, scoreAway: 2, homeWin: true, status: 'RSC pts' },
  { date: '19/11/2025', home: 'manu', away: 'rhsp', scoreHome: 0, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '19/11/2025', home: 'star', away: 'resc', scoreHome: 0, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '17/11/2025', home: 'rhin', away: 'marv', scoreHome: 2, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '06/11/2025', home: 'marv', away: 'star', scoreHome: 3, scoreAway: 1, homeWin: true, status: 'Terminé' },
  { date: '04/11/2025', home: 'bier', away: 'rhsp', scoreHome: 0, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '03/11/2025', home: 'resc', away: 'rsc', scoreHome: 3, scoreAway: 1, homeWin: true, status: 'Terminé' },
  { date: '03/11/2025', home: 'kiki', away: 'rhin', scoreHome: 3, scoreAway: 1, homeWin: true, status: 'Terminé' },
  { date: '15/10/2025', home: 'manu', away: 'bier', scoreHome: 1, scoreAway: 2, homeWin: false, status: 'Terminé' },
  { date: '13/10/2025', home: 'rhsp', away: 'jen', scoreHome: 0, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '13/10/2025', home: 'rhin', away: 'resc', scoreHome: 1, scoreAway: 3, homeWin: false, status: 'Terminé' },
  { date: '13/10/2025', home: 'kiki', away: 'star', scoreHome: 3, scoreAway: 1, homeWin: true, status: 'Terminé' }
];

// 4. MATCHES_UPCOMING
const MATCHES_UPCOMING = [
  { date: '02/03/2026', home: 'kiki', away: 'resc', status: 'Reporté' },
  { date: 'N/C', home: 'rsc', away: 'rhin', status: 'Reporté' },
  { date: '16/02/2026', home: 'star', away: 'marv', status: 'Sem. 11' },
  { date: '16/02/2026', home: 'rhsp', away: 'bier', status: 'Sem. 11' },
  { date: '16/02/2026', home: 'rhin', away: 'kiki', status: 'Sem. 11' },
  { date: '18/02/2026', home: 'manu', away: 'jen', status: 'Sem. 11' },
  { date: '18/02/2026', home: 'rsc', away: 'resc', status: 'Sem. 11' },
  { date: '09/03/2026', home: 'kiki', away: 'rsc', status: 'Sem. 12' },
  { date: '09/03/2026', home: 'rhsp', away: 'manu', status: 'Sem. 12' },
  { date: '09/03/2026', home: 'resc', away: 'star', status: 'Sem. 12' },
  { date: '10/03/2026', home: 'bier', away: 'jen', status: 'Sem. 12' },
  { date: '12/03/2026', home: 'marv', away: 'rhin', status: 'Sem. 12' },
  { date: '18/03/2026', home: 'rsc', away: 'manu', status: 'Reporté' },
  { date: '23/03/2026', home: 'rhin', away: 'rsc', status: 'Sem. 13' },
  { date: '23/03/2026', home: 'kiki', away: 'bier', status: 'Sem. 13' },
  { date: '25/03/2026', home: 'manu', away: 'resc', status: 'Sem. 13' },
  { date: '26/03/2026', home: 'marv', away: 'rhsp', status: 'Sem. 13' },
  { date: '26/03/2026', home: 'jen', away: 'star', status: 'Sem. 13' },
  { date: '30/03/2026', home: 'resc', away: 'marv', status: 'Sem. 14' },
  { date: '30/03/2026', home: 'star', away: 'manu', status: 'Sem. 14' },
  { date: '31/03/2026', home: 'bier', away: 'rhin', status: 'Sem. 14' },
  { date: '01/04/2026', home: 'rsc', away: 'rhsp', status: 'Sem. 14' },
  { date: '02/04/2026', home: 'jen', away: 'kiki', status: 'Sem. 14' },
  { date: '06/04/2026', home: 'rhsp', away: 'resc', status: 'Sem. 15' },
  { date: '06/04/2026', home: 'rhin', away: 'star', status: 'Sem. 15' },
  { date: '07/04/2026', home: 'bier', away: 'marv', status: 'Sem. 15' },
  { date: '08/04/2026', home: 'rsc', away: 'jen', status: 'Sem. 15' },
  { date: '08/04/2026', home: 'manu', away: 'kiki', status: 'Sem. 15' },
  { date: '04/05/2026', home: 'resc', away: 'kiki', status: 'Sem. 16' },
  { date: '04/05/2026', home: 'star', away: 'bier', status: 'Sem. 16' },
  { date: '04/05/2026', home: 'rhsp', away: 'rhin', status: 'Sem. 16' },
  { date: '06/05/2026', home: 'manu', away: 'rsc', status: 'Sem. 16' },
  { date: '07/05/2026', home: 'marv', away: 'jen', status: 'Sem. 16' },
  { date: '11/05/2026', home: 'resc', away: 'bier', status: 'Sem. 17' },
  { date: '11/05/2026', home: 'kiki', away: 'rhsp', status: 'Sem. 17' },
  { date: '13/05/2026', home: 'manu', away: 'marv', status: 'Sem. 17' },
  { date: '13/05/2026', home: 'rsc', away: 'star', status: 'Sem. 17' },
  { date: '14/05/2026', home: 'jen', away: 'rhin', status: 'Sem. 17' },
  { date: '18/05/2026', home: 'rhin', away: 'manu', status: 'Sem. 18' },
  { date: '18/05/2026', home: 'star', away: 'rhsp', status: 'Sem. 18' },
  { date: '19/05/2026', home: 'bier', away: 'rsc', status: 'Sem. 18' },
  { date: '21/05/2026', home: 'marv', away: 'kiki', status: 'Sem. 18' },
  { date: '21/05/2026', home: 'resc', away: 'jen', status: 'Sem. 18' },
  { date: '01/06/2026', home: 'resc', away: 'manu', status: 'Reporté' }
];

// 5. PR_TEAMS (Power Ranking - Equipes)
const PR_TEAMS = [
  { rank: 1, team: 'jen', record: '10-0', power: 100, badge: '👑 Invaincu', badgeClass: 'diff-easy' },
  { rank: 2, team: 'resc', record: '5-3', power: 76, badge: '🔥 V vs Rhinos', badgeClass: 'diff-easy' },
  { rank: 3, team: 'kiki', record: '7-2', power: 76, badge: '🔥 V vs StarPAFF', badgeClass: 'diff-easy' },
  { rank: 4, team: 'rhsp', record: '6-4', power: 65, badge: '📉 D vs Jen', badgeClass: 'diff-hard' },
  { rank: 5, team: 'marv', record: '6-4', power: 52, badge: '📉 D vs RSC', badgeClass: 'diff-hard' },
  { rank: 6, team: 'rhin', record: '2-7', power: 50, badge: '📉 D vs Rescapés', badgeClass: 'diff-hard' },
  { rank: 7, team: 'bier', record: '5-5', power: 49, badge: '🔥 V vs Manu', badgeClass: 'diff-easy' },
  { rank: 8, team: 'rsc', record: '3-5', power: 47, badge: '🔥 V vs Marvels', badgeClass: 'diff-easy' },
  { rank: 9, team: 'manu', record: '2-6', power: 33, badge: '📉 D vs Bières', badgeClass: 'diff-hard' },
  { rank: 10, team: 'star', record: '0-10', power: 0, badge: '📉 10D consec.', badgeClass: 'diff-hard' }
];

// 6. PR_PLAYERS (Power Ranking - Joueurs)
const PR_PLAYERS = [
  { rank: 1, name: 'Delmoly Alexandre ⭐⭐', team: 'jen', pos: 'Passeur', power: 100.0 },
  { rank: 2, name: 'Alves dupont Arnaud ⭐', team: 'jen', pos: 'R4', power: 98.5 },
  { rank: 3, name: 'Moroni Mikael', team: 'jen', pos: 'R4', power: 98.5 },
  { rank: 4, name: 'Melart Tom', team: 'jen', pos: 'Pointu', power: 98.2 },
  { rank: 5, name: 'Bouvier Lenny', team: 'jen', pos: 'Pointu', power: 98.2 },
  { rank: 6, name: 'Moroni Antoine', team: 'jen', pos: 'Pointu', power: 98.2 },
  { rank: 7, name: 'Gombert Jennifer', team: 'jen', pos: 'Centre', power: 97.9 },
  { rank: 8, name: 'Assumpcao Nicolas', team: 'jen', pos: 'Centre', power: 97.9 },
  { rank: 9, name: 'Le bihan Cyril', team: 'kiki', pos: 'Centre', power: 71.7 },
  { rank: 10, name: 'Simic Anthony', team: 'kiki', pos: 'Pointu', power: 71.5 },
  { rank: 11, name: 'Hure Robin ⭐', team: 'kiki', pos: 'Pointu', power: 71.5 },
  { rank: 12, name: 'Hibon Nicolas ⭐', team: 'kiki', pos: 'R4', power: 71.2 },
  { rank: 13, name: 'Popelut Romain', team: 'kiki', pos: 'R4', power: 71.2 },
  { rank: 14, name: 'Cotard Baptiste', team: 'kiki', pos: 'R4', power: 71.2 },
  { rank: 15, name: 'Pazmino Omar', team: 'kiki', pos: 'Passeur', power: 70.9 },
  { rank: 16, name: 'Leur Maxime ⭐⭐', team: 'kiki', pos: 'Passeur', power: 69.9 },
  { rank: 17, name: 'Martin Xavier', team: 'resc', pos: 'Centre', power: 69.7 },
  { rank: 18, name: 'Oliver Julien ⭐', team: 'rhsp', pos: 'Passeur', power: 69.4 },
  { rank: 19, name: 'Meridiano Yannick ⭐', team: 'rhsp', pos: 'R4', power: 69.0 },
  { rank: 20, name: 'Godeau Bastien', team: 'rhsp', pos: 'R4', power: 69.0 },
  { rank: 21, name: 'Bailly Jean-philippe ⭐', team: 'resc', pos: 'Pointu', power: 68.7 },
  { rank: 22, name: 'Evesque Mateusz ⭐', team: 'rhsp', pos: 'Pointu', power: 68.6 },
  { rank: 23, name: 'Goujon Adrien', team: 'rhsp', pos: 'Pointu', power: 68.6 },
  { rank: 24, name: 'Techer Kevin', team: 'rhsp', pos: 'Centre', power: 68.2 },
  { rank: 25, name: 'Vieira Matthieu', team: 'rhsp', pos: 'Centre', power: 68.2 },
  { rank: 26, name: 'Martins Celia', team: 'rhsp', pos: 'Centre', power: 68.2 },
  { rank: 27, name: 'Shue Yven ⭐', team: 'resc', pos: 'R4', power: 67.7 },
  { rank: 28, name: 'Michard Hugo', team: 'resc', pos: 'R4', power: 67.7 },
  { rank: 29, name: 'Michard Arthur ⭐⭐', team: 'resc', pos: 'Passeur', power: 62.8 },
  { rank: 30, name: 'Nedjar Yannick ⭐', team: 'marv', pos: 'Passeur', power: 59.3 },
  { rank: 31, name: 'Lavenet Jerome ⭐', team: 'marv', pos: 'R4', power: 58.0 },
  { rank: 32, name: 'Pauvert Thomas', team: 'marv', pos: 'R4', power: 58.0 },
  { rank: 33, name: 'Donjon Thibaud', team: 'marv', pos: 'R4', power: 58.0 },
  { rank: 34, name: 'Darrigol Hugo', team: 'marv', pos: 'Pointu', power: 56.8 },
  { rank: 35, name: 'Galland Matthieu ⭐', team: 'marv', pos: 'Centre', power: 55.6 },
  { rank: 36, name: 'Rocton Gaylord ⭐', team: 'rsc', pos: 'Passeur', power: 54.1 },
  { rank: 37, name: 'Redlich Olivier ⭐', team: 'rsc', pos: 'R4', power: 53.7 },
  { rank: 38, name: 'Teboul Jean pierre', team: 'rsc', pos: 'R4', power: 53.7 },
  { rank: 39, name: 'Kanounnikoff Francois', team: 'rsc', pos: 'Pointu', power: 53.3 },
  { rank: 40, name: 'Roux Philippe', team: 'rsc', pos: 'Pointu', power: 53.3 },
  { rank: 41, name: 'Courcelle Guillaume', team: 'rsc', pos: 'Centre', power: 52.9 },
  { rank: 42, name: 'Bisaro Marylin', team: 'rsc', pos: 'Centre', power: 52.9 },
  { rank: 43, name: 'Denis Natacha', team: 'rsc', pos: 'Centre', power: 52.9 },
  { rank: 44, name: 'Nicolas-flores Krystel', team: 'rsc', pos: 'Centre', power: 52.9 },
  { rank: 45, name: 'Garric Julien ⭐⭐⭐', team: 'bier', pos: 'Passeur', power: 48.9 },
  { rank: 46, name: 'Breleur Tony ⭐', team: 'bier', pos: 'R4', power: 48.8 },
  { rank: 47, name: 'Chaulet Didier ⭐', team: 'bier', pos: 'Pointu', power: 48.8 },
  { rank: 48, name: 'Bone Ida', team: 'bier', pos: 'Centre', power: 48.8 },
  { rank: 49, name: 'Neyraud Gawen ⭐', team: 'bier', pos: 'Centre', power: 48.8 },
  { rank: 50, name: 'Noyelle Nolwen', team: 'bier', pos: 'Centre', power: 48.8 },
  { rank: 51, name: 'Patrocinio Neli', team: 'bier', pos: 'Centre', power: 48.8 },
  { rank: 52, name: 'Buyse Henri ⭐', team: 'rhin', pos: 'Centre', power: 42.4 },
  { rank: 53, name: 'Pelleray Mathieu', team: 'rhin', pos: 'Centre', power: 42.4 },
  { rank: 54, name: 'Leca Arthur', team: 'rhin', pos: 'Pointu', power: 41.3 },
  { rank: 55, name: 'Blanquer Antoine', team: 'rhin', pos: 'R4', power: 40.1 },
  { rank: 56, name: 'Wairy Jean ⭐', team: 'rhin', pos: 'Passeur', power: 39.0 },
  { rank: 57, name: 'Amesee Stephane ⭐', team: 'manu', pos: 'Passeur', power: 36.9 },
  { rank: 58, name: 'Vernazobres Lionel', team: 'manu', pos: 'R4', power: 36.7 },
  { rank: 59, name: 'Poncharville Prosper', team: 'manu', pos: 'Pointu', power: 36.4 },
  { rank: 60, name: 'De gonfreville Emmanuelle', team: 'manu', pos: 'Centre', power: 36.1 },
  { rank: 61, name: 'Roussiere Andy', team: 'manu', pos: 'Centre', power: 36.1 },
  { rank: 62, name: 'Rabiarivelo Ilo', team: 'star', pos: 'Centre', power: 0.6 },
  { rank: 63, name: 'Mehallel Hamsa', team: 'star', pos: 'Centre', power: 0.6 },
  { rank: 64, name: 'Bakouri Mehdi', team: 'star', pos: 'Centre', power: 0.6 },
  { rank: 65, name: 'Nieto Victor', team: 'star', pos: 'Pointu', power: 0.4 },
  { rank: 66, name: 'Ha Bryan', team: 'star', pos: 'Pointu', power: 0.4 },
  { rank: 67, name: 'Ty Samneang', team: 'star', pos: 'R4', power: 0.2 },
  { rank: 68, name: 'Bento dos santos Lucas', team: 'star', pos: 'R4', power: 0.2 },
  { rank: 69, name: 'Vulgaire Thierry', team: 'star', pos: 'R4', power: 0.2 },
  { rank: 70, name: 'Julien François', team: 'star', pos: 'R4', power: 0.2 },
  { rank: 71, name: 'Vincent dit mahaut Julien ⭐', team: 'star', pos: 'Passeur', power: 0.0 }
];

// 7. MATCH_STATS
const MATCH_STATS = [
  // Match 1: RHSP - ext
  {
    id: 'match-1', label: 'RHSP - ext', title: 'RHSP - ext', result: 'Victoire 3-0', resultColor: 'win',
    date: '13/10/2025 - Red Hot Sucy Pépère (Extérieur)',
    sets: [
      {
        title: 'Set 1',
        players: [
          { name: 'Arnaud', attPlus: 8, attPlusP: '57%', attMinus: 4, attMinusP: '29%', fd: 2, fdP: '14%', bl: 0, ac: 0, fs: 0, tot: 14 },
          { name: 'Antoine', attPlus: 6, attPlusP: '50%', attMinus: 5, attMinusP: '42%', fd: 0, fdP: '0%', bl: 1, ac: 0, fs: 0, tot: 12 },
          { name: 'Alex', attPlus: 0, attPlusP: '0%', attMinus: 1, attMinusP: '25%', fd: 1, fdP: '25%', bl: 0, ac: 1, fs: 1, tot: 4 },
          { name: 'Total', attPlus: 14, attPlusP: '47%', attMinus: 10, attMinusP: '33%', fd: 3, fdP: '10%', bl: 1, ac: 1, fs: 1, tot: 30, isTotal: true }
        ]
      },
      {
        title: 'Set 2',
        players: [
          { name: 'Arnaud', attPlus: 8, attPlusP: '50%', attMinus: 5, attMinusP: '31%', fd: 3, fdP: '19%', bl: 0, ac: 0, fs: 0, tot: 16 },
          { name: 'Lenny', attPlus: 2, attPlusP: '22%', attMinus: 1, attMinusP: '11%', fd: 6, fdP: '67%', bl: 0, ac: 0, fs: 0, tot: 9 },
          { name: 'Tom', attPlus: 1, attPlusP: '33%', attMinus: 2, attMinusP: '67%', fd: 0, fdP: '0%', bl: 1, ac: 0, fs: 0, tot: 3 },
          { name: 'Assum', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 0, tot: 0 },
          { name: 'Alex', attPlus: 1, attPlusP: '100%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 2, fs: 1, tot: 1 },
          { name: 'Total', attPlus: 12, attPlusP: '41%', attMinus: 8, attMinusP: '28%', fd: 9, fdP: '31%', bl: 1, ac: 3, fs: 1, tot: 29, isTotal: true }
        ]
      },
      {
        title: 'Set 3',
        players: [
          { name: 'Lenny', attPlus: 5, attPlusP: '38%', attMinus: 5, attMinusP: '38%', fd: 3, fdP: '23%', bl: 0, ac: 0, fs: 0, tot: 13 },
          { name: 'Tom', attPlus: 4, attPlusP: '29%', attMinus: 6, attMinusP: '43%', fd: 4, fdP: '29%', bl: 1, ac: 0, fs: 0, tot: 14 },
          { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 1, tot: 0 },
          { name: 'Alex', attPlus: 2, attPlusP: '40%', attMinus: 2, attMinusP: '40%', fd: 1, fdP: '20%', bl: 0, ac: 1, fs: 2, tot: 5 },
          { name: 'Total', attPlus: 11, attPlusP: '34%', attMinus: 13, attMinusP: '41%', fd: 8, fdP: '25%', bl: 1, ac: 1, fs: 3, tot: 32, isTotal: true }
        ]
      }
    ],
    recap: {
      hasIP: true,
      players: [
        { name: 'Arnaud', attPlus: 16, attPlusP: '53%', attMinus: 9, attMinusP: '30%', fd: 5, fdP: '17%', bl: 0, ac: 0, fs: 0, tot: 30, ip: '+33' },
        { name: 'Antoine', attPlus: 6, attPlusP: '55%', attMinus: 5, attMinusP: '45%', fd: 0, fdP: '0%', bl: 1, ac: 0, fs: 0, tot: 11, ip: '+60' },
        { name: 'Lenny', attPlus: 7, attPlusP: '32%', attMinus: 6, attMinusP: '27%', fd: 9, fdP: '41%', bl: 0, ac: 0, fs: 0, tot: 22, ip: '-92' },
        { name: 'Tom', attPlus: 5, attPlusP: '29%', attMinus: 8, attMinusP: '47%', fd: 4, fdP: '24%', bl: 2, ac: 0, fs: 0, tot: 17, ip: '-19' },
        { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 1, tot: 0, ip: '-' },
        { name: 'Assum', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 0, tot: 0, ip: '-' },
        { name: 'Alex', attPlus: 3, attPlusP: '38%', attMinus: 3, attMinusP: '38%', fd: 2, fdP: '25%', bl: 0, ac: 4, fs: 4, tot: 8, ip: '-17' },
        { name: 'TOTAL', attPlus: 37, attPlusP: '42%', attMinus: 31, attMinusP: '35%', fd: 20, fdP: '23%', bl: 3, ac: 5, fs: 5, tot: 88, ip: '-', isTotal: true }
      ]
    }
  },

  // Match 2: Moust. - Ginette
  {
    id: 'match-2', label: 'Moust. - Ginette', title: 'Moust. - Ginette', result: 'Victoire 3-0', resultColor: 'win',
    date: '13/11/2025 - Moustache Team (Domicile) - Ginette',
    sets: [
      {
        title: 'Set 1',
        players: [
          { name: 'Arnaud', attPlus: 12, attPlusP: '71%', attMinus: 4, attMinusP: '24%', fd: 1, fdP: '6%', bl: 0, ac: 0, fs: 0, tot: 17 },
          { name: 'Tom', attPlus: 4, attPlusP: '44%', attMinus: 4, attMinusP: '44%', fd: 1, fdP: '11%', bl: 0, ac: 0, fs: 0, tot: 9 },
          { name: 'Alex', attPlus: 1, attPlusP: '50%', attMinus: 1, attMinusP: '50%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 2, tot: 2 },
          { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 1, tot: 0 },
          { name: 'Total', attPlus: 17, attPlusP: '61%', attMinus: 9, attMinusP: '32%', fd: 2, fdP: '7%', bl: 0, ac: 1, fs: 3, tot: 28, isTotal: true }
        ]
      },
      {
        title: 'Set 2',
        players: [
          { name: 'Arnaud', attPlus: 6, attPlusP: '67%', attMinus: 3, attMinusP: '33%', fd: 0, fdP: '0%', bl: 1, ac: 0, fs: 0, tot: 9 },
          { name: 'Lenny', attPlus: 1, attPlusP: '50%', attMinus: 1, attMinusP: '50%', fd: 0, fdP: '0%', bl: 1, ac: 0, fs: 0, tot: 2 },
          { name: 'Tom', attPlus: 1, attPlusP: '33%', attMinus: 1, attMinusP: '33%', fd: 1, fdP: '33%', bl: 0, ac: 0, fs: 0, tot: 3 },
          { name: 'Alex', attPlus: 2, attPlusP: '100%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 0, tot: 2 },
          { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 1, tot: 0 },
          { name: 'Total', attPlus: 10, attPlusP: '63%', attMinus: 5, attMinusP: '31%', fd: 1, fdP: '6%', bl: 2, ac: 2, fs: 1, tot: 16, isTotal: true }
        ]
      },
      {
        title: 'Set 3',
        players: [
          { name: 'Arnaud', attPlus: 9, attPlusP: '45%', attMinus: 8, attMinusP: '40%', fd: 3, fdP: '15%', bl: 0, ac: 0, fs: 0, tot: 20 },
          { name: 'Lenny', attPlus: 5, attPlusP: '45%', attMinus: 5, attMinusP: '45%', fd: 1, fdP: '9%', bl: 3, ac: 0, fs: 0, tot: 11 },
          { name: 'Alex', attPlus: 2, attPlusP: '40%', attMinus: 3, attMinusP: '60%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 0, tot: 5 },
          { name: 'Assum', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 3, fs: 1, tot: 0 },
          { name: 'Total', attPlus: 16, attPlusP: '44%', attMinus: 16, attMinusP: '44%', fd: 4, fdP: '11%', bl: 3, ac: 4, fs: 1, tot: 36, isTotal: true }
        ]
      }
    ],
    recap: {
      hasIP: true,
      players: [
        { name: 'Arnaud', attPlus: 27, attPlusP: '59%', attMinus: 15, attMinusP: '33%', fd: 4, fdP: '9%', bl: 1, ac: 0, fs: 0, tot: 46, ip: '+63' },
        { name: 'Lenny', attPlus: 6, attPlusP: '46%', attMinus: 6, attMinusP: '46%', fd: 1, fdP: '8%', bl: 4, ac: 0, fs: 0, tot: 13, ip: '+33' },
        { name: 'Tom', attPlus: 5, attPlusP: '42%', attMinus: 5, attMinusP: '42%', fd: 2, fdP: '17%', bl: 0, ac: 0, fs: 0, tot: 12, ip: '+10' },
        { name: 'Alex', attPlus: 5, attPlusP: '56%', attMinus: 4, attMinusP: '44%', fd: 0, fdP: '0%', bl: 0, ac: 3, fs: 2, tot: 9, ip: '+63' },
        { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 2, tot: 0, ip: '-' },
        { name: 'Assum', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 3, fs: 1, tot: 0, ip: '-' },
        { name: 'TOTAL', attPlus: 43, attPlusP: '54%', attMinus: 30, attMinusP: '38%', fd: 7, fdP: '9%', bl: 5, ac: 7, fs: 5, tot: 80, ip: '-', isTotal: true }
      ]
    }
  },

  // Match 3: Bières - dom
  {
    id: 'match-3', label: 'Bières - dom', title: 'Bières - dom', result: 'Victoire 3-1', resultColor: 'win',
    date: '20/11/2025 - Bières et le loup (Domicile)',
    sets: [
      {
        title: 'Set 1',
        players: [
          { name: 'Arnaud', attPlus: 7, attPlusP: '58%', attMinus: 5, attMinusP: '42%', fd: 0, fdP: '0%', bl: 1, ac: 0, fs: 0, tot: 12 },
          { name: 'Tom', attPlus: 6, attPlusP: '46%', attMinus: 6, attMinusP: '46%', fd: 1, fdP: '8%', bl: 0, ac: 0, fs: 0, tot: 13 },
          { name: 'Alex', attPlus: 1, attPlusP: '17%', attMinus: 4, attMinusP: '67%', fd: 1, fdP: '17%', bl: 0, ac: 2, fs: 0, tot: 6 },
          { name: 'Assum', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 3, tot: 0 },
          { name: 'Total', attPlus: 14, attPlusP: '45%', attMinus: 15, attMinusP: '48%', fd: 2, fdP: '6%', bl: 1, ac: 3, fs: 3, tot: 31, isTotal: true }
        ]
      },
      {
        title: 'Set 2',
        players: [
          { name: 'Lenny', attPlus: 6, attPlusP: '40%', attMinus: 9, attMinusP: '60%', fd: 0, fdP: '0%', bl: 0, ac: 2, fs: 0, tot: 15 },
          { name: 'Tom', attPlus: 6, attPlusP: '33%', attMinus: 10, attMinusP: '56%', fd: 2, fdP: '11%', bl: 0, ac: 0, fs: 0, tot: 18 },
          { name: 'Assum', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 1, tot: 0 },
          { name: 'Alex', attPlus: 0, attPlusP: '0%', attMinus: 1, attMinusP: '100%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 2, tot: 1 },
          { name: 'Total', attPlus: 12, attPlusP: '35%', attMinus: 20, attMinusP: '59%', fd: 2, fdP: '6%', bl: 0, ac: 4, fs: 3, tot: 34, isTotal: true }
        ]
      },
      {
        title: 'Set 3',
        players: [
          { name: 'Mika', attPlus: 3, attPlusP: '25%', attMinus: 8, attMinusP: '67%', fd: 1, fdP: '8%', bl: 1, ac: 0, fs: 0, tot: 12 },
          { name: 'Lenny', attPlus: 3, attPlusP: '33%', attMinus: 4, attMinusP: '44%', fd: 2, fdP: '22%', bl: 1, ac: 0, fs: 0, tot: 9 },
          { name: 'Alex', attPlus: 2, attPlusP: '50%', attMinus: 1, attMinusP: '25%', fd: 1, fdP: '25%', bl: 0, ac: 0, fs: 3, tot: 4 },
          { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 1, tot: 0 },
          { name: 'Total', attPlus: 8, attPlusP: '32%', attMinus: 13, attMinusP: '52%', fd: 4, fdP: '16%', bl: 2, ac: 1, fs: 4, tot: 25, isTotal: true }
        ]
      }
    ],
    recap: {
      hasIP: true,
      players: [
        { name: 'Arnaud', attPlus: 7, attPlusP: '58%', attMinus: 5, attMinusP: '42%', fd: 0, fdP: '0%', bl: 1, ac: 0, fs: 0, tot: 12, ip: '+70' },
        { name: 'Mika', attPlus: 3, attPlusP: '25%', attMinus: 8, attMinusP: '67%', fd: 1, fdP: '8%', bl: 1, ac: 0, fs: 0, tot: 12, ip: '+6' },
        { name: 'Lenny', attPlus: 9, attPlusP: '38%', attMinus: 13, attMinusP: '54%', fd: 2, fdP: '8%', bl: 1, ac: 2, fs: 0, tot: 24, ip: '+19' },
        { name: 'Tom', attPlus: 12, attPlusP: '39%', attMinus: 16, attMinusP: '52%', fd: 3, fdP: '10%', bl: 0, ac: 0, fs: 0, tot: 31, ip: '+19' },
        { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 1, tot: 0, ip: '-' },
        { name: 'Assum', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 2, fs: 4, tot: 0, ip: '-' },
        { name: 'Alex', attPlus: 3, attPlusP: '27%', attMinus: 6, attMinusP: '55%', fd: 2, fdP: '18%', bl: 0, ac: 3, fs: 5, tot: 11, ip: '-8' },
        { name: 'TOTAL', attPlus: 34, attPlusP: '38%', attMinus: 48, attMinusP: '53%', fd: 8, fdP: '9%', bl: 3, ac: 8, fs: 10, tot: 90, ip: '-', isTotal: true }
      ]
    }
  },

  // Match 4: StarP - ext (no stats)
  {
    id: 'match-4', label: 'StarP - ext', title: 'StarP - ext', result: 'Victoire 3-0', resultColor: 'win',
    date: '26/11/2025 - StarPAFF (Extérieur)',
    sets: [], noStats: true, noStatsMsg: 'Statistiques à venir...'
  },

  // Match 5: RSC - dom
  {
    id: 'match-5', label: 'RSC - dom', title: 'RSC - dom', result: 'Victoire 3-0', resultColor: 'win',
    date: '11/12/2025 - RSC Champigny 1 (Domicile)',
    sets: [
      {
        title: 'Set 1',
        note: '⚠️ Stats incomplètes pour ce set',
        players: [
          { name: 'Arnaud', attPlus: 1, attPlusP: '100%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 0, tot: 1 },
          { name: 'Total', attPlus: 1, attPlusP: '100%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 0, tot: 1, isTotal: true }
        ]
      },
      {
        title: 'Set 2',
        players: [
          { name: 'Arnaud', attPlus: 8, attPlusP: '67%', attMinus: 2, attMinusP: '17%', fd: 2, fdP: '17%', bl: 0, ac: 0, fs: 0, tot: 12 },
          { name: 'Lenny', attPlus: 5, attPlusP: '63%', attMinus: 2, attMinusP: '25%', fd: 1, fdP: '13%', bl: 2, ac: 0, fs: 0, tot: 8 },
          { name: 'Alex', attPlus: 1, attPlusP: '50%', attMinus: 1, attMinusP: '50%', fd: 0, fdP: '0%', bl: 0, ac: 5, fs: 0, tot: 2 },
          { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 1, tot: 0 },
          { name: 'Total', attPlus: 14, attPlusP: '64%', attMinus: 5, attMinusP: '23%', fd: 3, fdP: '14%', bl: 2, ac: 6, fs: 1, tot: 22, isTotal: true }
        ]
      },
      {
        title: 'Set 3',
        players: [
          { name: 'Alex', attPlus: 6, attPlusP: '86%', attMinus: 0, attMinusP: '0%', fd: 1, fdP: '14%', bl: 0, ac: 1, fs: 1, tot: 7 },
          { name: 'Tom', attPlus: 4, attPlusP: '29%', attMinus: 8, attMinusP: '57%', fd: 2, fdP: '14%', bl: 0, ac: 0, fs: 0, tot: 14 },
          { name: 'Lenny', attPlus: 3, attPlusP: '60%', attMinus: 2, attMinusP: '40%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 0, tot: 5 },
          { name: 'Assum', attPlus: 0, attPlusP: '0%', attMinus: 1, attMinusP: '25%', fd: 0, fdP: '0%', bl: 0, ac: 3, fs: 1, tot: 1 },
          { name: 'Total', attPlus: 13, attPlusP: '48%', attMinus: 11, attMinusP: '41%', fd: 3, fdP: '11%', bl: 0, ac: 4, fs: 2, tot: 27, isTotal: true }
        ]
      }
    ],
    recap: {
      hasIP: true,
      players: [
        { name: 'Arnaud', attPlus: 9, attPlusP: '69%', attMinus: 2, attMinusP: '15%', fd: 2, fdP: '15%', bl: 0, ac: 0, fs: 0, tot: 13, ip: '+125' },
        { name: 'Lenny', attPlus: 8, attPlusP: '62%', attMinus: 4, attMinusP: '31%', fd: 1, fdP: '8%', bl: 2, ac: 0, fs: 0, tot: 13, ip: '+75' },
        { name: 'Tom', attPlus: 4, attPlusP: '29%', attMinus: 8, attMinusP: '57%', fd: 2, fdP: '14%', bl: 0, ac: 0, fs: 0, tot: 14, ip: '0' },
        { name: 'Alex', attPlus: 7, attPlusP: '78%', attMinus: 1, attMinusP: '11%', fd: 1, fdP: '11%', bl: 0, ac: 6, fs: 1, tot: 9, ip: '+250' },
        { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 1, tot: 0, ip: '-' },
        { name: 'Assum', attPlus: 0, attPlusP: '0%', attMinus: 1, attMinusP: '100%', fd: 0, fdP: '0%', bl: 0, ac: 3, fs: 1, tot: 1, ip: '0' },
        { name: 'TOTAL', attPlus: 28, attPlusP: '56%', attMinus: 16, attMinusP: '32%', fd: 6, fdP: '12%', bl: 2, ac: 10, fs: 3, tot: 50, ip: '-', isTotal: true }
      ]
    }
  },

  // Match 6: Villyé - Ginette (no stats)
  {
    id: 'match-6', label: 'Villyé - Ginette', title: 'Villyé - Ginette', result: 'Victoire 3-0', resultColor: 'win',
    date: '18/12/2025 - Villyé-ball (Domicile) - Ginette',
    sets: [], noStats: true, noStatsMsg: 'Statistiques à venir...'
  },

  // Match 7: Marv. - dom
  {
    id: 'match-7', label: 'Marv. - dom', title: 'Marv. - dom', result: 'Victoire 3-0', resultColor: 'win',
    date: '08/01/2026 - Marvels 4 (Domicile)',
    sets: [
      {
        title: 'Set 1',
        players: [
          { name: 'Arnaud', attPlus: 12, attPlusP: '57%', attMinus: 9, attMinusP: '43%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 0, tot: 21 },
          { name: 'Tom', attPlus: 1, attPlusP: '14%', attMinus: 4, attMinusP: '57%', fd: 2, fdP: '29%', bl: 0, ac: 0, fs: 0, tot: 7 },
          { name: 'Alex', attPlus: 1, attPlusP: '50%', attMinus: 1, attMinusP: '50%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 1, tot: 2 },
          { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 4, tot: 0 },
          { name: 'Total', attPlus: 14, attPlusP: '47%', attMinus: 14, attMinusP: '47%', fd: 2, fdP: '7%', bl: 0, ac: 2, fs: 5, tot: 30, isTotal: true }
        ]
      },
      {
        title: 'Set 2',
        players: [
          { name: 'Arnaud', attPlus: 10, attPlusP: '59%', attMinus: 7, attMinusP: '41%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 0, tot: 17 },
          { name: 'Lenny', attPlus: 1, attPlusP: '33%', attMinus: 0, attMinusP: '0%', fd: 2, fdP: '67%', bl: 1, ac: 0, fs: 0, tot: 3 },
          { name: 'Tom', attPlus: 0, attPlusP: '0%', attMinus: 2, attMinusP: '40%', fd: 3, fdP: '60%', bl: 0, ac: 0, fs: 0, tot: 5 },
          { name: 'Alex', attPlus: 1, attPlusP: '50%', attMinus: 0, attMinusP: '0%', fd: 1, fdP: '50%', bl: 0, ac: 5, fs: 0, tot: 2 },
          { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 2, fs: 1, tot: 0 },
          { name: 'Total', attPlus: 12, attPlusP: '44%', attMinus: 9, attMinusP: '33%', fd: 6, fdP: '22%', bl: 1, ac: 7, fs: 1, tot: 27, isTotal: true }
        ]
      },
      {
        title: 'Set 3',
        players: [
          { name: 'Arnaud', attPlus: 10, attPlusP: '63%', attMinus: 5, attMinusP: '31%', fd: 1, fdP: '6%', bl: 1, ac: 0, fs: 0, tot: 16 },
          { name: 'Lenny', attPlus: 4, attPlusP: '40%', attMinus: 5, attMinusP: '50%', fd: 1, fdP: '10%', bl: 1, ac: 0, fs: 0, tot: 10 },
          { name: 'Alex', attPlus: 2, attPlusP: '33%', attMinus: 4, attMinusP: '67%', fd: 0, fdP: '0%', bl: 0, ac: 2, fs: 2, tot: 6 },
          { name: 'Assum', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 1, tot: 0 },
          { name: 'Total', attPlus: 16, attPlusP: '50%', attMinus: 14, attMinusP: '44%', fd: 2, fdP: '6%', bl: 2, ac: 3, fs: 3, tot: 32, isTotal: true }
        ]
      }
    ],
    recap: {
      hasIP: true,
      players: [
        { name: 'Arnaud', attPlus: 32, attPlusP: '59%', attMinus: 21, attMinusP: '39%', fd: 1, fdP: '2%', bl: 1, ac: 0, fs: 0, tot: 54, ip: '+71' },
        { name: 'Lenny', attPlus: 5, attPlusP: '38%', attMinus: 5, attMinusP: '38%', fd: 3, fdP: '23%', bl: 2, ac: 0, fs: 0, tot: 13, ip: '-10' },
        { name: 'Tom', attPlus: 1, attPlusP: '8%', attMinus: 6, attMinusP: '50%', fd: 5, fdP: '42%', bl: 0, ac: 0, fs: 0, tot: 12, ip: '-75' },
        { name: 'Alex', attPlus: 4, attPlusP: '40%', attMinus: 5, attMinusP: '50%', fd: 1, fdP: '10%', bl: 0, ac: 8, fs: 3, tot: 10, ip: '+20' },
        { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 3, fs: 5, tot: 0, ip: '-' },
        { name: 'Assum', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 1, tot: 0, ip: '-' },
        { name: 'TOTAL', attPlus: 42, attPlusP: '47%', attMinus: 37, attMinusP: '42%', fd: 10, fdP: '11%', bl: 3, ac: 12, fs: 9, tot: 89, ip: '-', isTotal: true }
      ]
    }
  },

  // Match 8: Rhinos - ext
  {
    id: 'match-8', label: 'Rhinos - ext', title: 'Rhinos - ext', result: 'Victoire 3-0', resultColor: 'win',
    date: '12/01/2026 - Rhinos Féroces (Extérieur)',
    sets: [
      {
        title: 'Set 1',
        players: [
          { name: 'Tom', attPlus: 7, attPlusP: '64%', attMinus: 3, attMinusP: '27%', fd: 1, fdP: '9%', bl: 0, ac: 0, fs: 0, tot: 11 },
          { name: 'Lenny', attPlus: 5, attPlusP: '38%', attMinus: 6, attMinusP: '46%', fd: 2, fdP: '15%', bl: 0, ac: 0, fs: 0, tot: 13 },
          { name: 'Alex', attPlus: 0, attPlusP: '0%', attMinus: 2, attMinusP: '100%', fd: 0, fdP: '0%', bl: 0, ac: 2, fs: 0, tot: 2 },
          { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 0, tot: 0 },
          { name: 'Total', attPlus: 12, attPlusP: '46%', attMinus: 11, attMinusP: '42%', fd: 3, fdP: '12%', bl: 0, ac: 3, fs: 0, tot: 26, isTotal: true }
        ]
      },
      {
        title: 'Set 2',
        players: [
          { name: 'Tom', attPlus: 7, attPlusP: '70%', attMinus: 3, attMinusP: '30%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 0, tot: 10 },
          { name: 'Lenny', attPlus: 4, attPlusP: '44%', attMinus: 3, attMinusP: '33%', fd: 2, fdP: '22%', bl: 0, ac: 0, fs: 0, tot: 9 },
          { name: 'Alex', attPlus: 2, attPlusP: '67%', attMinus: 0, attMinusP: '0%', fd: 1, fdP: '33%', bl: 0, ac: 3, fs: 1, tot: 3 },
          { name: 'Mika', attPlus: 2, attPlusP: '50%', attMinus: 2, attMinusP: '50%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 0, tot: 4 },
          { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 2, tot: 0 },
          { name: 'Total', attPlus: 15, attPlusP: '58%', attMinus: 8, attMinusP: '31%', fd: 3, fdP: '12%', bl: 0, ac: 4, fs: 3, tot: 26, isTotal: true }
        ]
      },
      {
        title: 'Set 3',
        players: [
          { name: 'Antoine', attPlus: 9, attPlusP: '75%', attMinus: 1, attMinusP: '8%', fd: 2, fdP: '17%', bl: 1, ac: 0, fs: 0, tot: 12 },
          { name: 'Mika', attPlus: 4, attPlusP: '29%', attMinus: 6, attMinusP: '43%', fd: 4, fdP: '29%', bl: 0, ac: 0, fs: 0, tot: 14 },
          { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 5, fs: 1, tot: 0 },
          { name: 'Alex', attPlus: 3, attPlusP: '100%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 2, tot: 3 },
          { name: 'Total', attPlus: 16, attPlusP: '55%', attMinus: 7, attMinusP: '24%', fd: 6, fdP: '21%', bl: 1, ac: 6, fs: 3, tot: 29, isTotal: true }
        ]
      }
    ],
    recap: {
      hasIP: true,
      players: [
        { name: 'Antoine', attPlus: 9, attPlusP: '75%', attMinus: 1, attMinusP: '8%', fd: 2, fdP: '17%', bl: 1, ac: 0, fs: 0, tot: 12, ip: '+300' },
        { name: 'Tom', attPlus: 14, attPlusP: '67%', attMinus: 6, attMinusP: '29%', fd: 1, fdP: '5%', bl: 0, ac: 0, fs: 0, tot: 21, ip: '+100' },
        { name: 'Alex', attPlus: 5, attPlusP: '63%', attMinus: 2, attMinusP: '25%', fd: 1, fdP: '13%', bl: 0, ac: 6, fs: 3, tot: 8, ip: '+75' },
        { name: 'Lenny', attPlus: 9, attPlusP: '41%', attMinus: 9, attMinusP: '41%', fd: 4, fdP: '18%', bl: 0, ac: 0, fs: 0, tot: 22, ip: '+6' },
        { name: 'Mika', attPlus: 6, attPlusP: '33%', attMinus: 8, attMinusP: '44%', fd: 4, fdP: '22%', bl: 0, ac: 0, fs: 0, tot: 18, ip: '-13' },
        { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 6, fs: 3, tot: 0, ip: '-' },
        { name: 'TOTAL', attPlus: 43, attPlusP: '53%', attMinus: 26, attMinusP: '32%', fd: 12, fdP: '15%', bl: 1, ac: 12, fs: 6, tot: 81, ip: '-', isTotal: true }
      ]
    }
  },

  // Match 9: Resc. - dom
  {
    id: 'match-9', label: 'Resc. - dom', title: 'Resc. - dom', result: 'Victoire 3-1', resultColor: 'win',
    date: '22/01/2026 - Les Rescapés (Domicile)',
    sets: [
      {
        title: 'Set 1',
        players: [
          { name: 'Arnaud', attPlus: 13, attPlusP: '54%', attMinus: 10, attMinusP: '42%', fd: 1, fdP: '4%', bl: 1, ac: 0, fs: 0, tot: 24 },
          { name: 'Lenny', attPlus: 5, attPlusP: '63%', attMinus: 2, attMinusP: '25%', fd: 1, fdP: '13%', bl: 1, ac: 0, fs: 0, tot: 8 },
          { name: 'Alex', attPlus: 1, attPlusP: '50%', attMinus: 0, attMinusP: '0%', fd: 1, fdP: '50%', bl: 0, ac: 2, fs: 0, tot: 2 },
          { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 2, tot: 0 },
          { name: 'Total', attPlus: 19, attPlusP: '56%', attMinus: 12, attMinusP: '35%', fd: 3, fdP: '9%', bl: 2, ac: 2, fs: 2, tot: 34, isTotal: true }
        ]
      },
      {
        title: 'Set 2',
        players: [
          { name: 'Arnaud', attPlus: 10, attPlusP: '100%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 1, ac: 0, fs: 0, tot: 10 },
          { name: 'Lenny', attPlus: 1, attPlusP: '14%', attMinus: 3, attMinusP: '43%', fd: 3, fdP: '43%', bl: 1, ac: 0, fs: 0, tot: 7 },
          { name: 'Tom', attPlus: 1, attPlusP: '50%', attMinus: 1, attMinusP: '50%', fd: 1, fdP: '50%', bl: 0, ac: 0, fs: 0, tot: 2 },
          { name: 'Alex', attPlus: 1, attPlusP: '50%', attMinus: 1, attMinusP: '50%', fd: 0, fdP: '0%', bl: 0, ac: 2, fs: 3, tot: 2 },
          { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 1, attMinusP: '100%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 1, tot: 1 },
          { name: 'Total', attPlus: 13, attPlusP: '57%', attMinus: 6, attMinusP: '26%', fd: 4, fdP: '17%', bl: 2, ac: 2, fs: 4, tot: 23, isTotal: true }
        ]
      },
      {
        title: 'Set 3 (perdu)',
        players: [
          { name: 'Tom', attPlus: 8, attPlusP: '40%', attMinus: 12, attMinusP: '50%', fd: 4, fdP: '17%', bl: 2, ac: 0, fs: 0, tot: 24 },
          { name: 'Antoine', attPlus: 4, attPlusP: '50%', attMinus: 4, attMinusP: '50%', fd: 6, fdP: '43%', bl: 0, ac: 0, fs: 0, tot: 14 },
          { name: 'Alex', attPlus: 1, attPlusP: '100%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 0, tot: 1 },
          { name: 'Assum', attPlus: 1, attPlusP: '100%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 0, tot: 1 },
          { name: 'Total', attPlus: 14, attPlusP: '47%', attMinus: 16, attMinusP: '40%', fd: 10, fdP: '25%', bl: 2, ac: 1, fs: 0, tot: 40, isTotal: true }
        ]
      },
      {
        title: 'Set 4',
        players: [
          { name: 'Arnaud', attPlus: 9, attPlusP: '82%', attMinus: 2, attMinusP: '18%', fd: 4, fdP: '27%', bl: 0, ac: 0, fs: 0, tot: 15 },
          { name: 'Lenny', attPlus: 2, attPlusP: '50%', attMinus: 2, attMinusP: '50%', fd: 0, fdP: '0%', bl: 1, ac: 0, fs: 0, tot: 4 },
          { name: 'Alex', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 1, fdP: '100%', bl: 0, ac: 1, fs: 0, tot: 1 },
          { name: 'Total', attPlus: 11, attPlusP: '69%', attMinus: 4, attMinusP: '25%', fd: 5, fdP: '25%', bl: 1, ac: 1, fs: 0, tot: 20, isTotal: true }
        ]
      }
    ],
    recap: {
      hasIP: true,
      players: [
        { name: 'Arnaud', attPlus: 32, attPlusP: '65%', attMinus: 12, attMinusP: '24%', fd: 5, fdP: '10%', bl: 2, ac: 0, fs: 0, tot: 49, ip: '+92' },
        { name: 'Alex', attPlus: 3, attPlusP: '60%', attMinus: 1, attMinusP: '17%', fd: 2, fdP: '33%', bl: 0, ac: 6, fs: 3, tot: 6, ip: '+50' },
        { name: 'Lenny', attPlus: 8, attPlusP: '42%', attMinus: 7, attMinusP: '37%', fd: 4, fdP: '21%', bl: 3, ac: 0, fs: 0, tot: 19, ip: '0' },
        { name: 'Tom', attPlus: 9, attPlusP: '41%', attMinus: 13, attMinusP: '50%', fd: 5, fdP: '19%', bl: 2, ac: 0, fs: 0, tot: 27, ip: '-4' },
        { name: 'Antoine', attPlus: 4, attPlusP: '50%', attMinus: 4, attMinusP: '50%', fd: 6, fdP: '43%', bl: 0, ac: 0, fs: 0, tot: 14, ip: '-100' },
        { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 1, attMinusP: '100%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 3, tot: 1, ip: '0' },
        { name: 'Assum', attPlus: 1, attPlusP: '100%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 0, tot: 1, ip: '-' },
        { name: 'TOTAL', attPlus: 57, attPlusP: '54%', attMinus: 38, attMinusP: '33%', fd: 22, fdP: '19%', bl: 7, ac: 6, fs: 6, tot: 117, ip: '-', isTotal: true }
      ]
    }
  },

  // Match 10: Kiki - ext
  {
    id: 'match-10', label: 'Kiki - ext', title: 'Kiki - ext', result: 'Victoire 3-0', resultColor: 'win',
    date: '26/01/2026 - Kiki Team (Extérieur) - Score: 75-53',
    sets: [
      {
        title: 'Set 1 (25-19)',
        players: [
          { name: 'Arnaud', attPlus: 9, attPlusP: '60%', attMinus: 5, attMinusP: '33%', fd: 1, fdP: '7%', bl: 1, ac: 0, fs: 0, tot: 15 },
          { name: 'Lenny', attPlus: 2, attPlusP: '18%', attMinus: 9, attMinusP: '82%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 0, tot: 11 },
          { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 1, tot: 0 },
          { name: 'Alex', attPlus: 1, attPlusP: '100%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 0, tot: 1 },
          { name: 'Total', attPlus: 12, attPlusP: '46%', attMinus: 14, attMinusP: '52%', fd: 1, fdP: '4%', bl: 1, ac: 2, fs: 1, tot: 27, isTotal: true }
        ]
      },
      {
        title: 'Set 2 (25-15)',
        players: [
          { name: 'Arnaud', attPlus: 8, attPlusP: '67%', attMinus: 3, attMinusP: '25%', fd: 1, fdP: '8%', bl: 2, ac: 0, fs: 0, tot: 12 },
          { name: 'Lenny', attPlus: 8, attPlusP: '73%', attMinus: 3, attMinusP: '27%', fd: 0, fdP: '0%', bl: 1, ac: 0, fs: 0, tot: 11 },
          { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 2, tot: 0 },
          { name: 'Alex', attPlus: 1, attPlusP: '100%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 0, fs: 2, tot: 1 },
          { name: 'Total', attPlus: 17, attPlusP: '71%', attMinus: 6, attMinusP: '25%', fd: 1, fdP: '4%', bl: 3, ac: 0, fs: 4, tot: 24, isTotal: true }
        ]
      },
      {
        title: 'Set 3 (25-19)',
        players: [
          { name: 'Arnaud', attPlus: 4, attPlusP: '67%', attMinus: 2, attMinusP: '33%', fd: 0, fdP: '0%', bl: 1, ac: 0, fs: 0, tot: 6 },
          { name: 'Antoine', attPlus: 4, attPlusP: '50%', attMinus: 4, attMinusP: '44%', fd: 1, fdP: '11%', bl: 1, ac: 0, fs: 0, tot: 9 },
          { name: 'Oliv', attPlus: 2, attPlusP: '40%', attMinus: 3, attMinusP: '60%', fd: 0, fdP: '0%', bl: 1, ac: 0, fs: 0, tot: 5 },
          { name: 'Assum', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 3, tot: 0 },
          { name: 'Alex', attPlus: 1, attPlusP: '50%', attMinus: 1, attMinusP: '50%', fd: 0, fdP: '0%', bl: 0, ac: 2, fs: 0, tot: 2 },
          { name: 'Total', attPlus: 11, attPlusP: '52%', attMinus: 10, attMinusP: '45%', fd: 1, fdP: '5%', bl: 3, ac: 3, fs: 3, tot: 22, isTotal: true }
        ]
      }
    ],
    recap: {
      hasIP: true,
      players: [
        { name: 'Arnaud', attPlus: 21, attPlusP: '68%', attMinus: 10, attMinusP: '30%', fd: 2, fdP: '6%', bl: 4, ac: 0, fs: 0, tot: 33, ip: '+85' },
        { name: 'Lenny', attPlus: 10, attPlusP: '45%', attMinus: 12, attMinusP: '55%', fd: 0, fdP: '0%', bl: 1, ac: 0, fs: 0, tot: 22, ip: '+42' },
        { name: 'Antoine', attPlus: 4, attPlusP: '50%', attMinus: 4, attMinusP: '44%', fd: 1, fdP: '11%', bl: 1, ac: 0, fs: 0, tot: 9, ip: '+25' },
        { name: 'Oliv', attPlus: 2, attPlusP: '40%', attMinus: 3, attMinusP: '60%', fd: 0, fdP: '0%', bl: 1, ac: 0, fs: 0, tot: 5, ip: '+33' },
        { name: 'Alex', attPlus: 3, attPlusP: '75%', attMinus: 1, attMinusP: '25%', fd: 0, fdP: '0%', bl: 0, ac: 3, fs: 2, tot: 4, ip: '+150' },
        { name: 'Jane', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 3, tot: 0, ip: '-' },
        { name: 'Assum', attPlus: 0, attPlusP: '0%', attMinus: 0, attMinusP: '0%', fd: 0, fdP: '0%', bl: 0, ac: 1, fs: 3, tot: 0, ip: '-' },
        { name: 'TOTAL', attPlus: 40, attPlusP: '55%', attMinus: 30, attMinusP: '41%', fd: 3, fdP: '4%', bl: 7, ac: 5, fs: 8, tot: 73, ip: '-', isTotal: true }
      ]
    }
  },

  // Match 11: Manu - dom
  {
    id: 'match-11', label: 'Manu - dom', title: 'Manu - dom', result: 'Victoire 3-1', resultColor: 'win',
    date: '29/01/2026 - Manu Andy-sport (Domicile)',
    sets: [
      {
        title: 'Set 1',
        players: [
          { name: 'Antoine', attPlus: 5, attPlusP: '42%', attMinus: 7, attMinusP: '50%', fd: 2, fdP: '14%', bl: 1, ac: 0, fs: 0, tot: 14 },
          { name: 'Tom', attPlus: 7, attPlusP: '30%', attMinus: 11, attMinusP: '48%', fd: 5, fdP: '22%', bl: 0, ac: 0, fs: 0, tot: 23 },
          { name: 'Assum', attPlus: 0, attPlusP: '0%', attMinus: 1, attMinusP: '100%', fd: 0, fdP: '0%', bl: 0, ac: 2, fs: 1, tot: 1 },
          { name: 'Alex', attPlus: 0, attPlusP: '0%', attMinus: 1, attMinusP: '100%', fd: 0, fdP: '0%', bl: 0, ac: 2, fs: 1, tot: 1 },
          { name: 'Total', attPlus: 12, attPlusP: '31%', attMinus: 20, attMinusP: '51%', fd: 7, fdP: '18%', bl: 1, ac: 4, fs: 2, tot: 39, isTotal: true }
        ]
      },
      {
        title: 'Set 2 (Pas de statistiques - problème de caméra)',
        noStats: true
      },
      {
        title: 'Set 3',
        players: [
          { name: 'Arnaud', attPlus: 3, attPlusP: null, attMinus: 4, attMinusP: null, fd: 0, fdP: null, bl: 1, ac: 0, fs: 0, tot: 8 },
          { name: 'Mika', attPlus: 2, attPlusP: null, attMinus: 3, attMinusP: null, fd: 4, fdP: null, bl: 1, ac: 0, fs: 0, tot: 10 },
          { name: 'Antoine', attPlus: 5, attPlusP: null, attMinus: 1, attMinusP: null, fd: 2, fdP: null, bl: 1, ac: 0, fs: 0, tot: 9 },
          { name: 'Jane', attPlus: 0, attPlusP: null, attMinus: 0, attMinusP: null, fd: 0, fdP: null, bl: 0, ac: 2, fs: 1, tot: 0 },
          { name: 'Alex', attPlus: 2, attPlusP: null, attMinus: 1, attMinusP: null, fd: 0, fdP: null, bl: 0, ac: 1, fs: 0, tot: 3 },
          { name: 'Total', attPlus: 12, attPlusP: null, attMinus: 9, attMinusP: null, fd: 6, fdP: null, bl: 3, ac: 3, fs: 1, tot: 27, isTotal: true }
        ]
      },
      {
        title: 'Set 4',
        players: [
          { name: 'Arnaud', attPlus: 10, attPlusP: null, attMinus: 2, attMinusP: null, fd: 2, fdP: null, bl: 0, ac: 0, fs: 0, tot: 14 },
          { name: 'Tom', attPlus: 4, attPlusP: null, attMinus: 1, attMinusP: null, fd: 1, fdP: null, bl: 1, ac: 0, fs: 0, tot: 6 },
          { name: 'Jane', attPlus: 0, attPlusP: null, attMinus: 0, attMinusP: null, fd: 0, fdP: null, bl: 0, ac: 0, fs: 3, tot: 0 },
          { name: 'Alex', attPlus: 1, attPlusP: null, attMinus: 1, attMinusP: null, fd: 0, fdP: null, bl: 0, ac: 3, fs: 1, tot: 2 },
          { name: 'Total', attPlus: 15, attPlusP: null, attMinus: 4, attMinusP: null, fd: 3, fdP: null, bl: 1, ac: 3, fs: 4, tot: 22, isTotal: true }
        ]
      }
    ],
    recap: {
      hasIP: true,
      hasPctPlus: true,
      players: [
        { name: 'Arnaud', attPlus: 13, attPlusP: null, attMinus: 6, attMinusP: null, fd: 2, fdP: null, bl: 1, ac: 0, fs: 0, tot: 21, pctPlus: '62%', ip: '+75' },
        { name: 'Mika', attPlus: 2, attPlusP: null, attMinus: 3, attMinusP: null, fd: 4, fdP: null, bl: 1, ac: 0, fs: 0, tot: 9, pctPlus: '22%', ip: '-100' },
        { name: 'Antoine', attPlus: 10, attPlusP: null, attMinus: 8, attMinusP: null, fd: 4, fdP: null, bl: 2, ac: 0, fs: 0, tot: 22, pctPlus: '45%', ip: '+13' },
        { name: 'Tom', attPlus: 11, attPlusP: null, attMinus: 12, attMinusP: null, fd: 6, fdP: null, bl: 1, ac: 0, fs: 0, tot: 29, pctPlus: '38%', ip: '+4' },
        { name: 'Jane', attPlus: 0, attPlusP: null, attMinus: 0, attMinusP: null, fd: 0, fdP: null, bl: 0, ac: 2, fs: 4, tot: 0, pctPlus: '-', ip: '-' },
        { name: 'Assum', attPlus: 0, attPlusP: null, attMinus: 1, attMinusP: null, fd: 0, fdP: null, bl: 0, ac: 2, fs: 1, tot: 1, pctPlus: '0%', ip: '0' },
        { name: 'Alex', attPlus: 3, attPlusP: null, attMinus: 3, attMinusP: null, fd: 0, fdP: null, bl: 0, ac: 6, fs: 2, tot: 6, pctPlus: '50%', ip: '+50' },
        { name: 'TOTAL', attPlus: 39, attPlusP: null, attMinus: 33, attMinusP: null, fd: 16, fdP: null, bl: 5, ac: 10, fs: 7, tot: 88, pctPlus: '44%', ip: '-', isTotal: true }
      ]
    }
  }
];

// 8. ANNUAL_STATS
const ANNUAL_STATS = {
  description: 'Cumul des 9 matchs avec statistiques (RHSP, Moustache, Bières, RSC, Marvels, Rhinos, Rescapés, Kiki, Manu)',
  players: [
    { name: 'Arnaud', matchs: 8, attPlus: 155, attPlusP: '61%', attMinus: 81, attMinusP: '32%', fd: 20, fdP: '8%', tot: 256, ip: '+614', bl: 10, ac: 0, fs: 0 },
    { name: 'Lenny', matchs: 7, attPlus: 55, attPlusP: '44%', attMinus: 56, attMinusP: '44%', fd: 15, fdP: '12%', tot: 126, ip: '+67', bl: 12, ac: 2, fs: 0 },
    { name: 'Tom', matchs: 6, attPlus: 56, attPlusP: '38%', attMinus: 66, attMinusP: '45%', fd: 24, fdP: '16%', tot: 146, ip: '-65', bl: 3, ac: 0, fs: 0 },
    { name: 'Alex', matchs: 9, attPlus: 36, attPlusP: '50%', attMinus: 28, attMinusP: '39%', fd: 8, fdP: '11%', tot: 72, ip: '+633', bl: 0, ac: 47, fs: 21 },
    { name: 'Antoine', matchs: 4, attPlus: 28, attPlusP: '48%', attMinus: 17, attMinusP: '29%', fd: 13, fdP: '22%', tot: 58, ip: '+298', bl: 4, ac: 0, fs: 0 },
    { name: 'Mika', matchs: 3, attPlus: 11, attPlusP: '28%', attMinus: 19, attMinusP: '49%', fd: 9, fdP: '23%', tot: 39, ip: '-107', bl: 2, ac: 0, fs: 0 },
    { name: 'Oliv', matchs: 1, attPlus: 2, attPlusP: '40%', attMinus: 3, attMinusP: '60%', fd: 0, fdP: '0%', tot: 5, ip: '+33', bl: 1, ac: 0, fs: 0 },
    { name: 'Jane', matchs: 9, attPlus: 0, attPlusP: '0%', attMinus: 1, attMinusP: '100%', fd: 0, fdP: '0%', tot: 1, ip: '-', bl: 0, ac: 16, fs: 22 },
    { name: 'Assum', matchs: 7, attPlus: 1, attPlusP: '33%', attMinus: 2, attMinusP: '67%', fd: 0, fdP: '0%', tot: 3, ip: '-', bl: 0, ac: 13, fs: 11 },
    { name: 'TOTAL ÉQUIPE', matchs: 9, attPlus: 344, attPlusP: '49%', attMinus: 273, attMinusP: '39%', fd: 89, fdP: '13%', tot: 706, ip: '-', bl: 32, ac: 78, fs: 54, isTotal: true }
  ],
  topPerformers: [
    { title: 'Meilleur attaquant', text: 'Arnaud - 155 att+ (61%)' },
    { title: 'Meilleur serveur', text: 'Alex - 47 aces' },
    { title: 'Meilleur bloqueur', text: 'Lenny - 12 blocs' }
  ]
};

// 9. PLAYER_CHARTS
const PLAYER_CHARTS = [
  { id: 'chart-arnaud', name: 'Arnaud', matchs: 8, color: '#00BCD4', data: [61, 32, 8, 61] },
  { id: 'chart-tom', name: 'Tom', matchs: 6, color: '#1565C0', data: [38, 45, 16, -7] },
  { id: 'chart-mika', name: 'Mika', matchs: 3, color: '#4CAF50', data: [28, 49, 23, -11] },
  { id: 'chart-antoine', name: 'Antoine', matchs: 4, color: '#E65100', data: [48, 29, 22, 30] },
  { id: 'chart-lenny', name: 'Lenny', matchs: 7, color: '#E53935', data: [44, 44, 12, 7] },
  { id: 'chart-alex', name: 'Alex', matchs: 9, color: '#FDD835', data: [50, 39, 11, 63] },
  { id: 'chart-oliv', name: 'Oliv', matchs: 1, color: '#9C27B0', data: [40, 60, 0, 3] }
];

// 10. EVOLUTION_DATA
const EVOLUTION_DATA = {
  labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  teams: {
    'Jen': { color: '#9b59b6', points: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], rank: 1 },
    'Kiki': { color: '#3498db', points: [0, 2, 4, 5, 7, 9, 11, 13, 14, 16], rank: 2 },
    'Red Hot': { color: '#e74c3c', points: [0, 1, 3, 5, 7, 9, 11, 12, 14, 15, 16], rank: 4 },
    'Rescapés': { color: '#2ecc71', points: [0, 2, 4, 6, 7, 8, 10, 11, 13], rank: 3 },
    'Marvels': { color: '#f39c12', points: [0, 2, 4, 5, 7, 9, 10, 12, 13, 15, 16], rank: 5 },
    'RSC': { color: '#1abc9c', points: [0, 1, 3, 4, 5, 7, 8, 9, 11], rank: 7 },
    'Manu': { color: '#e67e22', points: [0, 1, 2, 4, 5, 6, 8, 9, 10], rank: 8 },
    'Bières': { color: '#f1c40f', points: [0, 2, 3, 4, 5, 7, 8, 9, 11, 13, 15], rank: 6 },
    'Rhinos': { color: '#95a5a6', points: [0, 1, 2, 3, 4, 6, 7, 8, 10, 11], rank: 9 },
    'StarPAFF': { color: '#34495e', points: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], rank: 10 }
  }
};
