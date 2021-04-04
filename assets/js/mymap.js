let mapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
});

let mymap = L.map("mapid", {
    layers: [mapTileLayers],
    center: [51.27, 0.25], // centred on Tunbridge Wells
    zoom: 7
});

/* Add markers for bandstands */

let markers = [];

markers.push(L.marker([51.37268, 1.12408]).addTo(mymap)); // bandstand 1 : Herne Bay, Kent
markers.push(L.marker([51.22712, 1.40462]).addTo(mymap)); // bandstand 2 : Deal, Kent
markers.push(L.marker([51.35633, 1.44255]).addTo(mymap)); // bandstand 3 : Victoria Gardens, Broadstairs, Kent

let popupClick = L.popup();
function onMapClick(e) {
    popupClick
        .setLatLng(e.latlng)
        .setContent("latitude: <b>" + e.latlng.lat.toFixed(5)
        + "</b><br>longitude: <b>" + e.latlng.lng.toFixed(5)
        + "</b>").openOn(mymap);
}
mymap.on('click', onMapClick);