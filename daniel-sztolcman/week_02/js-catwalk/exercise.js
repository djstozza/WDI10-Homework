
var img = document.getElementById('cat');
img.style.position = 'absolute';
img.style.top = "150px"
img.style.left = "-1309px"	
var billieJean = document.getElementById("Billie Jean");
var thriller = document.getElementById("Thriller");


var moveRight = function (){
	billieJean.play();
	img.className = "";
	img.className = "reverse";
	var oldLeft = parseFloat(img.style.left);
	var newLeft = oldLeft + 0.4;
	img.style.left = newLeft + 'px'
	
	//window.innerWidth = edge of the window

	if (parseFloat(img.style.left) >= (window.innerWidth+290)) {
		window.clearInterval(movingCat);
		movingCat1 = window.setInterval(moveLeft, 1);
	} else if (parseFloat(img.style.left) === parseFloat(window.innerWidth-290)/2){
		
		//if cat reaches middle of the page going forward. do the cat dance

		catDance0();
	}
}


var moveLeft = function () {
	billieJean.play();
	img.className = "";
	img.className = "forward";
	var oldLeft = parseFloat(img.style.left);
	var newLeft = oldLeft - 0.3;
	img.style.left = newLeft + 'px';
	
	if (parseFloat(img.style.left)< -291){
		window.clearInterval(movingCat1)
		movingCat = window.setInterval(moveRight, 1);
	} else if (parseFloat(img.style.left) === parseFloat(window.innerWidth-290)/2){
		//if cat reaches middle of the page on the return, do the cat dance
		catDance1();
	} 
	
}

var catDance0 = function (){
	billieJean.pause();
	thriller.play();
	window.clearInterval(movingCat);
	img.src = "http://media.giphy.com/media/67j0Iy0UzvBG8/giphy.gif";
	document.body.style.background = "";
	document.body.style.background = "url('http://i.giphy.com/Z4IXspU3iCHlK.gif')"
	setTimeout(stopDance0, 19005);
	
}

var stopDance0 = function(){
	billieJean.play();
	document.body.style.background = "";
	document.body.style.background = "http://i.giphy.com/aUDcWuvkHQRsk.gif";
	img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"
	img.className = "reverse";
	movingCat = window.setInterval(moveRight, 1);

}

var catDance1 = function (){
	billieJean.pause();
	thriller.play();
	window.clearInterval(movingCat1);
	img.src = "http://media.giphy.com/media/67j0Iy0UzvBG8/giphy.gif";
	document.body.style.background = "";
	document.body.style.background = "url('http://i.giphy.com/Z4IXspU3iCHlK.gif')"
	setTimeout(stopDance1, 19005);
	
}

var stopDance1 = function(){
	billieJean.play();
	document.body.style.background = "";
	document.body.style.background = "http://i.giphy.com/aUDcWuvkHQRsk.gif";
	img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"
	img.className = "forward";
	movingCat1 = window.setInterval(moveLeft, 1);

}

var movingCat1;
var movingCat = window.setInterval(moveRight, 1);


