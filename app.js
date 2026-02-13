// ============================================================
// FSGT94 Volleyball Championship Dashboard - app.js
// All rendering and interaction logic.
// Depends on global constants from data.js:
//   TEAMS, STANDINGS, MATCHES_PLAYED, MATCHES_UPCOMING,
//   PR_TEAMS, PR_PLAYERS, MATCH_STATS, ANNUAL_STATS,
//   PLAYER_CHARTS, EVOLUTION_DATA
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

function showStatsSubTab(subTabId, btn) {
    document.querySelectorAll('.stats-sub-tab-content').forEach(c => c.classList.remove('active'));
    btn.parentElement.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(subTabId).classList.add('active');
    btn.classList.add('active');
}

function showMatchStat(matchId, btn) {
    document.querySelectorAll('.match-stat-content').forEach(c => {
        c.classList.remove('active');
        c.style.display = 'none';
    });
    document.querySelectorAll('.match-stat-tab').forEach(t => t.classList.remove('active'));
    const el = document.getElementById(matchId);
    el.classList.add('active');
    el.style.display = 'block';
    btn.classList.add('active');
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

    // Upcoming matches
    let upcomingCards = '';
    MATCHES_UPCOMING.forEach(m => {
        const homeTeam = TEAMS[m.home];
        const awayTeam = TEAMS[m.away];
        const statusClass = m.status.includes('Report') ? 'status-postponed' : 'status-upcoming';
        upcomingCards += `<div class="match-card">
            <div class="match-date">${m.date}</div>
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
            <div class="section-header"><h3 class="section-title">R\u00e9sultats</h3><span class="section-badge">${MATCHES_PLAYED.length} matchs</span></div>
            ${playedCards}
        </div>
        <div class="matches-section">
            <div class="section-header"><h3 class="section-title">\u00c0 venir</h3><span class="section-badge">${MATCHES_UPCOMING.length} matchs</span></div>
            ${upcomingCards}
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

// --- Helpers for percentage coloring in match stats ---

function attPlusColor(pct) {
    if (pct >= 50) return '#27ae60';
    if (pct >= 40) return '#e67e22';
    return '#e74c3c';
}

function fdColor(pct) {
    if (pct <= 15) return '#27ae60';
    if (pct <= 25) return '#e67e22';
    return '#e74c3c';
}

function formatAttPlus(val, pct) {
    if (val === 0 && pct === 0) return `0 (0%)`;
    const color = attPlusColor(pct);
    return `${val} <span style="color: ${color}; font-weight: 600;">(${pct}%)</span>`;
}

function formatAttMinus(val, pct) {
    return `${val} (${pct}%)`;
}

function formatFD(val, pct) {
    if (val === 0 && pct === 0) return `0 (0%)`;
    const color = fdColor(pct);
    return `${val} <span style="color: ${color}; font-weight: 600;">(${pct}%)</span>`;
}

function ipStyle(val) {
    if (val === '-' || val === 0) return '';
    if (typeof val === 'string' && val.startsWith('+')) return 'color: var(--win-color); font-weight: 600;';
    if (typeof val === 'number' && val > 0) return 'color: var(--win-color); font-weight: 600;';
    if (typeof val === 'string' && val.startsWith('-')) return 'color: var(--loss-color); font-weight: 600;';
    if (typeof val === 'number' && val < 0) return 'color: var(--loss-color); font-weight: 600;';
    return '';
}

function buildSetTable(set) {
    if (set.noStats) {
        return `<div style="margin-bottom: 24px;">
            <h4 style="color: #0056D2; margin-bottom: 12px; font-size: 14px;">${set.title}</h4>
            <p style="color: var(--text-secondary); font-style: italic; font-size: 12px;">${set.noStatsMsg}</p>
        </div>`;
    }

    let playerRows = '';
    set.players.forEach((p, idx) => {
        const isTotal = p.isTotal;
        const bgStyle = isTotal
            ? 'background: #e8e8e8; font-weight: 600;'
            : (idx % 2 === 1 && !isTotal ? 'background: #fafafa;' : '');
        const tdPad = isTotal ? 'padding: 6px 12px;' : 'padding: 4px 12px;';

        const attPlusCell = (p.attPlusP !== undefined && p.attPlusP !== null)
            ? formatAttPlus(p.attPlus, p.attPlusP)
            : `${p.attPlus}`;
        const attMinusCell = (p.attMinusP !== undefined && p.attMinusP !== null)
            ? formatAttMinus(p.attMinus, p.attMinusP)
            : `${p.attMinus}`;
        const fdCell = (p.fdP !== undefined && p.fdP !== null)
            ? formatFD(p.fd, p.fdP)
            : `${p.fd}`;

        const totStyle = isTotal ? '' : ' font-weight: 600;';

        playerRows += `<tr${bgStyle ? ` style="${bgStyle}"` : ''}>` +
            `<td style="${tdPad}">${p.name}</td>` +
            `<td style="text-align: center;">${attPlusCell}</td>` +
            `<td style="text-align: center;">${attMinusCell}</td>` +
            `<td style="text-align: center;">${fdCell}</td>` +
            `<td style="text-align: center;">${p.bl}</td>` +
            `<td style="text-align: center;">${p.ac}</td>` +
            `<td style="text-align: center;">${p.fs}</td>` +
            `<td style="text-align: center;${totStyle}">${p.tot}</td>` +
            `</tr>`;
    });

    return `<div style="margin-bottom: 24px;">
        <h4 style="color: #0056D2; margin-bottom: 12px; font-size: 14px;">${set.title}</h4>
        <div style="overflow-x: auto;">
            <table style="font-size: 12px; border-collapse: collapse;">
                <thead>
                    <tr style="background: #f0f0f0;">
                        <th style="padding: 6px 12px; text-align: left;">Joueur</th>
                        <th style="text-align: center;">Att+</th>
                        <th style="text-align: center;">Att-</th>
                        <th style="text-align: center;">FD</th>
                        <th style="text-align: center;">Bl</th>
                        <th style="text-align: center;">Ac</th>
                        <th style="text-align: center;">FS</th>
                        <th style="text-align: center;">Tot</th>
                    </tr>
                </thead>
                <tbody>${playerRows}</tbody>
            </table>
        </div>
    </div>`;
}

function buildRecapTable(recap) {
    let playerRows = '';
    recap.players.forEach((p, idx) => {
        const isTotal = p.isTotal;
        const bgStyle = isTotal
            ? 'background: #e8e8e8; font-weight: 600;'
            : (idx % 2 === 1 && !isTotal ? 'background: #fafafa;' : '');
        const tdPad = isTotal ? 'padding: 6px 12px;' : 'padding: 4px 12px;';

        const attPlusCell = (p.attPlusP !== undefined && p.attPlusP !== null)
            ? formatAttPlus(p.attPlus, p.attPlusP)
            : `${p.attPlus}`;
        const attMinusCell = (p.attMinusP !== undefined && p.attMinusP !== null)
            ? formatAttMinus(p.attMinus, p.attMinusP)
            : `${p.attMinus}`;
        const fdCell = (p.fdP !== undefined && p.fdP !== null)
            ? formatFD(p.fd, p.fdP)
            : `${p.fd}`;

        const totStyle = isTotal ? '' : ' font-weight: 600;';
        const ipVal = p.ip !== undefined ? p.ip : '-';
        const ipSt = ipStyle(ipVal);

        playerRows += `<tr${bgStyle ? ` style="${bgStyle}"` : ''}>` +
            `<td style="${tdPad}">${p.name}</td>` +
            `<td style="text-align: center;">${attPlusCell}</td>` +
            `<td style="text-align: center;">${attMinusCell}</td>` +
            `<td style="text-align: center;">${fdCell}</td>` +
            `<td style="text-align: center;">${p.bl}</td>` +
            `<td style="text-align: center;">${p.ac}</td>` +
            `<td style="text-align: center;">${p.fs}</td>` +
            `<td style="text-align: center;${totStyle}">${p.tot}</td>` +
            `<td style="text-align: center;${ipSt ? ' ' + ipSt : ''}">${ipVal}</td>` +
            `</tr>`;
    });

    return `<div style="margin-top: 24px; padding-top: 20px; border-top: 2px solid #0056D2;">
        <h4 style="color: #0056D2; margin-bottom: 12px; font-size: 16px;">\ud83d\udcca R\u00e9capitulatif du match</h4>
        <div style="overflow-x: auto;">
            <table style="font-size: 12px; border-collapse: collapse;">
                <thead>
                    <tr style="background: #f0f0f0;">
                        <th style="padding: 6px 12px; text-align: left;">Joueur</th>
                        <th style="text-align: center;">Att+</th>
                        <th style="text-align: center;">Att-</th>
                        <th style="text-align: center;">FD</th>
                        <th style="text-align: center;">Bl</th>
                        <th style="text-align: center;">Ac</th>
                        <th style="text-align: center;">FS</th>
                        <th style="text-align: center;">Tot</th>
                        <th style="text-align: center;">IP</th>
                    </tr>
                </thead>
                <tbody>${playerRows}</tbody>
            </table>
        </div>
    </div>`;
}

function renderMatchStats() {
    const container = document.getElementById('stats-matchs-content');
    if (!container) return;

    // Build tab buttons
    let tabs = '';
    MATCH_STATS.forEach((match, i) => {
        const activeClass = i === 0 ? 'match-stat-tab active' : 'match-stat-tab';
        tabs += `<button class="${activeClass}" onclick="showMatchStat('${match.id}', this)">${match.label}</button>`;
    });

    // Build match content panels
    let panels = '';
    MATCH_STATS.forEach((match, i) => {
        const isActive = i === 0;
        const displayStyle = isActive ? 'display: block;' : 'display: none;';
        const activeClass = isActive ? 'match-stat-content active' : 'match-stat-content';

        let inner = '';

        // Header
        inner += `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
            <h3 style="margin: 0;">${match.label}</h3>
            <span style="background: var(--win-color); color: white; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">${match.result}</span>
        </div>`;
        inner += `<p style="color: var(--text-secondary); margin-bottom: ${match.noStats ? '16px' : '20px'};">${match.date}</p>`;

        if (match.noStats) {
            inner += `<p style="color: var(--text-secondary);">${match.noStatsMsg}</p>`;
        } else {
            // Sets
            if (match.sets) {
                match.sets.forEach(set => {
                    inner += buildSetTable(set);
                });
            }
            // Recap
            if (match.recap) {
                inner += buildRecapTable(match.recap);
            }
        }

        panels += `<div id="${match.id}" class="${activeClass}" style="${displayStyle}">
            <div class="card" style="background: var(--bg-header); border-radius: 12px; padding: 20px;">
                ${inner}
            </div>
        </div>`;
    });

    container.innerHTML = `<div class="match-stats-tabs" style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; margin-bottom: 16px;">
        ${tabs}
    </div>
    ${panels}`;
}

function renderAnnualStats() {
    const container = document.getElementById('stats-annee-content');
    if (!container) return;

    const stats = ANNUAL_STATS;

    // Main table rows
    let mainRows = '';
    stats.players.forEach((p, idx) => {
        const isTotal = p.isTotal;
        const bgStyle = isTotal
            ? 'background: #e8e8e8; font-weight: 600;'
            : (idx % 2 === 1 && !isTotal ? 'background: #fafafa;' : '');
        const tdPad = isTotal ? 'padding: 6px 12px;' : 'padding: 4px 12px;';

        const attPlusCell = (p.attPlusP !== undefined && p.attPlusP !== null)
            ? formatAttPlus(p.attPlus, p.attPlusP)
            : `${p.attPlus}`;
        const attMinusCell = (p.attMinusP !== undefined && p.attMinusP !== null)
            ? formatAttMinus(p.attMinus, p.attMinusP)
            : `${p.attMinus}`;
        const fdCell = (p.fdP !== undefined && p.fdP !== null)
            ? formatFD(p.fd, p.fdP)
            : `${p.fd}`;

        const ipVal = p.ip !== undefined ? p.ip : '-';
        const ipSt = ipStyle(ipVal);
        const nameStyle = isTotal ? '' : ' font-weight: 600;';

        mainRows += `<tr${bgStyle ? ` style="${bgStyle}"` : ''}>` +
            `<td style="${tdPad}${nameStyle}">${p.name}</td>` +
            `<td style="text-align: center;">${p.matchs}</td>` +
            `<td style="text-align: center;">${attPlusCell}</td>` +
            `<td style="text-align: center;">${attMinusCell}</td>` +
            `<td style="text-align: center;">${fdCell}</td>` +
            `<td style="text-align: center; font-weight: 600;">${p.tot}</td>` +
            `<td style="text-align: center;${ipSt ? ' ' + ipSt : ''}">${ipVal}</td>` +
            `<td style="text-align: center;">${p.bl}</td>` +
            `<td style="text-align: center;">${p.ac}</td>` +
            `<td style="text-align: center;">${p.fs}</td>` +
            `</tr>`;
    });

    // Top performers
    let topPerformers = '';
    stats.topPerformers.forEach(tp => {
        topPerformers += `<div style="background: #f8f9fa; padding: 12px 16px; border-radius: 8px; flex: 1; min-width: 200px;">
            <strong>${tp.title}</strong><br>
            <span style="color: var(--win-color);">${tp.value}</span>
        </div>`;
    });

    // Player charts
    let chartDivs = '';
    PLAYER_CHARTS.forEach(p => {
        chartDivs += `<div style="background: #f8f9fa; padding: 16px; border-radius: 8px; width: 280px;">
            <h5 style="text-align: center; margin-bottom: 12px; color: #333;">${p.label}</h5>
            <div style="width: 250px; height: 180px; margin: 0 auto;">
                <canvas id="${p.id}"></canvas>
            </div>
        </div>`;
    });

    container.innerHTML = `<div class="card" style="background: var(--bg-header); border-radius: 12px; padding: 20px; margin-top: 16px;">
        <h3 style="margin-bottom: 20px; color: var(--text-primary);">\ud83d\udcca ${stats.title}</h3>
        <p style="color: var(--text-secondary); margin-bottom: 20px; font-size: 13px;">${stats.description}</p>

        <div style="overflow-x: auto;">
            <table style="font-size: 12px; border-collapse: collapse;">
                <thead>
                    <tr style="background: #f0f0f0;">
                        <th style="padding: 6px 12px; text-align: left;">Joueur</th>
                        <th style="text-align: center;">Matchs</th>
                        <th style="text-align: center;">Att+</th>
                        <th style="text-align: center;">Att-</th>
                        <th style="text-align: center;">FD</th>
                        <th style="text-align: center;">Tot</th>
                        <th style="text-align: center;">IP</th>
                        <th style="text-align: center;">Bl</th>
                        <th style="text-align: center;">Ac</th>
                        <th style="text-align: center;">FS</th>
                    </tr>
                </thead>
                <tbody>${mainRows}</tbody>
            </table>
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e0e0e0;">
            <h4 style="color: #0056D2; margin-bottom: 12px; font-size: 14px;">\ud83c\udfc6 Top Performers</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 13px;">
                ${topPerformers}
            </div>
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e0e0e0;">
            <h4 style="color: #0056D2; margin-bottom: 16px; font-size: 14px;">\ud83d\udcc8 Statistiques par joueur (%)</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
                ${chartDivs}
            </div>
        </div>
    </div>`;

    // Initialize Chart.js charts
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: -10,
                max: 65,
                ticks: { stepSize: 5 }
            }
        }
    };

    PLAYER_CHARTS.forEach(p => {
        new Chart(document.getElementById(p.id), {
            type: 'bar',
            data: {
                labels: ['Att+', 'Att-', 'FD', 'IP'],
                datasets: [{
                    data: p.data,
                    backgroundColor: [p.color, p.color, p.color, '#B39DDB']
                }]
            },
            options: chartOptions
        });
    });
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
    renderMatchStats();
    renderAnnualStats();
    drawEvolutionChart();
});

window.addEventListener('resize', drawEvolutionChart);
