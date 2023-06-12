// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 
//  TO CLOSE COOKIES PART...
// 

// Get the cookies div
var cookies = document.getElementById("myCookies");

// Get the <button> element that closes the modal
var spanned = document.getElementsByClassName("close-me")[0];

// When the user clicks on <span> (x), close the modal
spanned.onclick = function () {
    cookies.style.display = "none";
}