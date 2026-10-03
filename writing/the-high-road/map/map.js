const map = L.map('map', { zoomSnap: 0.25 }).setView([38.2, -86.0], 6.25);
// Esri dark gray canvas (no key). CARTO's dark tiles began requiring an API key in 2026.
const esri = 'https://server.arcgisonline.com/ArcGIS/rest/services/';
const darkRef = () => L.tileLayer(esri + 'Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', { maxZoom: 16, pane: 'shadowPane' });
const BASES = {
  'Dark gray': L.layerGroup([
    L.tileLayer(esri + 'Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors', maxZoom: 16 }), darkRef()]),
  'Terrain (dark hillshade)': L.layerGroup([
    L.tileLayer(esri + 'Elevation/World_Hillshade_Dark/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Hillshade &copy; Esri, USGS', maxZoom: 16 }), darkRef()]),
  'USGS topo (light, contours)': L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'USGS The National Map', maxZoom: 16 })
};
BASES['Dark gray'].addTo(map);

const C = { hp:'#f0a830', alt:'#8fa3b8', bee:'#ff7a59', hat:'#5cc8a8' };
const P = {
  fairfax:[38.846,-77.306], gap:[36.604,-83.674], winchester:[37.990,-84.180], louisville:[38.253,-85.759],
  evansville:[37.97,-87.57], paducah:[37.083,-88.600], cairo:[37.005,-89.176], cape:[37.306,-89.518],
  stl:[38.627,-90.199], momouth:[38.815,-90.120], stcharles:[38.784,-90.481], hermann:[38.704,-91.437],
  jeffcity:[38.577,-92.173], rocheport:[38.979,-92.564], franklin:[38.995,-92.745], glasgow:[39.226,-92.847],
  fayette:[39.146,-92.683], huntsville:[39.441,-92.545], moberly:[39.420,-92.436], jacksonville:[39.588,-92.471],
  collegemound:[39.623,-92.573], excello:[39.636,-92.476], cox:[39.637,-92.383], woodville:[39.620,-92.336],
  macon:[39.745,-92.477], vincennes:[38.677,-87.528], salemil:[38.627,-88.946], danville:[38.911,-91.535],
  columbia:[38.951,-92.334], sturgeon:[39.234,-92.281], dryden:[36.774,-82.939], pennington:[36.758,-83.027],
  cincinnati:[39.103,-84.512], narrows:[39.612,-92.468], dan:[39.6073602,-92.4794674], patents:[39.6130,-92.3225], mtsalem:[39.6227,-92.4867], friendship:[39.6619,-92.4244]
};
const line = (pts, color, dash, label) => L.polyline(pts.map(k => P[k]), { color, weight:4, opacity:.9, dashArray:dash }).bindTooltip(label, { sticky:true });

