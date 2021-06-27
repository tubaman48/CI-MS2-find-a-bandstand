// Receive Favourites modal form functions

function populateSelectedFavs() {
    // pass over to Receive Favourites modal form area the favourites currently selected
    let favList = document.getElementById("fav-list");
    favList.innerHTML = localStorage.getItem('favs');
}

function formatFavsEmail(favsForm) {
    // initialise formatted area
    var bandstandLocations = "";

    // Pull in bandstand details for those markers currently flagged as favourites
    for (var id = 0; id < markers.length; id++) {
        if (markers[id].favFlag) {
            // this bandstand is flagged as favourite - so pull in details
            var bsName = `Bandstand Name: ${markers[id].bandstandName} <br>`;
            var bsAddr = `Bandstand Address : <br>`;
            if (markers[id].locationStreet !== "") {
                bsAddr = `${bsaddr} ${markers[id].locationStreet} <br>`;
            };
            if (markers[id].locationTown !== "") {
                bsAddr = `${bsaddr} ${markers[id].locationTown} <br>`;
            };
            if (markers[id].locationCounty !== "") {
                bsAddr = `${bsaddr} ${markers[id].locationCounty} <br>`;
            };
            if (markers[id].locationPostCode !== "") {
                bsAddr = `${bsaddr} ${markers[id].locationPostCode} <br><br>`;
            };
            bandstandLocations.concat(bsName, bsAddr);
        }
    }

    // invoke emailjs
    emailjs.send("gmail","receive_favs",{
        to_name: favsForm.contactEmail.value,
        from_name: favsForm.fName.value,
        bandstand_locations: bandstandLocations
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page

}

function confirmSubmitMsg() {
    // write out following message in Receive Favourites modal form area with id #completion-msg
    let completionMsg = document.getElementById("completion-msg");
    let emailInput    = document.getElementById("contactEmail").value;
    completionMsg.innerHTML = `<h3>Details of selected favourites emailed to : ${emailInput}<br>
                                <button type="button" class="btn btn-success">OK</button></h3>`;
}