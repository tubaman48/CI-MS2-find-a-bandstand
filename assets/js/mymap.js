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
        [51.90, 2.00],       // north east boundary
        [50.70, -1.2]        // south west boundary
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

markers.push({
    markerLat:  50.764473,
    markerLong: 0.289444,   
    bandstandName:    "EastBourne Bandstand",
    locationStreet:   "Grand Parade", 
    locationTown:     "Eastbourne",
    locationCounty:   "East Sussex",
    locationPostCode: "BN21 3AD",
    favFlag:          false,
    _id:              3
}); 

markers.push({
    markerLat:  51.276,
    markerLong: 0.194,   
    bandstandName:    "Vine Bandstand",
    locationStreet:   "", 
    locationTown:     "Sevenoaks",
    locationCounty:   "Kent",
    locationPostCode: "TN13 3UH",
    favFlag:          false,
    _id:              4
}); 

markers.push({
    markerLat:  51.4770,
    markerLong: 0.0027,   
    bandstandName:    "Greenwich Bandstand",
    locationStreet:   "Greenwich Park", 
    locationTown:     "Greenwich",
    locationCounty:   "London",
    locationPostCode: "SE10",
    favFlag:          false,
    _id:              5
});


markers.push({
    markerLat:  51.4578,
    markerLong: -0.1494,   
    bandstandName:    "Clapham Common Bandstand",
    locationStreet:   "Windmill Street", 
    locationTown:     "Clapham Common",
    locationCounty:   "London",
    locationPostCode: "SW4",
    favFlag:          false,
    _id:              6
});

markers.push({
    markerLat:  51.062,
    markerLong: -0.325,   
    bandstandName:    "Horsham Bandstand",
    locationStreet:   "", 
    locationTown:     "Horsham",
    locationCounty:   "West Sussex",
    locationPostCode: "",
    favFlag:          false,
    _id:              7
});

markers.push({
    markerLat:  51.0758,
    markerLong: 1.17357,   
    bandstandName:    "Leas Cliff Bandstand",
    locationStreet:   "The Leas", 
    locationTown:     "Folkestone",
    locationCounty:   "Kent",
    locationPostCode: "CT20 2DZ",
    favFlag:          false,
    _id:              8
});

markers.push({
    markerLat:  51.27492,
    markerLong: 1.07783,   
    bandstandName:    "Dane John Bandstand",
    locationStreet:   "Dane John Gardens", 
    locationTown:     "Canterbury",
    locationCounty:   "Kent",
    locationPostCode: "",
    favFlag:          false,
    _id:              9
});

markers.push({
    markerLat:  51.44187,
    markerLong: -0.06150,   
    bandstandName:    "Hornman Bandstand",
    locationStreet:   "Horniman Gardens", 
    locationTown:     "Forest Hill",
    locationCounty:   "London",
    locationPostCode: "SE23 3PQ",
    favFlag:          false,
    _id:              10
});

markers.push({
    markerLat:  51.5230,
    markerLong: -0.1530,   
    bandstandName:    "Regents Park Bandstand",
    locationStreet:   "Regents Park", 
    locationTown:     "Camden",
    locationCounty:   "London",
    locationPostCode: "NW1",
    favFlag:          false,
    _id:              11
});

markers.push({
    markerLat:  51.4240,
    markerLong: -0.0690,   
    bandstandName:    "Crystal Palace Bowl",
    locationStreet:   "Ledrington Road", 
    locationTown:     "Crystal Palace",
    locationCounty:   "London",
    locationPostCode: "SE26 6UT",
    favFlag:          false,
    _id:              12
});

// apply listener for clicked markers and apply all markers with popup formatted
var myFeatureGroup = L.featureGroup().addTo(mymap).on("click", groupClick);
var marker, test, id;

var markerPopUp  = [];
let noFavsMsg = `<p><em>no favourites selected</em></p>`;
// initialise Selected Bandstands favourites area to "empty" noFavsMsg message 
let favAreaContent = document.getElementById("fav-area-content");
favAreaContent.innerHTML = noFavsMsg;

markers.forEach(marker=>{
    id = marker._id;
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

                // if revised area string is now empty then reinstate default "no entries" message
                if (newFavAreaContent === "") {
                    newFavAreaContent = noFavsMsg;
                }

                favAreaContent.innerHTML = newFavAreaContent; 

            } else {                       // currently not marked as favourite ... so add

                // adjust marker                  
                markers[id].favFlag = true;   // set this entry to go through if branch next time through 

                // format new entry for favAreaContent 
                let addFavString   = `<p>${markers[id].bandstandName}</p>`;

                // get existing displayed content 
                let favAreaContent = document.getElementById("fav-area-content");

                // if default "no entries" message present then clear it out before appending new entry
                if (favAreaContent.innerHTML.slice(0,7) === `<p><em>`) {
                    favAreaContent.innerHTML = addFavString;
                } else { // append new entry after existing entries
                    favAreaContent.innerHTML = `${favAreaContent.innerHTML}${addFavString}`;
                }    
            }
        }
    }
    return (markers);
}
