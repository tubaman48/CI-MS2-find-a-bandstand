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

markers.push({
    markerLat:  51.37268,
    markerLong: 1.12420,    
    bandstandName:    "Herne Bay Bandstand",
    locationStreet:   "Central Parade", 
    locationTown:     "Herne Bay",
    locationCounty:   "Kent",
    locationPostCode: "CT6 5JN",
    favFlag:          false
});

markers.push({
    markerLat:  51.214609,
    markerLong: 1.403355,    
    bandstandName:    "The Deal Memorial Bandstand",
    locationStreet:   "The Strand", 
    locationTown:     "Walmer, Deal",
    locationCounty:   "Kent",
    locationPostCode: "CT14 7DX", 
    favFlag:          false
});

markers.push({
    markerLat:  51.35633,
    markerLong: 1.44255,   
    bandstandName:    "Broadstairs Bandstand",
    locationStreet:   "Victoria Gardens", 
    locationTown:     "Broadstairs",
    locationCounty:   "Kent",
    locationPostCode: "CT10 1QS",
    favFlag:          false
}); 

let markerPopUp = [];
for (i in markers) {
    markerPopUp[i] = L.marker([markers[i].markerLat, markers[i].markerLong])
    .bindPopup(`${markers[i].bandstandName}
                ${markers[i].locationCounty}
                ${markers[i].locationPostCode}`)
    .addTo(mymap);
};