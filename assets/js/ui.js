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

	// resend verification
	countdown($(".countdown"));
	
});


$(window).load(function(){
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
	
	// function () {
        // $('.carousel1').carouFredSel({
        //     auto: false,
        //     prev: '.prev1',
        //     next: '.next1',
        //     width: 960,
        //     items: {
        //         visible: {
        //             min: 1,
        //             max: 4
        //         },
        //     },
        //     responsive: true,
        //     scroll: 1,
		// 	pagination: "#pager"
        //     // mousewheel: true,
        //     // swipe: {
        //     //     onMouse: true,
        //     //     onTouch: true
        //     // }
		// });
	// }
});


// carouFredSel
// Carousel slider
// if ($("#slider").length){
//     $(".slider").carouFredSel({
//         prev: '.btn-prev',
//         next: '.btn-next',
//         pagination: ".pagination",
//         items: {
//             visible: 3,
//             width: 300
//         },
//         width: 900,
//         height: 150,
//         align: 'left', //needed when only 1 or 2 items displayed (+ margin right on item)
//         scroll: {
//             duration: 1000,
//             pauseOnHover: true,
//             easing: "quadratic"
//         },
//         swipe: {
//             onMouse: true,
//             onTouch: true,
//             options: {
//                 //liste d'exclusion par defaut moins l'element <a>
//                 excludedElements: "button, input, select, textarea, .noSwipe",
//                 //recherche et trigger du <a> au tap
//                 tap: function(event, target) {
//                     window.open($(target).closest('a').attr('href'), '_self');
//                 }
//             }
//         }
//     });
// };