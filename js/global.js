var w = $(window),
	body = $('body'),
	popup = $('.popup'),
	popupCallback = $('.popup.callback'),
	popupVideo = $('.popup.video'),
	popupContainer = ('.popup .container'),
	popupClose = $('.popup .close'),
	popupForm = $('.popup .form'),
	popupMessage = $('.popup .message'),
	videoCircle = $('.video-circle'),
	speed = 400;

$('.caret > li > a').click(function() {
	$(this).removeAttr('href');
	var ul = $(this).siblings('ul');
	ul.slideToggle(400);
});

$('button#sticks').click(function() {
	$(this).toggleClass('close');
});


$('input[name=tel]').mask("+7 (999) 999-99-99");


function abs(object) {
	var scrollTop = body.scrollTop(),
    	height = body.height();
	object.css('padding-top', scrollTop+20).fadeIn(speed).height(height-scrollTop-20);
}

$('.callbackBtn').click(function() {
	abs(popupCallback);
});

videoCircle.click(function() {
	abs(popupVideo);
});


popupClose.click(function() {
	popup.fadeOut(speed);
});

popupForm.find('form').submit(function() {
	$.ajax({
	    type: "POST",
	    url: "/order.php",
	    data: $(this).serialize()
	}).done(function() {
	    popupForm.css('display','none');
	    popupMessage.css('display','block');
	});
	return false;
});

$('.slider .wrapper').slick({
	arrows: false,
	dots: true,
	fade: true,
	autoplay: true
});

$('.slider.mini').slick({
	autoplay: true
});
$('.news-item .skinny').slick({
	slidesToShow: 4,
	nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-triangle_right"></i></button',
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-triangle_left"></i></button'
});

$('.nav li').hover(function() {
	$(this).find('i').addClass('rotate180');
}, function() {
	$(this).find('i').removeClass('rotate180');
});
