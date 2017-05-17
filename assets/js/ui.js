$(document).ready(function(){
	// redirect to login page
	$(".login_button").click(function(){
		window.location.href = "dashboard.html";
	});

	// init tooltip
	$(".tip").tooltip();

	// add spin on hover
	$(".spin").hover(function(){
		$(this).find(".spin-child").addClass("fa-spin");
	}, function(){
		$(this).find(".spin-child").removeClass("fa-spin");
	});

	// swap login and signup divs
	$(".swap_button").click(function(e){
		addSpinner($(this));

		e.preventDefault();
		var $target = $( "." + $(this).attr("target"));
		var $parent = $("fieldset.active");
		$parent.delay(1000).slideUp(400, function(){
			$parent.removeClass("active");
			$target.addClass("active").slideDown();
			removeSpinner();
		});
	});

	// close function
	$(".toggle_stores").click(function(){
		$(".stores").toggleClass("open");
	});

});