const riverRoute = L.layerGroup([
  line(['fairfax','gap','winchester'], C.hp, '10 8', 'Virginia → Kentucky: Wilderness Road through Cumberland Gap (likely)'),
  line(['winchester','louisville'], C.hp, '10 8', 'Overland to the Ohio River'),
  line(['louisville','evansville','paducah','cairo'], C.hp, '10 8', 'Down the Ohio'),
  line(['cairo','cape','stl','momouth'], C.hp, '10 8', 'Up the Mississippi to the Missouri'),
  line(['momouth','stcharles','hermann','jeffcity','rocheport'], C.hp, '10 8', 'Up the Missouri to Rocheport (likeliest landing; not documented)')
]);
const overland = L.layerGroup([
  line(['louisville','vincennes','salemil','stl','stcharles','danville','columbia','sturgeon','moberly','jacksonville'], C.alt, '2 8',
       'Alternative: overland via Vincennes and St. Louis, west on the Boone\'s Lick Road, north near today\'s Highway 63')
]);
// Highest continuous path, computed 3 Oct 2026 from ~3,100 USGS 3DEP elevation samples (about 0.7 x 0.9 mi grid):
// a least-cost route that penalizes every step below the 880 ft crest. Terrain only — not a documented road.
const HP = {
  rocheport:[[39.0,-92.5625],[39.0,-92.55],[39.0,-92.5375],[39.0,-92.525],[39.0,-92.5125],[39.025,-92.5],[39.05,-92.4938],[39.075,-92.4875],[39.1,-92.475],[39.125,-92.4688],[39.15,-92.4688],[39.175,-92.4688],[39.2,-92.4562],[39.225,-92.45],[39.25,-92.45],[39.275,-92.4562],[39.3,-92.4562],[39.325,-92.4437],[39.35,-92.4437],[39.375,-92.4375],[39.4,-92.4375],[39.425,-92.4375],[39.45,-92.4313],[39.475,-92.4313],[39.5,-92.4375],[39.525,-92.4437],[39.55,-92.45],[39.575,-92.4625],[39.6,-92.4688],[39.625,-92.4625],[39.6375,-92.45],[39.6375,-92.4375],[39.6375,-92.425],[39.6375,-92.4125],[39.6375,-92.4],[39.6375,-92.3875],[39.6375,-92.3812]],
  franklin:[[39.0,-92.7438],[39.025,-92.7562],[39.05,-92.75],[39.075,-92.7438],[39.1,-92.7375],[39.125,-92.7313],[39.15,-92.7438],[39.175,-92.75],[39.2,-92.7375],[39.2,-92.725],[39.225,-92.7125],[39.25,-92.7],[39.275,-92.6937],[39.3,-92.6813],[39.3,-92.6688],[39.3,-92.6562],[39.3,-92.6437],[39.3,-92.6312],[39.3,-92.6188],[39.3,-92.6063],[39.3,-92.5938],[39.3,-92.5812],[39.3,-92.5687],[39.3,-92.5563],[39.3,-92.5438],[39.3,-92.5312],[39.3,-92.5187],[39.325,-92.5062],[39.35,-92.4938],[39.35,-92.4813],[39.35,-92.4688],[39.3625,-92.4562],[39.3875,-92.4437],[39.4125,-92.4375]],
  huntsville:[[39.4375,-92.5438],[39.4375,-92.5312],[39.4375,-92.5187],[39.425,-92.5062],[39.425,-92.4938],[39.425,-92.4813],[39.425,-92.4688],[39.4375,-92.4562],[39.4375,-92.4437],[39.4625,-92.4313]]
};
const hpLine = (pts, dash, label) => L.polyline(pts, { color:'#e8e2a0', weight:3.5, opacity:.95, dashArray:dash }).bindTooltip(label, { sticky:true });
const highPath = L.layerGroup([
  hpLine(HP.rocheport, null, 'Highest path from Rocheport: due north onto the divide, along the crest past Moberly and Jacksonville, through the Narrows, east toward Woodville. 52 mi to Cox; Henry’s land is about 3 mi further, not computed.'),
  hpLine(HP.franklin, '6 6', 'Highest path from Franklin: north past Fayette, then east along a ridge near Clifton Hill to the divide at Moberly. 61 mi to Cox.'),
  hpLine(HP.huntsville, '2 6', 'Highest path from Huntsville: east onto the divide, not north to College Mound.')
]);
const elevation = L.imageOverlay('elevation.png', [[38.99375,-92.803125],[39.66875,-92.359375]], { opacity:.75,
  attribution:'Elevation: USGS 3DEP via EPQS' });

const hattie = L.layerGroup([
  line(['dryden','pennington'], C.hat, '10 8', 'Dryden to the railroad'),
  line(['pennington','louisville','stl'], C.hat, '10 8', 'Rail hypothesis (ChatGPT, unverified): L&N west via Louisville or Cincinnati to St. Louis'),
  line(['stl','moberly'], C.hat, '10 8', 'Wabash to Moberly, Randolph County (Hester born in the county 1913)')
]);

