window.onload = function() {

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
}

function Slider(obj) {
	
	var images = document.querySelectorAll(obj.images);
	var auto = obj.auto;
	var rate = obj.rate || 1000;

	var i = 0;
	prev = function() {
		images[i].classList.remove('showed');
		i --;
		if(i < 0) i = images.length - 1;
		images[i].classList.add('showed');
	}
	next = function() {
		images[i].classList.remove('showed');
		i ++;
		if(i >= images.length) i = 0;
		images[i].classList.add('showed');
	}

	document.querySelector(obj.btnPrev).onclick = prev;
	document.querySelector(obj.btnNext).onclick = next;

	if (auto) {
		setInterval(next, rate);
	}	
}