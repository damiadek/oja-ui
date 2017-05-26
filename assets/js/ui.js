$(window).scroll(function(){
	var top = $(this).scrollTop();

});

$(document).ready(function(){
	// signup form animation
	$(".form-div").animate({"opacity": "1"}, 1000, function(){
		$(".more").animate({"opacity": "1"}, 1000);
	});

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
	$(".toggle_stores").click(function(e){
		e.preventDefault();
		$(".stores").toggleClass("open");
	});

	// close function
	$(".toggle_cart").click(function(e){
		e.preventDefault();
		console.log();
		$(".full-cart").toggleClass("open").find("*").fadeToggle(1000);
		console.log("hhe");
	});

	// display welcome message
	$(".welcome-message-wrapper").delay(1000).fadeIn(2000,function(){
		var $this = $(this);
		var time_out = setTimeout(function(){
			$this.fadeOut(3000);
		},10000);

		time_out;
	})
	.find(".welcome-close").click(function(){
		$(".welcome-message-wrapper").fadeOut();
	});

	$(".cart-item .panel-heading").click(function(){
		$(this).siblings(".panel-body").slideToggle();
	});

	// show search div
	$(".search_toggle").click(function(){
		$(".search-field").toggleClass("open");
	});

	$(".search-input").on("focus", function(){
		blockUI();
		$(".search-results").addClass("open");
	})
	.on("blur", function(){
		unblockUI();
		$(".search-results").removeClass("open");
	});



	// carousel controls
	// $(".prev").click(function(e){
	// 	e.preventDefault();
	// 	var ul = $(this).siblings("ul");
		
	// 	var right = parseFloat(ul.css("right"));
	// 	var left = parseFloat(ul.css("left"));
	// 	var width = parseFloat(ul.css("width"));

	// 	if(left >= 100){
	// 		$(ul).animate({"left" : (330 - width)},400);
	// 	}else{
	// 		left += 220;
			
	// 		$(ul).animate({"left" : left + "px"},400);
	// 	}
	// });
	
	// $(".next").click(function(e){
	// 	e.preventDefault();
	// 	var ul = $(this).siblings("ul");
		
	// 	var right = parseFloat(ul.css("right"));
	// 	var left = parseFloat(ul.css("left"));
	// 	var width = parseFloat(ul.css("width"));
		
	// 	if(left <= (450 - width)){
	// 		$(ul).animate({"left" : 0 + "px"},400);
	// 	}else{
	// 		left -= 220;

	// 		$(ul).animate({"left" : left + "px"},400);
	// 	}
	// });

	// resend verification
	countdown($(".countdown"));
	
});


$(window).load(function(){

	// $.each($("._carousel"), function(i, this_object){
	// 	var $carouse = $(this_object);
	// 	var width = (parseFloat($carouse.attr("items")) * 220) + 100;
	// 	$carouse.css("width", width);
	// });


});


// carouFredSel
// Carousel slider
// if ($("#slider").length){
    // $(".slider").carouFredSel({
    //     prev: '.btn-prev',
    //     next: '.btn-next',
    //     pagination: ".pagination",
    //     items: {
    //         visible: 3,
    //         width: 300
    //     },
    //     width: 900,
    //     height: 150,
    //     align: 'left', //needed when only 1 or 2 items displayed (+ margin right on item)
    //     scroll: {
    //         duration: 1000,
    //         pauseOnHover: true,
    //         easing: "quadratic"
    //     },
    //     swipe: {
    //         onMouse: true,
    //         onTouch: true,
    //         options: {
    //             //liste d'exclusion par defaut moins l'element <a>
    //             excludedElements: "button, input, select, textarea, .noSwipe",
    //             //recherche et trigger du <a> au tap
    //             tap: function(event, target) {
    //                 window.open($(target).closest('a').attr('href'), '_self');
    //             }
    //         }
    //     }
    // });
    $.each($('._carousel'), function(i, this_object){
		j = i + 1;
		$(".carousel_" + j).carouFredSel({
            auto: false,
            prev: '.prev'+j,
            next: '.next'+j,
            width: 960,
            items: {
                visible: {
                    min: 1,
                    max: 4
                },
            },
            responsive: true,
            scroll: 1
            // mousewheel: true,
            // swipe: {
            //     onMouse: true,
            //     onTouch: true
            // }
		});
	});
// };