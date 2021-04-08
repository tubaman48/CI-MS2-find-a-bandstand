// Receive Favourites modal form functions

function populateSelectedFavs() {
    // grab current favourites from Selected Bandstands area of Main Page
    let favAreaContent = document.getElementById("fav-area-content");
    let favWorkArea = favAreaContent.innerHTML;   

    // pass over to Receive Favourites modal form area with id #fav-list
    let favList = document.getElementById("fav-list");
    favList.innerHTML = favWorkArea;
}

function confirmSubmitMsg() {
    // write out following message in Receive Favourites modal form area with id #completion-msg
    let completionMsg = document.getElementById("completion-msg");
    let emailInput    = document.getElementById("contactEmail").value;
    completionMsg.innerHTML = `<h3>Details of selected favourites emailed to : ${emailInput}<br>
                                <button type="button" class="btn btn-success">OK</button></h3>`;
}