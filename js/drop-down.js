$(document).ready(function(){
    $('.nav-item.dropdown').hover(
        function () {
            var $dropdownMenu = $(this).find('.dropdown-menu').first();
            $dropdownMenu.stop(true, true).slideDown(300).addClass('show');
        },
        function () {
            var $dropdownMenu = $(this).find('.dropdown-menu').first();
            $dropdownMenu.stop(true, true).slideUp(200, function() {
                $(this).removeClass('show');
            });
        }
    );
    
    // For keyboard accessibility
    $('.nav-item.dropdown').focusin(function() {
        var $dropdownMenu = $(this).find('.dropdown-menu').first();
        $dropdownMenu.stop(true, true).slideDown(300).addClass('show');
    }).focusout(function() {
        var $dropdownMenu = $(this).find('.dropdown-menu').first();
        $dropdownMenu.stop(true, true).slideUp(200, function() {
            $(this).removeClass('show');
        });
    });
});
