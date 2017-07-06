//window.onload = function() {
$(function() {

	var slider1 = new Slider({
		images: '.gallery1 img',
		btnPrev: '.gallery1 .buttons .prev',
		btnNext: '.gallery1 .buttons .next',
		auto: false
	});

	var slider2 = new Slider({
		images: '.gallery2 img',
		btnPrev: '.gallery2 .buttons .prev',
		btnNext: '.gallery2 .buttons .next',
		auto: true,
		rate: 2000,
		direction: -1
	});

});

function Slider(obj) {
	
	this.images = $(obj.images);
	this.auto = obj.auto;
	this.btnPrev = obj.btnPrev;
	this.btnNext = obj.btnNext;
	this.rate = obj.rate || 1000;
	this.direction = obj.direction || 1;

	var slider = this;
	var i = 0;

	this.move = function(dir) {
		
		slider.images.eq(i).removeClass('showed');

		i += dir; // i = i + 1*dir
		if (i < 0) {
			i = slider.images.length - 1;
		} else if (i >= slider.images.length) {
			i = 0;
		} else {

		};
		slider.images.eq(i).addClass('showed');

	}

	$(slider.btnPrev).on('click', function(){
		slider.move(-1);
	});
	$(slider.btnNext).on('click', function() {
		slider.move(1);
	});
	
	if (slider.auto) {
		setInterval(function() {
			slider.move(slider.direction);
		}, slider.rate);
	}	
}