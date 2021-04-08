function populateSelectedFavs() {
    // grab current favourites from Selected Bandstands area of Main Page
    let favAreaContent = document.getElementById("fav-area-content");
    let favWorkArea = favAreaContent.innerHTML;   

    // pass over to Receive Favourites modal form area
    let favList = document.getElementById("fav-list");
    let favList.innerHTML = favWorkArea
}