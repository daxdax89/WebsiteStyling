<script src="https://kit.fontawesome.com/4631a05314.js" crossorigin="anonymous"></script>

    <script>
        window.onscroll = function() {
            console.log(window.pageYOffset);
        var stickBar = document.getElementById("sticky-bar-review");
    if ( window.pageYOffset > 792 ) {
            stickBar.classList.add("make-it-sticky");
		console.log('Dodao sam klasu');
    } else {
            stickBar.classList.remove("make-it-sticky");
		console.log('Sklonio sam klasu');
    }
}


</script>