// apply map

var mapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
});

var mymap = L.map("mapid", {
    layers: [mapTileLayers],
    center: [51.27, 0.25], // centred on Tunbridge Wells
    zoom: 8,
    maxBounds: [
        // stops map from infinite scrolling at edges
        [51.70, 2.00],       // north east boundary
        [50.70, -1.0]        // south west boundary
    ],
    maxBoundsViscosity: 0.5, // elastic bounce-back of map edges
});

// Add markers for bandstands 

var markers = [];

markers.push({
    markerLat:  51.37268,
    markerLong: 1.12420,    
    bandstandName:    "Herne Bay Bandstand",
    locationStreet:   "Central Parade", 
    locationTown:     "Herne Bay",
    locationCounty:   "Kent",
    locationPostCode: "CT6 5JN",
    favFlag:          false,
    _id:              0
});

markers.push({
    markerLat:  51.214609,
    markerLong: 1.403355,    
    bandstandName:    "The Deal Memorial Bandstand",
    locationStreet:   "The Strand", 
    locationTown:     "Walmer, Deal",
    locationCounty:   "Kent",
    locationPostCode: "CT14 7DX", 
    favFlag:          false,
    _id:              1
});

markers.push({
    markerLat:  51.35633,
    markerLong: 1.44255,   
    bandstandName:    "Broadstairs Bandstand",
    locationStreet:   "Victoria Gardens", 
    locationTown:     "Broadstairs",
    locationCounty:   "Kent",
    locationPostCode: "CT10 1QS",
    favFlag:          false,
    _id:              2
}); 

// apply listener for clicked markers and apply all markers with popup formatted
var myFeatureGroup = L.featureGroup().addTo(mymap).on("click", groupClick);
var marker, test, id;

var markerPopUp  = [];
var selectedFavs = [];
markers.forEach(marker=>{
    id = marker._id;
    console.log(id);
    test = id;
    markerPopUp[id] = L.marker([marker.markerLat, marker.markerLong])
    .bindPopup(`${id}# ${marker.bandstandName}<br>
                ${marker.locationCounty}
                ${marker.locationPostCode}<br>
                <button onclick="toggleFavFlag(markers)">Toggle as Favourite</button>`)
    .addTo(myFeatureGroup);
    markerPopUp[id].test = test;
    markerPopUp[id]._id = id;
})

function groupClick(event) {
    id = event.layer.test;
    console.log(event.layer);
}

function toggleFavFlag(markers) {
    /* id now available from groupClick(event) */
    
    for (marker in markers) {
        if (markers[marker]._id === id) { // clicked marker entry found
            // set button function in pop up according to favFlag value /
            if (markers[id].favFlag) {    // currently marked as favourite ... so remove

                // adjust marker 
                markers[id].favFlag = false;  // set this entry to go through else branch next time through 

                // remove entry from favAreaContent 
                let removeFavString   = `<p>${markers[id].bandstandName}</p>`;

                let favAreaContent = document.getElementById("fav-area-content");
                let favWorkArea = favAreaContent.innerHTML;   // grab current favourites

                // the following logic is based on each Bandstand entry being enclosed in <p> </p> pair
                removeEntryBeg   = favWorkArea.search(removeFavString)             // Find start point of remove entry
                removeEntryToEnd = favWorkArea.slice(removeEntryBeg)               // Grab from start of remove entry
                removeEntryEnd   = removeEntryBeg + removeEntryToEnd.search("</p>") + 4;  // ... to determine end point
                let beforeEntry  = favWorkArea.slice(0,removeEntryBeg);
                let afterEntry   = favWorkArea.slice(removeEntryEnd);
                let newFavAreaContent = beforeEntry + afterEntry;

                favAreaContent.innerHTML = newFavAreaContent; 

            } else {                       // currently not marked as favourite ... so add

                console.log("select");
                
                // adjust marker                  
                markers[id].favFlag = true;   // set this entry to go through if branch next time through 

                // format new entry for favAreaContent 
                let addFavString   = `<p>${markers[id].bandstandName}</p>`;

                // get existing displayed content 
                let favAreaContent = document.getElementById("fav-area-content");

                // append new entry 
                favAreaContent.innerHTML = `${favAreaContent.innerHTML}<p>${markers[id].bandstandName}</p>`;
                
            }
        }
    }
    return (markers);
}
