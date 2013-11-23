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
/*
	$('#modal-btn').click(function (e) {
		var id = $(this).attr('data-id');
		var src = 'http://www.youtube.com/v/'+id+'&amp;autoplay=1';
		$('#myModal').modal('show');
		$('#myModal video source').attr('src', src);
		//console.log($('#myModal video source').attr('src'));
	});

	$('#modal-btn2').click(function () {
		var src = 'http://www.youtube.com/v/FSi2fJALDyQ&amp;autoplay=1';
		$('#myModal2').modal('show');
		//$('#myModal video source').attr('src', src);
		//console.log($('#myModal video source').attr('src'));
	});*/


	/*
	$('#modal-btn').click(function (e) {
		console.log(e);
		*/
		/*
		e.preventDefault();
	
		var src = 'http://www.youtube.com/v/'+e+'&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;autoplay=1';
		$('#myModal').modal('show');
		$('#myModal iframe').attr('src', src);

		console.log(e);

		$('#myModal iframe').removeAttr('src');
		*/
	/*});*/
	

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


	//var h = $("div.thumbnail").css("height");

	//console.log(h);

	//$(".thumbnails .thumbnail").height(h);

	//var arrayH = new Array();
	//var h;

	//$.each($(".thumbnails .thumbnail"), function(indice, valor) {
		//console.log('Indice es ' + indice + ' y valor es: ' + valor);
		//console.log($(valor).height());

		//arrayH.push($(valor).height());

		//h = $(valor).height();
	//});

	//$(".thumbnails .thumbnail").height(h);

	//console.log(arrayH);



	$('.play-gallery-cta').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		
		$('#modal-homepage-gallery').modal().on('show', function() {
            //console.log('Modal will be shown');
        }).on('shown', function() {
            //console.log('Modal was shown');
			
			$('#slides-thumbs').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				itemWidth: 210,
				itemMargin: 5,
				asNavFor: '#slider',
				touch: true
			});

			$('#slider').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				sync: "#slides-thumbs",
				touch: true,
				start: function(slider){
					$('body').removeClass('loading');
				}
			});
			
        }).on('hide', function() {
            //console.log('Modal will be hidden');
        }).on('hidden', function() {
            //console.log('Modal is hidden');
        }).show({
            backdrop: true,
            keyboard:true
        });

	});

	$('.play-video-cta').click(function(e) {
		e.preventDefault();
		e.stopPropagation();

		$('#modal-homepage-video').modal('show');
	});

	flowplayer.conf = {
		native_fullscreen : true,
		tooltip : false,
		autoBuffering : true
	};

	var videoStarted = false;
	var millisecondsElapsed = 0;

	if(window.mixpanel) {
		flowplayer().bind('progress', function(e, api) {
			if(!videoStarted) {
				videoStarted = true;
				mixpanel.track('Homepage video started');					
			}

			millisecondsElapsed += 250;
			var secondsElapsed = millisecondsElapsed / 1000;

			if(secondsElapsed % 15 == 0) {
				mixpanel.track('Homepage video watched', { secondsElapsed : secondsElapsed });
			}
		});

		flowplayer().bind('finish', function(e, api) {
			mixpanel.track('Homepage video finished');
		});

		flowplayer().bind('fullscreen', function(e, api) {
			mixpanel.track('Homepage video fullscreen');
		});
	}

	$('#modal-homepage-video').on('shown', function(e) {
		flowplayer().resume();		
	}).on('hide', function(e) {
		flowplayer().pause();
	});

});