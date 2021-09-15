jQuery(function(){

	jQuery(document).on('change', '#check_info', function() {
		if(jQuery('input[name="check_info"]').is(':checked')) {
			// checked
			jQuery("#shipping_country_field").hide();
	    	jQuery("#shipping_state_field").hide();
		} else {
			// unchecked
			jQuery("#shipping_country_field").show();
	   		jQuery("#shipping_state_field").show();
		}
	});

});