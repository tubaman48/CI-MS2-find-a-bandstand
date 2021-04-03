let mymap = L.map('mapid').setView([51.27, 0.25], 8.3); // centred on Tunbridge Wells

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidHViYW1hbjQ4IiwiYSI6ImNrbjFtOG1kdjB6MncydnQ3YnM5NHB6bzkifQ.Zo9QA1etbxy4Wkj8byDFqg'
}).addTo(mymap);