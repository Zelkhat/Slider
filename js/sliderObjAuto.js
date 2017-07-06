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
		rate: 2000
	});

});

function Slider(obj) {
	
	this.images = $(obj.images);
	this.auto = obj.auto;
	this.btnPrev = obj.btnPrev;
	this.btnNext = obj.btnNext;
	this.rate = obj.rate || 1000;

	var slider = this;
	var i = 0;

	this.prev = function() {
		slider.images.eq(i).removeClass('showed');
		i --;
		if(i < 0) i = slider.images.length - 1;
		slider.images.eq(i).addClass('showed');
	}
	this.next = function() {
		slider.images.eq(i).removeClass('showed');
		i ++;
		if(i >= slider.images.length) i = 0;
		slider.images.eq(i).addClass('showed');
	}

	$(slider.btnPrev).on('click', slider.prev);
	$(slider.btnNext).on('click', slider.next);
	
	if (slider.auto) {
		setInterval(slider.next, slider.rate);
	}	
}