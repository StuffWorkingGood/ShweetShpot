/* Sweet Spot — demo tool suite (sample data)
   When you're ready for live data, replace these arrays with fetch() calls to your odds API/backend. */

// ---------- auth (demo) ----------
var user = null;
try { user = localStorage.getItem('ss_user'); } catch (e) {}
if (!user) { window.location.href = 'login.html'; }
document.getElementById('userEmail').textContent = user ? user.split('@')[0] : 'degen';
document.getElementById('logoutBtn').addEventListener('click', function (e) {
  e.preventDefault();
  try { localStorage.removeItem('ss_user'); } catch (err) {}
  window.location.href = 'index.html';
});

// ---------- sample data ----------
var VF_DATA = [
  { player: 'Luis Robert Jr.', sport: 'MLB', market: 'Home Runs O0.5', line: 0.5, book: 'DraftKings', odds: '+320', fv: '+265', ev: 6.8, units: 0.5 },
  { player: 'Aaron Judge', sport: 'MLB', market: 'Total Bases O1.5', line: 1.5, book: 'FanDuel', odds: '-105', fv: '-125', ev: 4.2, units: 1.0 },
  { player: 'Elly De La Cruz', sport: 'MLB', market: 'Stolen Bases O0.5', line: 0.5, book: 'BetMGM', odds: '+145', fv: '+118', ev: 5.5, units: 0.5 },
  { player: 'A\'ja Wilson', sport: 'WNBA', market: 'Points O24.5', line: 24.5, book: 'DraftKings', odds: '-110', fv: '-132', ev: 4.9, units: 1.0 },
  { player: 'Caitlin Clark', sport: 'WNBA', market: 'Assists O8.5', line: 8.5, book: 'Caesars', odds: '+100', fv: '-115', ev: 3.6, units: 0.5 },
  { player: 'Breanna Stewart', sport: 'WNBA', market: 'Reb + Ast O11.5', line: 11.5, book: 'FanDuel', odds: '-108', fv: '-124', ev: 3.4, units: 0.5 },
  { player: 'Shohei Ohtani', sport: 'MLB', market: 'Home Runs O0.5', line: 0.5, book: 'Caesars', odds: '+290', fv: '+240', ev: 6.1, units: 0.5 },
  { player: 'Bobby Witt Jr.', sport: 'MLB', market: 'Hits O1.5', line: 1.5, book: 'BetMGM', odds: '+185', fv: '+155', ev: 4.4, units: 0.5 },
  { player: 'Napheesa Collier', sport: 'WNBA', market: 'Points O21.5', line: 21.5, book: 'DraftKings', odds: '-115', fv: '-138', ev: 4.6, units: 1.0 },
  { player: 'Vladimir Guerrero Jr.', sport: 'MLB', market: 'Total Bases O2.5', line: 2.5, book: 'FanDuel', odds: '+210', fv: '+180', ev: 3.9, units: 0.5 }
];

var HR_DATA = [
  { player: 'Luis Robert Jr.', team: 'CWS', vs: 'vs DET — G. Skubal', tier: '🔥 TOP PICK', barrel: '14.2%', park: '1.12', pitcher: 'C', odds: '+320', book: 'DK', steam: true },
  { player: 'Shohei Ohtani', team: 'LAD', vs: 'vs COL — K. Freeland', tier: '🔥 TOP PICK', barrel: '18.6%', park: '1.35', pitcher: 'D', odds: '+195', book: 'CZR', steam: true },
  { player: 'Aaron Judge', team: 'NYY', vs: 'vs BOS — B. Bello', tier: '🤖 MODEL EDGE', barrel: '22.1%', park: '1.18', pitcher: 'B', odds: '+230', book: 'FD', steam: false },
  { player: 'Kyle Schwarber', team: 'PHI', vs: 'vs MIA — E. Cabrera', tier: '📊 MARKET EDGE', barrel: '16.8%', park: '1.08', pitcher: 'C', odds: '+275', book: 'MGM', steam: false },
  { player: 'Gunnar Henderson', team: 'BAL', vs: 'vs TB — Z. Littell', tier: '🤖 MODEL EDGE', barrel: '13.9%', park: '1.04', pitcher: 'B', odds: '+340', book: 'DK', steam: false },
  { player: 'Pete Alonso', team: 'NYM', vs: 'vs ATL — S. Strider', tier: '📊 MARKET EDGE', barrel: '15.4%', park: '0.98', pitcher: 'A', odds: '+390', book: 'FD', steam: true }
];

