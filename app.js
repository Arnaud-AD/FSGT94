// ============================================================
// FSGT94 Volleyball Championship Dashboard - app.js
// Multi-championship support with dynamic JSON loading.
// ============================================================

// ------------------------------------------------------------
// 1. State management
// ------------------------------------------------------------

let DATA = null;          // Current championship data (parsed JSON)
let CHAMPIONSHIPS = null; // Championship registry
let currentSlug = null;   // Currently loaded championship slug

// ------------------------------------------------------------
// 2. Initialization
// ------------------------------------------------------------

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const resp = await fetch('data/championships.json');
        CHAMPIONSHIPS = await resp.json();
        populateChampionshipDropdown();

        const urlParams = new URLSearchParams(window.location.search);
        const slug = urlParams.get('champ') || CHAMPIONSHIPS.default || 'elite';
        await loadChampionship(slug);
    } catch (err) {
        console.error('Failed to initialize:', err);
    }
});

async function loadChampionship(slug) {
    showLoading(true);
    try {
        const resp = await fetch('data/' + slug + '.json');
        if (!resp.ok) throw new Error('Failed to load ' + slug);
        DATA = await resp.json();
        currentSlug = slug;

        const url = new URL(window.location);
        url.searchParams.set('champ', slug);
        history.replaceState(null, '', url);

        document.title = 'FSGT94 Volley - ' + DATA.meta.name;
        updateDropdownSelection(slug);
        injectTeamColors(DATA.teams);
        injectRankColors(Object.keys(DATA.teams).length);
        renderAll();
    } catch (err) {
        console.error('Error loading championship:', err);
    } finally {
        showLoading(false);
    }
}

function renderAll() {
    renderStandings();
    renderMatches();
    renderPRTeams();
    renderPRPlayers();
    drawEvolutionChart();
}

function showLoading(show) {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) overlay.classList.toggle('active', show);
}

// ------------------------------------------------------------
// 3. Championship dropdown
// ------------------------------------------------------------

function populateChampionshipDropdown() {
    const selects = document.querySelectorAll('#championship-select, #championship-select-mobile');
    selects.forEach(function(select) {
        select.innerHTML = '';
        CHAMPIONSHIPS.championships.forEach(function(c) {
            const opt = document.createElement('option');
            opt.value = c.slug;
            opt.textContent = c.name + (c.format === '6x6' ? ' (6x6)' : '');
            select.appendChild(opt);
        });
    });
}

function updateDropdownSelection(slug) {
    document.querySelectorAll('#championship-select, #championship-select-mobile')
        .forEach(function(s) { s.value = slug; });
}

function switchChampionship(slug) {
    if (slug === currentSlug) return;
    loadChampionship(slug);
    updateDropdownSelection(slug);
}

// ------------------------------------------------------------
// 4. Dynamic team colors injection
// ------------------------------------------------------------

function injectTeamColors(teams) {
    let style = document.getElementById('dynamic-team-styles');
    if (style) style.remove();

    style = document.createElement('style');
    style.id = 'dynamic-team-styles';

    let css = '';
    for (const key in teams) {
        css += '.logo-' + key + ' { background: ' + teams[key].color + '; }\n';
    }
    style.textContent = css;
    document.head.appendChild(style);
}

function injectRankColors(totalTeams) {
    let style = document.getElementById('dynamic-rank-styles');
    if (style) style.remove();

    style = document.createElement('style');
    style.id = 'dynamic-rank-styles';

    let css = '';
    // Relegation zone: last 3 teams (or last 2 if <= 8 teams)
    const relegationStart = totalTeams <= 8 ? totalTeams - 1 : totalTeams - 2;
    for (let i = 4; i <= totalTeams; i++) {
        if (i >= relegationStart) {
            css += '.rank-' + i + ' .rank-indicator { background: var(--rank-europa); }\n';
        } else {
            css += '.rank-' + i + ' .rank-indicator { background: transparent; }\n';
        }
    }
    style.textContent = css;
    document.head.appendChild(style);
}

// ------------------------------------------------------------
// 5. Navigation functions
// ------------------------------------------------------------

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
    document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
    if (tabId === 'classement') setTimeout(drawEvolutionChart, 100);
}

function showSubTab(subTabId, btn) {
    document.querySelectorAll('.sub-tab-content').forEach(function(c) { c.classList.remove('active'); });
    document.querySelectorAll('.sub-tab').forEach(function(t) { t.classList.remove('active'); });
    document.getElementById(subTabId).classList.add('active');
    btn.classList.add('active');
}