const dot = (k, color, html, r=7) => L.circleMarker(P[k], { radius:r, color:'#111', weight:1.5, fillColor:color, fillOpacity:1 }).bindPopup(html);
const hpDots = L.layerGroup([
  dot('fairfax', C.hp, '<b>Fairfax County, Virginia</b><br>Henry Halley born ~1786.<br><i>Source: family tree, Find a Grave.</i>'),
  dot('gap', C.hp, '<b>Cumberland Gap</b> (Lee County, Virginia)<br>The Wilderness Road into Kentucky — Henry\'s likely route, early 1800s.<br>Hattie Sexton was born 30 miles east of here in 1899.', 6),
  dot('winchester', C.hp, '<b>Clark County, Kentucky</b><br>Seven children born here, including James Patton (1807) and John Patton (12 Jul 1820).<br><i>Source: family tree; cox-mo-halleys notes.</i>'),
  dot('franklin', C.hp, '<b>Franklin area, Missouri River</b><br>Earlier pick for the landing; Rocheport now likelier. Old Franklin flooded out by about 1828; New Franklin and Boonville were the landings by the 1830s. <i>Not determined.</i>'),
  dot('glasgow', C.alt, '<b>Glasgow</b><br>Not a candidate: laid out 1836, four years after the move.', 6),
  dot('rocheport', C.hp, '<b>Rocheport</b><br>Likeliest landing if by boat: north bank, ferry since 1819, platted 1832. The highest path climbs straight north from here onto the divide.', 6),
  dot('narrows', C.bee, '<b>The Narrows (Jacksonville Narrows)</b><br>The 1884 county history puts the Narrows on the Bee Trace "near the present site of Macon City"; Narrows Township holds Excello and Friendship. In the elevation data the crest is narrowest (under a mile at 830 ft) from here to just north of Excello. Ground near Excello is altered by the Bee-Veer strip mine.', 6),
  dot('huntsville', C.alt, '<b>Huntsville</b><br>Alan grew up here. West of the Grand Divide, about 100 ft below the crest; the high road bypasses it.', 6),
  dot('collegemound', C.alt, '<b>College Mound</b><br>On a separate ridge west of the Grand Divide (range 15). McGee College 1852. The highway north from the river valley west of Huntsville runs high and dry to here.', 6),
  dot('excello', C.hp, '<b>Excello</b><br>Wabash depot from the 1880s; grew with coal mining. Cox about 5 miles east. Halley Street. Strip mines west of town.', 6),
  dot('cox', C.hp, '<b>Cox, Macon County</b><br>Post office 1887–1907, named for postmaster W. S. Cox; gone now. The name didn’t exist when Henry arrived. The Halley Cemetery is usually described as at Cox, but its location is lost.<br>Henry’s land patents (1837, 1838) are about 3½ miles southeast, near Woodville — see the two outlined parcels.<br><i>Sources: Wikipedia (Cox, Missouri); Nancy Meadows, Find a Grave, 2026.</i>', 9),
  dot('mtsalem', C.hp, '<b>Mount Salem Cemetery</b><br>Five generations, 1881–2015: John Patton Halley (1890), John William, William Edgar, Mattie Stuck Halley, Raymond (1994), and Alan\'s mother Merle (2015).<br>On the crest of the Grand Divide, just north of the Narrows.<br><i>Coordinates: Alan, Google Maps.</i>', 7),
  dot('friendship', C.hp, '<b>Friendship Baptist Church</b><br>James Patton Halley (d. 1854), Louisa Ann Thompson Halley (d. 1868, "in a field behind the church"), and Zelpha Cox Halley (d. 1915).<br>The congregation organized in Sept 1867 at the Walker School House, "near the cemetery on Thomas Miller\'s farm" — so the burial ground is older than the church, which fits James\'s 1854 burial. <i>(Google AI overview of a RootsWeb history, unverified.)</i><br><i>Coordinates: Alan, Google Maps.</i>', 7),
  dot('dan', C.hp, '<b>Dan’s farm — Alan’s winter, 1995–96</b><br>100 acres, immediately west of Highway 63; north boundary on the Randolph–Macon county line. Alan walked the perimeter every day for six months; the land drops to the west. Christmas Day 1995, Earl told the wagon story here.<br><i>Coordinates: Alan, Google Maps.</i>', 6),
  L.polygon([[39.61303,-92.32737],[39.61298,-92.32269],[39.6166,-92.3226],[39.61666,-92.32728]], { color:'#f0a830', weight:2, fillOpacity:.35 })
    .bindPopup('<b>1837 patent — SW¼ of NE¼, Section 35, T56N R13W</b><br>40 acres, Henry Halley jointly with Joshua Gentry, 10 Apr 1837. BLM accession MO0390__.240.<br><i>Boundary computed from the BLM PLSS section corners; quarter-quarter lines are approximate.</i>'),
  L.polygon([[39.60942,-92.32747],[39.60936,-92.32278],[39.61298,-92.32269],[39.61303,-92.32737]], { color:'#f0a830', weight:2, fillOpacity:.35 })
    .bindPopup('<b>1838 patent — NW¼ of SE¼, Section 35, T56N R13W</b><br>40 acres, Henry Halley, 30 Aug 1838. BLM accession MO2240__.156.<br><i>Boundary computed from the BLM PLSS section corners; quarter-quarter lines are approximate.</i>'),
  dot('woodville', C.hp, '<b>Woodville</b><br>"Drive east from Excello a few miles and the Y\'s." Earl’s directions to where the axle broke. Alan drove here after Christmas 1995. Henry’s land is about 0.8 mile southeast.', 5)
]);
const hatDots = L.layerGroup([
  dot('dryden', C.hat, '<b>Dryden, Lee County, Virginia</b><br>Hattie B. Sexton born 11 Nov 1899 (Find a Grave). Sister Carrie born in Virginia 1904.'),
  dot('moberly', C.hat, '<b>Moberly, Randolph County</b><br>Sister Hester born in Randolph County 1913 (town not known). Father a coal miner. Moberly is where the rail hypothesis ends.', 6),
  dot('macon', C.hat, '<b>Macon</b><br>Hattie married William Lloyd Halley 1916 (about 16). Died 15 Dec 1979; Oakwood Cemetery.<br>William Lloyd retired to Macon, house on Highway 63. The street is commercial now; the house may be gone.')
]);

