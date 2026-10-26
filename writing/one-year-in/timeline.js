// One Year In timeline. Data frozen at publication, 2026-10-26.
const START = new Date("2025-10-01"), END = new Date("2026-11-28"), TODAY = new Date("2026-10-26");
const SITE = "https://alanhalley.com";
const LANES = [
  { name: "How I work", color: "#e040fb" },
  { name: "Software built", color: "#2f80ff" },
  { name: "Studies & maps", color: "#22c55e" },
  { name: "Essays", color: "#ffd400", ticks: true },
  { name: "LinkedIn posts", color: "#ff8c00", ticks: true },
  { name: "Physics papers", color: "#ff3b3b" },
];
// lane, name, dev start, dev end, operating (true = still in service), approx, what it is, link (null = internal / no product)
const ITEMS = [
  ["How I work", "second-brain research", "2025-11-01", "2025-11-30", false, true,
   "Notion, Obsidian, YouTube videos. No product; the story is the essay Easing In.", SITE + "/writing/easing-in/"],
  ["How I work", "Claude reorganizes a folder", "2025-11-10", "2025-11-30", false, true,
   "The first test: Claude reorganizes my Downloads folder, maybe November 2025.", null],
  ["How I work", "bots: newsbot, OpenClaw", "2026-02-02", "2026-02-08", false, false,
   "A news bot and an OpenClaw assistant. No product; led to the second brain.", null],
  ["How I work", "Open Brain", "2026-03-23", "2026-03-29", false, false,
   "Nate B. Jones's Open Brain, tried alongside the wiki. Internal.", null],
  ["How I work", "second brain repo", "2026-02-16", "2026-05-20", true, false,
   "One private git repo for everything that isn't a website: notes, wiki, memory, stories, papers, scripts. Still in use. Internal.", null],
  ["How I work", "issue tracker", "2026-03-30", "2026-06-30", false, false,
   "issues.alanhalley.com, a simple tracker I built and no longer use; Claude uses the Kanban in Nimbalyst. Internal.", null],
  ["How I work", "memory, wiki, Nimbalyst", "2026-05-20", "2026-10-23", false, false,
   "Claude keeps the memory and the wiki, so I don't manage files. Internal.", SITE + "/writing/how-i-write/"],
  ["How I work", "inbox triage", "2026-09-10", "2026-09-20", true, false,
   "Daily email triage and newsletter digest on GitHub Actions. Internal.", null],
  ["Software built", "tourist app on Emergent", "2025-11-19", "2025-12-31", false, false,
   "First app, built on Emergent. Archived; superseded by ilhe.us.", null],
  ["Software built", "Emergent prototypes", "2025-12-11", "2026-02-05", false, false,
   "Outliner, mind map, data-flow diagram, to-do list, and the first Decisions, on Emergent. No product.", null],
  ["Software built", "ilhe.us", "2026-02-22", "2026-09-18", true, false,
   "Map of Ilhéus: beaches, restaurants, places, with Plus Codes.", "https://ilhe.us"],
  ["Software built", "Decisions", "2026-03-05", "2026-03-28", true, false,
   "A decision app that recalculates live as you change the weights.", "https://decisions.alanhalley.com"],
  ["Software built", "restaurant menus", "2026-03-25", "2026-09-18", true, false,
   "36 restaurant menus in Portuguese and English, with QR codes.", "https://ilhe.us/menus"],
  ["Software built", "Lean Canvas extension", "2026-05-14", "2026-05-21", false, false,
   "A Lean Canvas editor extension for Nimbalyst. Internal; waiting on Nimbalyst.", null],
  ["Software built", "Chart of the Nuclides", "2026-05-19", "2026-05-19", true, false,
   "Interactive chart, 40 years after my HyperCard version. Built and deployed in a day (Vercel: 3 deploys, May 19).", "https://nuclides.alanhalley.com"],
  ["Software built", "briefwork.io", "2026-05-13", "2026-08-18", true, false,
   "A freelance marketplace with Stripe payments.", "https://briefwork.io"],
  ["Software built", "beachburbs", "2026-06-02", "2026-08-29", true, false,
   "About 30 apartment buildings scored on airport-to-sand time.", "https://beachburbs.com"],
  ["Software built", "darthvader.mba", "2026-06-23", "2026-10-10", true, false,
   "A voting site: one Cloudflare Worker, D1, live Stripe checkout.", "https://darthvader.mba"],
  ["Software built", "TrikeScore", "2026-08-05", "2026-08-05", true, false,
   "Range and wind for my electric trike. Built and deployed in a day (Cloudflare: 3 deploys, Aug 5).", "https://trikescore.com"],
  ["Studies & maps", "family tree", "2026-06-01", "2026-06-06", false, false,
   "Family history research with AI; four essays.", SITE + "/writing/family-tree-ai/"],
  ["Studies & maps", "Sapetinga lot", "2026-08-27", "2026-09-08", false, false,
   "Pre-feasibility for a waterfront restaurant, with a render built from a to-scale plan. Site photos Aug 27; page published Sep 8.", SITE + "/projects/sapetinga-restaurant/"],
  ["Studies & maps", "The High Road map", "2026-10-03", "2026-10-09", false, false,
   "Interactive map and flyovers of the family route to Narrows Township.", SITE + "/writing/the-high-road/"],
  ["Physics papers", "STARFIRE rerun", "2026-05-23", "2026-09-18", false, false,
   "My 1986 fusion-shield gap study, rerun in OpenMC. Paper on Zenodo.", "https://doi.org/10.5281/zenodo.22810354"],
  ["Physics papers", "AI benchmark", "2026-07-27", "2026-09-30", false, false,
   "135 AI-written OpenMC inputs from nine models, graded on the physics. Plan Jul 27; published on Zenodo Sep 30.", "https://doi.org/10.5281/zenodo.23067522"],
  ["Physics papers", "slit-gap", "2026-09-30", "2026-10-04", false, false,
   "32 gap shapes and a rule of thumb for streaming. Paper on Zenodo. Idea Sep 30; published on Zenodo Oct 4.", "https://doi.org/10.5281/zenodo.23128116"],
];
const ESSAYS = [
  ["2026-04-04","My Florida Vacation","my-florida-vacation"],["2026-04-04","One-Person Operating System","one-person-operating-system"],
  ["2026-04-15","Easing In","easing-in"],["2026-05-16","Doc","doc"],["2026-05-16","Não Sei Nada","nao-sei-nada"],
  ["2026-05-16","The Go-Between","the-go-between"],["2026-05-29","Real Money, Real People","real-money-real-people"],
  ["2026-05-30","A Veritable Island","a-veritable-island"],["2026-05-30","The Go-Between, Revisited","the-go-between-revisited"],
  ["2026-06-02","Airport to Beach","airport-to-beach"],["2026-06-03","Family Tree Research With AI","family-tree-ai"],
  ["2026-06-04","Henry and Polly","henry-and-polly"],["2026-06-05","Full Moon","full-moon"],
  ["2026-06-06","Less Than Two Dollars","less-than-two-dollars"],["2026-08-22","Convincing Is Not Correct","convincing-is-not-correct"],
  ["2026-09-06","One File, One Vendor","one-file-one-vendor"],["2026-09-06","Working From Home Since 1975","working-from-home-since-1975"],
  ["2026-09-11","Done Is a Claim","done-is-a-claim"],["2026-09-23","The Last 80%","the-last-80-percent"],
  ["2026-09-30","The Ranking Depends on the Ruler","the-ranking-depends-on-the-ruler"],["2026-10-02","Three Days","three-days"],
  ["2026-10-03","The High Road","the-high-road"],["2026-10-03","What a Bend Buys","what-a-bend-buys"],
  ["2026-10-05","France, 1982 (five parts)","france-1982-getting-there"],
  ["2026-10-11","From One Garage to Another","from-one-garage-to-another"],["2026-10-17","How I Write","how-i-write"],
];
const POSTS = [
  ["2026-06-02","beachburbs.com launch"],["2026-06-03","Family tree research with AI"],["2026-07-25","briefwork.io status"],
  ["2026-08-05","TrikeScore"],["2026-08-22","Convincing Is Not Correct"],["2026-09-10","One File, One Vendor"],
  ["2026-09-17","Sapetinga concept"],["2026-09-22","Four-apps demo video"],["2026-09-24","ilhe.us build story"],
  ["2026-09-26","The Last 80%"],["2026-09-28","beachburbs"],["2026-09-30","AI benchmark paper"],
  ["2026-10-05","Three Days"],["2026-10-07","The High Road"],["2026-10-08","darthvader.mba, the build"],
  ["2026-10-13","slit-gap paper"],["2026-10-15","Gemini 4 benchmark follow-up"],["2026-10-20","How I Write"],
  ["2026-10-22","From One Garage to Another"],["2026-10-26","Gap shapes"],
];

