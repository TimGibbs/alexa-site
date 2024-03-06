let map;

async function initMap() {

    const position = { lat: 51.5344168, lng: -0.1169959};

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("googleMap"), {
        zoom: 16,
        center: position,
        mapId: "map_id",
      });

    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "150 Caledonian Rd",
      });
}