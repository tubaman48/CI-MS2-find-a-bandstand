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
                bsAddr = `${bsAddr} ${markers[id].locationStreet} <br>`;
            };
            if (markers[id].locationTown !== "") {
                bsAddr = `${bsAddr} ${markers[id].locationTown} <br>`;
            };
            if (markers[id].locationCounty !== "") {
                bsAddr = `${bsAddr} ${markers[id].locationCounty} <br>`;
            };
            if (markers[id].locationPostCode !== "") {
                bsAddr = `${bsAddr} ${markers[id].locationPostCode} <br><br>`;
            };
            bandstandLocations= `${bandstandLocations} ${bsName} ${bsAddr}`;
        }
    }

    // invoke emailjs (Service ID = service_blkm6ga and Template ID = receive_favs)
    emailjs.send("service_blkm6ga","receive_favs",{
        to_name: favsForm.first_name.value,
        from_name: favsForm.contact_email.value,
        bandstand_locations: bandstandLocations,
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

function formatBandstandAmendmentsEmail(amendForm) {

// invoke emailjs (Service ID = service_blkm6ga and Template ID = bs_amend)
    emailjs.send("service_blkm6ga","bs_amend",{
        fname_provider:  amendForm.fname_provider.value,
        email_provider:  amendForm.email_provider.value,
        bandstand_name:  amendForm.bandstand_name.value,
        town_location:   amendForm.town_location.value,
        county_location: amendForm.county_location.value,
        post_code:       amendForm.post_code.value,
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