// ============================================================
// FSGT94 Volleyball Championship Dashboard - app.js
// All rendering and interaction logic.
// Depends on global constants from data.js:
//   TEAMS, STANDINGS, MATCHES_PLAYED, MATCHES_UPCOMING,
//   PR_TEAMS, PR_PLAYERS, EVOLUTION_DATA
// ============================================================

// ------------------------------------------------------------
// 1. Navigation functions
// ------------------------------------------------------------

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
    if (tabId === 'classement') setTimeout(drawEvolutionChart, 100);
}

function showSubTab(subTabId, btn) {
    document.querySelectorAll('.sub-tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(subTabId).classList.add('active');
    btn.classList.add('active');
}

function showClassementSubTab(subTabId, btn) {
    document.querySelectorAll('.classement-sub-tab-content').forEach(c => c.classList.remove('active'));
    btn.parentElement.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(subTabId).classList.add('active');
    btn.classList.add('active');
    if (subTabId === 'classement-evolution') setTimeout(drawEvolutionChart, 100);
}


// ------------------------------------------------------------
// 2. Render functions
// ------------------------------------------------------------

function renderStandings() {
    const container = document.getElementById('classement-table-content');
    if (!container) return;

    let rows = '';
    STANDINGS.forEach(s => {
        const team = TEAMS[s.team];
        const formItems = s.form.map(f => {
            let cls = 'form-draw';
            if (f === 'W') cls = 'form-win';
            else if (f === 'L') cls = 'form-loss';
            return `<span class="form-item ${cls}"></span>`;
        }).join('');

        rows += `<tr class="rank-${s.rank}">
            <td>
                <div class="team-cell">
                    <div class="rank-indicator"></div>
                    <span class="rank-number">${s.rank}</span>
                    <div class="team-logo ${team.logo}">${team.short}</div>
                    <span class="team-name">${team.name}</span>
                </div>
            </td>
            <td>${s.mj}</td>
            <td>${s.g}</td>
            <td class="bold-val">${s.p}</td>
            <td>${s.setPlus}</td>
            <td>${s.setMinus}</td>
            <td class="bold-val">${s.ds}</td>
            <td>${s.coefSet}</td>
            <td>${s.ptsPlus}</td>
            <td>${s.ptsMinus}</td>
            <td class="bold-val">${s.dp}</td>
            <td>${s.coefPts}</td>
            <td>${s.pts}</td>
            <td>
                <div class="form-container">${formItems}</div>
            </td>
        </tr>`;
    });

    container.innerHTML = `<div class="table-container">
        <table>
            <thead><tr>
                <th>Club</th><th>MJ</th><th>G</th><th class="bold-col">P</th>
                <th>Set+</th><th>Set-</th><th class="bold-col">DS</th><th>Coef Set</th>
                <th>Pts+</th><th>Pts-</th><th class="bold-col">DP</th><th>Coef Pts</th>
                <th>Pts</th><th>10 derniers</th>
            </tr></thead>
            <tbody>${rows}</tbody>
        </table>
    </div>`;
}

function toggleMatchSection(sectionId) {
    const content = document.getElementById(sectionId);
    const header = content.previousElementSibling;
    const arrow = header.querySelector('.section-arrow');
    content.classList.toggle('collapsed');
    arrow.classList.toggle('collapsed');
    header.classList.toggle('header-collapsed');
}

function renderMatches() {
    const container = document.getElementById('matchs-content');
    if (!container) return;

    // Played matches
    let playedCards = '';
    MATCHES_PLAYED.forEach(m => {
        const homeTeam = TEAMS[m.home];
        const awayTeam = TEAMS[m.away];
        playedCards += `<div class="match-card">
            <div class="match-date">${m.date}</div>
            <div class="match-teams">
                <div class="match-team home">
                    <span class="team-name">${homeTeam.name}</span>
                    <div class="team-logo ${homeTeam.logo}">${homeTeam.short}</div>
                </div>
                <div class="match-score">
                    <span class="${m.homeWin ? 'winner' : 'loser'}">${m.scoreHome}</span>
                    <span class="separator">-</span>
                    <span class="${m.homeWin ? 'loser' : 'winner'}">${m.scoreAway}</span>
                </div>
                <div class="match-team away">
                    <div class="team-logo ${awayTeam.logo}">${awayTeam.short}</div>
                    <span class="team-name">${awayTeam.name}</span>
                </div>
            </div>
            <div class="match-status"><span class="status-played">${m.status}</span></div>
        </div>`;
    });

    // Sort upcoming matches by date (N/C at the end)
    function parseMatchDate(d) {
        if (!d || d === 'N/C') return null;
        const parts = d.split('/');
        if (parts.length !== 3) return null;
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
    const sortedUpcoming = [...MATCHES_UPCOMING].sort((a, b) => {
        const da = parseMatchDate(a.date);
        const db = parseMatchDate(b.date);
        if (!da && !db) return 0;
        if (!da) return -1;
        if (!db) return 1;
        return da - db;
    });

    // Upcoming matches - group by semaine for alternating backgrounds
    // Extract unique semaine numbers (excluding Reporté)
    const semaineSet = new Set();
    sortedUpcoming.forEach(m => {
        const semMatch = m.status.match(/Sem\.\s*(\d+)/);
        if (semMatch) semaineSet.add(parseInt(semMatch[1]));
    });
    const semaineList = [...semaineSet].sort((a, b) => a - b);
    // Map each semaine to an index for alternating bg
    const semaineIndex = {};
    semaineList.forEach((sem, i) => { semaineIndex[sem] = i; });

    // Build rank lookup from STANDINGS for clash detection
    const teamRank = {};
    STANDINGS.forEach(s => { teamRank[s.team] = s.rank; });

    let upcomingCards = '';
    sortedUpcoming.forEach(m => {
        const homeTeam = TEAMS[m.home];
        const awayTeam = TEAMS[m.away];
        const isPostponed = m.status.includes('Report');
        const statusClass = isPostponed ? 'status-postponed' : 'status-upcoming';

        // Determine card extra classes
        let cardClasses = 'match-card';
        if (isPostponed) {
            cardClasses += ' match-card-postponed';
        } else {
            const semMatch = m.status.match(/Sem\.\s*(\d+)/);
            if (semMatch) {
                const idx = semaineIndex[parseInt(semMatch[1])];
                if (idx % 2 === 0) cardClasses += ' match-card-sem-even';
            }
        }

        // Clash badge: top 3 vs top 3 = 🔥, top 5 vs top 5 = ⚡
        const rH = teamRank[m.home] || 99;
        const rA = teamRank[m.away] || 99;
        let clashBadge = '';
        if (rH <= 3 && rA <= 3) {
            clashBadge = '<span class="clash-badge clash-top3" title="Choc au sommet">🔥</span>';
        } else if (rH <= 5 && rA <= 5) {
            clashBadge = '<span class="clash-badge clash-top5" title="Affiche">⚡</span>';
        }

        upcomingCards += `<div class="${cardClasses}">
            <div class="match-date">${m.date}${clashBadge}</div>
            <div class="match-teams">
                <div class="match-team home">
                    <span class="team-name">${homeTeam.name}</span>
                    <div class="team-logo ${homeTeam.logo}">${homeTeam.short}</div>
                </div>
                <div class="match-score">
                    <span>-</span>
                    <span class="separator">:</span>
                    <span>-</span>
                </div>
                <div class="match-team away">
                    <div class="team-logo ${awayTeam.logo}">${awayTeam.short}</div>
                    <span class="team-name">${awayTeam.name}</span>
                </div>
            </div>
            <div class="match-status"><span class="${statusClass}">${m.status}</span></div>
        </div>`;
    });

    container.innerHTML = `
        <div class="matches-section">
            <div class="section-header" onclick="toggleMatchSection('played-matches-content')">
                <h3 class="section-title">R\u00e9sultats</h3>
                <span class="section-badge">${MATCHES_PLAYED.length} matchs</span>
                <span class="section-arrow">&#9660;</span>
            </div>
            <div id="played-matches-content" class="section-collapsible">
                ${playedCards}
            </div>
        </div>
        <div class="matches-section">
            <div class="section-header" onclick="toggleMatchSection('upcoming-matches-content')">
                <h3 class="section-title">\u00c0 venir</h3>
                <span class="section-badge">${MATCHES_UPCOMING.length} matchs</span>
                <span class="section-arrow">&#9660;</span>
            </div>
            <div id="upcoming-matches-content" class="section-collapsible">
                ${upcomingCards}
            </div>
        </div>`;
}

function renderPRTeams() {
    const container = document.getElementById('pr-equipes-content');
    if (!container) return;

    let rows = '';
    PR_TEAMS.forEach(r => {
        const team = TEAMS[r.team];
        const barClass = r.rank <= 10 ? `bar-rank-${r.rank}` : 'bar-rank-rest';
        rows += `<tr>
            <td class="pr-rank">${r.rank}</td>
            <td><div class="team-cell"><div class="team-logo ${team.logo}">${team.short}</div><span class="team-name">${team.name}</span></div></td>
            <td class="center"><span class="record-text">${r.record}</span></td>
            <td class="center"><span class="pr-value">${r.power}</span></td>
            <td class="center"><div class="pr-bar-container"><div class="pr-bar"><div class="pr-bar-fill ${barClass}" style="width: ${r.power}%;"></div></div></div></td>
            <td class="center"><span class="difficulty-badge ${r.diffClass}">${r.calendar}</span></td>
        </tr>`;
    });

    container.innerHTML = `<div class="table-container">
        <table class="pr-table">
            <thead><tr>
                <th style="width: 40px;">#</th>
                <th>\u00c9quipe</th>
                <th class="center">V-D</th>
                <th class="center">Power</th>
                <th class="center" style="width: 150px;">Barre</th>
                <th class="center">Calendrier</th>
            </tr></thead>
            <tbody>${rows}</tbody>
        </table>
    </div>`;
}

function renderPRPlayers() {
    const container = document.getElementById('pr-joueurs-content');
    if (!container) return;

    let rows = '';
    PR_PLAYERS.forEach(p => {
        const team = TEAMS[p.team];
        const barClass = p.rank <= 10 ? `bar-rank-${p.rank}` : 'bar-rank-rest';
        rows += `<tr>
            <td class="pr-rank">${p.rank}</td>
            <td><span class="player-name">${p.name}</span></td>
            <td class="center"><div class="team-logo ${team.logo}">${team.short}</div></td>
            <td class="center">${p.poste}</td>
            <td class="center"><span class="pr-value">${p.power}</span></td>
            <td class="center"><div class="pr-bar-container"><div class="pr-bar"><div class="pr-bar-fill ${barClass}" style="width: ${p.power}%;"></div></div></div></td>
        </tr>`;
    });

    container.innerHTML = `<div class="table-container">
        <table class="pr-table">
            <thead><tr>
                <th style="width: 40px;">#</th>
                <th>Joueur</th>
                <th class="center">\u00c9quipe</th>
                <th class="center">Poste</th>
                <th class="center">Power</th>
                <th class="center" style="width: 150px;">Barre</th>
            </tr></thead>
            <tbody>${rows}</tbody>
        </table>
    </div>
    <p style="text-align: center; color: var(--text-secondary); font-size: 12px; margin-top: 16px;">${PR_PLAYERS.length} joueurs class\u00e9s</p>`;
}


// ------------------------------------------------------------
// 3. Evolution chart (canvas drawing)
// ------------------------------------------------------------

function drawEvolutionChart() {
    const canvas = document.getElementById('evolutionChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;

    // Responsive sizing - increased width for icons on right
    canvas.width = Math.min(container.clientWidth - 40, 900);
    canvas.height = 600;

    const width = canvas.width;
    const height = canvas.height;
    const iconAreaWidth = 80; // Space for icons on the right
    const padding = { top: 30, right: 30 + iconAreaWidth, bottom: 50, left: 50 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Clear
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Max values (dynamic from data)
    let maxMatches = 0;
    let maxPoints = 0;
    Object.values(EVOLUTION_DATA.teams).forEach(data => {
        const teamMatches = data.points.length - 1; // first entry is 0 (before any match)
        const teamMaxPts = Math.max(...data.points);
        if (teamMatches > maxMatches) maxMatches = teamMatches;
        if (teamMaxPts > maxPoints) maxPoints = teamMaxPts;
    });

    // Grid
    ctx.strokeStyle = '#e8e8e8';
    ctx.lineWidth = 0.5;

    // Horizontal grid lines (points)
    for (let i = 0; i <= maxPoints; i += 2) {
        const y = padding.top + chartHeight - (i / maxPoints) * chartHeight;
        ctx.beginPath();
        ctx.strokeStyle = '#e8e8e8';
        ctx.lineWidth = 0.5;
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();

        // Labels Y
        ctx.fillStyle = '#333';
        ctx.font = '11px -apple-system, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(i.toString(), padding.left - 10, y + 4);
    }

    // Vertical grid lines (matches)
    for (let i = 0; i <= maxMatches; i++) {
        const x = padding.left + (i / maxMatches) * chartWidth;
        ctx.beginPath();
        ctx.strokeStyle = '#e8e8e8';
        ctx.lineWidth = 0.5;
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, height - padding.bottom);
        ctx.stroke();

        // Labels X
        ctx.fillStyle = '#333';
        ctx.font = '11px -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(i.toString(), x, height - padding.bottom + 20);
    }

    // Draw axes (black)
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1.5;
    // Y axis
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, height - padding.bottom);
    // X axis
    ctx.lineTo(width - padding.right, height - padding.bottom);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = '#333';
    ctx.font = '12px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Matchs jou\u00e9s', width / 2, height - 10);

    ctx.save();
    ctx.translate(15, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Points', 0, 0);
    ctx.restore();

    // Draw lines for each team
    Object.entries(EVOLUTION_DATA.teams).forEach(([teamName, data]) => {
        ctx.beginPath();
        ctx.strokeStyle = data.color;
        ctx.lineWidth = 2.5;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        data.points.forEach((points, matchIndex) => {
            const x = padding.left + (matchIndex / maxMatches) * chartWidth;
            const y = padding.top + chartHeight - (points / maxPoints) * chartHeight;

            if (matchIndex === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();

        // Draw points
        data.points.forEach((points, matchIndex) => {
            const x = padding.left + (matchIndex / maxMatches) * chartWidth;
            const y = padding.top + chartHeight - (points / maxPoints) * chartHeight;

            ctx.beginPath();
            ctx.fillStyle = data.color;
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = '#ffffff';
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
        });
    });

    // Draw team icons at the end of each team's curve
    const iconSize = 22;
    const iconOffset = 8; // gap between last point and icon

    // Build list of teams with their final position
    const teamsForIcons = Object.entries(EVOLUTION_DATA.teams).map(([name, data]) => {
        const lastMatchIndex = data.points.length - 1;
        const finalPoints = data.points[lastMatchIndex];
        return {
            name,
            color: data.color,
            finalPoints,
            lastMatchIndex,
            rank: data.rank,
            // Position at end of curve
            x: padding.left + (lastMatchIndex / maxMatches) * chartWidth + iconOffset,
            y: padding.top + chartHeight - (finalPoints / maxPoints) * chartHeight
        };
    });

    // Resolve overlapping icons (same Y position)
    teamsForIcons.sort((a, b) => a.y - b.y || a.rank - b.rank);
    for (let i = 1; i < teamsForIcons.length; i++) {
        const prev = teamsForIcons[i - 1];
        const curr = teamsForIcons[i];
        const minGap = iconSize + 2;
        if (Math.abs(curr.y - prev.y) < minGap) {
            // Spread them vertically
            const midY = (prev.y + curr.y) / 2;
            prev.y = midY - minGap / 2;
            curr.y = midY + minGap / 2;
        }
    }

    teamsForIcons.forEach(team => {
        const x = team.x;
        const y = team.y;

        // Draw rounded square
        const radius = 4;
        ctx.beginPath();
        ctx.moveTo(x + radius, y - iconSize / 2);
        ctx.lineTo(x + iconSize - radius, y - iconSize / 2);
        ctx.quadraticCurveTo(x + iconSize, y - iconSize / 2, x + iconSize, y - iconSize / 2 + radius);
        ctx.lineTo(x + iconSize, y + iconSize / 2 - radius);
        ctx.quadraticCurveTo(x + iconSize, y + iconSize / 2, x + iconSize - radius, y + iconSize / 2);
        ctx.lineTo(x + radius, y + iconSize / 2);
        ctx.quadraticCurveTo(x, y + iconSize / 2, x, y + iconSize / 2 - radius);
        ctx.lineTo(x, y - iconSize / 2 + radius);
        ctx.quadraticCurveTo(x, y - iconSize / 2, x + radius, y - iconSize / 2);
        ctx.closePath();
        ctx.fillStyle = team.color;
        ctx.fill();

        // Draw team initials
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 9px -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        let shortName = team.name.substring(0, 3).toUpperCase();
        if (team.name === 'Red Hot') shortName = 'RH';
        if (team.name === 'Rescap\u00e9s') shortName = 'RES';
        if (team.name === 'Marvels') shortName = 'MAR';
        if (team.name === 'StarPAFF') shortName = 'STP';
        if (team.name === 'Bi\u00e8res') shortName = 'BIE';
        if (team.name === 'Rhinos') shortName = 'RHI';

        ctx.fillText(shortName, x + iconSize / 2, y + 1);
    });
}

// ------------------------------------------------------------
// 4. Initialization
// ------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    renderStandings();
    renderMatches();
    renderPRTeams();
    renderPRPlayers();
    drawEvolutionChart();
});

window.addEventListener('resize', drawEvolutionChart);