[riverRoute, elevation, highPath, hpDots, hatDots, hattie].forEach(l => l.addTo(map));
L.control.layers(BASES, {
  'Henry & Polly — river route (likely)': riverRoute,
  'Henry & Polly — overland (alternative)': overland,
  'Landing to Henry’s land — high road (USGS elevation)': highPath,
  'Elevation, 750/800/850 ft contours': elevation,
  'Henry & Polly — places': hpDots,
  'Sextons — route (hypothesis)': hattie,
  'Sextons — places': hatDots
}, { collapsed:false }).addTo(map);

// Name labels for the close-in places, shown only when zoomed in far enough to read them.
const LABELS = { cox:'Cox', excello:'Excello', mtsalem:'Mount Salem', friendship:'Friendship Baptist', collegemound:'College Mound',
                 woodville:'Woodville', narrows:'The Narrows', patents:'Henry’s land (1837–38)', dan:'Dan’s farm (1995–96)', rocheport:'Rocheport', franklin:'Franklin', fayette:'Fayette', macon:'Macon (Oakwood)', huntsville:'Huntsville', moberly:'Moberly', jacksonville:'Jacksonville' };
const labels = L.layerGroup(Object.entries(LABELS).map(([k, t]) =>
  L.marker(P[k], { icon: L.divIcon({ className:'', html:`<span style="color:#e6e8ee;font-size:12.5px;white-space:nowrap;text-shadow:0 0 3px #000,0 0 3px #000;margin-left:10px">${t}</span>`, iconSize:[0,0], iconAnchor:[-2,8] }), interactive:false })));
const toggleLabels = () => map.getZoom() >= 9 ? labels.addTo(map) : labels.remove();
map.on('zoomend', toggleLabels);

const VIEWS = {
  all:   [[36.4, -93.2], [39.9, -77.0]],
  mo:    [[38.55, -93.0], [39.85, -90.0]],
  ridge: [[38.97, -92.82], [39.68, -92.34]],
  macon: [[39.38, -92.65], [39.80, -92.28]]
};
document.querySelectorAll('#views button').forEach(b =>
  b.addEventListener('click', () => map.flyToBounds(VIEWS[b.dataset.v], { padding:[30, 30], duration:1.2 })));
map.fitBounds(VIEWS[location.hash.slice(1)] || VIEWS.all, { padding:[30, 30] });   // index.html#macon opens zoomed in
toggleLabels();
