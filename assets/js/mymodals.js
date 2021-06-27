// Receive Favourites modal form functions

function populateSelectedFavs() {
    // pass over to Receive Favourites modal form area the favourites currently selected
    let favList = document.getElementById("fav-list");
    favList.innerHTML = localStorage.getItem('favs');
}

function confirmSubmitMsg() {
    // write out following message in Receive Favourites modal form area with id #completion-msg
    let completionMsg = document.getElementById("completion-msg");
    let emailInput    = document.getElementById("contactEmail").value;
    completionMsg.innerHTML = `<h3>Details of selected favourites emailed to : ${emailInput}<br>
                                <button type="button" class="btn btn-success">OK</button></h3>`;
}