function showClassementSubTab(subTabId, btn) {
    document.querySelectorAll('.classement-sub-tab-content').forEach(function(c) { c.classList.remove('active'); });
    btn.parentElement.querySelectorAll('.sub-tab').forEach(function(t) { t.classList.remove('active'); });
    document.getElementById(subTabId).classList.add('active');
    btn.classList.add('active');
    if (subTabId === 'classement-evolution') setTimeout(drawEvolutionChart, 100);
}

// ------------------------------------------------------------
// 6. Render functions
// ------------------------------------------------------------

function renderStandings() {
    const container = document.getElementById('classement-table-content');
    if (!container || !DATA) return;

    function buildFormItems(formArray) {
        return formArray.map(function(f) {
            let cls = 'form-pending';
            if (f === 'W') cls = 'form-win';
            else if (f === 'L') cls = 'form-loss';
            else if (f === 'D') cls = 'form-postponed';
            return '<span class="form-item form-item-sm ' + cls + '"></span>';
        }).join('');
    }

    let rows = '';
    DATA.standings.forEach(function(s) {
        const team = DATA.teams[s.team];
        if (!team) return;
        const allerItems = buildFormItems(s.formAller);
        const retourItems = buildFormItems(s.formRetour);

        rows += '<tr class="rank-' + s.rank + '">' +
            '<td>' +
                '<div class="team-cell">' +
                    '<div class="rank-indicator"></div>' +
                    '<span class="rank-number">' + s.rank + '</span>' +
                    '<div class="team-logo logo-' + s.team + '">' + team.short + '</div>' +
                    '<span class="team-name">' + team.name + '</span>' +
                '</div>' +
            '</td>' +
            '<td>' + s.mj + '</td>' +
            '<td>' + s.g + '</td>' +
            '<td class="bold-val">' + s.p + '</td>' +
            '<td>' + s.setPlus + '</td>' +
            '<td>' + s.setMinus + '</td>' +
            '<td class="bold-val">' + s.ds + '</td>' +
            '<td>' + s.coefSet + '</td>' +
            '<td>' + s.ptsPlus + '</td>' +
            '<td>' + s.ptsMinus + '</td>' +
            '<td class="bold-val">' + s.dp + '</td>' +
            '<td>' + s.coefPts + '</td>' +
            '<td>' + s.pts + '</td>' +
            '<td>' +
                '<div class="form-section">' +
                    '<span class="form-label">A</span>' +
                    '<div class="form-container">' + allerItems + '</div>' +
                '</div>' +
                '<div class="form-section">' +
                    '<span class="form-label">R</span>' +
                    '<div class="form-container">' + retourItems + '</div>' +
                '</div>' +
            '</td>' +
        '</tr>';
    });

    container.innerHTML = '<div class="table-container">' +
        '<table>' +
            '<thead><tr>' +
                '<th>Club</th><th>MJ</th><th>G</th><th class="bold-col">P</th>' +
                '<th>Set+</th><th>Set-</th><th class="bold-col">DS</th><th>Coef Set</th>' +
                '<th>Pts+</th><th>Pts-</th><th class="bold-col">DP</th><th>Coef Pts</th>' +
                '<th>Pts</th><th>Forme</th>' +
            '</tr></thead>' +
            '<tbody>' + rows + '</tbody>' +
        '</table>' +
    '</div>';
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
    if (!container || !DATA) return;

    // Played matches
    let playedCards = '';
    DATA.matchesPlayed.forEach(function(m) {
        const homeTeam = DATA.teams[m.home];
        const awayTeam = DATA.teams[m.away];
        if (!homeTeam || !awayTeam) return;
        playedCards += '<div class="match-card">' +
            '<div class="match-date">' + m.date + '</div>' +
            '<div class="match-teams">' +
                '<div class="match-team home">' +
                    '<span class="team-name">' + homeTeam.name + '</span>' +
                    '<div class="team-logo logo-' + m.home + '">' + homeTeam.short + '</div>' +
                '</div>' +
                '<div class="match-score">' +
                    '<span class="' + (m.homeWin ? 'winner' : 'loser') + '">' + m.scoreHome + '</span>' +
                    '<span class="separator">-</span>' +
                    '<span class="' + (m.homeWin ? 'loser' : 'winner') + '">' + m.scoreAway + '</span>' +
                '</div>' +
                '<div class="match-team away">' +
                    '<div class="team-logo logo-' + m.away + '">' + awayTeam.short + '</div>' +
                    '<span class="team-name">' + awayTeam.name + '</span>' +
                '</div>' +
            '</div>' +
            '<div class="match-status"><span class="status-played">' + m.status + '</span></div>' +
        '</div>';
    });

    // Sort upcoming matches by date (N/C first)
    function parseMatchDate(d) {
        if (!d || d === 'N/C') return null;
        var parts = d.split('/');
        if (parts.length !== 3) return null;
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
    var sortedUpcoming = DATA.matchesUpcoming.slice().sort(function(a, b) {
        var da = parseMatchDate(a.date);
        var db = parseMatchDate(b.date);
        if (!da && !db) return 0;
        if (!da) return -1;
        if (!db) return 1;
        return da - db;
    });

    // Group semaines for alternating backgrounds
    var semaineSet = new Set();
    sortedUpcoming.forEach(function(m) {
        var semMatch = m.status.match(/Sem\.\s*(\d+)/);
        if (semMatch) semaineSet.add(parseInt(semMatch[1]));
    });
    var semaineList = Array.from(semaineSet).sort(function(a, b) { return a - b; });
    var semaineIndex = {};
    semaineList.forEach(function(sem, i) { semaineIndex[sem] = i; });

    // Build rank lookup for clash detection
    var teamRank = {};
    DATA.standings.forEach(function(s) { teamRank[s.team] = s.rank; });

    let upcomingCards = '';
    sortedUpcoming.forEach(function(m) {
        const homeTeam = DATA.teams[m.home];
        const awayTeam = DATA.teams[m.away];
        if (!homeTeam || !awayTeam) return;
        const isPostponed = m.status.includes('Report');
        const statusClass = isPostponed ? 'status-postponed' : 'status-upcoming';

        let cardClasses = 'match-card';
        if (isPostponed) {
            cardClasses += ' match-card-postponed';
        } else {
            var semMatch = m.status.match(/Sem\.\s*(\d+)/);
            if (semMatch) {
                var idx = semaineIndex[parseInt(semMatch[1])];
                if (idx % 2 === 0) cardClasses += ' match-card-sem-even';
            }
        }

        // Clash badges
        var rH = teamRank[m.home] || 99;
        var rA = teamRank[m.away] || 99;
        let clashBadge = '';
        if (rH <= 3 && rA <= 3) {
            clashBadge = '<span class="clash-badge clash-top3" title="Choc au sommet">\uD83D\uDD25</span>';
        } else if (rH <= 5 && rA <= 5) {
            clashBadge = '<span class="clash-badge clash-top5" title="Affiche">\u26A1</span>';
        }

        upcomingCards += '<div class="' + cardClasses + '">' +
            '<div class="match-date">' + m.date + clashBadge + '</div>' +
            '<div class="match-teams">' +
                '<div class="match-team home">' +
                    '<span class="team-name">' + homeTeam.name + '</span>' +
                    '<div class="team-logo logo-' + m.home + '">' + homeTeam.short + '</div>' +
                '</div>' +
                '<div class="match-score">' +
                    '<span class="separator">-</span>' +
                '</div>' +
                '<div class="match-team away">' +
                    '<div class="team-logo logo-' + m.away + '">' + awayTeam.short + '</div>' +
                    '<span class="team-name">' + awayTeam.name + '</span>' +
                '</div>' +
            '</div>' +
            '<div class="match-status"><span class="' + statusClass + '">' + m.status + '</span></div>' +
        '</div>';
    });

    container.innerHTML =
        '<div class="matches-section">' +
            '<div class="section-header header-collapsed" onclick="toggleMatchSection(\'played-matches-content\')">' +
                '<h3 class="section-title">R\u00e9sultats</h3>' +
                '<span class="section-badge">' + DATA.matchesPlayed.length + ' matchs</span>' +
                '<span class="section-arrow collapsed">&#9660;</span>' +
            '</div>' +
            '<div id="played-matches-content" class="section-collapsible collapsed">' +
                playedCards +
            '</div>' +
        '</div>' +
        '<div class="matches-section">' +
            '<div class="section-header" onclick="toggleMatchSection(\'upcoming-matches-content\')">' +
                '<h3 class="section-title">\u00c0 venir</h3>' +
                '<span class="section-badge">' + DATA.matchesUpcoming.length + ' matchs</span>' +
                '<span class="section-arrow">&#9660;</span>' +
            '</div>' +
            '<div id="upcoming-matches-content" class="section-collapsible">' +
                upcomingCards +
            '</div>' +
        '</div>';
}

function renderPRTeams() {
    const container = document.getElementById('pr-equipes-content');
    if (!container || !DATA) return;

    let rows = '';
    DATA.prTeams.forEach(function(r) {
        const team = DATA.teams[r.team];
        if (!team) return;
        const barClass = r.rank <= 10 ? 'bar-rank-' + r.rank : 'bar-rank-rest';
        const mvtClass = r.movement > 0 ? 'elo-up' : r.movement < 0 ? 'elo-down' : 'elo-neutral';
        const mvtArrow = r.movement > 0 ? '\u25b2' : r.movement < 0 ? '\u25bc' : '';
        const mvtText = r.movement > 0 ? '+' + r.movement : r.movement < 0 ? '' + r.movement : '-';
        const score = Math.round(r.power);
        rows += '<tr>' +
            '<td class="pr-rank">' + r.rank + '</td>' +
            '<td><div class="team-cell"><div class="team-logo logo-' + r.team + '">' + team.short + '</div><span class="team-name">' + team.name + '</span></div></td>' +
            '<td class="center"><span class="record-text">' + r.record + '</span></td>' +
            '<td class="center"><span class="pr-value">' + score + '</span></td>' +
            '<td class="center"><div class="pr-bar-container"><div class="pr-bar"><div class="pr-bar-fill ' + barClass + '" style="width: ' + r.power + '%;"></div></div></div></td>' +
            '<td class="center"><span class="elo-movement ' + mvtClass + '">' + mvtArrow + ' ' + mvtText + '</span></td>' +
            '<td class="center"><span class="difficulty-badge ' + r.diffClass + '">' + r.calendar + '</span></td>' +
        '</tr>';
    });

    container.innerHTML = '<div class="table-container">' +
        '<table class="pr-table">' +
            '<thead><tr>' +
                '<th style="width: 40px;">#</th>' +
                '<th>\u00c9quipe</th>' +
                '<th class="center">V-D</th>' +
                '<th class="center">Score</th>' +
                '<th class="center" style="width: 150px;"></th>' +
                '<th class="center">Mvt</th>' +
                '<th class="center">Forme</th>' +
            '</tr></thead>' +
            '<tbody>' + rows + '</tbody>' +
        '</table>' +
    '</div>';
}

function renderPRPlayers() {
    const container = document.getElementById('pr-joueurs-content');
    if (!container || !DATA) return;

    // Hide/show Joueurs tab based on data availability
    const joueursTab = document.getElementById('pr-joueurs-tab');
    if (!DATA.prPlayers || DATA.prPlayers.length === 0) {
        if (joueursTab) joueursTab.style.display = 'none';
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 40px;">Pas de classement joueurs disponible pour ce championnat.</p>';
        return;
    }
    if (joueursTab) joueursTab.style.display = '';

    let rows = '';
    DATA.prPlayers.forEach(function(p) {
        const team = DATA.teams[p.team];
        if (!team) return;
        const barClass = p.rank <= 10 ? 'bar-rank-' + p.rank : 'bar-rank-rest';
        rows += '<tr>' +
            '<td class="pr-rank">' + p.rank + '</td>' +
            '<td><span class="player-name">' + p.name + '</span></td>' +
            '<td class="center"><div class="team-logo logo-' + p.team + '">' + team.short + '</div></td>' +
            '<td class="center">' + p.pos + '</td>' +
            '<td class="center"><span class="pr-value">' + p.power + '</span></td>' +
            '<td class="center"><div class="pr-bar-container"><div class="pr-bar"><div class="pr-bar-fill ' + barClass + '" style="width: ' + p.power + '%;"></div></div></div></td>' +
        '</tr>';
    });

    container.innerHTML = '<div class="table-container">' +
        '<table class="pr-table">' +
            '<thead><tr>' +
                '<th style="width: 40px;">#</th>' +
                '<th>Joueur</th>' +
                '<th class="center">\u00c9quipe</th>' +
                '<th class="center">Poste</th>' +
                '<th class="center">Power</th>' +
                '<th class="center" style="width: 150px;">Barre</th>' +
            '</tr></thead>' +
            '<tbody>' + rows + '</tbody>' +
        '</table>' +
    '</div>' +
    '<p style="text-align: center; color: var(--text-secondary); font-size: 12px; margin-top: 16px;">' + DATA.prPlayers.length + ' joueurs class\u00e9s</p>';
}

// ------------------------------------------------------------
// 7. Evolution chart (canvas drawing)
// ------------------------------------------------------------

function drawEvolutionChart() {
    const canvas = document.getElementById('evolutionChart');
    if (!canvas || !DATA || !DATA.evolutionData) return;

    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;

    canvas.width = Math.min(container.clientWidth - 40, 900);
    canvas.height = 600;

    const width = canvas.width;
    const height = canvas.height;
    const iconAreaWidth = 80;
    const padding = { top: 30, right: 30 + iconAreaWidth, bottom: 50, left: 50 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Clear
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Max values
    let maxMatches = 0;
    let maxPoints = 0;
    const teamsData = DATA.evolutionData.teams;
    for (const key in teamsData) {
        const data = teamsData[key];
        const teamMatches = data.points.length - 1;
        const teamMaxPts = Math.max.apply(null, data.points);
        if (teamMatches > maxMatches) maxMatches = teamMatches;
        if (teamMaxPts > maxPoints) maxPoints = teamMaxPts;
    }
    if (maxMatches === 0 || maxPoints === 0) return;

    // Grid
    for (let i = 0; i <= maxPoints; i += 2) {
        const y = padding.top + chartHeight - (i / maxPoints) * chartHeight;
        ctx.beginPath();
        ctx.strokeStyle = '#e8e8e8';
        ctx.lineWidth = 0.5;
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();

        ctx.fillStyle = '#333';
        ctx.font = '11px -apple-system, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(i.toString(), padding.left - 10, y + 4);
    }

    for (let i = 0; i <= maxMatches; i++) {
        const x = padding.left + (i / maxMatches) * chartWidth;
        ctx.beginPath();
        ctx.strokeStyle = '#e8e8e8';
        ctx.lineWidth = 0.5;
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, height - padding.bottom);
        ctx.stroke();

        ctx.fillStyle = '#333';
        ctx.font = '11px -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(i.toString(), x, height - padding.bottom + 20);
    }

    // Axes
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1.5;
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, height - padding.bottom);
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
    for (const teamKey in teamsData) {
        const data = teamsData[teamKey];
        const team = DATA.teams[teamKey];
        const color = team ? team.color : '#999999';

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        data.points.forEach(function(points, matchIndex) {
            const x = padding.left + (matchIndex / maxMatches) * chartWidth;
            const y = padding.top + chartHeight - (points / maxPoints) * chartHeight;
            if (matchIndex === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();

        // Dots
        data.points.forEach(function(points, matchIndex) {
            const x = padding.left + (matchIndex / maxMatches) * chartWidth;
            const y = padding.top + chartHeight - (points / maxPoints) * chartHeight;
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = '#ffffff';
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    // Team icons at end of curves
    const iconSize = 22;
    const iconOffset = 8;

    const teamsForIcons = [];
    for (const teamKey in teamsData) {
        const data = teamsData[teamKey];
        const team = DATA.teams[teamKey];
        const lastMatchIndex = data.points.length - 1;
        const finalPoints = data.points[lastMatchIndex];
        teamsForIcons.push({
            key: teamKey,
            short: team ? team.short : teamKey.substring(0, 3).toUpperCase(),
            color: team ? team.color : '#999999',
            finalPoints: finalPoints,
            lastMatchIndex: lastMatchIndex,
            rank: data.rank,
            x: padding.left + (lastMatchIndex / maxMatches) * chartWidth + iconOffset,
            y: padding.top + chartHeight - (finalPoints / maxPoints) * chartHeight
        });
    }

    // Resolve overlapping icons
    teamsForIcons.sort(function(a, b) { return a.y - b.y || a.rank - b.rank; });
    for (let i = 1; i < teamsForIcons.length; i++) {
        const prev = teamsForIcons[i - 1];
        const curr = teamsForIcons[i];
        const minGap = iconSize + 2;
        if (Math.abs(curr.y - prev.y) < minGap) {
            const midY = (prev.y + curr.y) / 2;
            prev.y = midY - minGap / 2;
            curr.y = midY + minGap / 2;
        }
    }

    teamsForIcons.forEach(function(team) {
        const x = team.x;
        const y = team.y;

        // Rounded square
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

        // Team initials
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 9px -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(team.short, x + iconSize / 2, y + 1);
    });
}

window.addEventListener('resize', drawEvolutionChart);
