$(document).ready(function(){
	$('.works_menu_area ul li a').click(function(){
		var mixer = mixitup('.works_item_area');

		return false;
	});
	
	(function($) {
    'use strict';

    $('.html').rProgressbar({
        percentage: 99,
        fillBackgroundColor: '#9b59b6',
        height:'7px',
    });
    $('.css').rProgressbar({
        percentage: 95,
        fillBackgroundColor: '#2ecc71',
        height:'7px',
    });



    $('.php').rProgressbar({
        percentage: 75,
        fillBackgroundColor: '#3498db',
        height:'7px',
    });



    $('.js').rProgressbar({
        percentage: 65,
        fillBackgroundColor: '#34495e',
        height:'7px',
    });



    $('.wordpress').rProgressbar({
        percentage: 1,
        fillBackgroundColor: '#f1c40f',
        backgroundColor: '#e67e22',
        height:'7px',
    })



})(jQuery);

	$('.header_bottom_banner').animatedHeadline({
	    animationType: 'type',

	});

	$('.gallery-item_p').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});

    $('.bar_area i').click(function(){
        $('.header_menu ul').slideToggle();
        return false;
    });

});


// $(this).waypoint(lineProgressBarInit, { offset:'100%', triggerOnce:true });
