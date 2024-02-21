// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
let map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: -26.919491117033743, lng: -48.652551918642736 },
    mapTypeId: "satellite",
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });
  document
    .getElementById("toggle-heatmap")
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("change-gradient")
    .addEventListener("click", changeGradient);
  document
    .getElementById("change-opacity")
    .addEventListener("click", changeOpacity);
  document
    .getElementById("change-radius")
    .addEventListener("click", changeRadius);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];

  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius() {
  heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

function changeOpacity() {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
  return [
    new google.maps.LatLng(-26.919491117033743, -48.652551918642736),
    new google.maps.LatLng(-26.942971924575946, -48.632311305879604),
    new google.maps.LatLng(-26.90716440116574, -48.689195259119224),
    new google.maps.LatLng(-26.903349058700336, -48.69872768980715),
    new google.maps.LatLng(-26.89736761326849, -48.69242696097144),
    new google.maps.LatLng(-26.910623834629902, -48.67556230144683),
    new google.maps.LatLng(-26.92183208688741, -48.675429405150574),
    new google.maps.LatLng(-26.92546282131938, -48.64984847446233),
    new google.maps.LatLng(-26.891998610012354, -48.681942945627625),
    new google.maps.LatLng(-26.944918746695105, -48.73881193164944),
    new google.maps.LatLng(-26.921907753081154, -48.669353660970685),
    new google.maps.LatLng(-26.913774541365044, -48.66964653213491),
    new google.maps.LatLng(-26.991407938645263, -48.771560924968924),
    new google.maps.LatLng(-26.910974669316577, -48.65565767446282),
    new google.maps.LatLng(-26.912905506955624, -48.66981581864289),
    new google.maps.LatLng(-26.909185934756515, -48.655187216790786),
    new google.maps.LatLng(-26.919352450517085, -48.646253918642564),
    new google.maps.LatLng(-26.919170381760953, -48.672931245626465),
    new google.maps.LatLng(-26.911676337508318, -48.683461089806805),
    new google.maps.LatLng(-26.919170381760953, -48.672931245626465),
    new google.maps.LatLng(-26.924510756831577, -48.68025996097043),
    new google.maps.LatLng(-27.04570016525851, -48.844394532855475),
    new google.maps.LatLng(-26.921571849255386, -48.651698330282585),
    new google.maps.LatLng(-26.90410596538987, -48.66515970329929),
    new google.maps.LatLng(-26.91785127936086, -48.65280957446258),
    new google.maps.LatLng(-26.95894493235066, -48.62959634562529),
    new google.maps.LatLng(-26.90952673386605, -48.68522283213501),
    new google.maps.LatLng(-26.926244093618468, -48.681590818642306),
    new google.maps.LatLng(-26.89580856919715, -48.6827001879554),
    new google.maps.LatLng(-26.958797095113702, -48.63091073213332),
    new google.maps.LatLng(-26.919362016825897, -48.64618954562654),
    new google.maps.LatLng(-26.900573733371022, -48.695381245627246),
    new google.maps.LatLng(-26.901562862805697, -48.68127350329918),
    new google.maps.LatLng(-26.88878182320238, -48.680414232135746),
    new google.maps.LatLng(-26.897225162926105, -48.68177653213544),
    new google.maps.LatLng(-26.914402308984698, -48.65433428795475),
    new google.maps.LatLng(-26.92295112260536, -48.68034924562642),
    new google.maps.LatLng(-26.96979779810596, -48.632035214936806),
    new google.maps.LatLng(-26.88747786551566, -48.69653064747967),
    new google.maps.LatLng(-26.911650639251942, -48.66214403221812),
    new google.maps.LatLng(-26.926244093618468, -48.681590818642306),
    new google.maps.LatLng(-26.944805514456142, -48.71119491872382),
    new google.maps.LatLng(-26.924017288019616, -48.680748676395375),
    new google.maps.LatLng(-26.92249952197555, -48.651015716875726),
    new google.maps.LatLng(-26.899324316679945, -48.6784766880408),
    new google.maps.LatLng(-26.928097362097205, -48.684852359204235),
    new google.maps.LatLng(-26.906284561070144, -48.66939183221838),
    new google.maps.LatLng(-26.910961403399003, -48.675056418725134),
    new google.maps.LatLng(-26.904403998224137, -48.66466793221836),
    new google.maps.LatLng(-26.905841499806748, -48.694131230369564),
    new google.maps.LatLng(-26.904403998224137, -48.66466793221836),
    new google.maps.LatLng(-26.923073788879076, -48.680346816875414),
    new google.maps.LatLng(-26.911308786268687, -48.70349084655064),
    new google.maps.LatLng(-26.90952673386605, -48.68522283213501),
    new google.maps.LatLng(-26.908979703261988, -48.6723448763962),
    new google.maps.LatLng(-26.923727987651688, -48.64846364756015),
    new google.maps.LatLng(-26.897500445446344, -48.704023288040965),
    new google.maps.LatLng(-26.953478488893875, -48.641876589887765),
    new google.maps.LatLng(-26.914049208369647, -48.65866517454682),
    new google.maps.LatLng(-26.898751919830488, -48.675165147560925),
    new google.maps.LatLng(-26.919423583310724, -48.68051411872465),
    new google.maps.LatLng(-26.906119863022106, -48.656672418725144),
    new google.maps.LatLng(-26.864399999457973, -48.74523584386402),
    new google.maps.LatLng(-26.89958341711884, -48.69608817454749),
    new google.maps.LatLng(-26.917040912139473, -48.65421887454685),
    new google.maps.LatLng(-26.905366761873772, -48.66129801687597),
    new google.maps.LatLng(-26.904403998224137, -48.66466793221836),
    new google.maps.LatLng(-26.929555535837498, -48.63365895193152),
    new google.maps.LatLng(-26.914124941967223, -48.65802330153357),
    new google.maps.LatLng(-26.896237079703464, -48.683121647561016),
    new google.maps.LatLng(-26.91310170591689, -48.6538339592048),
    new google.maps.LatLng(-26.904403998224137, -48.66466793221836),
    new google.maps.LatLng(-26.899972393345507, -48.67549736105427),
    new google.maps.LatLng(-26.913515973935777, -48.655699418724915),
    new google.maps.LatLng(-26.93104816634969, -48.63394260338192),
    new google.maps.LatLng(-26.928398693589823, -48.63568980338221),
    new google.maps.LatLng(-26.91813414854972, -48.70417678988902),
    new google.maps.LatLng(-26.896710453321862, -48.68003208988978),
    new google.maps.LatLng(-26.92481772822117, -48.68153794386225),
    new google.maps.LatLng(-26.92173085292379, -48.65113560338229),
    new google.maps.LatLng(-26.929785302892665, -48.63287434755987),
    new google.maps.LatLng(-26.919170381760953, -48.672931245626465),
    new google.maps.LatLng(-26.900311986259883, -48.68340465920542),
    new google.maps.LatLng(-26.905713306091926, -48.65674734701007),
    new google.maps.LatLng(-26.92174235466557, -48.68071920338218),
    new google.maps.LatLng(-26.912117139075264, -48.67396938804019),
    new google.maps.LatLng(-26.880116071495927, -48.75115266105475),
    new google.maps.LatLng(-26.91163523838128, -48.65651677639598),
    new google.maps.LatLng(-26.90880123587296, -48.66629673221817),
    new google.maps.LatLng(-26.911662904528292, -48.6575607629028),
    new google.maps.LatLng(-26.90480705844186, -48.69047101687616),
    new google.maps.LatLng(-26.906556598447917, -48.666318603382756),
    new google.maps.LatLng(-26.92546282131938, -48.64984847446233),
    new google.maps.LatLng(-26.896894221755858, -48.681078832218695),
    new google.maps.LatLng(-26.926244093618468, -48.681590818642306),
    new google.maps.LatLng(-26.910921303334483, -48.66239821502695),
    new google.maps.LatLng(-26.92628025660662, -48.679904203382094),
    new google.maps.LatLng(-26.920939619463724, -48.65198284756021),
    new google.maps.LatLng(-26.912719473659916, -48.68033486105377),
    new google.maps.LatLng(-26.951738277483212, -48.62985897454568),
    new google.maps.LatLng(-26.90471656349147, -48.68060916105413),
    new google.maps.LatLng(-26.911689905405403, -48.68027564386247),
    new google.maps.LatLng(-26.920753954471234, -48.68137851687555),
    new google.maps.LatLng(-26.914402308984698, -48.65433428795475),
    new google.maps.LatLng(-26.911903673412265, -48.661225289889295),
    new google.maps.LatLng(-26.9042450601637, -48.6923265610541),
    new google.maps.LatLng(-26.898837839654874, -48.68204626105429),
    new google.maps.LatLng(-26.927236492112105, -48.649703616875435),
    new google.maps.LatLng(-26.910884971328755, -48.667870845711555),
    new google.maps.LatLng(-26.926637494316047, -48.686964974546555),
    new google.maps.LatLng(-26.91102250450073, -48.65563621687591),
    new google.maps.LatLng(-26.895484778492968, -48.70282243221884),
    new google.maps.LatLng(-26.927077954485235, -48.6376876745466)
  ];
}

window.initMap = initMap;