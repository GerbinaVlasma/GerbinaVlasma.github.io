function toggleClassMenu() {
    jQuery('.hamburger').on('click', function(){
        jQuery('body').toggleClass('menu-open');
    });
}

$( document ).ready(function() {
    toggleClassMenu();
});