var BB_DATA = [
  { player: 'A\'ja Wilson', team: 'LVA', market: 'Points', line: 24.5, proj: 27.1, l10: '8/10', dvp: 'A', odds: '-110 (DK)', ev: 4.9 },
  { player: 'Caitlin Clark', team: 'IND', market: 'Assists', line: 8.5, proj: 9.6, l10: '7/10', dvp: 'B+', odds: '+100 (CZR)', ev: 3.6 },
  { player: 'Breanna Stewart', team: 'NYL', market: 'Reb + Ast', line: 11.5, proj: 12.8, l10: '7/10', dvp: 'A-', odds: '-108 (FD)', ev: 3.4 },
  { player: 'Napheesa Collier', team: 'MIN', market: 'Points', line: 21.5, proj: 23.9, l10: '9/10', dvp: 'A', odds: '-115 (DK)', ev: 4.6 },
  { player: 'Arike Ogunbowale', team: 'DAL', market: '3PT Made', line: 2.5, proj: 3.1, l10: '6/10', dvp: 'B', odds: '+120 (MGM)', ev: 2.8 },
  { player: 'Angel Reese', team: 'CHI', market: 'Rebounds', line: 11.5, proj: 12.9, l10: '8/10', dvp: 'A-', odds: '-105 (FD)', ev: 3.9 }
];

// ---------- tabs ----------
var tabs = document.querySelectorAll('.tab');
tabs.forEach(function (t) {
  t.addEventListener('click', function () {
    tabs.forEach(function (x) { x.classList.remove('active'); });
    t.classList.add('active');
    ['vf', 'hr', 'bb'].forEach(function (id) {
      document.getElementById('tab-' + id).style.display = (t.dataset.tab === id) ? '' : 'none';
    });
  });
});

// ---------- value finder ----------
function renderVF() {
  var sport = document.getElementById('vfSport').value;
  var book = document.getElementById('vfBook').value;
  var minEv = parseFloat(document.getElementById('vfMinEv').value) || 0;
  var tbody = document.querySelector('#vfTable tbody');
  tbody.innerHTML = '';
  VF_DATA.filter(function (r) {
    return (sport === 'all' || r.sport === sport) &&
           (book === 'all' || r.book === book) &&
           r.ev >= minEv;
  }).sort(function (a, b) { return b.ev - a.ev; })
    .forEach(function (r) {
      var tr = document.createElement('tr');
      tr.innerHTML = '<td><strong>' + r.player + '</strong></td><td>' + r.sport + '</td><td>' + r.market +
        '</td><td>' + r.line + '</td><td>' + r.book + '</td><td>' + r.odds + '</td><td>' + r.fv +
        '</td><td class="ev-pos">+' + r.ev.toFixed(1) + '%</td><td>' + r.units + 'u</td>';
      tbody.appendChild(tr);
    });
}
['vfSport', 'vfBook', 'vfMinEv'].forEach(function (id) {
  document.getElementById(id).addEventListener('input', renderVF);
});
renderVF();

// ---------- HR feed ----------
function renderHR() {
  var tier = document.getElementById('hrTier').value;
  var grid = document.getElementById('hrGrid');
  grid.innerHTML = '';
  HR_DATA.filter(function (c) { return tier === 'all' || c.tier === tier; })
    .forEach(function (c) {
      var div = document.createElement('div');
      div.className = 'hr-card';
      div.innerHTML =
        '<div class="top"><span class="player">' + c.player + ' <span style="color:var(--muted);font-weight:600;font-size:0.8rem;">' + c.team + '</span></span>' +
        '<span class="badge badge-pink">' + c.tier + '</span></div>' +
        '<div class="meta">' + c.vs + (c.steam ? ' &nbsp;<span class="badge badge-green">🚂 STEAM</span>' : '') + '</div>' +
        '<div class="stats">' +
        '<div class="stat"><div class="v">' + c.barrel + '</div><div class="k">Barrel %</div></div>' +
        '<div class="stat"><div class="v">' + c.park + '</div><div class="k">Park HR</div></div>' +
        '<div class="stat"><div class="v">' + c.pitcher + '</div><div class="k">SP Tier</div></div>' +
        '</div>' +
        '<div class="odds-row"><span class="odds">' + c.odds + '</span><span style="color:var(--muted);font-size:0.82rem;">' + c.book + '</span></div>';
      grid.appendChild(div);
    });
}
document.getElementById('hrTier').addEventListener('input', renderHR);
renderHR();

// ---------- bucket board ----------
(function renderBB() {
  var tbody = document.querySelector('#bbTable tbody');
  BB_DATA.forEach(function (r) {
    var tr = document.createElement('tr');
    tr.innerHTML = '<td><strong>' + r.player + '</strong></td><td>' + r.team + '</td><td>' + r.market +
      '</td><td>' + r.line + '</td><td style="color:var(--yellow);font-weight:700;">' + r.proj +
      '</td><td>' + r.l10 + '</td><td>' + r.dvp + '</td><td>' + r.odds +
      '</td><td class="ev-pos">+' + r.ev.toFixed(1) + '%</td>';
    tbody.appendChild(tr);
  });
})();
