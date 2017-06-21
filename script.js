$(document) .ready(function () {
	$(“p”).click(function() {
		$(this).hide();
	});
});

//hide all the images, then bring them up one at a time

var current_image = 0;
var images = ['easton.1', 'easton.2', 'easton.3', 'easton.4', 'easton.5'];
var slideshow = $('.slide')
	slideshow.hide();
	hideImages();

	$('#'+images[current_image]).show();

};

var hideImages = function() {
	for (var index in images) {
		var image_name = images[index];
		$('#'+image_name.hide();
	}

}

var currentSlide = function(image_index){
	hideImages();
	$('#'+images[image_index]).show;
	current_image = image_index;
}

var plusSlides = function(arrow){
	hideImages();
	var image_index = current_image + arrow;
	$('#'+images[current_image + arrow]).show();
	current_image = image_index;

}
