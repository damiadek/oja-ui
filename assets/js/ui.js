$(document).ready(function(){
	// init tooltip
	$(".tip").tooltip();

	// add spin on hover
	$(".spin").hover(function(){
		$(this).find(".spin-child").addClass("fa-spin");
	}, function(){
		$(this).find(".spin-child").removeClass("fa-spin");
	});

	// toggle dropdown arrow
	$(".dropdown-toggle").click(function(){
		$(this).find("b").toggleClass("fa-angle-down");
		$(this).find("b").toggleClass("fa-angle-up");
	});

	// swap login and signup divs
	$(".swap_button").click(function(e){
		addSpinner($(this));
		e.preventDefault();
		var $target = $( "." + $(this).attr("target"));
		var $parent = $(this).closest("fieldset");
		$parent.slideUp(400, function(){
			$parent.removeClass("active");
			$target.addClass("active").slideDown();
		});
		removeSpinner
	});
});