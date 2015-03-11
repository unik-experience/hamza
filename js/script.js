(function ($) {
	jQuery(document).ready(function(){
	    //Handles menu drop down
	    jQuery('form .dropdown-menu').click(function (event){
	        event.stopPropagation();
	    });
	});
})(jQuery)