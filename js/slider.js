window.onload = function() {
	
	// 1 slyder
	var images1 = document.querySelectorAll('.gallery1 .photos img');
	
	var slider1 = new Slider(images1);
	console.log(images1);
	document.querySelector('.gallery1 .buttons .prev').onclick = function() {
		slider1.prev();
	}
	document.querySelector('.gallery1 .buttons .next').onclick = function() {
		slider1.next();
	}

	// 2 slider
	var images2 = document.querySelectorAll('.gallery2 .photos img');

	var slider2 = new Slider(images2);
	console.log(images2);
	document.querySelector('.gallery2 .buttons .prev').onclick = function() {
		slider2.prev();
	}
	document.querySelector('.gallery2 .buttons .next').onclick = function() {
		slider2.next();
	}
}

// Class Slider
function Slider(images) {
	
	// keep the content
	this.images = images;
	
	var i = 0;

	this.prev = function() {
		this.images[i].classList.remove('showed');
		i --;
		if(i < 0) i = this.images.length - 1;
		this.images[i].classList.add('showed');
	};

	this.next = function() {
		this.images[i].classList.remove('showed');
		i ++;
		if(i >= this.images.length) i = 0;
		this.images[i].classList.add('showed');
	};
}