const W = 1400, LEFT = 170, RIGHT = 20, ROW = 30, BAR = 20, GAP = 16, TOP = 34;
const x = d => LEFT + (new Date(d) - START) / (END - START) * (W - LEFT - RIGHT);
const NS = "http://www.w3.org/2000/svg";
const el = (n, a, p) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); p && p.appendChild(e); return e; };
const svg = document.getElementById("chart");
const fmt = d => new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
const tip = document.getElementById("tip");
function show(ev, html) { tip.innerHTML = html; tip.style.display = "block"; move(ev); }
function move(ev) { const w = tip.offsetWidth; tip.style.left = Math.min(ev.clientX + 14, innerWidth - w - 10) + "px"; tip.style.top = (ev.clientY + 14) + "px"; }
function hide() { tip.style.display = "none"; }
const CH = 7.2; // px per character, label width estimate
const LABEL_LEFT = new Set(["The High Road map"]); // captions drawn left of the bar

// Pack bars into sub-rows so bars and their right-hand labels never overlap.
function pack(items) {
  const rows = [];
  return items.sort((a, b) => new Date(a[2]) - new Date(b[2])).map(it => {
    const s0 = x(it[2]), devEnd = x(it[3]), end = it[4] ? x(TODAY) : devEnd;
    const fits = end - s0 > it[1].length * CH + 16, left = LABEL_LEFT.has(it[1]) && !fits;
    const s = left ? s0 - it[1].length * CH - 12 : s0;
    const reach = (fits || left) ? end : end + it[1].length * CH + 12;
    let r = rows.findIndex(last => s > last + 6);
    if (r < 0) { rows.push(reach); r = rows.length - 1; } else rows[r] = reach;
    return [r, it];
  });
}

