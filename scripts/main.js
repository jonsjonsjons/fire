var button = document.querySelector('button');
button.onclick = function() {
	alert('Okay shorty!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
	if(myImage.getAttribute('src') === 'images/fire.jpg') {
		myImage.setAttribute('src', 'images/fire2.jpg');
	} else {
		myImage.setAttribute('src', 'images/fire.jpg')
	}
}
