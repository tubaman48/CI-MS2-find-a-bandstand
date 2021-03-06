/* jshint esversion: 6 */
// This javascript library handles the availability of the Receive Favourites option

function showReceiveFavsOption() { // when 1 or more favourite bandstands selected
    // Show "Receive Favourites" Nav Menu option
    $('#favs-menu-toggle').removeClass("no-display");

    // Change "No Favourites Yet !" button to "Receive Favourites" button
    $('#favs-button-toggle').html(
        `<button type="submit" class="btn btn-success w-100 receive-favourites-btn"
            data-toggle="modal" data-target="#receiveFavouritesModal"
            onclick="clearCompletionMsg(); populateSelectedFavs()">
            Receive Favourites
        </button>`);
}

function hideReceiveFavsOption() {  // when no favourite bandstands selected (default state)
    // Hide "Receive Favourites" Nav Menu option
    $('#favs-menu-toggle').addClass("no-display");
    
    // Change "Receive Favourites" button to "No Favourites Yet !" button
    $('#favs-button-toggle').html(
        `<button type="button" class="btn btn-info w-100 receive-favourites-btn">
            No Favourites Yet !
        </button>`);
}