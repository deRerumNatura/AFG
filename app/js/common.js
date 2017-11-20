$(function() {

	$('.toggle-mnu').click(function() {
		$(this).toggleClass('on');
		$('.main-mnu').slideToggle();
	});

	$('.main-footer .toggle-mnu').click(function() {
  	$("html, body").animate({ scrollTop: $(document).height() }, "slow");
  	return false;
	});

	$('.top').click(function() {
  	$("html, body").animate({ scrollTop: 0 }, "slow");
  	return false;
	});

	$('.arrow-bottom').click(function() {
  	$("html, body").animate({ scrollTop: $(".main-head").height()+120}, "slow");
  	return false;
	});



	$(".section-content .info-ite").equalHeights();
	$(".s1-bottom .info-item").equalHeights();
	$(".info-item-wrap .info-item").equalHeights();
	$(".cards .card").equalHeights();

	$(".section_4").waypoint(function(){
		$(".section_4 .card").each(function(index) {
			var ths =$(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 150*index)
		})
	}, {
		offset : "30%"
	});

	


	$(".section_5").waypoint(function(){
		$(".section_5 .tc-item").each(function(index) {
			var ths =$(this);
			setTimeout(function() {
					var myAnimation = new DrawFillSVG({
						elementId: "tc-svg" + index
					});
					ths.removeClass("team-off").addClass("team-on");
			}, 500*index)
		});

		this.destroy();

	}, {
		offset : "30%"
	});

		$(".section_6").waypoint(function(){
			$(".section_6 .team").each(function(index) {
				var ths =$(this);
				setInterval(function() {
					ths.removeClass("team-off").addClass("team-on");
			}, 150*index)
		});
	}, {
		offset : "30%"
	});


	$(".slider").owlCarousel({
		items: 1,
		nav: true,
		navText: "",
		loop: true,
		fluidSpeed: 700,
		autoplaySpeed: 700,
		navSpeed: 700,
		dotsSpeed: 700,
		dragEndSpeed: 700
	});

		$('.homesect .section-head h2, .homesect .section-head p').animated('fadeInRight');

		$('.info-item-wrap').animated('zoomIn');
		$('.slider .slide').animated('rollIn');
		$('.homesect.section_8 .section-head .p').animated('fadeInDown');
		$('.homesect.section_8 .forms').animated('fadeInRight');

		$(".section_2").waypoint(function() {
			$(".s2-item-wrap").each(function(index) {
				var ths = $(this);
				setInterval(function() {
					ths.addClass("on");
				}, 150*index)
				});
			}, {
				offset : "30%"
		});

		$(".section_8").waypoint(function() {
			$(".s8-item").each(function(index) {
				var ths = $(this);
				setInterval(function() {
					ths.addClass("on");
					}, 150*index)
				});
			}, {
			offset : "30%"
			});



		


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
