$(document).ready(function () {

function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});



	$('.header__burger').click(function () {
		$('.header__burger,.header__menu').toggleClass('active');
		//$('body').toggleClass('lock');
	});

//===============ABOUT================================
	
	$(".icon").hover(function () {
	
		$(this).find('.icon__hover').css("opacity", "1");
	},
		function () {
		$(this).find('.icon__hover').css("opacity", "0");
		});

	//================================================================================
	
	//==========ICON=================================================================

	$("a").hover(function () {
	
		$(this).find('i').css("color", "#3ac9e8");
	},
		function () {
		$(this).find('i').css("color", "#000000");
		});


	function ibg() {

		let ibg = document.querySelectorAll(".ibg");
		
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img')) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
	ibg();



	//плавный скролл=========================================================================
	
	$('a[href^="#"]').click(function () {
		let target = $(this).attr('href');
		
		$('.header__burger,.header__menu').removeClass('active');
		

		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 600);
	})

	
});