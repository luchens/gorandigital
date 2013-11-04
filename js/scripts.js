$(document).ready(function() {
	$( '#carousel' ).elastislide({
		// orientation 'horizontal' || 'vertical'
		orientation : 'horizontal',
		// sliding speed
		speed : 500,
		// sliding easing
		easing : 'ease-in-out',
		// the minimum number of items to show. 
		// when we resize the window, this will make sure minItems are always shown 
		// (unless of course minItems is higher than the total number of elements)
		minItems : 1,
		// index of the current item (left most item of the carousel)
		start : 0,
		// click item callback
		onClick : function( el, position, evt ) { /*console.log("onClick");*/ },
		onReady : function() { /*console.log("onReady");*/ },
		onBeforeSlide : function() { /*console.log("onBeforeSlide");*/ },
		onAfterSlide : function() { /*console.log("onAfterSlide");*/ }
	});

	/*
	setInterval(function(){
		this.next();
	}, 1000);
	*/
	//console.log("asd");

	/*
	$('.scroll').slimScroll({
		railVisible: true,
		height: '100px',
		wheelStep: 5,
		width: '100%'
		*/
		/*
		width: '300px',
		size: '10px',
		position: 'left',
		color: '#ffcc00',
		alwaysVisible: true,
		distance: '20px',
		start: $('#child_image_element'),
		railVisible: true,
		railColor: '#222',
		railOpacity: 0.3,
		wheelStep: 10,
		allowPageScroll: false,
		disableFadeOut: false
		*/
	/*
	});

	$(".slimScrollBar").css({
	  cursor: 'pointer'
	});
	*/

	/*
	$("#slider1").responsiveSlides({
		auto: false,
		pager: true,
		nav: true,
		speed: 500,
		maxwidth: 800,
		namespace: "centered-btns"
	});
	*/

	/*
	$("#slider2").responsiveSlides({
		auto: false,
		pager: true,
		nav: true,
		speed: 500,
		maxwidth: 800,
		namespace: "transparent-btns"
	});

	$("#slider3").responsiveSlides({
		auto: false,
		pager: false,
		nav: true,
		speed: 500,
		maxwidth: 800,
		namespace: "large-btns"
	});
	*/

	$('#modal-btn').click(function (e) {
		e.preventDefault();
	
		var src = 'http://www.youtube.com/v/'+e+'&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;autoplay=1';
		$('#myModal').modal('show');
		$('#myModal iframe').attr('src', src);

		console.log(e);

		$('#myModal iframe').removeAttr('src');
	});

	/*
	$('.thumbnail').mouseover(function(e) {
		$(this).stop().transition({
			perspective: '90px',
			rotateX: '1deg',
			scale: 1.05,
			duration: 500,
			complete: function() {  }
		});
		e.preventDefault();
		e.stopPropagation();
	});
	$('.thumbnail').mouseout(function(e) {
		$(this).stop().transition({
			perspective: '90px',
			rotateX: '0deg',
			scale: 1,
			duration: 500,
			complete: function() { }
		});
		e.preventDefault();
		e.stopPropagation();
	});
	*/


	var h = $("div.thumbnail").css("height");

	console.log(h);

	//$(".thumbnails .thumbnail").height(h);


});