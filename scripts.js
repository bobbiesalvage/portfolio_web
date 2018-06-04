// get all images from images folder //

var imagesInFolder = [];

function loadImages () {
	var folder = "images/";

	$.ajax({
		url : folder,
		success: function (data) {
			$(data).find("a").attr("href", function (i, val) {
				if( val.match(/\.(jpe?g|png|gif)$/) ) { 
					//imagesInFolder.append(val);
					$("body").append( "<img src='"+ folder + val +"'>" );
				} 
			});
			
			createImages();
		}
	});
}



function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// add images for length of array
//<div class="column">
  //  <img src="images/img_nature.jpg" style="width:100%" onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
  //</div>

/*function createImages () {
	for (var value of imagesInFolder){
		var createDiv = document.createElement("div");
		var x = document.createElement("IMG");
		x.setAttribute("src", "imagesInFolder[value]");
		x.setAttribute("width", "304");
		x.setAttribute("height", "228");
		x.setAttribute("alt", "Image 1");
		x.setAttribute("onclick", "openModal();currentSlide(value)");
		x.setAttribute("class", "hover-shadow cursor");
		createDiv.appendChild(x);
		document.body.appendChild(createDiv);
	}
}  */
  
  
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("imgStyle");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