// Category name on the lane's first row, like an outline heading, with a coloured bar down the
// left edge spanning all of the lane's rows.
function laneLabel(lane, text, top, nrows) {
  el("rect", { x: 8, y: top, width: 5, height: nrows * ROW - (ROW - BAR), rx: 2, fill: lane.color }, svg);
  const t = el("text", { x: 22, y: top + BAR / 2 + 5, fill: lane.color, "font-size": 15, "font-weight": 600 }, svg);
  t.textContent = text;
}

let y = TOP;
const grid = el("g", {}, svg);
const body = el("g", {}, svg);
for (const lane of LANES) {
  if (lane.ticks) {
    const list = lane.name === "Essays" ? ESSAYS : POSTS;
    const yy = y;
    for (const t of list) {
      const g = el("g", { class: "tick" }, body);
      el("line", { x1: x(t[0]), x2: x(t[0]), y1: yy + 3, y2: yy + BAR + 3, stroke: lane.color, "stroke-width": 3, "stroke-linecap": "round" }, g);
      el("rect", { x: x(t[0]) - 5, y: yy, width: 10, height: BAR + 6, fill: "transparent" }, g);
      g.addEventListener("mouseenter", ev => show(ev, `<b>${t[1]}</b><span class="d">${fmt(t[0])}</span>` + (t[2] ? `<div class="k">Click to read</div>` : "")));
      g.addEventListener("mousemove", move); g.addEventListener("mouseleave", hide);
      if (t[2]) g.addEventListener("click", () => open(`${SITE}/writing/${t[2]}/`, "_blank"));
    }
    laneLabel(lane, `${lane.name} (${list.length})`, yy + 3, 1);
    y += ROW + GAP;
    continue;
  }
  const placed = pack(ITEMS.filter(i => i[0] === lane.name));
  const nrows = Math.max(1, ...placed.map(p => p[0] + 1));
  for (const [r, it] of placed) {
    const [, name, s, e, op, approx, what, link] = it;
    const yy = y + r * ROW, xs = x(s), xe = Math.max(x(e), xs + 6);
    const g = el("g", { class: "bar" }, body);
    if (op) el("rect", { class: "op", x: xe, y: yy, width: Math.max(x(TODAY) - xe, 0), height: BAR, rx: 4, fill: lane.color, "fill-opacity": .28 }, g);
    el("rect", { class: "dev", x: xs, y: yy, width: xe - xs, height: BAR, rx: 4,
      fill: lane.color, "fill-opacity": approx ? .45 : 1,
      stroke: approx ? lane.color : "none", "stroke-width": approx ? 1.6 : 0, "stroke-dasharray": approx ? "5 3" : "" }, g);
    const total = (op ? x(TODAY) : xe) - xs;
    const inside = total > name.length * CH + 16;
    const leftLbl = !inside && LABEL_LEFT.has(name);
    const t = el("text", { x: inside ? xs + 8 : leftLbl ? xs - 8 : (op ? x(TODAY) : xe) + 8, y: yy + BAR / 2 + 5, "font-size": 13.5,
      "text-anchor": leftLbl ? "end" : "start",
      fill: "#ffffff", "font-weight": inside ? 600 : 400 }, g);
    t.textContent = name;
    const status = op ? `Built ${fmt(s)} – ${fmt(e)}; in service since` : `${fmt(s)} – ${fmt(e)}`;
    g.addEventListener("mouseenter", ev => show(ev, `<b>${name}</b><span class="d">${status}${approx ? " (dates from memory)" : ""}</span><div>${what}</div><div class="k">${link ? "Click to open" : "Internal / no public page"}</div>`));
    g.addEventListener("mousemove", move); g.addEventListener("mouseleave", hide);
    if (link) g.addEventListener("click", () => open(link, "_blank"));
  }
  laneLabel(lane, lane.name, y, nrows);
  y += nrows * ROW + GAP;
}
// month grid + labels
const H = y + 26;
for (let d = new Date(START); d <= END; d.setUTCMonth(d.getUTCMonth() + 1)) {
  const xx = x(d);
  el("line", { x1: xx, x2: xx, y1: TOP - 10, y2: y, stroke: "#22252f" }, grid);
  const t = el("text", { x: xx, y: y + 18, "text-anchor": "middle", fill: "#8b90a0", "font-size": 12 }, svg);
  t.textContent = d.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }) + (d.getUTCMonth() === 0 || +d === +START ? " " + d.getUTCFullYear() : "");
}
el("line", { x1: x(TODAY), x2: x(TODAY), y1: TOP - 14, y2: y, stroke: "#e8eaf0", "stroke-opacity": .5, "stroke-dasharray": "2 3" }, grid);
const tt = el("text", { x: x(TODAY), y: TOP - 18, "text-anchor": "middle", fill: "#8b90a0", "font-size": 11 }, svg);
tt.textContent = "today";
svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
